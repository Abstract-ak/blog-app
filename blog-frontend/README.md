# Blog Management Application (Frontend)

A React-based frontend for managing blogs, including features for viewing, creating, updating, deleting, and paginating blogs. This application integrates with a backend API to provide a seamless user experience.

---

## Features

- **Display Blogs**: View a list of blogs with pagination.
- **Create Blogs**: Add new blogs with title, content, and author fields.
- **Update Blogs**: Edit existing blog details.
- **Delete Blogs**: Remove blogs from the system.
- **Pagination**: Navigate between pages of blogs.

---

## Tech Stack

- **React**: For building the user interface.
- **Axios**: For API communication.
- **CSS**: For styling the components.

---

## Folder Structure

frontend/ ├── public/ │ └── index.html # Root HTML file ├── src/ │ ├── components/ │ │ ├── BlogList.js # Component to display all blogs │ │ ├── BlogForm.js # Form for adding/editing blogs │ │ └── Pagination.js # Pagination component │ ├── App.js # Main application file │ ├── index.js # Entry point for React │ ├── api.js # API service for backend interaction │ └── styles.css # CSS file for styling ├── .gitignore # Files to ignore in Git ├── package.json # React dependencies └── README.md # Frontend documentation

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/blog-application.git
    cd blog-frontend
   ```

npm install
npm start

## API Endpoints Used

Ensure the backend is running and accessible at http://localhost:5000/api/blogs.

GET /api/blogs?page=<page>&limit=<limit>: Fetch paginated blogs.
POST /api/blogs: Add a new blog.
PUT /api/blogs/:id: Update an existing blog.
DELETE /api/blogs/:id: Delete a blog.

## Usage

Open the app in your browser at http://localhost:3000.
Use the form to add or edit blogs.
View the list of blogs with pagination.
Delete blogs as needed.

## Contributing

Contributions are welcome! Please follow these steps:

## Fork the repository.

Create a new branch: git checkout -b feature-name.
Commit your changes: git commit -m 'Add some feature'.
Push to the branch: git push origin feature-name.
Submit a pull request.
