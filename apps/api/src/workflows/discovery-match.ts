import { Workflow, createStep } from '@mastra/core/workflows';
import { z } from 'zod';
import { scoutAgent, matcherAgent } from '../agents';

const searchStep = createStep({
  id: 'search-scholarships',
  inputSchema: z.object({
    nationality: z.string(),
    studyLevel: z.enum(['Undergraduate', 'Masters', 'PhD']),
    fieldOfStudy: z.string(),
    targetCountries: z.array(z.string()),
  }),
  outputSchema: z.object({
    scholarships: z.string(),
  }),
  execute: async ({ context }: any) => {
    const input = context?.machineContext?.input as any;
    const result = await scoutAgent.generate(`Find fully funded ${input.studyLevel} in ${input.fieldOfStudy} for a ${input.nationality} student in ${input.targetCountries.join(', ')}.`);
    return { scholarships: result.text };
  },
});

const matchStep = createStep({
  id: 'match-scholarships',
  inputSchema: z.object({
    scholarships: z.string(),
    userGPA: z.number(),
    gpaScale: z.number(),
    fieldOfStudy: z.string(),
  }),
  outputSchema: z.object({
    rankedMatches: z.string(),
  }),
  execute: async ({ context }: any) => {
    const scholarships = context?.machineContext?.steps?.['search-scholarships']?.output?.scholarships;
    const input = context?.machineContext?.input as any;

    const matchResult = await matcherAgent.generate(`Based on this academic profile: GPA ${input.userGPA}/${input.gpaScale}, Degree in ${input.fieldOfStudy}. Match and score these scholarships: ${scholarships}`);
    return { rankedMatches: matchResult.text };
  },
});

export const discoveryMatchWorkflow = (new Workflow({
  id: 'discovery-to-match',
  inputSchema: z.object({
    nationality: z.string(),
    studyLevel: z.enum(['Undergraduate', 'Masters', 'PhD']),
    fieldOfStudy: z.string(),
    targetCountries: z.array(z.string()),
    userGPA: z.number(),
    gpaScale: z.number().default(5.0),
  }),
} as any) as any)
  .then(searchStep)
  .then(matchStep)
  .commit();
