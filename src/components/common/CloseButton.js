'use client';

import { X } from 'lucide-react';

export default function CloseButton({ onClick, className = '' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`absolute top-8 right-8 text-gray-400 hover:text-gray-600 transition ${className}`}
      aria-label="닫기"
    >
      <X size={30} />
    </button>
  );
}
