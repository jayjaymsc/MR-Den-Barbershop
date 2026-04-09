import React from 'react';
import './components.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  elevated?: boolean;
}

export default function Card({ children, className = '', elevated = false }: CardProps) {
  const bgClass = elevated ? 'card-highest' : 'card-low';
  return (
    <div className={`heritage-card ${bgClass} ${className}`}>
      {children}
    </div>
  );
}
