import { PartialType } from '@nestjs/mapped-types';
import { CreateautorDto } from './create-autor.dto';

export class UpdateAutorDto extends PartialType(CreateautorDto) {

}