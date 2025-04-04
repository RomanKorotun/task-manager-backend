import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTaskService } from './task-services/create-task.service.js';
import { CreateTaskDto } from './task-dto/create-task.dto.js';
import { UpdateTaskService } from './task-services/update-task.service.js';
import { UpdateTaskDto } from './task-dto/update-task.dto.js';
import { FindAllTasks } from './task-services/find-all-task.service.js';

@Controller('tasks')
export class TaskController {
  constructor(
    private readonly createTaskService: CreateTaskService,
    private readonly updateTaskService: UpdateTaskService,
    private readonly findAllTasksService: FindAllTasks,
  ) {}

  @Post()
  async createTask(@Body() createTask: CreateTaskDto) {
    return await this.createTaskService.createTask(createTask);
  }

  @Put(':id')
  async updateTask(
    @Body() updateTask: UpdateTaskDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.updateTaskService.updateTask(updateTask, id);
  }

  @Get()
  async findAllTasks() {
    return await this.findAllTasksService.findAllTasks();
  }
}
