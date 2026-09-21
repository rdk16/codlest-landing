<script lang="ts">
	import { site, posts, recursos, passos, perguntas } from '$lib/content';
	import Hero from '$lib/components/Hero.svelte';
	import FeatureList from '$lib/components/FeatureList.svelte';
	import Steps from '$lib/components/Steps.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
</script>

<svelte:head>
	<title>{site.titulo}</title>
	<meta name="description" content={site.descricao} />
	<meta name="theme-color" content="#0a0a0b" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={site.titulo} />
	<meta property="og:description" content={site.descricao} />
</svelte:head>

<Hero {posts} />
<FeatureList {recursos} />
<Steps {passos} />
<Faq {perguntas} />
<CtaBand />
