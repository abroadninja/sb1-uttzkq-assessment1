import { Section } from '../types/assessment';

const options = [
  { value: 1, label: 'Strongly Disagree' },
  { value: 2, label: 'Disagree' },
  { value: 3, label: 'Neutral' },
  { value: 4, label: 'Agree' },
  { value: 5, label: 'Strongly Agree' },
];

export const careerClusterSection: Section = {
  id: 'career-cluster',
  title: 'Career Cluster Assessment',
  categories: [
    {
      id: 'technical-skills',
      title: 'Technical Skills',
      questions: [
        {
          id: 'technical-1',
          text: 'I can use computer applications like MS Word and Excel effectively.',
          options,
        },
        {
          id: 'technical-2',
          text: 'I am comfortable with basic programming or coding tasks.',
          options,
        },
      ],
    },
    {
      id: 'analytical-skills',
      title: 'Analytical Skills',
      questions: [
        {
          id: 'analytical-1',
          text: 'I enjoy solving math problems and logical puzzles.',
          options,
        },
        {
          id: 'analytical-2',
          text: 'I can analyze data and draw conclusions from it.',
          options,
        },
      ],
    },
    {
      id: 'creative-skills',
      title: 'Creative Skills',
      questions: [
        {
          id: 'creative-1',
          text: 'I enjoy creating new things, whether it\'s art, music, writing, or any art form.',
          options,
        },
        {
          id: 'creative-2',
          text: 'I can come up with innovative solutions to problems.',
          options,
        },
      ],
    },
    {
      id: 'interpersonal-skills',
      title: 'Interpersonal Skills',
      questions: [
        {
          id: 'interpersonal-1',
          text: 'I can communicate my thoughts/ideas effectively to others.',
          options,
        },
        {
          id: 'interpersonal-2',
          text: 'I am good at resolving conflicts and bringing people together.',
          options,
        },
      ],
    },
  ],
};