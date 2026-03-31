## 📖 Introduction

This project is a **CRUD (Create, Read, Update, Delete) Task Management Application** built using **Angular**. It demonstrates how to design a structured and scalable frontend application by following modern Angular practices such as **standalone components, service-based architecture, and reactive programming with Observables**.

The application interacts with a REST API to perform all operations, ensuring real-world implementation of data handling, asynchronous flows, and UI updates. It is designed to showcase clean code practices, separation of concerns, and maintainability.

---
## 🛠️ Tech Stack Used

- **Angular (Standalone Components)** – Modern Angular architecture without NgModules  
- **TypeScript** – Strongly typed language for better maintainability  
- **HTML5** – Structure and templating  
- **SCSS** – Component-level styling  
- **RxJS (Observables)** – Asynchronous data handling  
- **Angular HttpClient** – REST API communication  

---

## ⚙️ Functionality

- **Create Task**  
  Users can add new tasks with title, description, and status.

- **Read Tasks**  
  Fetches and displays all tasks from the backend API in real-time.

- **Update Task**  
  Allows editing existing tasks with proper edit mode handling.

- **Delete Task**  
  Users can remove tasks from the list with immediate UI update.

- **API Integration**  
  All operations are performed via HTTP methods (GET, POST, PUT, DELETE).

- **State Handling**  
  Maintains form state and edit mode efficiently within the component.

- **Dynamic UI Updates**  
  Ensures UI reflects latest data using Angular change detection.
---
## 🔗 Setup & API Integration Steps

### 1️⃣ Setup Backend (JSON Server)

Install JSON Server:
npm install -g json-server

Create a db.json file:
{
  "tasks": []
}

Run the server:
npx json-server --watch db.json

API will run at:
http://localhost:3000/tasks

---

### 2️⃣ Configure API in Service

Update your service file with base URL:
private url = 'http://localhost:3000/tasks';

Make sure HttpClientModule is imported in your application.

---

### 3️⃣ CRUD Operations

➕ Create (POST)
- Adds a new task using API
- Method: addTask(task)

📋 Read (GET)
- Fetches all tasks from API
- Method: getTasks()

✏️ Update (PUT)
- Updates existing task by ID
- Method: updateTask(id, task)

❌ Delete (DELETE)
- Deletes task by ID
- Method: deleteTask(id)

---

### 4️⃣ Component Flow

- Load tasks on initialization (ngOnInit)
- Handle add/update via form submission
- Enable edit mode for updating tasks
- Refresh task list after each operation
- Reset form after action completion

---
## 🧾 Conclusion

This project demonstrates a complete CRUD implementation in Angular with proper API integration. It follows a clean architecture using components, services, and interfaces, making it scalable, maintainable, and aligned with real-world development practices.

---
