import { createAnthropic } from '@ai-sdk/anthropic';
import { ANTHROPIC_API_KEY } from '$env/static/private';

// Initialize Anthropic with API key from environment
const anthropic = createAnthropic({
	apiKey: ANTHROPIC_API_KEY
});

// Use Claude 3.5 Sonnet as the main model
// Valid model IDs: claude-3-5-sonnet-20241022, claude-3-opus-20240229, claude-3-haiku-20240307
export const chatModel = anthropic('claude-sonnet-4-5-20250929');
