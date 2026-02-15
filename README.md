# EverLeaf Medical Center

A modern, responsive website for EverLeaf Medical Center, showcasing comprehensive healthcare services, departments, and medical professionals.

## 🏥 Overview

EverLeaf Medical Center website provides patients and visitors with easy access to information about medical services, departments, doctors, and healthcare resources. The platform features a clean, professional design with intuitive navigation and comprehensive content.

## ✨ Features

### Core Pages

- **Home**: Welcoming landing page with quick access to key services and information
- **About**: Information about the medical center's mission, values, and history
- **Contact**: Contact forms and location information for reaching the medical center
- **Gallery**: Visual showcase of facilities and services
- **Blog**: Health articles and medical news

### Departments

- Cardiology - Comprehensive heart care services
- Neurology - Neurological disorders diagnosis and treatment
- Surgery - Advanced surgical procedures
- Dental - Complete dental care
- Rehabilitation - Physical therapy and recovery services
- Pediatrics - Specialized care for children
- Ophthalmology - Eye care and vision services
- Radiology - Medical imaging services

### Services

- Emergency Services - 24/7 emergency care
- Laboratory - Comprehensive diagnostic testing
- Pharmacy - On-site medication services
- Medical Imaging - Advanced diagnostic imaging
- Preventive Checkups - Routine health screenings
- Diagnostics - Comprehensive diagnostic services

### Additional Features

- **Doctors Directory**: Browse medical professionals by specialty
- **Appointment Booking**: Online appointment scheduling with confirmation
- **Health Blog**: Articles on diabetes management, immune system health, pediatric care, mental health, flu prevention, and senior wellness
- **Privacy Policy**: Comprehensive privacy and data protection information
- **404 Error Page**: User-friendly error handling

## 🛠️ Technology Stack

- **Frontend Framework**: React 18.2.0
- **Type Safety**: TypeScript 5.8.2
- **Routing**: React Router DOM 6.22.3
- **SEO**: React Helmet Async 2.0.4
- **Build Tool**: Vite 6.2.0
- **Styling**: CSS (Custom styling)

## 📁 Project Structure

```
EverLeaf-Medical-Center/
├── components/          # Reusable UI components
├── pages/              # Main page components
│   ├── departments/    # Department-specific pages
│   ├── services/       # Service-specific pages
│   └── articles/       # Blog article pages
├── utils/              # Utility functions
├── App.tsx             # Main application component
├── Layout.tsx          # Layout wrapper component
├── types.ts            # TypeScript type definitions
├── index.html          # HTML entry point
├── index.tsx           # React entry point
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
├── package.json        # Project dependencies
├── sitemap.xml         # SEO sitemap
└── robots.txt          # Search engine directives
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:

```bash
cd EverLeaf-Medical-Center
```

2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:3000`.

## 📧 Form Integration

The website includes three types of forms that need email service configuration:

- **Contact Form** - General inquiries
- **Appointment Booking** - Patient appointment requests
- **Newsletter Subscription** - Email list signup

### Service Comparison

| Service        | Type             | Free Tier             | Setup Difficulty | Best For                     |
| -------------- | ---------------- | --------------------- | ---------------- | ---------------------------- |
| **EmailJS**    | Client-side      | 200 emails/month      | Easy             | Quick setup, no backend      |
| **Formspree**  | Client-side      | 50 submissions/month  | Easy             | Simple forms, no backend     |
| **Resend**     | Backend required | 100 emails/day        | Medium           | Production apps with backend |
| **Custom API** | Backend required | Depends on your setup | Advanced         | Full control                 |

### Quick Setup (EmailJS - Recommended)

1. **Create EmailJS Account**
   - Sign up at [https://www.emailjs.com/](https://www.emailjs.com/)
   - Create a new email service (Gmail, Outlook, etc.)
   - Create an email template

2. **Install EmailJS Package**

   ```bash
   npm install @emailjs/browser
   ```

3. **Configure Environment Variables**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and set:

   ```env
   VITE_FORM_SERVICE=emailjs
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Restart Development Server**
   ```bash
   npm run dev
   ```

### Alternative: Formspree

1. Sign up at [https://formspree.io/](https://formspree.io/)
2. Create a new form and get your Form ID
3. Update `.env`:
   ```env
   VITE_FORM_SERVICE=formspree
   VITE_FORMSPREE_FORM_ID=your_form_id
   ```

### Production Setup: Resend (Backend Required)

Resend is recommended for production with a backend. It provides better security and reliability.

1. **Sign up at [https://resend.com/](https://resend.com/)**

2. **Install Resend SDK**

   ```bash
   npm install resend
   ```

3. **Deploy Serverless Function**

   The project includes an example serverless function at `api/send-email.ts`.

   For **Vercel**:
   - Push to GitHub and connect to Vercel
   - Add `RESEND_API_KEY` to environment variables
   - Function will deploy automatically

   For **Netlify**:
   - Move `api/send-email.ts` to `netlify/functions/`
   - Add `RESEND_API_KEY` to environment variables

4. **Update Frontend Configuration**
   ```env
   VITE_FORM_SERVICE=resend
   VITE_RESEND_ENDPOINT=https://your-app.vercel.app/api/send-email
   ```

### Development Mode (Simulation)

By default, forms use simulation mode for development:

```env
VITE_FORM_SERVICE=simulation
```

This logs form data to the console without sending real emails. Perfect for testing!

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 🎨 Design Features

- **Responsive Design**: Fully responsive across all device sizes
- **Modern UI**: Clean, professional medical center aesthetic
- **Accessibility**: ARIA labels and semantic HTML for better accessibility
- **SEO Optimized**: Meta tags, sitemap, and robots.txt for search engines
- **Fast Loading**: Optimized with lazy loading and code splitting
- **Smooth Navigation**: Hash-based routing for seamless page transitions

## 📄 Key Components

### Navigation

- Multi-level navigation with department and service dropdowns
- Mobile-responsive hamburger menu
- Quick access to appointment booking

### Content Management

- Structured content for departments and services
- Doctor profiles with specializations
- Blog articles with detailed health information
- Image galleries showcasing facilities

### User Interactions

- Online appointment booking system
- Contact forms for inquiries
- Newsletter subscription
- Social media integration

## 🔍 SEO & Marketing

The website includes:

- Comprehensive sitemap.xml for search engine indexing
- Robots.txt for crawler directives
- Meta descriptions and keywords for each page
- Open Graph tags for social media sharing
- Structured data for healthcare providers

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Privacy & Security

The website includes a comprehensive privacy policy page detailing:

- Data collection practices
- Patient information protection
- Cookie usage
- Third-party services
- HIPAA compliance considerations

## 📞 Support & Contact

For questions or support regarding the website, please refer to the Contact page or reach out through the provided contact forms.

## 📝 License

This project is proprietary software developed for EverLeaf Medical Center.

---

**EverLeaf Medical Center** - Care That Grows With You
