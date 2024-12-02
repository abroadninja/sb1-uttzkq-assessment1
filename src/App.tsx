import React from 'react';
import { useAssessmentStore } from './store/assessmentStore';
import { CategorySection } from './components/CategorySection';
import { personalitySection } from './data/personalityQuestions';
import { interestSection } from './data/interestQuestions';
import { valuesSection } from './data/valuesQuestions';
import { careerClusterSection } from './data/careerClusterQuestions';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProgressBar } from './components/ProgressBar';
import { AssessmentHeader } from './components/AssessmentHeader';
import { SectionNavigation } from './components/SectionNavigation';
import { scrollToTop } from './utils/scroll';

function App() {
  const {
    currentSectionIndex,
    currentCategoryIndex,
    nextCategory,
    previousCategory,
    nextSection,
    previousSection,
  } = useAssessmentStore();

  const sections = [
    personalitySection,
    interestSection,
    valuesSection,
    careerClusterSection
  ];
  const currentSection = sections[currentSectionIndex];
  const currentCategory = currentSection.categories[currentCategoryIndex];

  const handleNext = () => {
    if (currentCategoryIndex === currentSection.categories.length - 1) {
      if (currentSectionIndex < sections.length - 1) {
        nextSection();
        scrollToTop();
      }
    } else {
      nextCategory();
      scrollToTop();
    }
  };

  const handlePrevious = () => {
    if (currentCategoryIndex === 0) {
      if (currentSectionIndex > 0) {
        previousSection();
        scrollToTop();
      }
    } else {
      previousCategory();
      scrollToTop();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <AssessmentHeader />

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Section {currentSectionIndex + 1}: {currentSection.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Complete this section to understand your {currentSection.id.replace('-', ' ')} and how they
              align with different career paths.
            </p>
          </div>

          <ProgressBar 
            categories={currentSection.categories}
            currentIndex={currentCategoryIndex}
          />

          {currentCategory && <CategorySection category={currentCategory} />}
          
          <SectionNavigation
            onNext={handleNext}
            onPrevious={handlePrevious}
            isFirstSection={currentSectionIndex === 0}
            isLastSection={currentSectionIndex === sections.length - 1}
            isFirstCategory={currentCategoryIndex === 0}
            isLastCategory={currentCategoryIndex === currentSection.categories.length - 1}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;