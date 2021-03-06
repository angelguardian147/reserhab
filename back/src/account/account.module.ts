import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Account } from 'src/entities/account.entity';
import { RoleModule } from 'src/role/role.module';
import { UserModule } from 'src/user/user.module';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';

@Module({
  imports: [AuthModule, UserModule, RoleModule, TypeOrmModule.forFeature([Account])],
  controllers: [AccountController],
  providers: [AccountService],
  exports: [AccountService]
})
export class AccountModule {}
