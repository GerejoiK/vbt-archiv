<script>
	import "simpledotcss";
	import { page } from "$app/stores";
	import turniere from "$lib/data";
	import { base } from "$app/paths";
</script>

<header>
	<nav>
		{#each Object.entries(turniere) as turnier}
			<a href="{base}/t/{turnier[0]}" class:current={$page.params.turnier === turnier[0]}>{turnier[1].name}</a>
		{/each}
	</nav>
	<h1><a href={base}>VBT-Archiv</a></h1>
</header>
<main>
	<slot />
</main>
