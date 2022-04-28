import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { CreatePessoaDto } from './dtos/create-pessoa.dto';
import { ReturnPessoaDto } from './dtos/return-pessoa.dto';
import { Exame } from '../exame/exame.entity';

@Controller('pessoa')
export class PessoaController {
  constructor(private pessoaService: PessoaService) {}

  @Post()
  async createPessoa(
    @Body(ValidationPipe) createPessoaDto: CreatePessoaDto,
  ): Promise<ReturnPessoaDto> {
    const pessoa = await this.pessoaService.createPessoa(createPessoaDto);

    return {
      pessoa,
      message: 'Cadastro feito com sucesso.',
    };
  }

  @Get('/me')
  async getMe(): Promise<any> {
    const exames = await this.pessoaService.findAllExames(
      'c4235582-c583-4900-9793-8ba3b5dd862c',
    );
    return {
      exames,
      message: 'Exames carregado com sucesso.',
    };
  }
}
