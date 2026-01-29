<script>
	import { page } from "$app/stores";
	import turniere from "$lib/data";
	import { getColor } from "$lib/util";

	let filtered = $derived.by(() => {
		let filtered = structuredClone(turniere);

		for (let t in filtered) {
			for (let r in filtered[t].runden) {
				filtered[t].runden[r].battles = Object.fromEntries(
					Object.entries(filtered[t].runden[r].battles).filter(
						e => e[1].teilnehmer.filter(e => e.name.toLowerCase() === $page.params.teilnehmer.toLowerCase()).length
					)
				);
				if (Object.keys(filtered[t].runden[r].battles).length === 0) delete filtered[t].runden[r];
			}
			if (Object.keys(filtered[t].runden).length === 0) delete filtered[t];
		}
		return filtered;
	});

	let der = $derived(Object.entries(filtered));
</script>

<h2>{$page.params.teilnehmer}</h2>

{#each der as e}
	<h3>{e[1].name}</h3>
	{@const battles = Object.entries(e[1].runden).map(e => {
		const f = Object.entries(e[1].battles)[0];
		f[1].rundeId = e[0];
		f[1].runde = e[1].name;
		return f;
	})}
	<table>
		<tbody>
			{#each battles as [id, battle]}
				{@const sorted = battle.teilnehmer.toSorted(a =>
					a.name.toLowerCase() === $page.params.teilnehmer.toLowerCase() ? -1 : 1
				)}
				{@const cnt = Object.keys(battle.teilnehmer[0]?.runden || []).length}
				<tr>
					<td>{battle.runde} </td>
					<td>vs. <a href={sorted[1].name}>{sorted[1].name}</a></td>
					<td class={getColor({ teilnehmer: sorted })[0]}
						>{sorted.map(e => e?.punkte || 0).join(":") !== "0:0" ? sorted.map(e => e?.punkte || 0).join(":") : "Aufgabe"}</td
					>
					<td
						><a href="/t/{e[0]}/{battle.rundeId}/{id}"
							>{cnt} Video{#if cnt !== 1}s{/if}</a
						></td
					>
				</tr>
			{/each}
		</tbody>
	</table>
{/each}

<style>
	.red {
		color: red;
	}
	.green {
		color: green;
	}

	table {
		width: 100%;
	}
</style>
