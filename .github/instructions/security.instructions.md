---
name: security-management
description: "Security & Cybersecurity Management. Use when: reviewing project for security vulnerabilities, managing API keys and secrets, auditing dependencies for CVEs, implementing security best practices, creating or updating security documentation."
applyTo: ["**.tsx", "**.ts", "**.json", ".env*", "**.md"]
---

# Security & Cybersecurity Management

This instruction applies to security-related tasks across the PredictDev AI project, including secrets management, dependency audits, and security documentation.

## Core Principles

### 1. Never Expose Secrets
- ❌ Never hardcode API keys in source code
- ❌ Never commit `.env` files with real values to git
- ❌ Never expose credentials in error messages or logs
- ✅ Use environment variables for all secrets
- ✅ Configure secrets in deployment platforms (Vercel, AWS, etc.)
- ✅ Use `.env.example` with **only** placeholder values

### 2. Dependency Security
- Regularly scan dependencies for known vulnerabilities using:
  - `npm audit` for Node.js packages
  - National Vulnerability Database (NVD)
  - GitHub Security Advisories
- Update all security patches immediately
- Document the rationale for keeping outdated packages (if any)
- Review breaking changes before major version upgrades

### 3. Code Security
- Validate all user inputs before processing
- Sanitize outputs to prevent injection attacks
- Use secure defaults (e.g., deny-by-default permissions)
- Never trust external data without validation
- Keep error messages generic (don't leak system details)

### 4. Access Control
- Implement principle of least privilege
- Restrict API key scopes to minimum required permissions
- Use read-only credentials when possible
- Audit and rotate credentials regularly

## API Key Management Workflow

### Development Environment
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Add your personal API key to the local `.env`:
   ```env
   VITE_GEMINI_API_KEY=your_personal_key_here
   ```
3. **Never commit** the `.env` file

### Production Deployment (Vercel)
1. Obtain API key from [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Configure in Vercel Dashboard:
   - Project Settings → Environment Variables
   - Name: `VITE_GEMINI_API_KEY`
   - Value: Your production API key
   - Environments: Development, Preview, Production
3. Vercel injects the variable during build/runtime
4. Application reads via `import.meta.env.VITE_GEMINI_API_KEY`

### Key Rotation
If a key is compromised:
1. Immediately disable the old key in Google AI Studio
2. Generate a new key
3. Update Vercel Environment Variables with new key
4. Vercel re-deploys automatically with new secret

## Files to Monitor

| File | Purpose | Risk Level |
|------|---------|-----------|
| `.env` | Local development secrets | 🔴 HIGH (never commit) |
| `.env.example` | Template with placeholders | 🟢 LOW (safe to commit) |
| `src/app/components/AiChat.tsx` | Loads API key from env vars | 🟡 MEDIUM (audit regularly) |
| `src/app/components/configuracoes.tsx` | User-provided API key storage | 🟡 MEDIUM (uses localStorage) |
| `.github/SECURITY.md` | Security guidelines | 🟢 LOW (documentation) |

## Pre-Commit Security Checks

Before making commits, verify:

```bash
# Check for accidental API key patterns
git diff --cached | grep -i "AIzaSy" && echo "⚠️ WARNING: Possible API key found!" || echo "✓ No API keys detected"

# Verify .env is in .gitignore
grep "^\.env" .gitignore && echo "✓ .env is ignored" || echo "⚠️ .env may not be ignored"

# Check for hardcoded secrets
git diff --cached | grep -E "(password|secret|token|key)\s*[:=]" && echo "⚠️ Possible secret found!" || echo "✓ No obvious secrets"
```

## Security Audit Checklist

Perform these checks regularly (at least monthly):

- [ ] No secrets exposed in git history
  ```bash
  git log -p | grep -i "AIzaSy" | wc -l
  ```
- [ ] `.env` has correct `.gitignore` rules
- [ ] All npm packages audited for vulnerabilities
  ```bash
  npm audit
  ```
- [ ] API keys rotated if suspected compromise
- [ ] SECURITY.md documentation is current
- [ ] Third-party dependencies reviewed for security updates
- [ ] Error handling doesn't leak sensitive info
- [ ] Input validation implemented for user-provided data

## Incident Response

If a secret is accidentally exposed:

1. **Stop** — Don't push additional commits
2. **Notify** — Alert team members immediately
3. **Disable** — Revoke the exposed key immediately
4. **Create** — Generate a new key
5. **Update** — Update all systems with new secret
6. **Audit** — Check git history for similar exposures
7. **Document** — Update SECURITY.md with findings
8. **Learn** — Add preventive measures to workflow

## Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Google Cloud Security Best Practices](https://cloud.google.com/security/best-practices)
- [Git Secrets - Prevent Secret Leaks](https://github.com/awslabs/git-secrets)
- [npm Security](https://docs.npmjs.com/packages-and-modules/security)
- [Vercel Security](https://vercel.com/docs/concepts/security)

---

**Version**: 1.0  
**Last Updated**: 16 de abril de 2026  
**Maintained By**: Full Stack Engineer
