import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { SignupDto } from './dto/signupDto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/signup')
  signup(@Body() signupDto: SignupDto) {
    this.userService.signup(signupDto);
  }

  @Post('/create')
  createNewUser() {
    this.userService.createNewUser();
  }
}
