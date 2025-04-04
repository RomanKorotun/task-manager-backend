import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/services/prisma.service.js';
import { TaskQueryDto } from '../task-dto/task-query.dto.js';
import { Prisma, Status } from '@prisma/client';

@Injectable()
export class FindAllTasksService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllTasks(query: TaskQueryDto) {
    const { status, title, description } = query;

    const where: Prisma.TaskWhereInput = {};

    if (status && status !== 'all') {
      where.status = status as Status;
    }

    if (title) {
      where.title = {
        contains: title,
        mode: 'insensitive',
      };
    }

    if (description) {
      where.description = {
        contains: description,
        mode: 'insensitive',
      };
    }

    const items = await this.prisma.task.findMany({
      where,
      select: { id: true, title: true, description: true, status: true },
    });

    return { items };
  }
}
