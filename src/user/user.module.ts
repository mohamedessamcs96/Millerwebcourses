import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtModule } from '@nestjs/jwt'; // ✅ Import JwtModule
import { JwtAuthGuard } from '../guards/JwtAuth.guard';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'your_secret_key', 
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [UserController],
  providers: [UserService, JwtAuthGuard], 
  exports: [UserService],
})
export class UserModule {}
