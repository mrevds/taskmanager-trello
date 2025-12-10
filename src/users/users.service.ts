import { ConflictException, Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly usersrepo: UsersRepository) {}

  async register(dto: CreateUserDto) {
    const exists = await this.usersrepo.findByName(dto.username);
    if (exists) {
      throw new ConflictException('Username already exists');
    }
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    return this.usersrepo.create({
      username: dto.username,
      password: hashedPassword,
    });
  }
}
