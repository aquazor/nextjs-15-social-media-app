import { forwardRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Input, InputProps } from './ui/input';
import { EyeIcon, EyeOff } from 'lucide-react';

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="relative">
        <Input
          type={showPassword ? 'text' : 'password'}
          ref={ref}
          {...props}
          className={cn('pe-10', className)}
        />

        <button
          className="transfo absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          type="button"
          onClick={() => setShowPassword((curr) => !curr)}
          title={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? <EyeOff size={22} /> : <EyeIcon size={22} />}
        </button>
      </div>
    );
  },
);

PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
