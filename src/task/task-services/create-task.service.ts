import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/services/prisma.service.js';
import { CreateTaskDto } from '../task-dto/create-task.dto.js';

@Injectable()
export class CreateTaskService {
  constructor(private readonly prisma: PrismaService) {}
  async createTask(createTask: CreateTaskDto) {
    return await this.prisma.task.create({
      data: createTask,
      select: { id: true, title: true, description: true },
    });
  }
}
