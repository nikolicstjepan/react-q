type PostData = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

type UserData = {
    id: number;
    name: string;
};

type CommentData = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};

async function fetchPosts(): Promise<PostData[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const posts: PostData[] = await response.json();

    return posts;
}

async function fetchUsers(): Promise<UserData[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const users: UserData[] = await response.json();

    return users;
}

async function fetchUser(id: number): Promise<UserData> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    const user: UserData = await response.json();

    return user;
}

async function fetchPost(id: number): Promise<PostData> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    const post: PostData = await response.json();

    return post;
}

async function fetchComments(postId?: number): Promise<CommentData[]> {
    const base = "https://jsonplaceholder.typicode.com/comments";
    const url = postId ? `${base}?postId=${postId}` : base;
    const response = await fetch(url);

    const comments: CommentData[] = await response.json();

    return comments;
}

export async function getData() {
    const [posts, users, comments] = await Promise.all([
        fetchPosts(),
        fetchUsers(),
        fetchComments(),
    ]);

    return { posts, users, comments };
}

export async function getPost(id: number) {
    const [post, comments] = await Promise.all([fetchPost(id), fetchComments(id)]);

    const user = await fetchUser(post.userId);

    return {
        post,
        user,
        comments,
    };
}
