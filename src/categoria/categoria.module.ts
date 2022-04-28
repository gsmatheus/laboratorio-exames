import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaRepository } from './categoria.repository';
import { CategoriaService } from './categoria.service';
import { CategoriaController } from './categoria.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([CategoriaRepository]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  providers: [CategoriaService],
  controllers: [CategoriaController],
  exports: [CategoriaService],
})
export class CategoriaModule {}
