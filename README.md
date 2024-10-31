# Jeknowledge Challenge - Hard Skills Interview

## Project: JekLibrary - Book Management Platform

This project involves developing a web platform for book management, including both frontend and backend components. The frontend is built with React, and the backend is built with Django.

## Prerequisites

- **Code Editor**: Visual Studio Code (VSCode) is recommended.

  - [Download VSCode](https://code.visualstudio.com/download)

- **Python 3.8+**: Required for the Django backend.

  - [Download Python](https://www.python.org/downloads/)

- **Node.js & npm**: Required for the React frontend.

  - [Download Node.js](https://nodejs.org/)


## Getting Started

### Step 1: Clone or Download the Project

You can clone the GitHub repository or download the project files as a zip file.

#### Option 1: Clone with Git

1. Open your terminal or command prompt.
2. Use the following command to clone the repository:

   ```bash
   git clone <repository-url>
   ```

3. Navigate to the project directory:

   ```bash
   cd project-jek
   ```

#### Option 2: Download as Zip

1. Download the zip file from the repository.
2. Extract the zip file to your preferred location.
3. Open the extracted directory in VSCode. For example:

   ```bash
   cd C:\Users\jvaz1\Desktop\project-jek
   code .
   ```

### Step 2: Backend Installation (Django)

1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

2. **Create a virtual environment** (recommended):

   ```bash
   python -m venv venv
   ```

3. **Activate the virtual environment**:

   - On Windows:

     ```bash
     venv\Scripts\activate
     ```

   - On MacOS/Linux:

     ```bash
     source venv/bin/activate
     ```


6. **Run the Django server**:

   ```bash
   python manage.py runserver
   ```

   The backend server should now be running at [http://127.0.0.1:8000](http://127.0.0.1:8000).

### Step 3: Frontend Installation (React)

1. Navigate to the `frontend` directory:

   ```bash
   cd ../frontend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the React development server**:

   ```bash
   npm start
   ```

   The frontend should now be running at [http://localhost:3000](http://localhost:3000).

## Available Scripts

### Django Commands

- **`python manage.py runserver`**: Starts the Django development server.
- **`python manage.py migrate`**: Applies database migrations.
- **`python manage.py createsuperuser`**: Creates an admin user for Django admin.

### React Commands

- **`npm start`**: Starts the React development server.
- **`npm run build`**: Builds the React app for production deployment.

## Additional Notes

- Ensure both servers (Django and React) are running simultaneously for full functionality.
- Environment-specific settings, such as API URLs and database configurations, should be managed via environment variables in `.env` files for Django and React.
