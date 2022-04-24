import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaRepository } from './categoria.repository';
import { CategoriaService } from './categoria.service';
import { CategoriaController } from './categoria.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CategoriaRepository])],
  providers: [CategoriaService],
  controllers: [CategoriaController],
})
export class CategoriaModule {}
