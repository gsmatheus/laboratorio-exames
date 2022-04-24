import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaRepository } from './categoria.repository';
import { CreateCategoriaDto } from './dtos/create-categoria.dto';
import { Categoria } from './categoria.entity';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(CategoriaRepository)
    private categoriaRepository: CategoriaRepository,
  ) {}

  async createCategoria(
    createCategoriaDto: CreateCategoriaDto,
  ): Promise<Categoria> {
    return this.categoriaRepository.createCategoria(createCategoriaDto);
  }
}
