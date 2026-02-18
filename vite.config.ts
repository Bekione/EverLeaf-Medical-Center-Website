import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { cloudinaryPlugin } from "./plugins/cloudinary";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  return {
    server: {
      port: 3000,
      host: "0.0.0.0",
    },
    plugins: [react(), cloudinaryPlugin()],
    define: {
      // Form service environment variables are automatically available via import.meta.env
      // No need to explicitly define them here
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
  };
});
