export interface Comment {
  id: string;
  authorName: string;
  authorAvatarUrl: string;
  postedAt: string;
  content: string;
  isAdmin?: boolean;
  isReplying?: boolean;
  replies?: Comment[];
}