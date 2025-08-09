# Crypto Quest

Public builds for **mcarp5/crypto-quest**.

## iPhone (PWA) — GitHub Pages
1. In **Settings → Pages**, set Source: `Deploy from a branch` and serve from `main` (root) **or** point to `/pwa`.
2. If serving from root, move `pwa/*` files to the repo root. Otherwise, set Pages to the `/pwa` folder.
3. Open: https://mcarp5.github.io/crypto-quest/
4. On iPhone (Safari): Share → Add to Home Screen.

(PWA paths are already set to `/crypto-quest/`.)

## Mac app (DMG) — GitHub Releases
1. Keep the `electron/` folder in the repo.
2. Add repo **Secrets** for notarization/signing (optional but recommended):
   - `APPLE_ID` (Apple ID email)
   - `APPLE_ID_PASS` (App-specific password)
   - `APPLE_TEAM_ID` (Team ID)
3. Tag a version to trigger the build:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```
4. The workflow builds the DMG and attaches it to the GitHub Release automatically.

### Local dev
- PWA: `cd pwa && python3 -m http.server 8000`
- Electron: `cd electron && npm install && npm run start`

— © Matt Carpenter
