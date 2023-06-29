import { Injectable } from '@nestjs/common';
import { CreateautorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';

@Injectable()
export class AutorService {
  create(_CreateautorDto: CreateautorDto) {
    return 'This action adds a new autor';
  }

  findAll() {
    return `This action returns all autor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} autor`;
  }

  update(id: number, _updateAutorDto: UpdateAutorDto) {
    return `This action updates a #${id} autor`;
  }

  remove(id: number) {
    return `This action removes a #${id} autor`;
  }
}