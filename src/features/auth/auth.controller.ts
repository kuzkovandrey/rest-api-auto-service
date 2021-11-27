import { UserDto } from './dto/user.dto';
import { AuthService } from './auth.service';
import { 
  Controller, 
  Request, 
  Post, 
  UseGuards 
} from '@nestjs/common';
import { EndPoint } from '@enums/end-point.enum';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller(EndPoint.AUTH)
export class AuthController {

  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post(EndPoint.LOGIN)
  async login(@Request() req) {
    return req.user;
  }

}
