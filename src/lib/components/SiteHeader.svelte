<script lang="ts">
	import { site } from '$lib/content';
</script>

<header class="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
	<p class="font-display text-xl font-extrabold tracking-tight">{site.nome}</p>
	<a
		href={site.ctaSecundario.href}
		class="font-display font-bold underline decoration-2 underline-offset-4 hover:text-fita"
	>
		Ver recursos
	</a>
</header>
