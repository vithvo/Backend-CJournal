import { UserEntity } from './../user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentEntity } from './entities/comment.entity';
export declare class CommentService {
    private repository;
    constructor(repository: Repository<CommentEntity>);
    create(dto: CreateCommentDto, userId: number): Promise<CommentEntity>;
    findAll(postId: number): Promise<{
        post: {
            id: number;
            title: string;
        };
        id: number;
        text: string;
        user: UserEntity;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): Promise<CommentEntity>;
    update(id: number, dto: UpdateCommentDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
