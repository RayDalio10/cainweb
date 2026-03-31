import { Mastra } from '@mastra/core';
import { scoutAgent, reviewerAgent, matcherAgent, mentorAgent, fundingAgent, coachAgent } from '../agents';

export const mastra = new Mastra({
  agents: {
    scout: scoutAgent,
    reviewer: reviewerAgent,
    matcher: matcherAgent,
    mentor: mentorAgent,
    funding: fundingAgent,
    coach: coachAgent,
  },
  // Memory, storage, and telemetry would go here
});
