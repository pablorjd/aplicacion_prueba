import { AnimalesService } from './services/animales.service';
import { CreateAnimalesDto } from './dto/create-animales-dto';
import { Controller, Post, Body, Get, Put, Delete, Res,HttpStatus, Param } from '@nestjs/common';


@Controller('animales')
export class AnimalesController {

    constructor(private animalService: AnimalesService){}
    
    @Post()
    create(@Body() createAnimalesDto:CreateAnimalesDto, @Res() response){
        this.animalService.createAnimal(createAnimalesDto).
            then( data =>{
                response.status(HttpStatus.CREATED).json(data)
            }).catch(()=>{
                response.status(HttpStatus.FORBIDDEN)
                .json({data: 'Error al crear un nuevo Animal'})    
            })
    }
    @Get()
    getAll(@Res() response){
        this.animalService.findAll().then( data =>{
            response.status(HttpStatus.OK).json(data)
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN)
            .json({ data: ' Error al cargar los datos ' })

        })
    }
    @Get(':id')
    getById(@Res() response,@Param('id')idAnimal){
        this.animalService.findById(idAnimal).then( data =>{
            response.status(HttpStatus.OK).json(data);
        }).catch( (err) => {
            return response.status(HttpStatus.FORBIDDEN).json({ err: ' Error al cargar los datos ' })

        })
    }
    @Put(':id')
    update(@Body() updateAnimalesDto:CreateAnimalesDto, @Res()response, @Param('id') idAnimal ){
        this.animalService.updateAnimal(updateAnimalesDto,idAnimal).then( data =>{
            response.status(HttpStatus.OK).
            json({ data:  'Actualizado' })
        }).catch(()=>{
            response.status(HttpStatus.BAD_REQUEST).
            json({ data:  'Error al actualizar' })
        })
    }
    @Delete(':id')
    delete(@Res()response, @Param('id') idAnimal ){
        this.animalService.deleteAnimal(idAnimal).then(()=>{response.status(HttpStatus.OK).json({ data: 'Animal eliminado' })
        }).catch(()=>{
            response.status(HttpStatus.FORBIDDEN).
            json({ data:  'Error al eliminar' })
        })
    }
}
