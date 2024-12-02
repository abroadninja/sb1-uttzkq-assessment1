import { create } from 'zustand';
import { AssessmentState, Answer } from '../types/assessment';
import { calculateAssessmentResults } from '../utils/scoring';

export const useAssessmentStore = create<AssessmentState>((set, get) => ({
  currentSectionIndex: 0,
  currentCategoryIndex: 0,
  answers: [],
  addAnswer: (answer: Answer) =>
    set((state) => ({
      answers: [
        ...state.answers.filter((a) => a.questionId !== answer.questionId),
        answer,
      ],
    })),
  nextCategory: () =>
    set((state) => ({
      currentCategoryIndex: state.currentCategoryIndex + 1,
    })),
  previousCategory: () =>
    set((state) => ({
      currentCategoryIndex: Math.max(0, state.currentCategoryIndex - 1),
    })),
  nextSection: () =>
    set((state) => ({
      currentSectionIndex: state.currentSectionIndex + 1,
      currentCategoryIndex: 0,
    })),
  previousSection: () =>
    set((state) => ({
      currentSectionIndex: Math.max(0, state.currentSectionIndex - 1),
      currentCategoryIndex: 0,
    })),
  calculateResults: () => calculateAssessmentResults(get().answers),
}));