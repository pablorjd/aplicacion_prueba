//esta es la entidad que se importa en los imports
import { Animal } from './animales/entities/animal.entity';

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalesController } from './animales/animales.controller';


//este import es para configurar la base de datos
import { TypeOrmModule } from '@nestjs/typeorm';
//aca se importan los servicios
import { AnimalesService } from './animales/services/animales.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '192.168.64.2',
      port: 3306,
      username: 'root',
      password: '',
      database: 'animales',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([
      Animal
    ])
  ],
  controllers: [AppController, AnimalesController],
  providers: [AppService, AnimalesService],
})
export class AppModule {}
