import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreatePessoaDto {
  @IsNotEmpty({ message: 'O campo nome precisa ser preenchido.' })
  nome_completo: string;

  @IsNotEmpty({ message: 'O campo cpf precisa ser preenchido.' })
  @Length(11, 11, { message: 'Digite apenas os numeros do seu cpf.' })
  cpf: string;

  @IsNotEmpty({ message: 'O campo data de nascimento precisa ser preenchido.' })
  data_nasc: string;

  @IsNotEmpty({ message: 'O campo email precisa ser preenchido.' })
  @IsEmail(
    {},
    {
      message: 'Informe um endereço de email válido',
    },
  )
  email: string;
}
