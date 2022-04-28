import {
  Body,
  Controller,
  NotFoundException,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { ExameService } from './exame.service';
import { CreateExameDto } from './dtos/create-exame.dto';
import { ReturnExameDto } from './dtos/return-exame.dto';
import { PessoaService } from '../pessoa/pessoa.service';
import { CategoriaService } from '../categoria/categoria.service';
import { Role } from '../auth/role.decorator';
import { UserRole } from '../users/user-roles.enum';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';

@Controller('exame')
export class ExameController {
  constructor(
    private exameService: ExameService,
    private readonly pessoaService: PessoaService,
    private readonly categoriaService: CategoriaService,
  ) {}

  @Post()
  @Role(UserRole.ADMIN)
  @UseGuards(AuthGuard(), RolesGuard)
  async createExame(
    @Body(ValidationPipe) createExameDto: CreateExameDto,
  ): Promise<ReturnExameDto> {
    /**
     * Valida se existe a pessoa
     */
    const pessoa = await this.pessoaService.findPessoaById(
      createExameDto.pessoa_id,
    );

    if (!pessoa) throw new NotFoundException('Pessoa não encontrada.');
    createExameDto.pessoa = pessoa;

    /**
     * Valida se existe a categoria
     */
    const categoria = await this.categoriaService.findCategoriaById(
      createExameDto.categoria_id,
    );

    if (!categoria)
      throw new NotFoundException('Não encontramos essa categoria.');
    createExameDto.categoria = categoria;

    // console.log(this.pessoa);
    // Cria o novo exame
    const exame = await this.exameService.createExame(createExameDto);

    const a = await this.pessoaService.findAllExames(createExameDto.pessoa_id);
    console.log(a);
    return {
      exame,
      message: 'Exame cadastrado com sucesso.',
    };
  }
}
