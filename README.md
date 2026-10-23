# Synatra Legal Center

A static English-language legal portal for **Synatra**, an AI-powered Discord bot operated by **Tobias30**. Contact: [tobias30yt@outlook.com](mailto:tobias30yt@outlook.com).

The website is implemented with HTML5, CSS3 and vanilla JavaScript. No packages, build tools, Node.js runtime, database, external font requests, analytics, or server-side functionality are required. All internal links and assets use relative paths, including under a GitHub Pages repository subpath.

**Legal status:** Both documents are drafts for review. The files are technically deployable, but the legal content is not publication-ready until the visible `TO BE COMPLETED` items are resolved and reviewed. The drafts do not claim GDPR compliance or legal validity. They distinguish supplied facts from unverified implementation details. The preparation date is October 23, 2026; it is not an effective date.

## Files

```text
synatra-legal/
├── index.html
├── privacy.html
├── terms.html
├── assets/
│   ├── favicon.svg
│   ├── css/style.css
│   └── js/main.js
├── README.md
└── .nojekyll
```

## Local preview

Open `index.html` directly in a modern browser. All document content, relative navigation, and styles work without a server. Clipboard writing may be restricted on a local file or when permission is denied; the copy button then selects the visible address and announces a manual-copy instruction.

For an HTTP preview, if Python is installed, run `python -m http.server 8765 --bind 127.0.0.1` from the project folder and open `http://127.0.0.1:8765/`. Python is optional and is not used in deployment. Stop the preview with Ctrl+C.

The supplied JavaScript enhances the page progressively: without JavaScript the documents, navigation, table of contents, and email links remain usable; controls that require JavaScript are hidden. On mobile the enhanced menu opens with a button, supports Escape to close, and closes when a link is activated. The table of contents follows the current section. Reduced-motion preferences disable decorative motion and smooth scrolling. Printing legal pages uses a light document layout.

## 1. GitHub repository

This project is in [Tobias30yt/Synatra](https://github.com/Tobias30yt/Synatra). The following instructions also describe how to create a separate copy.

1. Sign in to GitHub and create a new repository named `Synatra`.
2. Choose visibility appropriate to your GitHub plan. GitHub Free supports Pages for public repositories; other plans may offer additional options.
3. Use this as a dedicated website repository. Do not upload bot tokens, `.env` files, bot runtime data, or unrelated bot source.

## 2. Upload the website files

1. In the repository, choose **Add file → Upload files**.
2. Upload the **contents** of this `synatra-legal` folder. `index.html` must be at the repository root, not inside another `synatra-legal` folder.
3. Preserve the `assets/css` and `assets/js` directories.
4. Include the empty `.nojekyll` file. If your file picker omits dotfiles, create a file named `.nojekyll` in GitHub using **Add file → Create new file**; a newline is sufficient.
5. Commit the files to `main` (or your chosen publishing branch).

## 3. Enable GitHub Pages

Complete the legal review below before public release. A `noindex` tag is not access control and does not make a published draft private.

1. Open the repository’s **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select `main` and **/(root)**, then **Save**.
4. Wait for the Pages deployment to finish; check the repository’s Actions tab if it fails.
5. Open the URL GitHub displays, normally `https://Tobias30yt.github.io/Synatra/`.
6. Confirm the homepage, `privacy.html`, `terms.html`, favicon, stylesheet, and JavaScript load under that exact repository subpath. Enable/enforce HTTPS where available.

No build command or custom workflow is needed. The `.nojekyll` file allows direct static serving. GitHub documents this workflow in [Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## 4. Configure the Discord Developer Portal

After the reviewed documents are publicly accessible:

1. Open the [Discord Developer Portal](https://discord.com/developers/applications), select the existing **Synatra** application, and open **General Information**.
2. Set **Privacy Policy URL** to `https://Tobias30yt.github.io/Synatra/privacy.html`.
3. Set **Terms of Service URL** to `https://Tobias30yt.github.io/Synatra/terms.html`.
4. These URLs match the repository `Tobias30yt/Synatra`. Use the actual published URL if the repository name or domain changes. Save changes.
5. Check the saved URLs in a signed-out browser. Make the links available from the bot’s existing help/about surface, too.
6. Review current Developer Portal requirements for your application. Do not use a GitHub Pages URL as an interactions endpoint: this site cannot receive Discord API requests or run the bot.

Discord’s [developer terms](https://support-dev.discord.com/hc/en-us/articles/8562894815383-Discord-Developer-Terms-of-Service) require accurate, accessible privacy information. The portal configuration does not certify legal compliance. No Discord account or bot configuration is changed by these website files.

## 5. Update the legal documents

Edit the document content directly in `privacy.html` and `terms.html`. They contain full semantic HTML; JavaScript does not inject the text. Shared styling lives in `assets/css/style.css`, and interactions in `assets/js/main.js`. Navigation and footers are repeated in the three HTML files so they work without a build step; update all three when changing shared information.

Each legal section has an `id` that matches its table-of-contents link. Keep those pairs consistent. When changing section counts or names, also update the homepage cards, contents, and document metadata. Update the preparation/review dates accurately and set a real effective date after review. Keep a version history in your repository and implement the user-notification process you describe.

After review:

- Replace every `TO BE COMPLETED` note with verified information. Remove a note only after the issue is resolved; use an explicit verified “not applicable” where appropriate.
- Update or remove the draft badges, review notices, “Before you read” draft explanations, draft references in body text, and draft footer text across all pages.
- Change or remove `<meta name="robots" content="noindex, nofollow">` on all three pages when approved for indexing. It currently discourages draft indexing, but is not a privacy mechanism.
- Review the title, description, and Open Graph description on every page so they describe the final documents accurately.
- Optionally add absolute canonical and `og:url` values after the actual public hostname is known. A fabricated hostname is intentionally not included. The supplied Open Graph title, type, locale, site name and description work without an image; add an `og:image` only when an actual publicly hosted image exists.
- Commit updated files to the publishing branch; Pages redeploys automatically.

## 6. Legal completion checklist

The supplied bot name, operator alias, email, platform, and intended website host are confirmed from the brief. No inference is made from neighbouring bot projects. All other operational claims need evidence from the deployed service and its providers.

### Privacy Policy

| Section | Required verification/completion |
| --- | --- |
| 1. Introduction | Scope of the live service and effective date. |
| 2. Data Controller | Full legal identity, country, address, roles, representative/DPO if applicable. |
| 3. Information We Process | Actual inventory and sources; required/optional fields; sensitive data; website hosting logs and support-email handling. |
| 4. Discord IDs | Exact identifiers, uses, associations, permissions, retention. |
| 5. AI Message Processing | Trigger/access scope, context, attachments, processing route, provider storage/training, human access, automated decisions/profiling. |
| 6. Purposes | Specific purposes mapped to actual data and operations. |
| 7. GDPR Bases | Applicability, per-purpose lawful bases, relevant assessments, consent withdrawal, sensitive-data conditions. |
| 8. Third Parties | Actual providers, roles, policies, locations, contracts, training and retention settings. |
| 9. Storage and Retention | Per-category periods/criteria, locations, caches, logs, backups, deletion triggers, provider copies. |
| 10. Sharing | Actual recipients and conditions, channel visibility, staff/admin access, other disclosures. |
| 11. Transfers | Countries, applicable international transfers, legal mechanisms and safeguards. |
| 12. Rights | Applicable jurisdictions, supervisory authority/contact and additional rights. |
| 13. Requests | Operational workflow, proportionate verification, response handling, exports, deletion and exceptions. |
| 14. Security | Actual implemented safeguards and incident responsibilities; no invented assurances. |
| 15. Children | Age thresholds, local requirements, intended audience, parental authorisation and underage handling. |
| 16. Changes | Effective/review dates, notification method and timing, version history. |
| 17. Contact | Complete legal contact and relevant privacy/supervisory contacts. |

### Terms of Service

Complete the effective date and the highlighted items in sections 1–3, 8, and 11–15: contracting identity and acceptance process; real features, limits and any pricing; eligibility; availability/support commitments; intellectual-property permissions and provider-dependent output terms; service-change notices; termination procedures and review; applicable law and required dispute information; complete legal contact and complaint procedures.

Review the remaining proposed use rules as well: verify they match the service you intend to operate and can be implemented. There are no invented liability caps, blanket warranty exclusions, arbitration clauses, or indemnities. Determine whether additional operator/imprint or consumer disclosures are legally required for your circumstances; this three-page structure is not a legal completeness guarantee.

### Review references

The following official sources informed the drafting checklist; they do not verify Synatra’s implementation:

- [European Commission — information to provide to individuals](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/obligations_en)
- [Irish Data Protection Commission — transparency requirements](https://www.dataprotection.ie/en/organisations/know-your-obligations/transparency)
- [European Data Protection Board — legal basis](https://www.edpb.europa.eu/topics/key-gdpr-concepts/legal-basis_en)
- [European Commission — individual rights](https://commission.europa.eu/law/law-topic/data-protection/reform/rights-citizens/how-my-personal-data-protected/how-should-my-consent-be-requested_en)
- [European Commission — handling rights requests](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/dealing-requests-individuals_en)
- [Discord Privacy Policy](https://discord.com/privacy)

## Release checks

Check desktop and mobile layout, keyboard focus, skip link, menu/Escape behaviour, document links and every contents anchor, current-section highlighting, copy success or honest manual-copy fallback, back-to-top, printing, and reduced-motion settings. Also test with JavaScript disabled. No interaction should claim an action succeeded when it did not.

Use your browser’s network panel to verify the site itself requests only its local assets and that no tracking scripts or remote fonts have been added. The absence of tracking in this source does not establish the data practices of GitHub, Discord, email services, or the bot’s infrastructure.
