import { Column, Entity, OneToMany } from "typeorm";

import { AutorEntity } from "./autor.entity";
import { LibroEntity } from "./libro.entity";

@Entity('alumno') //la clase es un tabla
export class AlumnoEntity extends UsuarioEntity {
    @Column()
    edad: number;

    @Column()
    fechadenaciemiento: Date;

    @Column()
    actuacion: boolean;

    @OneToMany(() => autorEntity, (autor) => autor.libross)
    autores: AutorEntity[],
}