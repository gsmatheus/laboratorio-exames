/**
 * Contem a declaração do nosso repositório para acesso ao banco de dados.
 * Um repositório e a camada de nossa aplicação responsável por realizar a
 * persistência com nosso banco de dados.
 */

import { EntityRepository, Repository } from 'typeorm';
import { Pessoa } from './pessoa.entity';
import { CreatePessoaDto } from './dtos/create-pessoa.dto';

@EntityRepository(Pessoa)
export class PessoaRepository extends Repository<Pessoa> {
  /**
   * Cria uma nova pessoa
   * @param createPessoaDto -> dados a serem inseridos
   */
  async createPessoa(createPessoaDto: CreatePessoaDto): Promise<Pessoa> {
    // Separa os dados em variáveis
    const { nome_completo, cpf, email } = createPessoaDto;

    const pessoa = this.create();

    return;
  }
}
