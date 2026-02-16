<script lang="ts">
	import { Chat } from '@ai-sdk/svelte';
	import { DefaultChatTransport } from 'ai';
	import { toast } from 'svelte-sonner';
	import Messages from './messages.svelte';
	import MultimodalInput from './multimodal-input.svelte';
	import { untrack } from 'svelte';

	const chatClient = $derived(
		new Chat({
			transport: new DefaultChatTransport({ api: '/api/chat' }),
			messages: untrack(() => []),
			onError: (err: Error) => {
				try {
					const jsonError = JSON.parse(err.message);
					if (
						typeof jsonError === 'object' &&
						jsonError !== null &&
						'message' in jsonError &&
						typeof jsonError.message === 'string'
					) {
						toast.error(jsonError.message);
					} else {
						toast.error(err.message);
					}
				} catch {
					toast.error(err.message);
				}
			}
		})
	);

	let attachments = $state<Array<{ url: string; name: string; contentType: string }>>([]);
</script>

<div class="bg-background flex h-dvh min-w-0 flex-col w-full">
	<header class="border-b p-4">
		<h1 class="text-2xl font-bold">AI Chatbot with Claude</h1>
		<p class="text-sm text-muted-foreground">Ask me anything or try a calculation!</p>
	</header>

	<Messages
		readonly={false}
		loading={chatClient.status === 'streaming' || chatClient.status === 'submitted'}
		messages={chatClient.messages}
	/>

	<form class="bg-background mx-auto flex w-full gap-2 px-4 pb-4 md:max-w-3xl md:pb-6">
		<MultimodalInput 
			{attachments} 
			user={undefined} 
			{chatClient}
			class="flex-1" 
		/>
	</form>
</div>
