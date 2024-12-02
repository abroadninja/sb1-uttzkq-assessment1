import { Section } from '../types/assessment';

const options = [
  { value: 1, label: 'Strongly Disagree' },
  { value: 2, label: 'Disagree' },
  { value: 3, label: 'Neutral' },
  { value: 4, label: 'Agree' },
  { value: 5, label: 'Strongly Agree' },
];

export const valuesSection: Section = {
  id: 'values',
  title: 'Values Assessment',
  categories: [
    {
      id: 'achievement',
      title: 'Achievement',
      questions: [
        {
          id: 'achievement-1',
          text: 'I want to be very good in my studies and extracurricular activities.',
          options,
        },
        {
          id: 'achievement-2',
          text: 'It is important for me to accomplish my goals and set new ones.',
          options,
        },
      ],
    },
    {
      id: 'independence',
      title: 'Independence',
      questions: [
        {
          id: 'independence-1',
          text: 'I prefer to work on my own projects rather than in a group.',
          options,
        },
        {
          id: 'independence-2',
          text: 'I like making my own decisions about my future.',
          options,
        },
      ],
    },
    {
      id: 'recognition',
      title: 'Recognition',
      questions: [
        {
          id: 'recognition-1',
          text: 'Being recognized for my achievements is important to me.',
          options,
        },
        {
          id: 'recognition-2',
          text: 'I like receiving awards and praise for my work.',
          options,
        },
      ],
    },
    {
      id: 'relationships',
      title: 'Relationships',
      questions: [
        {
          id: 'relationships-1',
          text: 'Having good relationships with my friends and teachers is important to me.',
          options,
        },
        {
          id: 'relationships-2',
          text: 'I enjoy working and studying with others.',
          options,
        },
      ],
    },
    {
      id: 'support',
      title: 'Support',
      questions: [
        {
          id: 'support-1',
          text: 'I value the support and guidance from my teachers and parents.',
          options,
        },
        {
          id: 'support-2',
          text: 'Having supportive friends is important to me.',
          options,
        },
      ],
    },
  ],
};