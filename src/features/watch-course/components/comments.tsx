
import { CommentItem } from "./comment-item";
import { SectionHeading } from "./heading-comments";
import { LoadMoreButton } from "./LoadMore";
import type { Comment } from "../types/Comments";

interface CommentsSectionProps {
  comments: Comment[];
  totalCount: number;
}

export function CommentsSection({ comments, totalCount }: CommentsSectionProps) {
  return (
    <section className="max-w-[600px] space-y-6">
      <SectionHeading title="Comments" count={totalCount} />
      <ul className="space-y-6">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </ul>
      <LoadMoreButton />
    </section>
  );
}
