/**
 * Contem a declaração do nosso repositório para acesso ao banco de dados.
 * Um repositório e a camada de nossa aplicação responsável por realizar a
 * persistência com nosso banco de dados.
 */

import { EntityRepository, Repository } from 'typeorm';
import { Pessoa } from './pessoa.entity';
import { CreatePessoaDto } from './dtos/create-pessoa.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(Pessoa)
export class PessoaRepository extends Repository<Pessoa> {
  /**
   * Cria uma nova pessoa
   * @param createPessoaDto -> dados a serem inseridos
   */
  async createPessoa(createPessoaDto: CreatePessoaDto): Promise<Pessoa> {
    // Separa os dados em variáveis
    const { nome_completo, cpf, email, data_nasc } = createPessoaDto;

    const pessoa = this.create();
    pessoa.nome_completo = nome_completo;
    pessoa.cpf = cpf;
    pessoa.email = email;
    pessoa.data_nasc = data_nasc;

    try {
      await pessoa.save();
      return pessoa;
    } catch (e) {
      // Verifica se o erro causado foi por já existir um cadastro com o mesmo cpf ou email
      if (e.code.toString() === 'ER_DUP_ENTRY') {
        throw new ConflictException('Já existe um cadastro com esse cpf');
      } else {
        throw new InternalServerErrorException(
          'Não foi possivel cadastrar os dados, tente novamente.',
        );
      }
    }
  }
}
