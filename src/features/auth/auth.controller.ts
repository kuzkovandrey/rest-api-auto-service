import { 
  Controller, 
  Request, 
  Post, 
  UseGuards 
} from '@nestjs/common';
import { EndPoint } from './../../enums/end-point.enum';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @UseGuards(AuthGuard('local'))
  @Post(EndPoint.LOGIN)
  async login(@Request() req) {
    return 'Login';
  }

  @Post(EndPoint.REGISTER)
  async register(@Request() req) {
    return 'Register';
  }
}
