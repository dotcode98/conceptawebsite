/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_APPS_SCRIPT_URL?: string;
  readonly APP_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
