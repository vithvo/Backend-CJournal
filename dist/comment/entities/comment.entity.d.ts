import { PostEntity } from './../../post/entities/post.entity';
import { UserEntity } from './../../user/entities/user.entity';
export declare class CommentEntity {
    id: number;
    text: string;
    user: UserEntity;
    post: PostEntity;
    createdAt: Date;
    updatedAt: Date;
}
