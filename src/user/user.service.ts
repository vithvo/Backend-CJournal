import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  create(dto: CreateUserDto) {
    return this.usersRepository.save(dto);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findById(id: number) {
    return this.usersRepository.findOneBy({ id });
  }
  findByCond(cond: LoginUserDto) {
    return this.usersRepository.findOneBy(cond);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
