import { Pessoa } from '../../pessoa/pessoa.entity';
import { Categoria } from '../../categoria/categoria.entity';
import { IsNotEmpty } from 'class-validator';

export class CreateExameDto {
  @IsNotEmpty({ message: 'O campo pessoa precisa ser preenchido.' })
  pessoa_id: string;

  @IsNotEmpty({ message: 'O campo categoria precisa ser preenchido.' })
  categoria_id: string;

  @IsNotEmpty({ message: 'O campo url_filename precisa ser preenchido.' })
  url: string;

  // TODO: Criar um DTO para os obj
  pessoa: Pessoa;
  categoria: Categoria;
}
