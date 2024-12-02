import { Answer, CategoryScore, SectionResult, AssessmentResult } from '../types/assessment';
import { personalitySection } from '../data/personalityQuestions';
import { interestSection } from '../data/interestQuestions';
import { valuesSection } from '../data/valuesQuestions';
import { careerClusterSection } from '../data/careerClusterQuestions';

const calculateCategoryScore = (categoryId: string, answers: Answer[]): number => {
  const categoryAnswers = answers.filter(answer => answer.questionId.startsWith(categoryId));
  if (categoryAnswers.length === 0) return 0;
  
  const total = categoryAnswers.reduce((sum, answer) => sum + answer.value, 0);
  return total / categoryAnswers.length;
};

const determineLevel = (score: number): 'Low' | 'Moderate' | 'High' => {
  if (score <= 2.5) return 'Low';
  if (score <= 3.5) return 'Moderate';
  return 'High';
};

const calculateSectionResult = (section: any, answers: Answer[]): SectionResult => {
  const categoryScores: CategoryScore[] = section.categories.map(category => ({
    id: category.id,
    title: category.title,
    score: calculateCategoryScore(category.id, answers),
    level: determineLevel(calculateCategoryScore(category.id, answers))
  }));

  return {
    id: section.id,
    title: section.title,
    categoryScores
  };
};

const getCareerRecommendations = (results: SectionResult[]): string[] => {
  const recommendations: string[] = [];
  const personalityScores = results[0].categoryScores;
  const interestScores = results[1].categoryScores;
  const skillScores = results[3].categoryScores;

  // Example career mapping logic
  if (skillScores.find(s => s.id === 'technical-skills')?.level === 'High') {
    if (interestScores.find(s => s.id === 'investigative')?.level === 'High') {
      recommendations.push('Software Development');
      recommendations.push('Data Science');
    }
  }

  if (skillScores.find(s => s.id === 'creative-skills')?.level === 'High') {
    if (interestScores.find(s => s.id === 'artistic')?.level === 'High') {
      recommendations.push('Graphic Design');
      recommendations.push('UI/UX Design');
    }
  }

  if (skillScores.find(s => s.id === 'interpersonal-skills')?.level === 'High') {
    if (personalityScores.find(s => s.id === 'extraversion')?.level === 'High') {
      recommendations.push('Sales and Marketing');
      recommendations.push('Human Resources');
    }
  }

  return recommendations.length > 0 ? recommendations : ['Complete more sections for personalized career recommendations'];
};

export const calculateAssessmentResults = (answers: Answer[]): AssessmentResult => {
  const sections = [personalitySection, interestSection, valuesSection, careerClusterSection];
  const sectionResults = sections.map(section => calculateSectionResult(section, answers));

  return {
    sections: sectionResults,
    careerRecommendations: getCareerRecommendations(sectionResults)
  };
};