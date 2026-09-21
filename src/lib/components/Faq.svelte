<script lang="ts">
	import type { Pergunta } from '$lib/content';

	interface Props {
		perguntas: readonly Pergunta[];
	}

	let { perguntas }: Props = $props();
</script>

<section class="border-t-2 border-linha">
	<div class="mx-auto max-w-3xl px-6 py-20">
		<h2 class="font-display text-3xl font-bold sm:text-4xl">Dúvidas</h2>

		<div class="mt-10 border-t-2 border-linha">
			{#each perguntas as item (item.pergunta)}
				<details class="group border-b-2 border-linha py-5">
					<summary
						class="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl font-bold [&::-webkit-details-marker]:hidden"
					>
						{item.pergunta}
						<span
							aria-hidden="true"
							class="text-3xl leading-none text-fita transition-transform group-open:rotate-45"
						>
							+
						</span>
					</summary>
					<p class="mt-3 max-w-xl text-suave">{item.resposta}</p>
				</details>
			{/each}
		</div>
	</div>
</section>
