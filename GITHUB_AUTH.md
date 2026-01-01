# GitHub Authentication Guide

## Problem: Permission Denied / 403 Error

If you're getting authentication errors when pushing to GitHub, you need to use a **Personal Access Token** instead of your password.

## Solution: Use Personal Access Token

### Step 1: Create a Personal Access Token

1. **Go to GitHub**: [github.com](https://github.com)
2. **Click your profile picture** (top right) → **Settings**
3. **Scroll down** → Click **Developer settings** (left sidebar)
4. **Click "Personal access tokens"** → **"Tokens (classic)"**
5. **Click "Generate new token"** → **"Generate new token (classic)"**
6. **Configure token**:
   - **Note**: "Portfolio Project" (or any name)
   - **Expiration**: Choose duration (90 days, 1 year, or no expiration)
   - **Select scopes**: Check **`repo`** (this gives full repository access)
7. **Click "Generate token"** at the bottom
8. **COPY THE TOKEN IMMEDIATELY** (you won't see it again!)

### Step 2: Use Token When Pushing

When you run `git push`, you'll be prompted:

```
Username: Norahc07
Password: [PASTE YOUR TOKEN HERE - NOT YOUR PASSWORD]
```

**Important**: 
- Username: Your GitHub username (`Norahc07`)
- Password: **Paste your Personal Access Token** (not your GitHub password)

### Step 3: Save Credentials (Optional)

After successful push, you can save credentials:

```bash
git config --global credential.helper wincred
```

This will save your token in Windows Credential Manager.

## Alternative: Use GitHub CLI

If you prefer, you can use GitHub CLI:

```bash
# Install GitHub CLI
winget install --id GitHub.cli

# Login
gh auth login

# Then push normally
git push -u origin main
```

## Quick Commands

```bash
# Clear cached credentials
cmdkey /delete:LegacyGeneric:target=git:https://github.com

# Push (will prompt for credentials)
git push -u origin main

# Save credentials for future use
git config --global credential.helper wincred
```

## Troubleshooting

### "Permission denied" error
- Make sure you're using a Personal Access Token, not password
- Ensure the token has `repo` scope
- Check that the repository exists and you have access

### "Repository not found" error
- Verify the repository name: `myPortfolio`
- Check the username: `Norahc07`
- Make sure the repository exists on GitHub

### Token expired
- Generate a new token following Step 1
- Use the new token when prompted

---

**After authentication succeeds, your code will be pushed to GitHub!** 🚀


