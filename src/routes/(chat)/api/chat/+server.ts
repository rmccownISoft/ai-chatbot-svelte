import { chatModel } from '$lib/server/ai/models';
import { streamText, tool, stepCountIs, convertToModelMessages } from 'ai';
import { z } from 'zod';
import { evaluate } from 'mathjs';

export async function POST({ request }) {
	const { messages } = await request.json();

	const result = streamText({
		model: chatModel,
		system: 'You are a helpful AI assistant. When users ask you to perform calculations, use the calculate tool.',
		messages: await convertToModelMessages(messages),
		stopWhen: stepCountIs(3), //https://ai-sdk.dev/cookbook/next/call-tools-multiple-steps?utm_source=chatgpt.com

		tools: {
			calculate: tool({
				description: 'A tool for evaluating mathematical expressions. Use this to perform calculations.',
				inputSchema: z.object({
					expression: z.string().describe('The mathematical expression to evaluate, e.g., "2 + 2" or "sqrt(16)"')
				}),
				execute: async ({ expression }: { expression: string }) => {
					try {
						const result = evaluate(expression);
						return { result, expression };
					} catch (_error) {
						return { error: 'Invalid mathematical expression' };
					}
				}
			})
		}
	});

	return result.toUIMessageStreamResponse();
}
