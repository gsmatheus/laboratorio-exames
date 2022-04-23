import { TypeOrmModuleOptions } from '@nestjs/typeorm';

/**
 * Cria a conexão com o banco de dados
 * TODO: Muda as configurações de login para o .env
 */
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'projetos',
  password: 'projetos',
  database: 'laboratorio-exames',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
