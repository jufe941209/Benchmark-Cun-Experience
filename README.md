# Benchmark CUN Experience 2026

Sitio web de presentación del análisis comparativo de plataformas digitales del sector educativo para CUN Experience.

## Estructura del proyecto

```
benchmarkCun/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos
├── js/
│   └── main.js         # Modal para ampliar imágenes
├── assets/
│   └── images/         # Coloca aquí las imágenes para la tabla
└── README.md
```

## Cómo agregar imágenes a la tabla comparativa

1. Guarda tus capturas o imágenes en la carpeta `assets/images/`.
2. En la celda correspondiente del HTML, reemplaza el placeholder por una imagen:

   **Antes (placeholder):**
   ```html
   <span class="cell-img-placeholder">+ Imagen</span>
   ```

   **Después (con imagen):**
   ```html
   <img class="cell-img" src="assets/images/tu-imagen.png" alt="Descripción breve">
   ```

3. Al hacer clic en la imagen, se abrirá un modal para verla ampliada.

## Cómo ver la app

Abre `index.html` en tu navegador o usa un servidor local (por ejemplo, con Live Server en VS Code).
