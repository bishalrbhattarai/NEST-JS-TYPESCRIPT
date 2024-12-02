import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  /*
    GET /users
    POST /users
    GET /users/:id
    PATCH /users/:id
    DELETE /users/:id
    */

  constructor(private readonly userService: UsersService) {}

  @Get()
  findAll(@Query('role') role: string) {
    return [
      {
        role,
      },
    ];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(Number(id));
  }

  @Post()
  create(@Body() user: any) {
    return user;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() user: {}) {
    return {
      id,
      ...user,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return {
      id,
      message: `Deleted Id ${id}`,
    };
  }
}
