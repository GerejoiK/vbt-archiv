<script>
	import 'simpledotcss';
	import { page } from '$app/stores';
	import turniere from '$lib/data';

	import validate from '../test/validateData.js';
	validate();
</script>

<header>
	<nav>
		{#each Object.entries(turniere) as turnier}
			<a href="/t/{turnier[0]}" class:current={$page.params.turnier === turnier[0]}
				>{turnier[1].name}</a
			>
		{/each}
	</nav>
	<h1><a href="/">VBT-Archiv</a></h1>
</header>
<main>
	<slot />
</main>
