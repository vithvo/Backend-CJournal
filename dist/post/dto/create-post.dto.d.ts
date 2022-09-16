export interface OutputBlockData {
    id: string;
    type: string;
    data: any;
}
export declare class CreatePostDto {
    id: number;
    title: string;
    body: OutputBlockData[];
    tags?: string;
}
