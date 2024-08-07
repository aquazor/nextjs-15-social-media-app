'use client';

import useFollowerInfo from '@/hooks/useFollowerInfo';
import { FollowerInfo } from '@/lib/types';
import { useToast } from './ui/use-toast';
import { QueryKey, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from './ui/button';
import kyInstance from '@/lib/ky';

interface Props {
  userId: string;
  initialState: FollowerInfo;
}

export default function FollowButton({ userId, initialState }: Props) {
  const { data } = useFollowerInfo(userId, initialState);
  const { toast } = useToast();

  const queryClient = useQueryClient();

  const queryKey: QueryKey = ['follower-info', userId];

  const { mutate } = useMutation({
    mutationFn: () =>
      data.isFollowedByUser
        ? kyInstance.delete(`/api/users/${userId}/followers`)
        : kyInstance.post(`/api/users/${userId}/followers`),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey });

      const currentState = queryClient.getQueryData<FollowerInfo>(queryKey);

      queryClient.setQueryData<FollowerInfo>(queryKey, () => ({
        followers:
          currentState?.followers ||
          0 + (currentState?.isFollowedByUser ? -1 : 1),
        isFollowedByUser: !currentState?.isFollowedByUser,
      }));

      return { currentState };
    },
    onError(error, variables, context) {
      queryClient.setQueryData(queryKey, context?.currentState);
      console.error(error);

      toast({
        variant: 'destructive',
        description: 'Something went wrong. Please try again.',
      });
    },
  });

  return (
    <Button
      onClick={() => mutate()}
      variant={data.isFollowedByUser ? 'secondary' : 'default'}
    >
      {data.isFollowedByUser ? 'Unfollow' : 'Follow'}
    </Button>
  );
}
