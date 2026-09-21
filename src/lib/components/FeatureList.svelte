<script lang="ts">
	import type { Categoria, Recurso } from '$lib/content';

	interface Props {
		recursos: readonly Recurso[];
	}

	let { recursos }: Props = $props();

	// Cada categoria tem um peso visual próprio na etiqueta.
	const estiloCategoria: Record<Categoria, string> = {
		publicar: 'border-2 border-tinta',
		revisar: 'border-2 border-fita bg-fita text-fundo',
		conversar: 'border-2 border-tinta bg-tinta text-fundo'
	};

	const nomeCategoria: Record<Categoria, string> = {
		publicar: 'Publicar',
		revisar: 'Revisar',
		conversar: 'Conversar'
	};
</script>

<section id="recursos" class="scroll-mt-4 border-y-2 border-linha bg-painel">
	<div class="mx-auto max-w-6xl px-6 py-20">
		<h2 class="font-display text-3xl font-bold sm:text-4xl">O que dá para fazer por aqui</h2>
		<p class="mt-3 max-w-xl text-suave">
			Do projeto de fim de semana ao trecho de código que não sai da sua cabeça.
		</p>

		<ul class="mt-12 divide-y-2 divide-linha border-y-2 border-linha">
			{#each recursos as recurso (recurso.titulo)}
				<li class="grid gap-x-8 gap-y-3 py-6 md:grid-cols-[1.2fr_1.6fr_auto] md:items-baseline">
					<h3 class="font-display text-xl font-bold">{recurso.titulo}</h3>
					<p class="text-suave">{recurso.descricao}</p>
					<p class="w-fit px-3 py-0.5 font-display text-sm font-bold {estiloCategoria[recurso.categoria]}">
						{nomeCategoria[recurso.categoria]}
					</p>
				</li>
			{/each}
		</ul>
	</div>
</section>
