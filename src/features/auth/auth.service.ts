import { UserModel } from './models/user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.findUser(username);
    const isMatchPasswords = await bcrypt.compare(pass, user.password);
    if (user && isMatchPasswords) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: UserModel) {
    const payload = { 
      username: user.username, 
      sub: user._id 
    };
    return {
      accessToken: this.jwtService.sign(payload),
      expires: 600
    };
  }

  private async findUser(username: string): Promise<UserModel> {
    return this.userModel.findOne({username});
  }
}