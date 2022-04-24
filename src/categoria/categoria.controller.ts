import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto } from './dtos/create-categoria.dto';
import { ReturnCategoriaDto } from './dtos/return-cateogira.dto';

@Controller('categoria')
export class CategoriaController {
  constructor(private categoriaService: CategoriaService) {}

  @Post()
  async createCategoria(
    @Body(ValidationPipe) createCategoriaDto: CreateCategoriaDto,
  ): Promise<ReturnCategoriaDto> {
    const categoria = await this.categoriaService.createCategoria(
      createCategoriaDto,
    );
    return {
      categoria,
      message: 'Categoria cadastrada com sucesso',
    };
  }
}
