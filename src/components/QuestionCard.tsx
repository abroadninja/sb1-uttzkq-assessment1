import React from 'react';
import { Question } from '../types/assessment';
import { useAssessmentStore } from '../store/assessmentStore';
import clsx from 'clsx';

type QuestionCardProps = {
  question: Question;
};

export const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  const { addAnswer, answers } = useAssessmentStore();
  const currentAnswer = answers.find((a) => a.questionId === question.id)?.value;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">{question.text}</h3>
      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option.value}
            onClick={() => addAnswer({ questionId: question.id, value: option.value })}
            className={clsx(
              'w-full text-left px-4 py-3 rounded-lg transition-colors',
              currentAnswer === option.value
                ? 'bg-blue-100 border-2 border-blue-500'
                : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};