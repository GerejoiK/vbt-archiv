<script>
	import { page } from '$app/stores';
	import turniere from '$lib/data';
	import jq from 'json-query';

	let battles = jq(`${$page.params.turnier}.runden.${$page.params.runde}.battles`, {
		data: turniere
	});
	$: battles = jq(`${$page.params.turnier}.runden.${$page.params.runde}.battles`, {
		data: turniere
	});
	const getColor = (item) => {
		const points = item.ergebnis.split(':');
		const tn1 = { c: !!item.hr1 + !!item.rr2, p: parseInt(points[0], 10) };
		const tn2 = { c: !!item.hr2 + !!item.rr1, p: parseInt(points[1], 10) };
		switch (true) {
			case tn1.p > tn2.p || tn1.c > tn2.c:
				return ['green', 'red'];
			case tn1.p < tn2.p || tn1.c < tn2.c:
				return ['red', 'green'];
			default:
				return ['', ''];
		}
	};
</script>

<hr />
<h1>{battles.parents.at(-1).value.name}</h1>
<nav>
	<table>
		{#each battles.value as battle, index}
			<tr>
				<td class={getColor(battle)[0]}
					>{battle.tn1}
					<br />
					{#if battle.hr1}
						<a href={battle.hr1}>HR1</a>
					{/if}
					{#if battle.rr2}
						<a href={battle.rr2}>RR2</a>
					{/if}
				</td>
				<td style="text-align:center"
					><a href="/t/{$page.params.turnier}/{$page.params.runde}/{index}"
						>vs.<br />{battle.ergebnis}</a
					></td
				>
				<td class={getColor(battle)[1]}
					>{battle.tn2}
					<br />
					{#if battle.hr2}
						<a href={battle.hr2}>HR2</a>
					{/if}
					{#if battle.rr1}
						<a href={battle.rr1}>RR1</a>
					{/if}</td
				>
			</tr>
		{/each}
	</table>
</nav>

<style>
	.red {
		color: red;
	}
	.green {
		color: green;
	}
</style>
