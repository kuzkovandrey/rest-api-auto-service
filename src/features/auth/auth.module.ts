import { LocalStrategy } from './local.strategy';
import { UsersModule } from './../users/users.module';
import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    // MongooseModule.forFeature([
    //   {name: User.name, schema: UserSchema}
    // ]),
    UsersModule,
    PassportModule
  ],
  controllers: [
    AuthController
  ],
  providers: [
    AuthService,
    LocalStrategy
  ],
})
export class AuthModule {}
