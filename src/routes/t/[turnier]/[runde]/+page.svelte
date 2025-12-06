<script>
	import { page } from "$app/stores";
	import turniere from "$lib/data";
	import jq from "json-query";

	let battles = jq(`${$page.params.turnier}.runden.${$page.params.runde}.battles`, {
		data: turniere,
	});
	$: battles = jq(`${$page.params.turnier}.runden.${$page.params.runde}.battles`, {
		data: turniere,
	});
	const getColor = item => {
		const diff = item.teilnehmer.map(e => Object.values(e?.runden || {}).length).reduce((a, b) => a - b);
		if (diff > 0 || (item.teilnehmer[0].punkte || 0) > (item.teilnehmer[1].punkte || 0)) {
			return ["green", "red"];
		} else if (diff < 0 || (item.teilnehmer[0].punkte || 0) < (item.teilnehmer[1].punkte || 0)) {
			return ["red", "green"];
		}
		return ["", ""];
	};
</script>

<hr />
<h1>{battles.parents.at(-1).value.name}</h1>
<nav>
	<table>
		<tbody>
			{#each Object.entries(battles.value) as [id, battle]}
				<tr>
					<td class={getColor(battle)[0]}
						>{battle.teilnehmer[0].name}
						<br />
						{#if battle.teilnehmer[0]?.runden}
							{#each Object.values(battle.teilnehmer[0].runden) as runde}
								<a href={runde.links[0].url}>{runde.name}</a>&nbsp;
							{/each}
						{/if}
					</td>
					<td
						><a href="/t/{$page.params.turnier}/{$page.params.runde}/{id}"
							>vs.<br />{battle.teilnehmer.map(e => e?.punkte || 0).join(":") !== "0:0"
								? battle.teilnehmer.map(e => e?.punkte || 0).join(":")
								: ""}</a
						></td
					>
					<td class={getColor(battle)[1]}
						>{battle.teilnehmer[1].name}
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
	.red {
		color: red;
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
