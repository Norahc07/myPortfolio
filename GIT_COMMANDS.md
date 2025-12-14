# Quick Git Commands Reference

## Initial Setup (New Repository)

```bash
# 1. Initialize git repository
git init

# 2. Check status
git status

# 3. Add all files
git add .

# 4. Create first commit
git commit -m "Initial commit: Portfolio website"

# 5. Add GitHub remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# 6. Rename branch to main
git branch -M main

# 7. Push to GitHub
git push -u origin main
```

## Daily Workflow

```bash
# Check what changed
git status

# See changes in detail
git diff

# Add specific files
git add filename.js
# Or add all changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push

# Pull latest changes (if working with others)
git pull
```

## Useful Commands

```bash
# Check remote repository
git remote -v

# Change remote URL
git remote set-url origin https://github.com/YOUR_USERNAME/NEW_REPO.git

# Remove remote
git remote remove origin

# See commit history
git log

# See current branch
git branch

# Create new branch
git checkout -b new-feature

# Switch branches
git checkout main

# Undo changes (before commit)
git restore filename.js
# Or restore all
git restore .

# Undo last commit (keep changes)
git reset --soft HEAD~1

# See what files are tracked
git ls-files
```

## Common Issues & Solutions

### "fatal: remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
```

### "Updates were rejected"
```bash
# Pull latest changes first
git pull origin main --rebase
# Then push
git push
```

### "Authentication failed"
- Use Personal Access Token instead of password
- Or set up SSH keys

### "Branch 'main' does not exist"
```bash
git checkout -b main
git push -u origin main
```

## GitHub Repository Setup Checklist

- [ ] Create repository on GitHub (don't initialize with README)
- [ ] Copy repository URL
- [ ] Run `git remote add origin <URL>`
- [ ] Run `git push -u origin main`
- [ ] Verify files appear on GitHub
- [ ] Deploy to Vercel

---

**Need help?** Check `SETUP_NEW_REPO.md` for detailed instructions.

