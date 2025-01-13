# Blog Application (Full-Stack)

## Overview

The Blog Application is a full-stack project that allows users to create, read, update, and delete (CRUD) blog posts. It integrates a **Node.js/Express** backend with a **React.js** frontend and uses **MongoDB** for data persistence. This project demonstrates the implementation of features such as pagination, authentication (optional), and seamless integration between frontend and backend.

---

## Features

- **Blog Management**: Create, view, update, and delete blog posts.
- **Pagination**: Fetch and display blogs efficiently in paginated form.
- **Database Integration**: Persistent storage using MongoDB with Mongoose.
- **API Integration**: RESTful APIs for seamless communication between backend and frontend.

---

## Folder Structure

/blog-app ├── /backend # Backend API implementation │ ├── /controllers # Business logic for API routes │ ├── /models # MongoDB schema definitions │ ├── /routes # Route definitions for APIs │ ├── /middleware # Authentication middleware │ ├── server.js # Main entry point for backend │ └── .env # Backend environment variables │ ├── /frontend # Frontend application built with React │ ├── /public # Static assets │ ├── /src # React components and application logic │ ├── package.json # Frontend dependencies │ └── .env # Frontend environment variables │ ├── README.md # Documentation for the project ├── package.json # Root dependencies and scripts └── .gitignore # Files and directories ignored by Git

---

## Installation and Setup

### Prerequisites

- **Node.js** installed on your system.
- **MongoDB** installed locally or access to a MongoDB cloud instance.
- **npm** (comes with Node.js) or **yarn**.

### Steps to Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/blog-app.git
   cd blog-app
   ```
