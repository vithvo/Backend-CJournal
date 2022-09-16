import { SearchUserDto } from './dto/search-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { LoginUserDto } from './dto/login-user.dto';
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: Repository<UserEntity>);
    create(dto: CreateUserDto): Promise<CreateUserDto & UserEntity>;
    findAll(): Promise<UserEntity[]>;
    findById(id: number): Promise<UserEntity>;
    findByCond(cond: LoginUserDto): Promise<UserEntity>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    search(dto: SearchUserDto): Promise<{
        items: UserEntity[];
        total: number;
    }>;
}
