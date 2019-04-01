import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
//entidad que define la tabla en la base de datos

@Entity()
export class Animal {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    nombre:string
    @Column()
    tipo:string
}
