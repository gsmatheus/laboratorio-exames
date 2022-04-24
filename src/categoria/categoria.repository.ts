import { EntityRepository, Repository } from 'typeorm';
import { Categoria } from './categoria.entity';
import { CreateCategoriaDto } from './dtos/create-categoria.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(Categoria)
export class CategoriaRepository extends Repository<Categoria> {
  // TODO: Validar para apenas os administradores podem criar categorias novas.
  async createCategoria(
    createCategoriaDto: CreateCategoriaDto,
  ): Promise<Categoria> {
    const { nome, descricao } = createCategoriaDto;

    const categoria = this.create();
    categoria.nome = nome;
    categoria.descricao = descricao;

    try {
      await categoria.save();

      delete categoria.createdAt;
      delete categoria.updatedAt;

      return categoria;
    } catch (e) {
      if (e.code.toString() === 'ER_DUP_ENTRY') {
        throw new ConflictException(
          'Já existe uma categoria com o mesmo nome.',
        );
      }
      throw new InternalServerErrorException(e.toString());
    }
  }
}
