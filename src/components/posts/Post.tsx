'use client';

import { PostData } from '@/lib/types';
import Link from 'next/link';
import UserAvatar from '../UserAvatar';
import { formatRelativeDate } from '@/lib/utils';
import { useSession } from '@/app/(main)/SessionProvider';
import PostMoreButton from './PostMoreButton';

interface Props {
  post: PostData;
}

export default function Post({ post }: Props) {
  const { user } = useSession();

  return (
    <article className="group/post space-y-3 rounded-2xl bg-card p-5 shadow-sm">
      <div className="flex justify-between gap-3">
        <div className="flex flex-wrap gap-3">
          <Link href={`/users/${post.user?.username}`}>
            <UserAvatar avatarUrl={post.user?.avatarUrl} />
          </Link>

          <div>
            <Link
              href={`/users/${post.user?.username}`}
              className="block font-medium hover:underline"
            >
              {post.user?.displayName}
            </Link>

            <Link
              href={`/posts/${post.id}`}
              className="block text-sm font-medium text-muted-foreground hover:underline"
            >
              {formatRelativeDate(post.createdAt)}
            </Link>
          </div>
        </div>

        {post.userId === user.id && (
          <PostMoreButton
            className="opacity-0 transition-opacity group-hover/post:opacity-100"
            post={post}
          />
        )}
      </div>

      <div className="whitespace-pre-line break-words">{post.content}</div>
    </article>
  );
}
