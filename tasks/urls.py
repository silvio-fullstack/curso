from django.urls import path

from . import views

urlpatterns = [
    path('hello/', views.helloword),
    path('', views.tasklist, name='task-list'),
    path('tasks/<int:id>', views.taskView, name="task-view"),
    path('newTask/', views.newTask, name="new-task"),
    path('edit/<int:id>', views.editTask, name="edit-task"),
    path('delete/<int:id>', views.deleteTask, name="delete-task"),
]