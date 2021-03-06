/**
 * Contem a declaração do nosso repositório para acesso ao banco de dados.
 * Um repositório e a camada de nossa aplicação responsável por realizar a
 * persistência com nosso banco de dados.
 */

import { EntityRepository, Repository } from 'typeorm';
import { Pessoa } from './pessoa.entity';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CredentialsPessoaDto } from './dto/credentials-pessoa.dto';

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
        throw new ConflictException(
          'Email ou cpf já cadastrado em nossos sistemas.',
        );
      } else {
        throw new InternalServerErrorException(
          'Não foi possivel cadastrar os dados, tente novamente.',
        );
      }
    }
  }

  async checkCredentials(
    credentialsPessoaDto: CredentialsPessoaDto,
  ): Promise<Pessoa> {
    const { cpf, data_nasc } = credentialsPessoaDto;
    const pessoa = await this.findOne({ cpf, status: true });
    if (pessoa && (await pessoa.checkDataNasc(data_nasc))) {
      return pessoa;
    }
    return null;
  }
}
