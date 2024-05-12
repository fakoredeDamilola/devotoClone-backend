import { Injectable } from '@nestjs/common';
import { SignupDto } from './dto/signupDto';

@Injectable()
export class UserService {
  signup(signupDto: SignupDto) {
    console.log({ signupDto });
  }

  createNewUser() {
    console.log('creating a new user');
  }
}
