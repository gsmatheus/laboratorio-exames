import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PessoaRepository } from './pessoa.repository';

/**
 * @Injectable que é o responsável por fazer com que nossa classe faça parte
 * do sistema de Injeção de Dependências do NestJS
 */
@Injectable()
export class PessoaService {
  constructor(
    @InjectRepository(PessoaRepository)
    private pessoaRepository: PessoaRepository,
  ) {}
}
