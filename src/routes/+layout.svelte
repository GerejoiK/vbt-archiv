<script>
	import "simpledotcss";
	import { page } from "$app/stores";
	import turniere from "$lib/data";

	const { children } = $props();
</script>

<header>
	<nav>
		{#each Object.entries(turniere) as turnier}
			<a href="/t/{turnier[0]}" class:current={$page.params.turnier === turnier[0]}>{turnier[1].name}</a>
		{/each}
	</nav>
	<h1><a href="/">VBT-Archiv</a></h1>
</header>
<main>
	{@render children?.()}
</main>

<footer>
	VBT-Archiv braucht deine Hilfe, um alle Runden zu finden und zu archivieren!
	<br />
	Bitte schau auf <a href="https://github.com/GerejoiK/vbt-archiv">GitHub</a> vorbei, wenn du helfen willst.
</footer>
