import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { CustomBaseEntity } from 'src/entities/base.entity';

@Entity('department', { schema: 'mes' })
export class Department extends CustomBaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number = null;

  @PrimaryColumn()
  @Column({ type: 'varchar', unique: true })
  name: string;

  @Column({ type: 'int', nullable: true, comment: '部门负责人' })
  user_id: number;
}
