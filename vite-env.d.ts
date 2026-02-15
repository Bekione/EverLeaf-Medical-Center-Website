/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORM_SERVICE?: string;
  readonly VITE_EMAILJS_SERVICE_ID?: string;
  readonly VITE_EMAILJS_TEMPLATE_ID?: string;
  readonly VITE_EMAILJS_PUBLIC_KEY?: string;
  readonly VITE_FORMSPREE_FORM_ID?: string;
  readonly VITE_RESEND_ENDPOINT?: string;
  readonly VITE_CUSTOM_API_ENDPOINT?: string;
  readonly DEV: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
