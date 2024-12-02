import React from 'react';
import { BrainCircuit } from 'lucide-react';

export const AssessmentHeader: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <BrainCircuit className="h-16 w-16" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Career Path Assessment</h1>
          <p className="text-xl max-w-3xl mx-auto">
            A comprehensive evaluation to help you understand your strengths, interests, 
            and potential career paths through personality traits, skills, and aptitude analysis.
          </p>
        </div>
      </div>
    </div>
  );
};