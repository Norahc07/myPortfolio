# Setup New Repository and Push to GitHub

This guide will help you create a new GitHub repository and push your portfolio project to it.

## Step 1: Initialize Git (if not already done)

Open your terminal in the project directory and run:

```bash
# Check if git is already initialized
git status

# If not initialized, run:
git init
```

## Step 2: Create .gitignore (Already exists, but verify)

Your `.gitignore` file should already be set up. It includes:
- `node_modules/`
- `build/`
- `.env` files
- Log files

## Step 3: Stage and Commit All Files

```bash
# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit: Portfolio website with Vercel deployment setup"
```

## Step 4: Create New Repository on GitHub

### Option A: Via GitHub Website

1. **Go to GitHub**: [github.com](https://github.com)
2. **Sign in** to your account
3. **Click the "+" icon** in the top right → "New repository"
4. **Repository settings**:
   - **Repository name**: `portfolio` (or your preferred name)
   - **Description**: "My personal portfolio website"
   - **Visibility**: 
     - ✅ Public (recommended - free and visible)
     - ⬜ Private (if you want it private)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. **Click "Create repository"**

### Option B: Via GitHub CLI (if installed)

```bash
gh repo create portfolio --public --source=. --remote=origin --push
```

## Step 5: Connect Local Repository to GitHub

After creating the repository on GitHub, you'll see instructions. Use these commands:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Or if you prefer SSH (if you have SSH keys set up):
# git remote add origin git@github.com:YOUR_USERNAME/portfolio.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 6: Verify Push

1. Go to your repository on GitHub
2. You should see all your files
3. Check that `vercel.json`, `DEPLOYMENT_GUIDE.md`, and other files are there

## Step 7: Deploy to Vercel

Now that your code is on GitHub:

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign in** with GitHub
3. **Click "Add New..." → "Project"**
4. **Import your new repository**
5. **Click "Deploy"**

Vercel will automatically:
- Detect it's a Create React App project
- Build your project
- Deploy it live

## Complete Command Sequence

Here's the complete sequence if starting fresh:

```bash
# 1. Initialize git (if not done)
git init

# 2. Add all files
git add .

# 3. Create initial commit
git commit -m "Initial commit: Portfolio website"

# 4. Add remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# 5. Rename branch to main
git branch -M main

# 6. Push to GitHub
git push -u origin main
```

## Troubleshooting

### "Repository already exists" error

If you get this error, you might already have a remote. Check with:
```bash
git remote -v
```

If you see an existing remote and want to change it:
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/NEW_REPO_NAME.git
```

### Authentication Issues

If you have trouble pushing:

**Option 1: Use Personal Access Token**
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `repo` permissions
3. Use token as password when pushing

**Option 2: Use SSH**
1. Set up SSH keys with GitHub
2. Use SSH URL: `git@github.com:YOUR_USERNAME/REPO_NAME.git`

### "Branch 'main' does not exist"

If you're on a different branch:
```bash
git branch  # See current branch
git checkout -b main  # Create and switch to main
git push -u origin main
```

## Next Steps After Push

1. ✅ Verify files are on GitHub
2. ✅ Deploy to Vercel (see `DEPLOYMENT_GUIDE.md`)
3. ✅ Share your portfolio URL
4. ✅ Set up automatic deployments (happens automatically with Vercel)

## Repository Structure

Your repository should include:
```
portfolio/
├── public/
├── src/
├── package.json
├── vercel.json          ← Vercel config
├── DEPLOYMENT_GUIDE.md  ← Deployment guide
├── QUICK_DEPLOY.md      ← Quick reference
├── SETUP_NEW_REPO.md    ← This file
├── .gitignore
└── README.md
```

---

**You're all set!** 🚀

Your portfolio is now on GitHub and ready to deploy to Vercel!

