import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {

  const exampleEnv = loadEnv('example', process.cwd(), 'VITE_');
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  const finalEnv = { ...exampleEnv, ...env };

  return {
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    define: {
      'process.env': finalEnv,
      'import.meta.env.VITE_CONTACT_NAME': JSON.stringify(finalEnv.VITE_CONTACT_NAME),
      'import.meta.env.VITE_CONTACT_EMAIL': JSON.stringify(finalEnv.VITE_CONTACT_EMAIL),
      'import.meta.env.VITE_CONTACT_PHONE': JSON.stringify(finalEnv.VITE_CONTACT_PHONE),
      'import.meta.env.VITE_CONTACT_ADDRESS': JSON.stringify(finalEnv.VITE_CONTACT_ADDRESS),
      'import.meta.env.VITE_CONTACT_CITY': JSON.stringify(finalEnv.VITE_CONTACT_CITY),
    },
    plugins: [
      react(),
      mode === "development" && componentTagger()
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});