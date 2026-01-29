<script>
	import { page } from "$app/stores";
	import turniere from "$lib/data";

	const turnier = $derived(turniere[$page.params.turnier]);
	const teilnehmer = $derived(
		Object.groupBy(
			Object.values(turnier.runden)
				.flatMap(e => Object.values(e.battles))
				.flatMap(e => e.teilnehmer),
			({ name }) => name.toLowerCase()
		)
	);
</script>

<hr />
<h2>Alle Teilnehmer</h2>

{#each Object.values(teilnehmer).toSorted((a, b) => a[0].name.toLowerCase().localeCompare(b[0].name.toLowerCase())) as tn}
	<a href="/tn/{tn[0].name}">{tn[0].name}</a>, <wbr />
{/each}
