from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TaskViewSet, UserRegistrationView, UserLoginView , register, login, task_list
from . import views

router = DefaultRouter()
router.register(r'tasks', TaskViewSet)

urlpatterns = [
    path('register/', register, name='user-register'),
    path('login/', login, name='user-login'),
    path('tasks/', task_list, name='task-list'),
    path('', include(router.urls)),
]