import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ReplyButton } from "./replay-button";
import { ReplyForm } from "./replay-form";
import type { Comment } from "../types/Comments";


interface CommentItemProps {
    comment: Comment;
    isReply?: boolean;
}

// Thread connector: vertical line under the parent avatar + a short horizontal tick per child.
const threadClass = "ml-4 space-y-5 border-l border-slate-200 pl-6";
const tickClass = "relative before:absolute before:-left-6 before:top-4 before:w-5 before:border-t before:border-slate-200";

export function CommentItem({ comment, isReply = false }: CommentItemProps) {
    const { authorName, authorAvatarUrl, postedAt, content, isAdmin, isReplying, replies } = comment;

    return (
        <li className="space-y-4">
            <article className={cn("flex gap-3", isReply && tickClass)}>
                <Avatar className="size-8 shrink-0">
                    <AvatarImage src={authorAvatarUrl} alt={authorName} className="object-cover" />
                    <AvatarFallback>{authorName[0]}</AvatarFallback>
                </Avatar>

                <div className="min-w-0 space-y-2">
                    <header className="flex items-center gap-2 text-xs">
                        <h4 className="font-medium text-slate-900">{authorName}</h4>
                        {isAdmin && (
                            <Badge className="rounded-sm bg-violet-600 px-1.5 py-0 text-[9px] font-medium uppercase text-white">
                                Admin
                            </Badge>
                        )}
                        <span aria-hidden className="size-1 rounded-full bg-slate-400" />
                        <time className="text-[11px] text-slate-400">{postedAt}</time>
                    </header>
                    <p className="whitespace-pre-line text-xs leading-relaxed text-slate-600">{content}</p>
                    <ReplyButton active={isReplying} />
                </div>
            </article>

            {replies && replies.length > 0 && (
                <ul className={threadClass}>
                    {replies.map((reply) => (
                        <CommentItem key={reply.id} comment={reply} isReply />
                    ))}
                </ul>
            )}

            {isReplying && (
                <div className="ml-4 border-l border-slate-200 pl-6">
                    <ReplyForm />
                </div>
            )}
        </li>
    );
}
