<script>
	import { page } from "$app/stores";
	import turniere from "$lib/data";
	import Battle from "./Battle.svelte";

	const runde = $derived(turniere[$page.params.turnier].runden[$page.params.runde]);
	const battle = $derived(runde.battles[$page.params.battle]);
</script>

<hr />
<h2>{runde.name}</h2>
<h3>{@html battle.teilnehmer.map(e => `<a href="/tn/${e.name}">${e.name}</a>`).join(" vs. ")}</h3>
{#if battle.link || battle.thread}
	{#if battle.link}
		<a href="https://web.archive.org/web/*/{battle.link}">Link</a>
	{/if}
	{#if battle.thread}
		<a href="https://forum.rappers.in/index.php?thread/{battle.thread}">Thread</a>
	{/if}
	<br />
{/if}
<mark title="Ergebnis">{battle.teilnehmer.map(e => e.punkte || 0).join(" : ")}</mark>
<dl>
	{#each battle.teilnehmer
		.map(e => Object.values(e.runden || {}).map(f => Object.assign({ teilnehmer: e.name }, f)))
		.flat()
		.toSorted((a, b) => (a.name > b.name ? 1 : -1)) as runde}
		<Battle name={runde.name} video={runde?.links} teilnehmer={runde.teilnehmer} />
	{/each}
</dl>
