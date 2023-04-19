import { MigrationInterface, QueryRunner, Repository } from 'typeorm';
import { Admin } from '../../models/admin.entity';
import * as bc from 'bcrypt';
export class CreateFirstAdmin1681655884297 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const adminRepo: Repository<Admin> =
      queryRunner.connection.getRepository(Admin);
    if (await adminRepo.findOne({ where: { login: 'admin' } })) {
      return;
    }
    const admin: Admin = adminRepo.create({
      login: 'admin',
      passwordHash: await bc.hash('strong', 22),
      nickName: 'admin',
    });
    await adminRepo.insert(admin);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const adminRepo: Repository<Admin> =
      queryRunner.connection.getRepository(Admin);
    const admin: Admin = await adminRepo.findOne({ where: { login: 'admin' } });
    if (await adminRepo.findOne({ where: { login: 'admin' } })) {
      return;
    }
    await adminRepo.remove(admin);
  }
}
