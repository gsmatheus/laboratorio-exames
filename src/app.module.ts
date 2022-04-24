import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { PessoaModule } from './pessoa/pessoa.module';
import { CategoriaModule } from './categoria/categoria.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), PessoaModule, CategoriaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
