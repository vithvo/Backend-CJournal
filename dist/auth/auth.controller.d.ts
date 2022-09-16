import { CreateUserDto } from './../user/dto/create-user.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
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
