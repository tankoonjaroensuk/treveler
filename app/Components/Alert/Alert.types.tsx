import React from 'react';

interface AlertProps {
  type: 'success' | 'error' | 'warning';
  message: string;
  title?: string;
  icon?: React.ReactNode; 
}

const Alert: React.FC<AlertProps> = ({ type, title, message, icon }) => {
  const bgColor =
    type === 'success' ? 'bg-emerald-500' :
    type === 'error' ? 'bg-red-500' :
    'bg-yellow-500';

  const textColor =
    type === 'success' ? 'text-emerald-500 dark:text-emerald-400' :
    type === 'error' ? 'text-red-500 dark:text-red-400' :
    'text-yellow-500 dark:text-yellow-400';

  const defaultTitle = title || type.charAt(0).toUpperCase() + type.slice(1);

  const renderIcon = (): React.ReactNode => {
    if (icon) return <>{icon}</>;

    switch (type) {
      case 'success':
        return (
          <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
          </svg>
        );
      case 'error':
        return (
          <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 3.33331C11.1631 3.33331 3.33337 11.1631 3.33337 20C3.33337 28.837 11.1631 36.6666 20 36.6666C28.837 36.6666 36.6667 28.837 36.6667 20C36.6667 11.1631 28.837 3.33331 20 3.33331ZM26.6667 26.6666L20 20L13.3334 26.6666L12 25.3333L18.6667 18.6666L12 12L13.3334 10.6666L20 17.3333L26.6667 10.6666L28 12L21.3334 18.6666L28 25.3333L26.6667 26.6666Z" />
          </svg>
        );
      case 'warning':
        return (
          <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21 26H19V24H21V26ZM21 22H19V12H21V22Z" />
          </svg>
        );
      default:
        return <></>;
    }
  };

  return (
    <div className="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className={`flex items-center justify-center w-12 ${bgColor}`}>
        {renderIcon()}
      </div>

      <div className="px-4 py-2 -mx-3">
        <div className="mx-3">
          <span className={`font-semibold ${textColor}`}>{defaultTitle}</span>
          <p className="text-sm text-gray-600 dark:text-gray-200">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
