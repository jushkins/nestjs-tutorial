import {
  Body,
  Controller,
  Get,
  Patch,
  UseGuards,
  Param,
  ParseIntPipe,
  Req,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { Request } from 'express';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { UserService } from './user.service';
import { EditUserDto } from './dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('me')
  @UseGuards(JwtGuard)
  getMe(@GetUser() user: User) {
    return user;
  }

  @Patch()
  @UseGuards(JwtGuard)
  editUser(@Body() dto: EditUserDto, @Req() req: Request) {
    return this.userService.editUser(req.user['id'], dto);
  }
}
