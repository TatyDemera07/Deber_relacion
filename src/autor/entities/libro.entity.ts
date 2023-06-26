import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class UsuarioEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  titulo: string;

  @Column()
  autor: string;

  @Column('int')
  precio: number;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'fecha_creacion'
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'fecha_actualizacion'
  })
  updatedAt: Date;
},