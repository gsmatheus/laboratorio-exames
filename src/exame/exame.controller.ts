import {
  Body,
  Controller,
  NotFoundException,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { ExameService } from './exame.service';
import { CreateExameDto } from './dtos/create-exame.dto';
import { ReturnExameDto } from './dtos/return-exame.dto';
import { PessoaService } from '../pessoa/pessoa.service';

@Controller('exame')
export class ExameController {
  constructor(
    private exameService: ExameService,
    private readonly pessoaService: PessoaService,
  ) {}

  @Post()
  async createExame(
    @Body(ValidationPipe) createExameDto: CreateExameDto,
  ): Promise<ReturnExameDto> {
    const pessoa = await this.pessoaService.findPessoaById(
      createExameDto.pessoa_id,
    );

    // Verifica se encontrou a pessoa
    if (!pessoa) throw new NotFoundException('Pessoa não encontrada.');
    createExameDto.pessoa = pessoa;

    const exame = await this.exameService.createExame(createExameDto);

    return {
      exame,
      message: 'Exame cadastrado com sucesso.',
    };
  }
}
