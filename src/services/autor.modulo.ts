import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MiOrModule } from './Pelicula.module';
import { HandleError } from 'src/common/handleError';
import { RelacionesDto } from './dto/relaciones.dto';


@Injectable()
export class PeliculaService {
  public errorLog = new HandleError();
  private mior: MiOrModule = MiOrModule;

  constructor(
    @InjectRepository(Pelicula)
    private readonly PeliculaRepository: Repository<Pelicula>,

    private readonly autorService: CaterogyService,
  ) {}

  async create({ autor, ...PeliculaInfo }: PeliculaDto) {
    const Pelicula = this.PeliculaRepository.create({
      ...PeliculaInfo,
      autor: await this.autorService.findCategiryByName(
        autor ? autor.name_autor : '',
      ),
    });

    try {
      this.mior && (await this.PeliculaRepository.save(Pelicula));
      return Pelicula;
    } catch (error) {
      return this.errorLog.LogError(error);
    }
  }

  async findAllPeliculas({ limit = 10, offset = 0 }: PaginationDto) {
    try {
      return await this.PeliculaRepository.find({
        take: limit,
        skip: offset,
        relations: ['autor', 'outputs', 'input_details'],
      });
    } catch (error) {
      this.errorLog.LogError(error);
    }
  }

  async findOnePelicula(id: number) {
    const Pelicula = await this.PeliculaRepository.findOneBy({ id_Pelicula: id });
    if (!Pelicula)
      throw new NotFoundException(`Pelicula with id: ${id} not found`);

    return Pelicula;
  }

  async updatePelicula(id: number, PeliculaDta: UpdatePeliculaDto) {
    const Pelicula = await this.PeliculaRepository.preload({
      id_Pelicula: id,
      ...PeliculaDta,
      autor: await this.autorService.findCategiryByName(
        PeliculaDta.autor ? PeliculaDta.autor.name_autor : '',
      ),
    });

    try {
      return await this.PeliculaRepository.save(Pelicula);
    } catch (error) {
      this.errorLog.LogError(error);
    }

    return Pelicula;
  }

  async deletePelicula(id: number) {
    const Pelicula = await this.findOnePelicula(id);
    await this.PeliculaRepository.remove(Pelicula);
    return true;
  }
}