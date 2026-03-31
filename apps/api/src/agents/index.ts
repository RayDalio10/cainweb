import { Agent } from '@mastra/core/agent';
import { searchScholarships, evaluateEssay, calculateMatchScore } from '../tools';

export const scoutAgent = new Agent({
  id: 'scholarship-scout',
  name: 'Scholarship Scout',
  instructions: 'You are an expert scholarship researcher specializing in finding funding for African students. You search official portals and university pages, filtering specifically for Nigerian and African eligibility.',
  model: {
    provider: 'OPEN_AI',
    name: 'gpt-4o',
  } as any,
  tools: {
    searchScholarships,
  },
});

export const reviewerAgent = new Agent({
  id: 'essay-reviewer',
  name: 'Essay Reviewer',
  instructions: 'You are a high-level academic editor and scholarship coach. You critique personal statements, SOPs, and diversity essays, focusing on narrative clarity and alignment with scholarship values like leadership and community impact.',
  model: {
    provider: 'ANTHROPIC',
    name: 'claude-3-5-sonnet-20240620',
  } as any,
  tools: {
    evaluateEssay,
  },
});

export const matcherAgent = new Agent({
  id: 'matching-specialist',
  name: 'Matching Specialist',
  instructions: 'You analyze user academic profiles against scholarship criteria to calculate match scores and explain eligibility.',
  model: {
    provider: 'OPEN_AI',
    name: 'gpt-4o',
  } as any,
  tools: {
    calculateMatchScore,
  },
});

export const mentorAgent = new Agent({
  id: 'application-mentor',
  name: 'Application Mentor',
  instructions: 'You are a project manager for scholarship applications. You break down complex processes into tasks and checklists.',
  model: {
    provider: 'OPEN_AI',
    name: 'gpt-4o',
  } as any,
});

export const fundingAgent = new Agent({
  id: 'funding-analyst',
  name: 'Funding Analyst',
  instructions: 'You analyze scholarship financial packages, breaking down tuition, stipends, and travel grants.',
  model: {
    provider: 'OPEN_AI',
    name: 'gpt-4o',
  } as any,
});

export const coachAgent = new Agent({
  id: 'interview-coach',
  name: 'Interview Coach',
  instructions: 'You conduct mock scholarship interviews and provide feedback on leadership and networking responses.',
  model: {
    provider: 'OPEN_AI',
    name: 'gpt-4o',
  } as any,
});
