import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/services/prisma.service.js';

@Injectable()
export class DeleteTaskService {
  constructor(private readonly prisma: PrismaService) {}

  async deleteTask(id: number) {
    const task = await this.prisma.task.findUnique({ where: { id } });
    if (!task) {
      throw new NotFoundException();
    }
    return this.prisma.task.delete({
      where: { id },
      select: { id: true, title: true, description: true, status: true },
    });
  }
}
