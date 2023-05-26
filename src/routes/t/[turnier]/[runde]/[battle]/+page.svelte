<script>
	import { page } from '$app/stores';
	import turniere from '$lib/data';
	import jq from 'json-query';
	import Battle from './Battle.svelte';
	let battle = jq(
		`${$page.params.turnier}.runden.${$page.params.runde}.battles.${$page.params.battle}`,
		{ data: turniere }
	);
	$: battle = jq(
		`${$page.params.turnier}.runden.${$page.params.runde}.battles.${$page.params.battle}`,
		{ data: turniere }
	);
</script>

<hr />
<h2>{battle.parents.at(-2).value.name}</h2>
<h3>{battle.value.teilnehmer.map((e) => e.name).join(' vs. ')}</h3>
<mark title="Ergebnis">{battle.value.teilnehmer.map((e) => e.punkte).join(' : ')}</mark>
<dl>
	{#each battle.value.teilnehmer.map((e) => Object.values(e.runden || {})).flat() as runde}
		<Battle name={runde.name} video={runde?.links} />
	{/each}
</dl>
