import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoaRepository } from './pessoa.repository';
import { PessoaService } from './pessoa.service';
import { PessoaController } from './pessoa.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtPessoaStrategy } from './jwt-pessoa.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([PessoaRepository]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'super-secret',
      signOptions: {
        expiresIn: 18000,
      },
    }),
  ],
  providers: [PessoaService, JwtPessoaStrategy],
  controllers: [PessoaController],
  exports: [PessoaService],
})
export class PessoaModule {}
