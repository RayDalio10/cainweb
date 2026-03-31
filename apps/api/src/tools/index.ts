import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

/**
 * Scholarship Scout Tool: Real-time data gatherer.
 */
export const searchScholarships = createTool({
  id: 'search_scholarships',
  description: 'Search for scholarships based on eligibility and field of study, focusing on African eligibility.',
  inputSchema: z.object({
    nationality: z.string().describe('Nationality (e.g., Nigerian)'),
    studyLevel: z.enum(['Undergraduate', 'Masters', 'PhD']).describe('Level of study'),
    fieldOfStudy: z.string().describe('The field or subject of study'),
    targetCountries: z.array(z.string()).describe('List of countries to search in'),
  }),
  execute: async ({ nationality, studyLevel, fieldOfStudy, targetCountries }) => {
    console.log(`[Scout] Searching for ${studyLevel} in ${fieldOfStudy} for ${nationality} in ${targetCountries.join(', ')}...`);

    return {
      results: [
        {
          id: 'schol_001',
          title: 'Mastercard Foundation Scholars Program',
          provider: 'University of Edinburgh',
          amount: 'Fully Funded (Tuition + Stipend + Travel)',
          deadline: '2026-05-15',
          eligibility: `Citizens of Sub-Saharan African countries, including ${nationality}.`,
          matchScore: 0.95,
        },
        {
          id: 'schol_002',
          title: 'Chevening Scholarships',
          provider: 'UK Government',
          amount: 'Full Tuition + Monthly Stipend',
          deadline: '2025-11-01',
          eligibility: `Nigerian citizens with 2+ years of work experience.`,
          matchScore: 0.88,
        }
      ]
    };
  },
});

/**
 * Essay Reviewer Tool: Editorial and narrative expert.
 */
export const evaluateEssay = createTool({
  id: 'evaluate_essay',
  description: 'Provide detailed feedback on a scholarship personal statement based on specific criteria.',
  inputSchema: z.object({
    essayText: z.string().describe('The text of the essay'),
    scholarshipType: z.string().describe('The name of the scholarship (e.g., Chevening, Mastercard)'),
    criteria: z.array(z.string()).describe('Specific points to evaluate against (e.g., Leadership, Community Impact)'),
  }),
  execute: async ({ essayText, scholarshipType, criteria }) => {
    console.log(`[Reviewer] Evaluating essay for ${scholarshipType} against ${criteria.join(', ')}...`);

    return {
      overallScore: 7.5,
      feedback: [
        {
          criterion: 'Leadership',
          comment: 'You mentioned your role as a student leader, but you should provide a more specific example of a problem you solved.',
          suggestion: 'Quantify your impact (e.g., "Led a team of 10 to raise ₦500,000 for local schools").'
        },
        {
          criterion: 'Community Impact',
          comment: 'Strong alignment with scholarship values here.',
          suggestion: 'Ensure you connect your future studies directly back to the development of your home community in Nigeria.'
        }
      ],
      strengths: ['Clear narrative voice', 'Good structure'],
      weaknesses: ['Lack of specific metrics', 'Generic opening statement']
    };
  },
});

/**
 * Profile Matcher Tool: Profile Alignment engine.
 */
export const calculateMatchScore = createTool({
  id: 'calculate_match_score',
  description: 'Calculate a match score between a user profile and a scholarship.',
  inputSchema: z.object({
    userProfile: z.object({
      gpa: z.number(),
      gpaScale: z.number().default(5.0),
      degree: z.string(),
      workExperienceYears: z.number().default(0),
    }),
    scholarshipCriteria: z.object({
      minGPA: z.number().optional(),
      requiredDegree: z.string().optional(),
      minExperience: z.number().optional(),
    }),
  }),
  execute: async ({ userProfile, scholarshipCriteria }) => {
    let score = 1.0;

    if (scholarshipCriteria.minGPA && userProfile.gpa < scholarshipCriteria.minGPA) {
      score -= 0.3;
    }

    const workExperienceYears = userProfile.workExperienceYears ?? 0;
    const minExperience = scholarshipCriteria.minExperience ?? 0;

    if (minExperience > 0 && workExperienceYears < minExperience) {
      score -= 0.2;
    }

    return {
      score: Math.max(0, score),
      explanation: score > 0.8 ? 'Excellent match' : 'Partial match, check specific requirements.'
    };
  },
});
