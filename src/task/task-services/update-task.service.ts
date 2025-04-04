import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/services/prisma.service.js';
import { UpdateTaskDto } from '../task-dto/update-task.dto.js';

@Injectable()
export class UpdateTaskService {
  constructor(private readonly prisma: PrismaService) {}
  async updateTask(updateTask: UpdateTaskDto, id: number) {
    const task = await this.prisma.task.findUnique({ where: { id } });
    if (!task) {
      throw new NotFoundException();
    }
    return await this.prisma.task.update({
      where: { id },
      data: updateTask,
      select: { id: true, title: true, description: true, status: true },
    });
  }
}
