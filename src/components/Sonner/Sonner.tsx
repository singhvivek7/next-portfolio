'use client';

import { cn } from '@/utils/utils';
import { useTheme } from 'next-themes';
import { Toaster as Sonner, toast as toastFn } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: 'group toast group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-[#f5f5f5e0]',
          actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-white',
          cancelButton:
            'group-[.toast]:bg-muted group-[.toast]:text-[#f5f5f5e0]',
        },
      }}
      {...props}
    />
  );
};

const toast = ({
  message,
  type,
  description,
}: {
  message: string;
  description?: string;
  type: 'success' | 'error' | 'info' | 'warning';
}) => {
  toastFn[type](message, {
    classNames: {
      toast: cn({
        'bg-green-500 text-white': type === 'success',
        'bg-yellow-500 text-white': type === 'warning',
        'bg-red-500 text-white': type === 'error',
        'bg-primary text-white': type === 'info',
      }),
    },
    description,
  });
};

export { Toaster, toast };
