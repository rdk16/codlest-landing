<script lang="ts">
	import { site } from '$lib/content';

	const ano = new Date().getFullYear();
</script>

<footer class="border-t-2 border-linha">
	<div
		class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-base text-suave"
	>
		<p>© {ano} {site.nome}. Feito no Brasil.</p>
		<a href={site.repositorio} rel="noopener" class="underline underline-offset-4 hover:text-fita">
			Código no GitHub
		</a>
	</div>
</footer>
