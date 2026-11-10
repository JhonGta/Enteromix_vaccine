const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const port = Number(process.env.PORT) || 3000;
const publicDirectory = path.join(__dirname, "public");

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
};

const server = http.createServer((request, response) => {
  const pathname = new URL(request.url, "http://localhost").pathname;
  const requestedPath = pathname === "/" ? "/index.html" : pathname;
  const safePath = path.normalize(requestedPath).replace(/^(\.\.[\\/])+/, "");
  const filePath = path.join(publicDirectory, safePath);

  if (!filePath.startsWith(publicDirectory)) {
    response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Acceso no permitido");
    return;
  }

  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Página no encontrada");
      return;
    }

    const extension = path.extname(filePath);
    response.writeHead(200, {
      "Content-Type": contentTypes[extension] || "application/octet-stream",
    });
    if (extension === ".html") {
      const html = file
        .toString("utf8")
        .replace(
          "</head>",
          '<link rel="stylesheet" href="/intro-fix.css" /><style>.intro .intro-content{display:none!important}</style></head>',
        );
      response.end(html);
      return;
    }

    response.end(file);
  });
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Enteromix está disponible en el puerto ${port}`);
});
