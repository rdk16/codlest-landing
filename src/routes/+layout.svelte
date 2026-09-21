<script lang="ts">
	import '@fontsource-variable/bricolage-grotesque';
	import '@fontsource-variable/source-serif-4';
	import '../app.css';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';

	let { children } = $props();
</script>

<a
	href="#conteudo"
	class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-10 focus:bg-fita focus:px-4 focus:py-2 focus:font-display focus:font-bold focus:text-fundo"
>
	Pular para o conteúdo
</a>

<SiteHeader />

<main id="conteudo">
	{@render children()}
</main>

<SiteFooter />
