import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';

export class RelacionesDto {
  // id_Relaciones: number;
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  apellidp: string;

  @IsNotEmpty()
  @IsString()
  descripcion: string;
}

export class UpdateRelacionesDto extends PartialType(RelacionesDto) {}