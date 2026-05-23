# CS - P5 Digital Academy - Package Manager - JS

## Node.js - NPM

npm es el manager de paquetes de Node.js. Es el sistema de gestión de dependencias para proyectos de Node.js.

### ¿Qué hace exactamente?
- Gestiona dependencias: Instala y actualiza paquetes de JavaScript
- Gestiona dependencias de Node.js: Maneja dependencias como npm, node, yarn, pnpm
- Gestiona dependencias de otros proyectos: Instala dependencias de otros proyectos en el mismo proyecto

### Ejemplos de uso
```
# Instalar una dependencia
npm install package-name

# Actualizar dependencias
npm update package-name

# Ver dependencias instaladas
npm list package-name

# Ver dependencias de un proyecto
npm list package-name
```

### Ejercicio recomendado
Iniciar package.json

```
npm init
```

Part 1 - Sass
Instalar dependencia de Sass a nivel de proyecto

```
npm install -D sass
```

Configurar los scripts de Sass en package.json

```
"sass": "sass ./src/sass/styles.scss ./src/css/styles.css",
"sass-w": "sass --watch ./src/sass/styles.scss ./src/css/styles.css"
```

Probar creando y añadiendo estilo al archivo de sass `styles.scss`
Ejecutar sass

```
npm run sass
or using watch mode
npm run sass-w
```

---

Part 2 - Vitest

Instalar dependencia de Vitest

```
npm install -D vitest
```

Configurar, en la sección `scripts` del package json, los aliases de Vitest.
```
"test": "vitest run",
"test-w": "vitest",
"test-cover": "vitest run --coverage"
```

Create example test and run test

```
npm run test
npm run test-w
npm run test:unit
npm run test-cover
```

## TDD (Test-Driven Development) con Vitest

**TDD** o Desarrollo Guiado por Pruebas es un enfoque de diseño de software que cambia por completo la forma en que escribimos código. En lugar de escribir la lógica de tu aplicación y luego las pruebas para ver si funciona, **en TDD escribes las pruebas antes que el propio código.**

Sigue un ciclo muy famoso y estricto llamado **Red-Green-Refactor** (Rojo, Verde, Refactorizar):

1. 🔴 **Red (Rojo):** Escribes una prueba que falle (porque la funcionalidad aún no existe).
2. 🟢 **Green (Verde):** Escribes el código mínimo necesario para que la prueba pase.
3. 🔵 **Refactor (Refactorizar):** Limpias y mejoras el código que acabas de escribir, asegurándote de que la prueba siga pasando.

### Ejemplo práctico con Vitest

Imaginemos que queremos crear una función sencilla llamada `esAdulto(edad)` que reciba una edad y devuelva `true` si es mayor o igual a 18, y `false` en caso contrario.

### Paso 1: Configurar la prueba (🔴 RED)

Primero, creamos nuestro archivo de pruebas `check-age.test.js`. Como la función `esAdulto` aún no existe, esta prueba va a fallar.

```javascript
import { describe, it, expect } from 'vitest';
import { esAdulto } from './check-age.js';

describe('Función esAdulto', () => {
  it('debería devolver true si la edad es 18 o más', () => {
    expect(esAdulto(18)).toBe(true);
    expect(esAdulto(25)).toBe(true);
  });

  it('debería devolver false si la edad es menor de 18', () => {
    expect(esAdulto(17)).toBe(false);
    expect(esAdulto(10)).toBe(false);
  });
});
```

### Paso 2: Escribir el código mínimo para que pase (🟢 GREEN)

Ahora creamos el archivo `check-age.js` y escribimos **solo lo justo y necesario** para que Vitest se ponga en verde. No intentes sobreingenierizar, solo haz que pase.

```javascript
export function esAdulto(edad) {
  if (edad >= 18) {
    return true;
  }
  return false;
}
```

Al guardar el archivo, Vitest (que se ejecuta en tiempo real, si está en modo `watch`) volverá a pasar las pruebas y verás algo como esto en tu terminal:

```bash
✓ index.test.js (2)
   ✓ Función esAdulto (2)
     ✓ debería devolver true si la edad es 18 o más
     ✓ debería devolver false si la edad es menor de 18

 Test Files  1 passed (1)
      Tests  2 passed (2)
```

---

### Paso 3: Refactorizar (🔵 REFACTOR)

Ya funciona y tenemos una red de seguridad (las pruebas). ¿Podemos mejorar el código de `check-age.js` para que sea más limpio o eficiente? Sí, podemos simplificar ese `if/else`.

Modificamos `check-age.js`:

```javascript
export function esAdulto(edad) {
  return edad >= 18;
}
```

Al guardar, Vitest vuelve a correr automáticamente. Si todo sigue en verde, significa que has refactorizado con éxito sin romper la funcionalidad existente.