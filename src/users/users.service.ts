import { Injectable } from '@nestjs/common';
import { User } from '../infrastucture/user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      email: 'john@mail.ru',
      password: 'changeme',
      firstName: 'John',
      lastName: 'John',
    },
    {
      id: 2,
      email: 'maria@mail.ru',
      password: 'guest',
      firstName: 'Maria',
      lastName: 'Maria',
    },
  ];

  async create(data: User): Promise<boolean> {
    const existingUser = this.users.find((user) => user.email === data.email);

    if (existingUser) return false;

    this.users.push(existingUser);

    return true;
  }

  async findById(id: number): Promise<User | undefined> {
    return this.users.find((user) => user.id === id);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }

  async getUsers(): Promise<User[]> {
    return this.users;
  }
}
