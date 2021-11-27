import { JwtStrategy } from './strategy/jwt.strategy';
import { JWTConfig } from './../../configs/jwt.config';
import { LocalStrategy } from './strategy/local.strategy';
import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MongooseModule, ModelDefinition } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

const UserDBModel: ModelDefinition = {
  name: User.name, 
  schema: UserSchema
};

@Module({
  imports: [
    MongooseModule.forFeature([
      UserDBModel
    ]),
    JwtModule.register(JWTConfig),
    PassportModule
  ],
  controllers: [
    AuthController
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy
  ],
  exports: [
    AuthService
  ]
})
export class AuthModule {}
