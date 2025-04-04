import { Module } from '@nestjs/common';
import { TaskController } from './task.controller.js';
import { CreateTaskService } from './task-services/create-task.service.js';
import { UpdateTaskService } from './task-services/update-task.service.js';
import { PrismaService } from '../common/services/prisma.service.js';
import { FindAllTasks } from './task-services/find-all-task.service.js';

@Module({
  controllers: [TaskController],
  providers: [
    CreateTaskService,
    UpdateTaskService,
    FindAllTasks,
    PrismaService,
  ],
})
export class TaskModule {}
