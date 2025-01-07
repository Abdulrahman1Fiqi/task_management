from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TaskViewSet, UserRegistrationView, UserLoginView, TaskListView  # Using class-based view

# Create the router and register the TaskViewSet
router = DefaultRouter()
router.register(r'tasks', TaskViewSet)

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='user-register'),
    path('login/', UserLoginView.as_view(), name='user-login'),
    path('tasks/', TaskListView.as_view(), name='task-list'),  # Using class-based view for listing tasks
    path('', include(router.urls)),  # Include all URLs defined in the router (tasks CRUD operations)
]
