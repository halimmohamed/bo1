import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  icon?: React.ReactNode;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  children,
  defaultOpen = false,
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-amber-400/10 last:border-b-0 backdrop-blur-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-800/30 transition-all duration-300 group"
      >
        <div className="flex items-center gap-3">
          {icon && <span className="text-amber-400 group-hover:text-amber-300 transition-colors">{icon}</span>}
          <span className="text-xl font-semibold text-amber-400 group-hover:text-amber-300 transition-colors">{title}</span>
        </div>
        {isOpen ? (
          <ChevronDown className="w-6 h-6 text-amber-400 group-hover:text-amber-300 transition-all duration-300 transform group-hover:scale-110" />
        ) : (
          <ChevronRight className="w-6 h-6 text-amber-400 group-hover:text-amber-300 transition-all duration-300 transform group-hover:scale-110" />
        )}
      </button>
      
      {isOpen && (
        <div className="p-6 pt-0 animate-in slide-in-from-top-2 duration-300 bg-gradient-to-b from-gray-800/20 to-transparent">
          {children}
        </div>
      )}
    </div>
  );
};