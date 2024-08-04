import Image from 'next/image';
import avatarPlaceholder from '@/assets/avatar-placeholder.png';
import { cn } from '@/lib/utils';

interface Props {
  avatarUrl: string | null | undefined;
  size?: number;
  className?: string;
}

export default function UserAvatar({ avatarUrl, size = 48, className }: Props) {
  return (
    <Image
      src={avatarUrl || avatarPlaceholder}
      alt="User avatar"
      width={size}
      height={size}
      className={cn(
        'aspect-square h-fit flex-none rounded-full bg-secondary object-cover',
        className,
      )}
    />
  );
}
