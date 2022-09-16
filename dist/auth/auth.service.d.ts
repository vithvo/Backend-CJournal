import { CreateUserDto } from './../user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/user/entities/user.entity';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    genrateJwtToken(data: {
        id: number;
        email: string;
    }): string;
    login(user: UserEntity): Promise<{
        token: string;
        id: number;
        fullName: string;
        email: string;
        comments: import("../comment/entities/comment.entity").CommentEntity[];
        createdAt: Date;
        updatedAt: Date;
    }>;
    registr(dto: CreateUserDto): Promise<{
        token: string;
        fullName: string;
        email: string;
        id: number;
        comments: import("../comment/entities/comment.entity").CommentEntity[];
        createdAt: Date;
        updatedAt: Date;
    }>;
}
