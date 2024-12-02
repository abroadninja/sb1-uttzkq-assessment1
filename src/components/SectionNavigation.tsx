import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type SectionNavigationProps = {
  onNext: () => void;
  onPrevious: () => void;
  isFirstSection: boolean;
  isLastSection: boolean;
  isFirstCategory: boolean;
  isLastCategory: boolean;
};

export const SectionNavigation: React.FC<SectionNavigationProps> = ({
  onNext,
  onPrevious,
  isFirstSection,
  isLastSection,
  isFirstCategory,
  isLastCategory,
}) => {
  return (
    <div className="max-w-2xl mx-auto flex justify-between pb-8">
      <button
        onClick={onPrevious}
        disabled={isFirstSection && isFirstCategory}
        className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Previous
      </button>
      
      <button
        onClick={onNext}
        disabled={isLastSection && isLastCategory}
        className="flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
        <ArrowRight className="h-4 w-4 ml-2" />
      </button>
    </div>
  );
};