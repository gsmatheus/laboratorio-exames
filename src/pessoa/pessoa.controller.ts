import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { ReturnPessoaDto } from './dto/return-pessoa.dto';
import { CredentialsPessoaDto } from './dto/credentials-pessoa.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetPessoaDecorator } from './get-pessoa.decorator';
import { Pessoa } from './pessoa.entity';

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

  @Post('/signin')
  async signIn(
    @Body(ValidationPipe) credentialsPessoaDto: CredentialsPessoaDto,
  ): Promise<{ token: string }> {
    return await this.pessoaService.signIn(credentialsPessoaDto);
  }

  @Get('/me')
  @UseGuards(AuthGuard(['JwtPessoaStrategy']))
  async getMe(@GetPessoaDecorator() pessoa: Pessoa): Promise<any> {
    const exames = await this.pessoaService.findAllExames(pessoa.id);
    return {
      exames,
      message: 'Exames carregado com sucesso.',
    };
  }
}
