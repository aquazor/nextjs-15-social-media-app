import { useInView } from 'react-intersection-observer';

interface Props extends React.PropsWithChildren {
  onBottomReached: () => void;
  className?: string;
}

export default function InfiniteScrollContainer({
  onBottomReached,
  className,
  children,
}: Props) {
  const { ref } = useInView({
    rootMargin: '200px',
    onChange(inView) {
      if (inView) {
        onBottomReached();
      }
    },
  });

  return (
    <div className={className}>
      {children}
      <div ref={ref}></div>
    </div>
  );
}
