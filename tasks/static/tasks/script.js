// static/script.js

// Handle user registration
document.getElementById('register-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:8000/api/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });
        const data = await response.json();
        if (response.ok) {
            alert('Registration successful!');
            window.location.href = '/login/'; // Redirect to login page
        } else {
            alert('Registration failed: ' + data.error);
        }
    } catch (error) {
        console.error('Error during registration:', error);
        alert('Registration failed!');
    }
});

// Handle user login
document.getElementById('login-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    try {
        const response = await fetch('http://localhost:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        if (response.ok) {
            localStorage.setItem('access_token', data.access);
            window.location.href = '/tasks/'; // Redirect to task list page
        } else {
            alert('Login failed: ' + data.error);
        }
    } catch (error) {
        console.error('Error during login:', error);
        alert('Login failed!');
    }
});

// Handle task creation
document.getElementById('task-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-description').value;
    const dueDate = document.getElementById('task-due-date').value;
    const priority = document.getElementById('task-priority').value;

    const token = localStorage.getItem('access_token');

    try {
        const response = await fetch('http://localhost:8000/api/tasks/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({ title, description, due_date: dueDate, priority, status: 'Pending' }),
        });
        const data = await response.json();
        if (response.ok) {
            alert('Task created successfully!');
            // Optionally, you can refresh the task list or redirect to the task list page
            window.location.reload(); // Reload the page to see the new task
        } else {
            alert('Error creating task: ' + data.error);
        }
    } catch (error) {
        console.error('Error creating task:', error);
        alert('Error creating task!');
    }
});