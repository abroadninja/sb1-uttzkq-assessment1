import { Section } from '../types/assessment';

const options = [
  { value: 1, label: 'Strongly Disagree' },
  { value: 2, label: 'Disagree' },
  { value: 3, label: 'Neutral' },
  { value: 4, label: 'Agree' },
  { value: 5, label: 'Strongly Agree' },
];

export const personalitySection: Section = {
  id: 'personality',
  title: 'Personality Assessment',
  categories: [
    {
      id: 'openness',
      title: 'Openness to Experience',
      questions: [
        {
          id: 'openness-1',
          text: 'I enjoy exploring new ideas or subjects.',
          options,
        },
        {
          id: 'openness-2',
          text: 'I like learning about new cultures or traditions.',
          options,
        },
      ],
    },
    {
      id: 'conscientiousness',
      title: 'Conscientiousness',
      questions: [
        {
          id: 'conscientiousness-1',
          text: 'I make sure to complete my homework/assignments on time.',
          options,
        },
        {
          id: 'conscientiousness-2',
          text: 'I am well-organized and keep my study materials/books in order.',
          options,
        },
      ],
    },
    {
      id: 'extraversion',
      title: 'Extraversion',
      questions: [
        {
          id: 'extraversion-1',
          text: 'I enjoy participating in group discussions in class.',
          options,
        },
        {
          id: 'extraversion-2',
          text: 'I like being the centre of attention at social gatherings.',
          options,
        },
      ],
    },
    {
      id: 'agreeableness',
      title: 'Agreeableness',
      questions: [
        {
          id: 'agreeableness-1',
          text: 'I often help my classmates with their studies.',
          options,
        },
        {
          id: 'agreeableness-2',
          text: 'I get along well with most of my classmates and teachers.',
          options,
        },
      ],
    },
    {
      id: 'neuroticism',
      title: 'Neuroticism',
      questions: [
        {
          id: 'neuroticism-1',
          text: 'I often feel anxious before exams.',
          options,
        },
        {
          id: 'neuroticism-2',
          text: 'I get upset easily when things don\'t go as planned or as expected.',
          options,
        },
      ],
    },
  ],
};