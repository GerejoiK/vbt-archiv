<script>
	import { page } from "$app/stores";
	import turniere from "$lib/data";
	import { getColor } from "$lib/util";

	const turnier = $derived(turniere[$page.params.turnier]);
	const runde = $derived(turnier.runden[$page.params.runde]);
	const battles = $derived(runde.battles);
</script>

<svelte:head>
	<title>{runde.name} • {turnier.name} • VBT-Archiv</title>
</svelte:head>

<hr />

<h2>{runde.name}</h2>

<nav>
	<table>
		<tbody>
			{#each Object.entries(battles) as [id, battle]}
				<tr>
					<td class={getColor(battle)[0]}
						><a href="/tn/{battle.teilnehmer[0].name}">{battle.teilnehmer[0].name}</a>
						<br />
						{#if battle.teilnehmer[0]?.runden}
							{#each Object.values(battle.teilnehmer[0].runden) as runde}
								<a href={runde.links[0].url}>{runde.name}</a>&nbsp;
							{/each}
						{/if}
					</td>
					<td
						><a href="/t/{$page.params.turnier}/{$page.params.runde}/{id}"
							>vs.<br />{battle.teilnehmer.reduce((a, b) => a + (b.punkte || 0), 0) > 0
								? battle.teilnehmer.map(e => e?.punkte || 0).join(":")
								: ""}</a
						></td
					>
					<td class={getColor(battle)[1]}
						><a href="/tn/{battle.teilnehmer[1].name}">{battle.teilnehmer[1].name}</a>
						<br />
						{#if battle.teilnehmer[1]?.runden}
							{#each Object.values(battle.teilnehmer[1]?.runden) as runde}
								<a href={runde.links[0].url}>{runde.name}</a>&nbsp;
							{/each}
						{/if}</td
					>
				</tr>
			{/each}
		</tbody>
	</table>
</nav>

<style>
	.red a:first-child,
	.green a:first-child {
		color: unset;
	}
	.red {
		color: red !important;
	}
	.green {
		color: green;
	}

	table {
		width: 100%;
		table-layout: fixed;
	}
	td {
		text-align: center;
	}
	td:nth-child(2) {
		width: 20%;
	}
</style>
