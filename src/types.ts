export interface Comment {
  id: number;
  content: string;
  replies?: Comment[];
}

export interface Post {
  id: number;
  title: string;
  content: string;
  comments: Comment[];
}

export interface Reply {
  id: number;
  content: string;
}
