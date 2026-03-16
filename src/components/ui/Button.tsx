import type { ReactNode, MouseEventHandler } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { tapScale } from '../../lib/motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  href?: string;
  to?: string;
  type?: 'button' | 'submit' | 'reset';
}

const baseStyles = 'inline-flex items-center justify-center font-body font-semibold rounded-sm transition-all duration-300 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-warm-white disabled:opacity-50 disabled:cursor-not-allowed';

const variantStyles = {
  primary: 'bg-gold text-charcoal hover:bg-gold-light shadow-md hover:shadow-lg',
  secondary: 'border-2 border-gold text-gold hover:bg-gold/10',
  ghost: 'text-gold hover:bg-gold/10 hover:text-gold-light',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const LoadingSpinner = () => (
  <span className="flex items-center gap-2">
    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
    Loading...
  </span>
);

export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  isLoading = false,
  disabled = false,
  onClick,
  href,
  to,
  type = 'button',
}: ButtonProps) => {
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (to) {
    return (
      <motion.div whileTap={tapScale} className="inline-block">
        <Link to={to} className={classes} onClick={onClick as MouseEventHandler<HTMLAnchorElement>}>
          {isLoading ? <LoadingSpinner /> : children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a
        whileTap={tapScale}
        href={href}
        className={classes}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {isLoading ? <LoadingSpinner /> : children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileTap={tapScale}
      className={classes}
      onClick={onClick as MouseEventHandler<HTMLButtonElement>}
      disabled={isLoading || disabled}
      type={type}
    >
      {isLoading ? <LoadingSpinner /> : children}
    </motion.button>
  );
};
