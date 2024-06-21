import { Injectable } from '@angular/core';
import { NewTaskData } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Complete Project Report',
      summary: 'Finalize and submit the project report for the first quarter.',
      dueDate: '2024-06-10',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Prepare Presentation',
      summary:
        'Create a PowerPoint presentation for the upcoming client meeting.',
      dueDate: '2024-06-15',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Team Meeting',
      summary:
        'Organize and lead the bi-weekly team meeting to discuss project progress.',
      dueDate: '2024-06-05',
    },
    {
      id: 't4',
      userId: 'u3',
      title: 'Team Meeting',
      summary:
        'Organize and lead the bi-weekly team meeting to discuss project progress.',
      dueDate: '2024-06-05',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTask(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.saveTask();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTask();
  }

  private saveTask() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
