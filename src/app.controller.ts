import { EndPoint } from '@enums/end-point.enum';
import { LocalAuthGuard } from './features/auth/guards/local-auth.guard';
import { AuthService } from './features/auth/auth.service';
import { Controller, Post, Request, UseGuards } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post(`${EndPoint.AUTH}/${EndPoint.LOGIN}`)
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

}
