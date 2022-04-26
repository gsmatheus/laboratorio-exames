import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoaRepository } from './pessoa.repository';
import { PessoaService } from './pessoa.service';
import { PessoaController } from './pessoa.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PessoaRepository])],
  providers: [PessoaService],
  controllers: [PessoaController],
  exports: [PessoaService],
})
export class PessoaModule {}
