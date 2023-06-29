import { Column, Entity, OneToMany,PrimaryGeneratedColumn } from "typeorm";
import { PeliculaEntity } from "./pelicula.entity";

@Entity ('Autor')
export class AutorEntity{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    nombre:string;
    @Column()
    apellido:string;
    @OneToMany(()=>PeliculaEntity,(Pelicula)=>Pelicula.Autor)
    pelcula:PeliculaEntity[];
  pelicula: any;
}
