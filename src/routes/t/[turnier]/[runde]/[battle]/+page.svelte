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
	console.log(battle);
</script>

<hr />
<h2>{battle.parents.at(-2).value.name}</h2>
<h3>{battle.value.tn1} vs. {battle.value.tn2}</h3>
<mark title="Ergebnis">{battle.value.ergebnis.split(':').join(' : ')}</mark>
<dl>
	<Battle name="Hinrunde 1" video={battle.value.hr1} />
	<Battle name="Rückrunde 1" video={battle.value.rr1} />
	<Battle name="Hinrunde 2" video={battle.value.hr2} />
	<Battle name="Rückrunde 2" video={battle.value.rr2} />
</dl>
