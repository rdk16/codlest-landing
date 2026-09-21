<script lang="ts">
	import { site } from '$lib/content';
</script>

<!-- Única área clara da página: fecha o scroll com o mesmo amarelo da fita. -->
<section class="on-tape bg-fita text-fundo">
	<div class="mx-auto max-w-6xl px-6 py-20">
		<h2 class="max-w-2xl font-display text-3xl font-bold text-balance sm:text-4xl">
			Tem um projeto parado no seu computador? Mostre para quem entende.
		</h2>
		<a class="btn-inverse mt-8" href={site.app}>{site.ctaPrimario.texto}</a>
	</div>
</section>
