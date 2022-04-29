import { createParamDecorator } from '@nestjs/common';
import { Pessoa } from './pessoa.entity';

export const GetPessoaDecorator = createParamDecorator((data, req): Pessoa => {
  return req.args[0].user;
});
