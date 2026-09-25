# Portafolio interactivo — Julián Rodríguez

Maqueta de tres pantallas basada en los bocetos. Funciona de inmediato con las imágenes de referencia. Al añadir `assets/personaje.glb`, las sustituye automáticamente por el modelo 3D y la cámara cambia al hacer scroll.

## Estructura

1. **Presentación:** personaje completo, quién eres y propuesta visual.
2. **Detalle:** acercamiento al rostro, animación y reel.
3. **Proyectos:** encuadre inferior, portafolio y contacto.

## Para poner tu modelo

Exporta desde Blender como **glTF Binary (.glb)**, aplica transformaciones y comprueba que la cabeza quede hacia `+Y` y los pies hacia `-Y`. Colócalo en `assets/personaje.glb`. Edita el arreglo `cameras` en `script.js` para ajustar los tres encuadres. Si el personaje tiene animaciones, puedes añadir el atributo `autoplay` al elemento `model-viewer` en `index.html`. Sustituye `julian@example.com` por tu correo real (aparece dos veces).

## GitHub Pages

Sube **el contenido de esta carpeta** a la raíz de un repositorio. En **Settings → Pages → Build and deployment**, selecciona **Deploy from a branch**, rama `main`, carpeta `/ (root)`. La portada será `index.html`. Las rutas son relativas para funcionar también en un repositorio tipo `usuario.github.io/portafolio/`.

Para probarlo localmente: `python3 -m http.server 8000` y abre `http://localhost:8000`. La prueba con `file://` puede impedir cargar el modelo.

El componente 3D carga desde el CDN oficial de model-viewer; necesita conexión a internet. Mientras no exista el `.glb`, se muestran los bocetos.
