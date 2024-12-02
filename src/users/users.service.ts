import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'user1', email: 'user1@gmail.com', role: 'ADMIN' },
    { id: 2, name: 'user2', email: 'user2@gmail.com', role: 'USER' },
    { id: 3, name: 'user3', email: 'user3@gmail.com', role: 'USER' },
    { id: 4, name: 'user4', email: 'user4@gmail.com', role: 'ADMIN' },
  ];

  findAll(role?: 'USER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role == role);
    }
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id == id);
    if (!user) return { message: 'User Doesnot exists' };
    return user;
  }

  create(user: { name: string; email: string; role: 'ADMIN' | 'USER' }) {
    const sortedUser = this.users.sort((a, b) => Number(b.id) - Number(a.id));

    const newUser = {
      id: sortedUser[0].id + 1,
      ...user,
    };

    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    updatedUser: {
      name?: string;
      email?: string;
      role?: 'ADMIN' | 'USER';
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return {
          id,
          ...user,
          ...updatedUser,
        };
      } else {
        return user;
      }
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);

    return removedUser;
  }
}
