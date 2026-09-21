<script lang="ts">
	import type { Passo } from '$lib/content';

	interface Props {
		passos: readonly Passo[];
	}

	let { passos }: Props = $props();
</script>

<section id="como-comecar" class="scroll-mt-4">
	<div class="mx-auto max-w-6xl px-6 py-20">
		<h2 class="font-display text-3xl font-bold sm:text-4xl">Como começar</h2>

		<ol class="mt-12 grid gap-12 md:grid-cols-3">
			{#each passos as passo, i (passo.titulo)}
				<li>
					<span class="font-display text-5xl font-extrabold text-fita" aria-hidden="true">
						{i + 1}
					</span>
					<h3 class="mt-2 font-display text-xl font-bold">{passo.titulo}</h3>
					<p class="mt-2 text-suave">{passo.texto}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>
