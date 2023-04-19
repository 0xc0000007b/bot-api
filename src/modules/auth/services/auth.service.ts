import { Injectable } from '@nestjs/common';
import { Admin } from '../../admin/models/admin.entity';
import { JwtService } from '@nestjs/jwt';
import { Connection, Repository } from 'typeorm';

import * as bc from 'bcrypt';
@Injectable()
export class AuthService {
  private adminRepository: Repository<Admin>;
  constructor(private connection: Connection, private jwtService: JwtService) {
    this.adminRepository = this.connection.getRepository(Admin);
  }
  async validateAdmin(login: string, pass: string): Promise<any> {
    const admin = await this.adminRepository.findOne({ where: { login } });
    if (admin && (await bc.compare(pass, admin.passwordHash))) {
      const { passwordHash, ...secureAdmin } = admin;
      return secureAdmin;
    }
    return null;
  }
  async login(admin: Admin) {
    const payload = { id: admin.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
