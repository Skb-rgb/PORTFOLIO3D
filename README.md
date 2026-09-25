

Maqueta de tres pantallas basada en los bocetos. Incluye el `personaje.glb` suministrado y encuadres ajustados a su geometría. La animación integrada se reproduce al cargar y la cámara cambia al hacer scroll.

## Estructura

1. **Presentación:** personaje completo, quién eres y propuesta visual.
2. **Detalle:** acercamiento al rostro, animación y reel.
3. **Proyectos:** encuadre inferior, portafolio y contacto.

## Para poner tu modelo

El archivo `assets/personaje.glb` ya está incluido. Contiene la animación `rigAction`; si reemplazas el GLB por otra versión, edita el arreglo `cameras` en `script.js` para ajustar los encuadres. Sustituye `julian@example.com` por tu correo real (aparece dos veces).

## GitHub Pages

Sube **el contenido de esta carpeta** a la raíz de un repositorio. En **Settings → Pages → Build and deployment**, selecciona **Deploy from a branch**, rama `main`, carpeta `/ (root)`. La portada será `index.html`. Las rutas son relativas para funcionar también en un repositorio tipo `usuario.github.io/portafolio/`.

Para probarlo localmente: `python3 -m http.server 8000` y abre `http://localhost:8000`. La prueba con `file://` puede impedir cargar el modelo.

El componente 3D carga desde el CDN oficial de model-viewer; necesita conexión a internet. Si se elimina el `.glb`, se muestran los bocetos. El GLB suministrado usa dos materiales sin imágenes de textura.
