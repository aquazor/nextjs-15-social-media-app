import { cn } from '@/lib/utils';
import { Button, ButtonProps } from './ui/button';
import { Loader2 } from 'lucide-react';

interface Props extends ButtonProps {
  loading: boolean;
}

export default function LoadingButton({
  loading,
  disabled,
  className,
  ...rest
}: Props) {
  return (
    <Button
      disabled={loading || disabled}
      className={cn('flex items-center gap-2', className)}
      {...rest}
    >
      {loading ? <Loader2 className="animate-spin" size={22} /> : null}
      {rest.children}
    </Button>
  );
}
