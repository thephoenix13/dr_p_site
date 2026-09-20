# GitHub Pages Deployment Guide

This guide will help you deploy the Dr P website to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed on your machine
- Node.js 18+ and npm installed

## Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Create a new repository (public or private)
3. **Don't** initialize with README, .gitignore, or license (we already have these)

## Step 2: Push Your Code

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Dr P website"

# Add your GitHub repository as remote
# Replace YOUR_USERNAME and YOUR_REPO with your actual values
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. In the left sidebar, click **Pages**
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically run on every push to `main`

## Step 4: First Deployment

After pushing your code, the GitHub Actions workflow will automatically:
- Build the site
- Deploy to GitHub Pages
- Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

Check the **Actions** tab to see deployment progress.

## Important Notes

### SPA Routing
The site uses client-side routing with a 404.html redirect trick to support clean URLs on GitHub Pages. This means:
- URLs like `/about` and `/solutions/pre-employment-screening` work correctly
- Users can refresh on any page without getting 404 errors
- No hash (#) in URLs

### Custom Domain (Optional)
If you want to use a custom domain:

1. Add a `CNAME` file in the `public/` folder with your domain:
   ```
   yourdomain.com
   ```

2. In your domain registrar, add these DNS records:
   - **A records** pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - **CNAME record** for `www` pointing to `YOUR_USERNAME.github.io`

3. In GitHub repository Settings > Pages:
   - Enter your custom domain
   - Check "Enforce HTTPS"

### Base Path Configuration
If deploying to a project page (not a user/organization page), you may need to adjust the base path:

1. Edit `vite.config.js`
2. Add or modify the `base` option:
   ```js
   export default defineConfig({
     base: '/YOUR_REPO_NAME/',
     // ... rest of config
   })
   ```

3. Also update `public/404.html`:
   ```js
   var pathSegmentsToKeep = 1; // Change from 0 to 1
   ```

## Updating the Site

Every time you push to the `main` branch, GitHub Actions will automatically rebuild and redeploy:

```bash
# Make your changes
git add .
git commit -m "Update content"
git push
```

The site will be updated within 1-2 minutes.

## Troubleshooting

### Site shows 404 after deployment
- Check that GitHub Pages is enabled in Settings > Pages
- Verify the workflow ran successfully in the Actions tab
- Wait 2-3 minutes for GitHub to propagate changes

### Assets (images/CSS) not loading
- Check browser console for 404 errors
- Verify the base path is correct in `vite.config.js`
- Clear browser cache and hard refresh (Ctrl+Shift+R)

### Routing not working on refresh
- Ensure `public/404.html` exists
- Verify the redirect script is in `index.html`
- Check that you're using `BrowserRouter` in `src/App.tsx`

## Alternative: Disable SPA Redirect

If you prefer simpler URLs with hash routing (no 404.html trick needed):

1. Change `BrowserRouter` to `HashRouter` in `src/App.tsx`:
   ```tsx
   import { HashRouter } from 'react-router-dom';
   // ... use HashRouter instead of BrowserRouter
   ```

2. Remove the redirect script from `index.html`

3. Delete `public/404.html`

URLs will look like: `yoursite.com/#/about`

## Support

For issues related to:
- **GitHub Pages**: [GitHub Docs](https://docs.github.com/en/pages)
- **GitHub Actions**: [Actions Documentation](https://docs.github.com/en/actions)
- **This website**: Check the main README.md
