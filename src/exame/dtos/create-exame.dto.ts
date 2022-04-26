import { Pessoa } from '../../pessoa/pessoa.entity';
import { Categoria } from '../../categoria/categoria.entity';

export class CreateExameDto {
  pessoa: Pessoa;
  pessoa_id: string;
  categoria: Categoria;
  url: string;
}
