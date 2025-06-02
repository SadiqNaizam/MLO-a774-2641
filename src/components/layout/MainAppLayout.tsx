import React from 'react';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  title?: string; // Optional: Can be used to set the document title
  className?: string; // Optional: Allows additional classes for the main layout container
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, title, className }) => {
  React.useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  return (
    <main
      className={cn(
        'flex items-center justify-center min-h-screen bg-background',
        className
      )}
    >
      <div className="max-w-sm w-full px-4">
        {children}
      </div>
    </main>
  );
};

export default MainAppLayout;
