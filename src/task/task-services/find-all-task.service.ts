import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/services/prisma.service.js';

@Injectable()
export class FindAllTasks {
  constructor(private readonly prisma: PrismaService) {}

  async findAllTasks() {
    const items = await this.prisma.task.findMany({
      select: { id: true, title: true, description: true, status: true },
    });

    return { items };
  }
}
