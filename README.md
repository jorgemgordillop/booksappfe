
# 📚 Angular Frontend (Books Management)

This project is an Angular-based frontend application that consumes a RESTful API (built with Flask) for managing books. It allows users to list, add, update, and delete books.

---

## 🚀 Environment Requirements

- Node.js (18.x or higher)
- npm (automatically installed with Node.js)
- Angular CLI (`npm install -g @angular/cli`)

---

## ⚙️ Installing Dependencies

In the project root directory, run:

```bash
npm install
```

---

## ▶️ Running Locally (Development Mode)

```bash
ng serve
```

Your application will be accessible at:
```
http://localhost:4200
```

---

## 🐳 Running with Docker (Production)

To build the Docker image:

```bash
docker build -t frontend-app .
```

To run the Docker container:

```bash
docker run -d -p 80:80 frontend-app
```

Then, access your application at:

```
http://localhost
```

---

## 🛠️ Backend API Configuration

By default, the Angular application is configured to connect to the Flask backend at:

```typescript
// src/app/book.service.ts
private apiUrl = 'http://localhost:8000/books/';
```

If your backend uses a different port or address, update this URL accordingly.

---

## 📂 Project Structure

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

## 📋 Implemented Features

- [x] List existing books from the REST API.
- [x] Add new books using a form.
- [x] Delete existing books.
- [ ] Update existing books (optional, pending).

---

## 🔖 Technologies Used

- **Angular 18**
- **TypeScript**
- **HttpClient (Angular)**
- **Docker**
- **Nginx (for production)**

---

## 🚨 Common Issues

### CORS Issues:
Ensure your backend (Flask) is properly configured with Flask-CORS to accept requests from your Angular frontend.

---

## 🤝 Contributing

1. Fork this repository.
2. Create your branch (`git checkout -b feature/new-feature`).
3. Commit your changes clearly (`git commit -m 'Add new feature'`).
4. Push to your branch (`git push origin feature/new-feature`).
5. Create a Pull Request.

---

## 📝 License

This project is licensed under the MIT License. Check the [LICENSE](LICENSE) file for more details.
