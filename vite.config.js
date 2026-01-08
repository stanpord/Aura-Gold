import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // These allow the environment to inject Firebase config at build time
    __firebase_config: JSON.stringify(process.env.VITE_FIREBASE_CONFIG || '{}'),
    __app_id: JSON.stringify(process.env.VITE_APP_ID || 'aura-gold-enterprise'),
    __initial_auth_token: JSON.stringify(process.env.VITE_AUTH_TOKEN || '')
  }
});