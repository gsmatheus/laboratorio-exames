import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PessoaRepository } from './pessoa.repository';
import { CreatePessoaDto } from './dtos/create-pessoa.dto';
import { Pessoa } from './pessoa.entity';
import { from, Observable } from 'rxjs';
import { Exame } from '../exame/exame.entity';

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

  async createPessoa(createPessoaDto: CreatePessoaDto): Promise<Pessoa> {
    return this.pessoaRepository.createPessoa(createPessoaDto);
  }

  async findPessoaById(pessoaId: string): Promise<Pessoa> {
    const pessoa = await this.pessoaRepository.findOne(pessoaId);
    // console.log(pessoa);
    // if (!pessoa) throw new NotFoundException('Pessoa não encontrada.');

    return pessoa;
  }

  async findAllExames(pessoaId: string): Promise<Exame[]> {
    // const pessoa = await this.pessoaRepository.find({
    //   relations: ['exames'],
    //   where: { id: pessoaId },
    // });

    // const pessoa = await this.pessoaRepository
    //   .createQueryBuilder('pessoa')
    //   .leftJoinAndSelect('pessoa.exames', 'exame')
    //   .where('id', {})
    //   .getMany();

    const pessoa = await this.pessoaRepository.find({
      join: {
        alias: 'pessoa',
        leftJoinAndSelect: {
          exame: 'pessoa.exames',
        },
      },
      where: {
        id: '9df24822-3cdb-4b3c-b35c-03465dd443db',
      },
    });

    return pessoa[0].exames;
  }
}
