export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
    userName: string | undefined;
    comments: Comment[];
};

export type Comment = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};
