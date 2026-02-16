<script lang="ts">
	import '$lib/../app.css';

	let { children } = $props();
</script>

<div class="flex h-screen w-full">
	{@render children()}
</div>
