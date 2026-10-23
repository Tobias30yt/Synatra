/* Progressive enhancements: documents and links also work without JavaScript. */
(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#primary-navigation');
  const mobile = window.matchMedia('(max-width: 680px)');
  const closeMenu = (restoreFocus = false) => {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = 'Menu';
    if (restoreFocus) menuButton.focus();
  };
  if (menuButton && navigation) {
    menuButton.hidden = false;
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.textContent = open ? 'Close' : 'Menu';
      navigation.classList.toggle('is-open', open);
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && navigation.classList.contains('is-open')) closeMenu(true);
    });
    document.addEventListener('click', event => {
      if (!event.target.closest('.nav-wrap')) closeMenu();
    });
    navigation.addEventListener('click', event => {
      if (event.target.closest('a')) closeMenu();
    });
    mobile.addEventListener('change', () => closeMenu());
  }

  const status = document.querySelector('#status-message');
  let statusTimer;
  const announce = message => {
    clearTimeout(statusTimer);
    status.textContent = message;
    statusTimer = setTimeout(() => { status.textContent = ''; }, 6000);
  };
  document.querySelectorAll('[data-copy-email]').forEach(button => {
    button.hidden = false;
    button.addEventListener('click', async () => {
      const email = button.dataset.copyEmail;
      try {
        if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(email);
        announce('Email address copied to clipboard.');
      } catch {
        // Leave the actual address selected for manual copy if access is denied.
        const link = button.parentElement.querySelector('.email-link');
        if (link) {
          const range = document.createRange();
          range.selectNodeContents(link);
          const selection = window.getSelection();
          selection.removeAllRanges();
          selection.addRange(range);
        }
        announce('Automatic copy is unavailable. Select and copy: ' + email);
      }
    });
  });

  const topButton = document.querySelector('.back-top');
  const sections = [...document.querySelectorAll('.legal-section')];
  const tocLinks = [...document.querySelectorAll('.toc a')];
  let scheduled = false;
  const updateScroll = () => {
    if (topButton) topButton.hidden = window.scrollY < 550;
    if (sections.length) {
      let active = sections[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 160) active = section;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
        active = sections[sections.length - 1];
      }
      tocLinks.forEach(link => {
        if (link.hash === '#' + active.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
    scheduled = false;
  };
  window.addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; window.requestAnimationFrame(updateScroll); }
  }, { passive: true });
  window.addEventListener('resize', updateScroll);
  if (topButton) topButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    document.querySelector('#main-content').focus({ preventScroll: true });
  });
  document.querySelectorAll('[data-print]').forEach(button => {
    button.hidden = false;
    button.addEventListener('click', () => window.print());
  });
  updateScroll();
})();
