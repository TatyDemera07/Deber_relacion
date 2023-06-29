import { Column,Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { AutorEntity } from "./autor.entity";

@Entity ("Pelicula")
export abstract class PeliculaEntity {
  @PrimaryColumn()
  idPelicula: number;

  @Column()
  descripcion: string;

  @Column()
  duracion: number;

  @ManyToOne (()=>AutorEntity,(autor)=>autor.pelicula)
  Autor:AutorEntity;
}