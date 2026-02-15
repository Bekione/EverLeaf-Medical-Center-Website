# Deployment Guide - EverLeaf Medical Center

This guide covers deploying your EverLeaf Medical Center website to production with form email services configured.

## 📋 Pre-Deployment Checklist

- [ ] Chose an email service (EmailJS, Formspree, Resend, or Custom API)
- [ ] Tested forms locally with your chosen service
- [ ] Built and previewed production bundle (`npm run build && npm run preview`)
- [ ] Verified no console.log statements in production
- [ ] Configured environment variables for production
- [ ] Tested responsive design on multiple devices

## 🚀 Deployment Platforms

### Vercel (Recommended)

Vercel offers seamless deployment with automatic HTTPS, global CDN, and serverless functions support.

#### Steps:

1. **Push to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Visit [https://vercel.com/](https://vercel.com/)
   - Click "New Project"
   - Import your GitHub repository
   - Configure build settings (auto-detected for Vite)

3. **Set Environment Variables**

   In Vercel Dashboard → Settings → Environment Variables, add:

   **For EmailJS:**

   ```
   VITE_FORM_SERVICE=emailjs
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

   **For Formspree:**

   ```
   VITE_FORM_SERVICE=formspree
   VITE_FORMSPREE_FORM_ID=your_form_id
   ```

   **For Resend (with serverless function):**

   ```
   VITE_FORM_SERVICE=resend
   VITE_RESEND_ENDPOINT=https://your-app.vercel.app/api/send-email
   RESEND_API_KEY=your_resend_api_key
   ```

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy automatically
   - Get your production URL (e.g., `yourproject.vercel.app`)

#### Serverless Functions (For Resend)

Vercel automatically detects functions in the `/api` directory:

- `api/send-email.ts` will be available at `https://your-app.vercel.app/api/send-email`
- Add `RESEND_API_KEY` to environment variables
- Redeploy for changes to take effect

---

### Netlify

Netlify provides similar features to Vercel with great CI/CD integration.

#### Steps:

1. **Push to GitHub** (same as Vercel)

2. **Connect to Netlify**
   - Visit [https://www.netlify.com/](https://www.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Set Environment Variables**

   In Site Settings → Environment Variables, add your chosen service variables (same as Vercel)

5. **Deploy**
   - Click "Deploy site"
   - Get your production URL (e.g., `yourproject.netlify.app`)

#### Netlify Functions (For Resend)

For serverless functions on Netlify:

1. Create `.env`

.netlify/functions/`directory
2. Move or copy`api/send-email.ts`to`netlify/functions/send-email.ts`3. Update`VITE_RESEND_ENDPOINT`to`https://your-app.netlify.app/.netlify/functions/send-email` 4. Add `RESEND_API_KEY` to Netlify environment variables

---

### GitHub Pages

For static hosting without serverless functions (use EmailJS or Formspree only).

#### Steps:

1. **Update `vite.config.ts`**

   Add base path:

   ```typescript
   export default defineConfig({
     base: "/your-repo-name/",
     // ... rest of config
   });
   ```

2. **Build for Production**

   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages**

   Option A - Manual:

   ```bash
   npm install -g gh-pages
   gh-pages -d dist
   ```

   Option B - GitHub Actions (create `.github/workflows/deploy.yml`):

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   jobs:
     build-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: 18
         - run: npm ci
         - run: npm run build
           env:
             VITE_FORM_SERVICE: ${{ secrets.VITE_FORM_SERVICE }}
             VITE_EMAILJS_SERVICE_ID: ${{ secrets.VITE_EMAILJS_SERVICE_ID }}
             VITE_EMAILJS_TEMPLATE_ID: ${{ secrets.VITE_EMAILJS_TEMPLATE_ID }}
             VITE_EMAILJS_PUBLIC_KEY: ${{ secrets.VITE_EMAILJS_PUBLIC_KEY }}
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

4. **Configure Repository**
   - Go to Settings → Pages
   - Source: Deploy from `gh-pages` branch
   - Save

---

## 🔐 Environment Variables Guide

### Security Best Practices

- ✅ **Never commit `.env` files** - Already in `.gitignore`
- ✅ **Use different credentials** for development and production
- ✅ **Rotate API keys** periodically for security
- ⚠️ **Client-side env vars** (VITE\_\*) are exposed in the browser - don't put sensitive secrets here
- ✅ **Backend-only secrets** (like `RESEND_API_KEY`) stay secure on the server

### Required Variables by Service

| Service        | Variables                                                                                                   | Notes                        |
| -------------- | ----------------------------------------------------------------------------------------------------------- | ---------------------------- |
| **EmailJS**    | `VITE_FORM_SERVICE`<br>`VITE_EMAILJS_SERVICE_ID`<br>`VITE_EMAILJS_TEMPLATE_ID`<br>`VITE_EMAILJS_PUBLIC_KEY` | Public key is safe to expose |
| **Formspree**  | `VITE_FORM_SERVICE`<br>`VITE_FORMSPREE_FORM_ID`                                                             | Form ID is publicly visible  |
| **Resend**     | `VITE_FORM_SERVICE`<br>`VITE_RESEND_ENDPOINT`<br>`RESEND_API_KEY` (backend only)                            | API key must stay on server  |
| **Custom API** | `VITE_FORM_SERVICE`<br>`VITE_CUSTOM_API_ENDPOINT`                                                           | Your backend handles auth    |

---

## 🎯 Post-Deployment Testing

After deployment, test all forms:

1. **Contact Form**
   - Submit with valid data
   - Verify email received
   - Check form reset

2. **Appointment Booking**
   - Book from header button
   - Book from department/doctor pages
   - Verify pre-filled data works
   - Check confirmation page navigation

3. **Newsletter Subscription**
   - Subscribe from footer
   - Subscribe from homepage
   - Verify success message

4. **Error Handling**
   - Test with invalid email addresses
   - Test with empty required fields
   - Verify user-friendly error messages

---

## 📊 Performance Optimization

Your site is already optimized, but consider:

1. **Image Optimization**
   - Most images from Unsplash are already optimized
   - Consider using WebP format for custom images

2. **Code Splitting**
   - Vite automatically code-splits
   - Lazy loading already implemented

3. **Caching**
   - Vercel/Netlify handle caching automatically
   - Configure cache headers if using custom hosting

4. **CDN**
   - Vercel/Netlify include global CDN
   - Tailwind CSS loaded from CDN

---

## 🔒 SSL/HTTPS

- **Vercel**: Automatic HTTPS, no configuration needed
- **Netlify**: Automatic HTTPS with Let's Encrypt
- **GitHub Pages**: Automatic HTTPS for custom domains
- **Custom Domain**: Configure SSL certificate through your hosting provider

---

## 🌐 Custom Domain Setup

### Vercel

1. Go to Project Settings → Domains
2. Add your domain (e.g., `everleaf-medical.com`)
3. Configure DNS records as instructed
4. SSL automatically configured

### Netlify

1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS records
4. SSL automatically configured

---

## 📈 Analytics (Optional)

Consider adding analytics to track form submissions and user behavior:

- **Google Analytics** - Most popular, free
- **Plausible** - Privacy-focused alternative
- **Vercel Analytics** - Built-in, simple to enable

---

## 🆘 Troubleshooting

### Forms Not Sending Emails

1. Check environment variables are set correctly
2. Verify service credentials (EmailJS, Formspree, Resend)
3. Check browser console for errors
4. Test with simulation mode first
5. Verify serverless function is deployed (for Resend)

### Build Failures

1. Ensure all dependencies installed: `npm install`
2. Check for TypeScript errors: `npm run build` locally
3. Verify environment variables in deployment platform
4. Check build logs for specific errors

### 404 Errors

1. Ensure router uses HashRouter (already configured)
2. If using BrowserRouter, configure redirects:
   - Vercel: Create `vercel.json` with rewrites
   - Netlify: Create `_redirects` file

---

## 🔄 Continuous Deployment

Both Vercel and Netlify support automatic deployments:

- **Push to main branch** → Automatic production deployment
- **Push to other branches** → Preview deployments
- **Pull requests** → Automatic preview links

---

## 📞 Support

For deployment issues:

- **Vercel**: [https://vercel.com/docs](https://vercel.com/docs)
- **Netlify**: [https://docs.netlify.com](https://docs.netlify.com)
- **EmailJS**: [https://www.emailjs.com/docs](https://www.emailjs.com/docs)
- **Formspree**: [https://help.formspree.io](https://help.formspree.io)
- **Resend**: [https://resend.com/docs](https://resend.com/docs)
