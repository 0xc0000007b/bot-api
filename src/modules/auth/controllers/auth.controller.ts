import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../services/auth.service';
import { Connection, Repository } from 'typeorm';
import { Admin } from '../../admin/models/admin.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('auth')
export class AuthController {
  private adminRepo: Repository<Admin>;
  constructor(
    private connection: Connection,
    private authService: AuthService,
  ) {
    this.adminRepo = connection.getRepository(Admin);
  }
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  async getProfile(@Request() req) {
    return req.user;
  }
  @UseGuards(AuthGuard('jwt'))
  @Post('refresh')
  async refresh(@Request() req) {
    const admin = await this.adminRepo.findOneById(req.user.id);
    return this.authService.login(admin);
  }
}
