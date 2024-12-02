import React from 'react';
import { Category } from '../types/assessment';
import { QuestionCard } from './QuestionCard';

type CategorySectionProps = {
  category: Category;
};

export const CategorySection: React.FC<CategorySectionProps> = ({ category }) => {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h2>
      {category.questions.map((question) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </div>
  );
};