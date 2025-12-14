# Quick Deploy to Vercel - Checklist

## Pre-Deployment (5 minutes)

- [ ] Test build locally: `npm run build`
- [ ] Commit all changes: `git add . && git commit -m "Ready for deployment"`
- [ ] Push to GitHub: `git push`

## Deploy via Vercel Dashboard (Recommended)

1. **Go to [vercel.com](https://vercel.com)** and sign in with GitHub
2. **Click "Add New..." → "Project"**
3. **Import your repository** from GitHub
4. **Verify settings** (should auto-detect):
   - Framework: Create React App
   - Build Command: `npm run build`
   - Output Directory: `build`
5. **Click "Deploy"** and wait ~2 minutes
6. **Done!** Your site is live at `your-project.vercel.app`

## Deploy via CLI (Alternative)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

## After Deployment

- [ ] Visit your live site
- [ ] Test all pages (Home, About, Projects, Services, Contact, Certificates)
- [ ] Check mobile view
- [ ] Verify all images load
- [ ] Test navigation

## Need Help?

See `DEPLOYMENT_GUIDE.md` for detailed instructions and troubleshooting.

---

**Your portfolio URL will be**: `https://your-project-name.vercel.app`

