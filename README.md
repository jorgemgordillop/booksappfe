
# 📚 Frontend Angular (Gestión de Libros)

Este proyecto es la interfaz gráfica desarrollada con Angular, que consume una API RESTful (desarrollada en Flask) para gestionar libros. Permite listar, agregar, actualizar y eliminar libros.

---

## 🚀 Requisitos del entorno

- Node.js (18.x o superior)
- npm (se instala automáticamente con Node.js)
- Angular CLI (`npm install -g @angular/cli`)

---

## ⚙️ Instalación de dependencias

En el directorio raíz del proyecto, ejecuta:

```bash
npm install
```

---

## ▶️ Ejecutar en modo desarrollo local

```bash
ng serve
```

La aplicación estará disponible en:
```
http://localhost:4200
```

---

## 🐳 Ejecutar con Docker (Producción)

Para construir la imagen Docker:

```bash
docker build -t frontend-app .
```

Para ejecutar la aplicación en Docker:

```bash
docker run -d -p 80:80 frontend-app
```

Accede a la aplicación desde:

```
http://localhost
```

---

## 🛠️ Configuración del backend API

Por defecto, la aplicación Angular está configurada para conectarse al backend Flask en:

```typescript
// src/app/book.service.ts
private apiUrl = 'http://localhost:8000/books/';
```

Si tu backend utiliza otro puerto o dirección, modifica claramente esta URL.

---

## 📂 Estructura del proyecto Angular

```
frontend/
├── Dockerfile
├── package.json
├── angular.json
├── tsconfig.json
└── src/
    ├── app/
    │   ├── app.component.ts
    │   ├── app.module.ts
    │   ├── book.service.ts
    │   └── book-list/
    │       ├── book-list.component.ts
    │       ├── book-list.component.html
    │       └── book-list.component.css
    ├── assets/
    ├── environments/
    ├── index.html
    ├── main.ts
    └── styles.css
```

---

## 📋 Funcionalidades implementadas

- [x] Listar libros existentes desde la API REST.
- [x] Agregar nuevos libros mediante formulario.
- [x] Eliminar libros existentes.
- [ ] Actualizar libros existentes (opcional pendiente).

---

## 🔖 Tecnologías utilizadas

- **Angular 18**
- **TypeScript**
- **HttpClient (Angular)**
- **Docker**
- **Nginx (para producción)**

---

## 🚨 Problemas comunes

### Problemas con CORS:
Asegúrate que el backend tenga correctamente configurado Flask-CORS para aceptar peticiones del frontend Angular.

---

## 🤝 Colaborar

1. Haz un fork del proyecto.
2. Crea tu rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza un commit claro (`git commit -m 'Nueva funcionalidad'`).
4. Sube los cambios a la rama (`git push origin feature/nueva-funcionalidad`).
5. Crea un Pull Request.

---

## 📝 Licencia

Este proyecto está bajo licencia MIT. Puedes consultar [LICENSE](LICENSE) para más detalles.
