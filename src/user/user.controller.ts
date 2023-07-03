import { Body, Controller, Post, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  userList(@Body() userEmail: Prisma.UserWhereUniqueInput) {
    return this.userService.findUser(userEmail);
  }

  @Post('/signup')
  signup(@Body() loginInfo: Prisma.UserCreateInput) {
    return this.userService.createUser(loginInfo);
  }
}
