import { IsIn, IsOptional, IsString } from 'class-validator';

export class TaskQueryDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsIn(['completed', 'not_completed', 'all'], { message: 'Invalid status' })
  status?: string;
}
