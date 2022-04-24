import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { CreatePessoaDto } from './dtos/create-pessoa.dto';
import { ReturnPessoaDto } from './dtos/return-pessoa.dto';

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
}
