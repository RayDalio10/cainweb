import { Workflow, createStep } from '@mastra/core/workflows';
import { z } from 'zod';
import { reviewerAgent, mentorAgent } from '../agents';

const reviewStep = createStep({
  id: 'review-essay',
  inputSchema: z.object({
    essayText: z.string(),
    scholarshipType: z.string(),
    criteria: z.array(z.string()),
  }),
  outputSchema: z.object({
    feedback: z.string(),
  }),
  execute: async ({ context }: any) => {
    const input = context?.machineContext?.input as any;
    const result = await reviewerAgent.generate(`Review this essay for the ${input.scholarshipType} scholarship based on these criteria: ${input.criteria.join(', ')}. Essay: ${input.essayText}`);
    return { feedback: result.text };
  },
});

const mentorStep = createStep({
  id: 'mentor-guidance',
  inputSchema: z.object({
    feedback: z.string(),
    scholarshipType: z.string(),
  }),
  outputSchema: z.object({
    nextSteps: z.string(),
  }),
  execute: async ({ context }: any) => {
    const feedback = context?.machineContext?.steps?.['review-essay']?.output?.feedback;
    const input = context?.machineContext?.input as any;
    const result = await mentorAgent.generate(`Based on this feedback for the ${input.scholarshipType} essay: ${feedback}. Provide a checklist of next steps for the student to improve their application.`);
    return { nextSteps: result.text };
  },
});

export const applicationWorkflow = (new Workflow({
  id: 'application-flow',
  inputSchema: z.object({
    essayText: z.string(),
    scholarshipType: z.string(),
    criteria: z.array(z.string()),
  }),
} as any) as any)
  .then(reviewStep)
  .then(mentorStep)
  .commit();
