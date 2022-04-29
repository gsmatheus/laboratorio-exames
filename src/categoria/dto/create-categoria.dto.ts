import { IsNotEmpty } from 'class-validator';

export class CreateCategoriaDto {
  @IsNotEmpty({ message: 'O campo nome precisa ser preenchido.' })
  nome: string;

  descricao: string;
}
