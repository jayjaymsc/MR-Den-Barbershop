import React from 'react';
import './components.css';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function InputField({ label, error, className = '', id, ...props }: InputFieldProps) {
  const inputId = id || `input-${label.replace(/\s+/g, '-').toLowerCase()}`;
  return (
    <div className={`input-container ${className}`}>
      <label htmlFor={inputId} className="input-label label-sm">{label}</label>
      <input id={inputId} className={`apothecary-input ${error ? 'input-error' : ''}`} {...props} />
      {error && <span className="error-message label-sm">{error}</span>}
    </div>
  );
}
