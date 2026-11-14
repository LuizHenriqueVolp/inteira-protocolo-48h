/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EVENTS_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
