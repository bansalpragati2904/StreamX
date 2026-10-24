
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve, extname } from "path";
import fs from "fs";

const rootFolder = resolve(__dirname, "..");

export default defineConfig({
  plugins: [
    react(),
    {
      name: "serve-team-files",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const pathname = decodeURIComponent(
            (req.url || "/").split("?")[0]
          );

          const allowedFolder = [
            "/member1-home/",
            "/member2-content/",
            "/member3-live/",
            "/member4-user/",
          ].find((folder) => pathname.startsWith(folder));

          if (!allowedFolder) return next();

          const filePath = resolve(rootFolder, "." + pathname);

          if (
            !filePath.startsWith(rootFolder) ||
            !fs.existsSync(filePath) ||
            !fs.statSync(filePath).isFile()
          ) {
            return next();
          }

          const extension = extname(filePath).toLowerCase();

          const contentTypes = {
            ".html": "text/html; charset=utf-8",
            ".css": "text/css; charset=utf-8",
            ".js": "text/javascript; charset=utf-8",
            ".mjs": "text/javascript; charset=utf-8",
            ".json": "application/json",
            ".svg": "image/svg+xml",
            ".png": "image/png",
            ".jpg": "image/jpeg",
            ".jpeg": "image/jpeg",
            ".webp": "image/webp",
            ".gif": "image/gif",
            ".ico": "image/x-icon",
          };

          res.setHeader(
            "Content-Type",
            contentTypes[extension] || "application/octet-stream"
          );

          fs.createReadStream(filePath).pipe(res);
        });
      },
    },
  ],

  server: {
    fs: {
      allow: [rootFolder],
    },
  },
});
