# Task Management API

## Project Overview

The Task Management API is a RESTful API built using Django and Django REST Framework (DRF) that allows users to manage their tasks. Users can create, read, update, and delete tasks, as well as mark them as complete or incomplete. The API ensures that each user can only manage their own tasks.

## Features

- **Task Management (CRUD)**: Create, read, update, and delete tasks.
- **User  Management (CRUD)**: Manage user accounts with unique usernames, emails, and passwords.
- **Task Status Management**: Mark tasks as complete or incomplete.
- **Task Filtering and Sorting**: Filter tasks by status, priority, and due date, and sort them accordingly.
- **User  Authentication**: Secure the API with user authentication using JWT.

## Technical Requirements

- **Django**: A high-level Python web framework.
- **Django REST Framework**: A powerful toolkit for building Web APIs.
- **PostgreSQL**: (or any other database) for data storage.
- **JWT**: For token-based authentication.

## Installation

### Prerequisites

- Python 3.x
- pip
- PostgreSQL (or any other database)

### Steps to Set Up the Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/task_management_api.git
   cd task_management_api