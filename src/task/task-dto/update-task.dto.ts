import { IsNotEmpty, IsOptional, IsString, ValidateIf } from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  status?: 'completed' | 'not_completed';

  @ValidateIf((o) => !o.title && !o.description && !o.status)
  @IsNotEmpty({
    message:
      'At least one field: title, description, or status must be provided',
  })
  _atLeastOneField?: string;
}
