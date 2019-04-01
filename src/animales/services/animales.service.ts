import { CreateAnimalesDto } from './../dto/create-animales-dto';
import { Animal } from './../entities/animal.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AnimalesService {

    constructor(
        //se inyectan las dependencias para buscar
        @InjectRepository(Animal)
        private readonly animalRepository: Repository<Animal>,
      ) {}
        //trae una lista de los animales
      async findAll(): Promise<Animal[]> {
        return await this.animalRepository.find();
      }
        //crea un mensaje con los parametros con el controlador dto
      async createAnimal(animalNuevo: CreateAnimalesDto):Promise<Animal>{

          const nuevoAnimal = new Animal
          nuevoAnimal.nombre = animalNuevo.nombre
          nuevoAnimal.tipo = animalNuevo.tipo
          
          return this.animalRepository.save(nuevoAnimal) 
      }
      async updateAnimal(animalNuevo: CreateAnimalesDto, idAnimal: number):Promise<Animal>{

        const updateAnimal = await this.animalRepository.findOne(idAnimal)
        updateAnimal.nombre = animalNuevo.nombre
        updateAnimal.tipo = animalNuevo.tipo
        
        return this.animalRepository.save(updateAnimal) 
    }
      async deleteAnimal(idAnimal: number): Promise<any>{
        return await this.animalRepository.delete(idAnimal)
      }
      async findById(idAnimal: number): Promise<Animal>{
        return await this.animalRepository.findOne(idAnimal)
      }

    


}
