# Security Headers Configuration

This file documents the security headers that should be configured in your deployment platform.

## Headers to Implement

### Content Security Policy (CSP)

Protects against XSS, clickjacking, and code injection attacks.

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.tailwindcss.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://res.cloudinary.com; frame-ancestors 'none';
```

**Breakdown:**

- `default-src 'self'` - Only load resources from same origin by default
- `script-src` - Allow scripts from self, inline (Tailwind), and CDN
- `style-src` - Allow styles from self, inline, and Google Fonts
- `font-src` - Allow fonts from self and Google Fonts
- `img-src` - Allow images from self, data URIs, HTTPS, and blob
- `connect-src` - Allow API calls to self and Cloudinary
- `frame-ancestors 'none'` - Prevent clickjacking

### Strict Transport Security (HSTS)

Forces HTTPS connections.

```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

- `max-age=31536000` - 1 year
- `includeSubDomains` - Apply to all subdomains
- `preload` - Submit to HSTS preload list

### X-Content-Type-Options

Prevents MIME-type sniffing.

```
X-Content-Type-Options: nosniff
```

### X-Frame-Options

Prevents clickjacking attacks.

```
X-Frame-Options: DENY
```

### X-XSS-Protection

Legacy XSS protection (for older browsers).

```
X-XSS-Protection: 1; mode=block
```

### Referrer Policy

Controls referrer information sent with requests.

```
Referrer-Policy: strict-origin-when-cross-origin
```

### Permissions Policy

Controls browser features and APIs.

```
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

---

## Platform-Specific Configuration

### Vercel (vercel.json)

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains; preload"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "geolocation=(), microphone=(), camera=()"
        },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.tailwindcss.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://res.cloudinary.com; frame-ancestors 'none';"
        }
      ]
    }
  ]
}
```

### Netlify (\_headers file)

Create `public/_headers`:

```
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.tailwindcss.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://res.cloudinary.com; frame-ancestors 'none';
```

### Apache (.htaccess)

```apache
<IfModule mod_headers.c>
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-Frame-Options "DENY"
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
    Header always set Permissions-Policy "geolocation=(), microphone=(), camera=()"
    Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.tailwindcss.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://res.cloudinary.com; frame-ancestors 'none';"
</IfModule>
```

### Nginx

Add to your `nginx.conf` or site configuration:

```nginx
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "DENY" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.tailwindcss.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://res.cloudinary.com; frame-ancestors 'none';" always;
```

---

## Testing Security Headers

After deployment, test your security headers using:

1. **securityheaders.com** - https://securityheaders.com/
2. **Mozilla Observatory** - https://observatory.mozilla.org/
3. **Browser DevTools** - Check Network tab → Headers

Expected grade: **A** or **A+**

---

## Notes

- ⚠️ **CSP Note**: The current CSP allows `'unsafe-inline'` and `'unsafe-eval'` for compatibility with Tailwind CDN. For production, consider:
  - Using Tailwind via npm (build-time)
  - Implementing nonces for inline scripts
  - Restricting to hash-based CSP

- 🔒 **HSTS Preload**: Submit to https://hstspreload.org/ after confirming HTTPS works

- 🌐 **Cloudinary**: Update `connect-src` if using different image CDN
