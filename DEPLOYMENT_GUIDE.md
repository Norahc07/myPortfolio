# Vercel Deployment Guide for Portfolio

This guide will walk you through deploying your React portfolio to Vercel.

## Prerequisites

- A GitHub account (or GitLab/Bitbucket)
- A Vercel account (free tier is sufficient)
- Your project code pushed to a Git repository

## Step 1: Prepare Your Project

### 1.1 Ensure Your Project is Ready

Make sure your project builds successfully locally:

```bash
npm install
npm run build
```

If the build succeeds, you're ready to deploy!

### 1.2 Check Your Git Repository

Ensure your project is in a Git repository and all changes are committed:

```bash
git status
git add .
git commit -m "Prepare for Vercel deployment"
```

## Step 2: Push to GitHub

If you haven't already, push your code to GitHub:

```bash
# If you haven't initialized a remote repository yet
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended for First Time)

1. **Sign up/Login to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account (recommended) or email

2. **Import Your Project**
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Select your portfolio repository

3. **Configure Project Settings**
   - **Framework Preset**: Vercel should auto-detect "Create React App"
   - **Root Directory**: Leave as `./` (unless your React app is in a subdirectory)
   - **Build Command**: `npm run build` (should be auto-filled)
   - **Output Directory**: `build` (should be auto-filled)
   - **Install Command**: `npm install` (should be auto-filled)

4. **Environment Variables** (if needed)
   - If you have any environment variables (like API keys), add them here
   - For this portfolio, you likely don't need any unless you're using EmailJS or other services

5. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 1-3 minutes)

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Yes**
   - Which scope? (Select your account)
   - Link to existing project? **No** (for first deployment)
   - Project name? (Press Enter for default)
   - Directory? (Press Enter for `./`)
   - Override settings? **No**

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Step 4: Configure Routing (Already Done)

The `vercel.json` file has been created with the necessary configuration for React Router. This ensures all routes work correctly when users navigate directly to URLs or refresh the page.

## Step 5: Custom Domain (Optional)

If you want to use a custom domain:

1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your domain
4. Follow Vercel's instructions to configure DNS records

## Step 6: Environment Variables (If Needed)

If you need to add environment variables later:

1. Go to your project in Vercel dashboard
2. Click "Settings" → "Environment Variables"
3. Add your variables:
   - **Name**: `REACT_APP_YOUR_VARIABLE_NAME`
   - **Value**: Your variable value
   - **Environment**: Production, Preview, Development (select as needed)

**Important**: In Create React App, environment variables must start with `REACT_APP_` to be accessible in the browser.

## Step 7: Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- Deploy every push to `main` branch to **Production**
- Create preview deployments for pull requests
- Deploy every push to other branches as **Preview** deployments

## Troubleshooting

### Build Fails

1. **Check Build Logs**
   - Go to your project in Vercel
   - Click on the failed deployment
   - Review the build logs for errors

2. **Common Issues**:
   - **Missing dependencies**: Ensure all dependencies are in `package.json`
   - **Build errors**: Test locally with `npm run build`
   - **Environment variables**: Make sure all required env vars are set in Vercel

### Routes Not Working

- The `vercel.json` file should handle this with the rewrites configuration
- If routes still don't work, ensure `vercel.json` is in the root directory

### Images Not Loading

- Ensure all image paths are correct
- Check that images are included in the build (they should be if they're in `src/assets`)

## Post-Deployment Checklist

- [ ] Test all pages and routes
- [ ] Verify all images load correctly
- [ ] Test contact form (if applicable)
- [ ] Check mobile responsiveness
- [ ] Test navigation and links
- [ ] Verify external links work
- [ ] Check browser console for errors

## Updating Your Deployment

After making changes:

1. **Commit and push to GitHub**:
   ```bash
   git add .
   git commit -m "Your update message"
   git push
   ```

2. **Vercel will automatically deploy** the changes (if connected to GitHub)

Or manually deploy:
```bash
vercel --prod
```

## Useful Vercel Commands

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod

# View deployment logs
vercel logs

# List all deployments
vercel ls

# Remove a deployment
vercel remove
```

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [React Router on Vercel](https://vercel.com/guides/deploying-react-with-vercel)
- [Vercel CLI Reference](https://vercel.com/docs/cli)

## Support

If you encounter issues:
1. Check Vercel's [documentation](https://vercel.com/docs)
2. Review build logs in Vercel dashboard
3. Test your build locally first: `npm run build`

---

**Your portfolio is now live! 🎉**

Share your Vercel deployment URL with the world!

