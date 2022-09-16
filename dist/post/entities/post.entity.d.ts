import { UserEntity } from './../../user/entities/user.entity';
import { OutputBlockData } from './../dto/create-post.dto';
export declare class PostEntity {
    id: number;
    title: string;
    body: OutputBlockData[];
    description: string;
    user: UserEntity;
    views: number;
    tags?: string;
    createdAt: Date;
    updatedAt: Date;
}
