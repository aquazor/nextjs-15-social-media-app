import { PostData } from '@/lib/types';
import { useDeletePostMutation } from './mutations';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import LoadingButton from '../LoadingButton';
import { Button } from '../ui/button';

interface Props {
  post: PostData;
  open: boolean;
  onClose: () => void;
}

export default function DeletePostDialog({ post, open, onClose }: Props) {
  const { isPending, mutate } = useDeletePostMutation();

  function handleOpenChange() {
    if (!open || !isPending) {
      onClose();
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete post?</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this post? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <LoadingButton
            loading={isPending}
            onClick={() => mutate(post.id, { onSuccess: onClose })}
            variant={'destructive'}
          >
            Delete
          </LoadingButton>

          <Button onClick={onClose} disabled={isPending}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
