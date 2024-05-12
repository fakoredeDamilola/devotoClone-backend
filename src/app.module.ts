import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';

@Module({
  imports: [],
  controllers: [UserModule],
})
export class AppModule {}
