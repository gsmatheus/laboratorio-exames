import {
  BaseEntity,
  Entity,
  Unique,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Exame } from '../exame/exame.entity';

@Entity()
// @Unique(['cpf', 'email'])
export class Pessoa extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 255 })
  nome_completo;

  @Column({ unique: true, nullable: false, type: 'varchar', length: 11 })
  cpf;

  @Column({ nullable: false, type: 'varchar', length: 10 })
  data_nasc;

  @Column({ unique: true, nullable: false, type: 'varchar', length: 200 })
  email: string;

  @Column({ nullable: false, default: true })
  status: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Exame, (exame) => exame.pessoa)
  exames: Exame[];

  /**
   * Verifica se a data de nascimento recebida é igual a do banco
   * @param datanasc
   */
  async checkDataNasc(datanasc: string): Promise<boolean> {
    return datanasc === this.data_nasc;
  }
}
