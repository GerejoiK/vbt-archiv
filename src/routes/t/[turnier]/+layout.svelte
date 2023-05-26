<script>
	import { page } from '$app/stores';
	import turniere from '$lib/data';
	import jq from 'json-query';

	let turnier = jq(`${$page.params.turnier}`, { data: turniere }).value;
	$: turnier = jq(`${$page.params.turnier}`, { data: turniere }).value;
</script>

<h1>{turnier.name}</h1>
<div style="display:flex;gap:0 1em;flex-wrap:wrap">
	{#each Object.entries(turnier.runden) as runde, index}
		{#if index > 0}/{/if}<a href="/t/{$page.params.turnier}/{runde[0]}">{runde[1].name}</a>
	{/each}
</div>
<slot />
