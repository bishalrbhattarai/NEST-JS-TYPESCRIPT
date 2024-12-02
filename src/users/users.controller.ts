import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  /*

    GET /users
    POST /users
    GET /users/:id
      PATCH /users/:id
        DELETE /users/:id
    */

  @Get()
  findAll() {
    return [];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }
}
