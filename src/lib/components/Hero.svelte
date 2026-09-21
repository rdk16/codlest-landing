<script lang="ts">
	import { site, type Post } from '$lib/content';

	interface Props {
		posts: readonly Post[];
	}

	let { posts }: Props = $props();

	const inclinacoes = ['-2.5deg', '1.5deg', '-1deg'] as const;
	const recuos = ['md:ml-0', 'md:ml-10', 'md:ml-4'] as const;
</script>

<section
	class="mx-auto grid max-w-6xl gap-16 px-6 pt-16 pb-24 md:grid-cols-[1.1fr_1fr] md:items-center md:pt-24"
>
	<div>
		<h1
			class="font-display text-5xl leading-[1.02] font-extrabold tracking-tight text-balance sm:text-6xl lg:text-7xl"
		>
			{site.headline}
		</h1>
		<p class="mt-6 max-w-[34rem] text-xl text-suave">{site.subtitulo}</p>
		<div class="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
			<a class="btn-primary" href={site.ctaPrimario.href}>{site.ctaPrimario.texto}</a>
			<a
				class="font-display font-bold text-fita underline decoration-2 underline-offset-4 hover:text-tinta"
				href={site.ctaSecundario.href}
			>
				{site.ctaSecundario.texto}
			</a>
		</div>
	</div>

	<ul class="flex flex-col gap-9" aria-label="Exemplos de publicações no codlest">
		{#each posts.slice(0, 3) as post, i (post.titulo)}
			<li
				class="tape slap {recuos[i]} border-2 border-tinta bg-painel p-5 shadow-[4px_5px_0_var(--color-linha)]"
				style="--tilt: {inclinacoes[i]}; --i: {i}; --tape-tilt: {i % 2 ? '3deg' : '-3deg'}"
			>
				<p class="font-display text-xl font-bold">{post.titulo}</p>
				<p class="mt-2 font-display text-base font-bold text-fita">{post.autor}</p>
				<p class="text-base text-suave">{post.tags.join(', ')}</p>
			</li>
		{/each}
	</ul>
</section>
