import { useState } from 'react';
import { PostData } from '@/lib/types';
import { MoreHorizontal, Trash2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import DeletePostDialog from './DeletePostDialog';

interface Props {
  post: PostData;
  className?: string;
}

export default function PostMoreButton({ post, className }: Props) {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size={'icon'} variant={'ghost'} className={className}>
            <MoreHorizontal className="size-5 text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setDialogOpen(true)}>
            <span className="flex items-center gap-3 text-destructive">
              <Trash2 className="size-4" /> Delete
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DeletePostDialog
        post={post}
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </>
  );
}
