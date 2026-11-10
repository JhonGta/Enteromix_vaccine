# Jennifer Largo

Página informativa inicial, construida con HTML, CSS y Node.js sin dependencias externas.

## Ejecutar localmente

Requiere Node.js 18 o superior:

```bash
npm start
```

Después abre `http://localhost:3000`.

## Desplegar en Railway

1. Crea un repositorio nuevo en GitHub y sube esta carpeta.
2. En Railway selecciona **New Project** → **Deploy from GitHub repo**.
3. Elige el repositorio y espera a que termine el despliegue.
4. En el servicio, abre **Settings** → **Networking** → **Generate Domain**.
5. Railway detectará `npm start` automáticamente y usará el puerto que le asigne mediante `PORT`.

Cada `push` a la rama conectada volverá a desplegar la página automáticamente.
