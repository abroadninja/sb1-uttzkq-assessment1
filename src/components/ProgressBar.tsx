import React from 'react';
import { Category } from '../types/assessment';

type ProgressBarProps = {
  categories: Category[];
  currentIndex: number;
};

export const ProgressBar: React.FC<ProgressBarProps> = ({ categories, currentIndex }) => {
  const progress = ((currentIndex + 1) / categories.length) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">
          Category {currentIndex + 1} of {categories.length}
        </span>
        <span className="text-sm font-medium text-gray-700">
          {Math.round(progress)}% Complete
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};