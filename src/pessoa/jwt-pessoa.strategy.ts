import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { PessoaRepository } from './pessoa.repository';
import * as passport from 'passport';

@Injectable()
export class JwtPessoaStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(PessoaRepository)
    private pessoaRepository: PessoaRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'super-secret',
    });
    passport.use('JwtPessoaStrategy', this);
  }

  async validate(payload: { id: number }) {
    const { id } = payload;
    const pessoa = await this.pessoaRepository.findOne(id, {
      select: ['id', 'nome_completo', 'cpf', 'email', 'data_nasc'],
    });
    if (!pessoa) throw new UnauthorizedException('Pessoa não encontrada.');
    return pessoa;
  }
}
