import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaRepository } from './categoria.repository';
import { CreateCategoriaDto } from './dtos/create-categoria.dto';
import { Categoria } from './categoria.entity';
import { PessoaService } from '../pessoa/pessoa.service';

@Injectable()
export class CategoriaService {
  // @Inject(PessoaService)
  // private readonly pessoaService: PessoaService;

  constructor(
    @InjectRepository(CategoriaRepository)
    private categoriaRepository: CategoriaRepository,
  ) {}

  async createCategoria(
    createCategoriaDto: CreateCategoriaDto,
  ): Promise<Categoria> {
    // const pessoa = await this.pessoaService.findPessoaById(
    //   '6c63129e-24fd-44d4-b52f-9b53a1cf343',
    // );
    // console.log(pessoa);

    return this.categoriaRepository.createCategoria(createCategoriaDto);
  }
}
