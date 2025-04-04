import { Body, Controller, Post } from '@nestjs/common';
import { CreateTaskService } from './task-services/create-task.service.js';
import { CreateTaskDto } from './task-dto/create-task.dto.js';

@Controller('tasks')
export class TaskController {
  constructor(private readonly createTaskService: CreateTaskService) {}

  @Post()
  async createTask(@Body() createTask: CreateTaskDto) {
    return await this.createTaskService.createTask(createTask);
  }
}
