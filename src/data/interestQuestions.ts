import { Section } from '../types/assessment';

const options = [
  { value: 1, label: 'Strongly Disagree' },
  { value: 2, label: 'Disagree' },
  { value: 3, label: 'Neutral' },
  { value: 4, label: 'Agree' },
  { value: 5, label: 'Strongly Agree' },
];

export const interestSection: Section = {
  id: 'interests',
  title: 'Interest Inventory',
  categories: [
    {
      id: 'realistic',
      title: 'Realistic (R)',
      questions: [
        {
          id: 'realistic-1',
          text: 'I enjoy working on science/non-science projects or experiments.',
          options,
        },
        {
          id: 'realistic-2',
          text: 'I enjoy working on DIY projects like making models or fixing things at home.',
          options,
        },
      ],
    },
    {
      id: 'investigative',
      title: 'Investigative (I)',
      questions: [
        {
          id: 'investigative-1',
          text: 'I enjoy solving puzzles and brainteasers.',
          options,
        },
        {
          id: 'investigative-2',
          text: 'I like doing research on topics that interest me.',
          options,
        },
      ],
    },
    {
      id: 'artistic',
      title: 'Artistic (A)',
      questions: [
        {
          id: 'artistic-1',
          text: 'I enjoy drawing, painting, designing, or any other forms of art.',
          options,
        },
        {
          id: 'artistic-2',
          text: 'I like writing stories, poems, or essays.',
          options,
        },
      ],
    },
    {
      id: 'social',
      title: 'Social (S)',
      questions: [
        {
          id: 'social-1',
          text: 'I enjoy helping my friends with their problems.',
          options,
        },
        {
          id: 'social-2',
          text: 'I like participating in community service activities.',
          options,
        },
      ],
    },
    {
      id: 'enterprising',
      title: 'Enterprising (E)',
      questions: [
        {
          id: 'enterprising-1',
          text: 'I enjoy leading group projects in school.',
          options,
        },
        {
          id: 'enterprising-2',
          text: 'I like organising events and activities.',
          options,
        },
      ],
    },
    {
      id: 'conventional',
      title: 'Conventional (C)',
      questions: [
        {
          id: 'conventional-1',
          text: 'I enjoy working with numbers and data.',
          options,
        },
        {
          id: 'conventional-2',
          text: 'I like following a set schedule and routine.',
          options,
        },
      ],
    },
  ],
};