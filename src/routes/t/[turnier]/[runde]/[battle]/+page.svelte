<script>
	import { page } from "$app/stores";
	import turniere from "$lib/data";
	import jq from "json-query";
	import Battle from "./Battle.svelte";

	const battle = $derived(
		jq(`${$page.params.turnier}.runden.${$page.params.runde}.battles.${$page.params.battle}`, {
			data: turniere,
		})
	);
</script>

<hr />
<h2>{battle.parents.at(-2).value.name}</h2>
<h3>{battle.value.teilnehmer.map(e => e.name).join(" vs. ")}</h3>
{#if battle.value.link || battle.value.thread}
	{#if battle.value.link}
		<a href="https://web.archive.org/web/*/{battle.value.link}">Link</a>
	{/if}
	{#if battle.value.thread}
		<a href="https://web.archive.org/web/*/{battle.value.thread}">Thread</a>
	{/if}
	<br />
{/if}
<mark title="Ergebnis">{battle.value.teilnehmer.map(e => e.punkte || 0).join(" : ")}</mark>
<dl>
	{#each battle.value.teilnehmer
		.map(e => Object.values(e.runden).map(f => Object.assign({ teilnehmer: e.name }, f)))
		.flat()
		.toSorted((a, b) => (a.name > b.name ? 1 : -1)) as runde, i}
		<Battle name={runde.name} video={runde?.links} teilnehmer={runde.teilnehmer} />
	{/each}
</dl>
