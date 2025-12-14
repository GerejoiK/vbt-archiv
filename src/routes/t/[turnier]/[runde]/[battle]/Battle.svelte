<script>
	const { name, video, teilnehmer } = $props();

	const vid = $derived(
		video.map(v => {
			const vid = Object.assign({}, v);
			vid.url = new URL(v.url);
			return vid;
		})
	);
</script>

<dt>{name} von {teilnehmer}</dt>
{#each vid as v}
	<dd>
		{#if ["www.youtube.com", "youtu.be"].includes(v.url.hostname)}
			<details>
				<summary
					><span title="Originalupload">{v.original ? "🌟" : ""}</span>
					<a href={v.url.href}>{v.url.href}</a></summary
				>
				<iframe
					width="640"
					height="360"
					src={v.url.href.replace("https://youtu.be", "https://www.youtube.com/embed")}
					title=""
					frameborder="0"
					allowfullscreen
					loading="lazy"
				></iframe>
			</details>
		{:else if v.url.hostname.includes("myspace") || v.url.hostname.includes("myvideo")}
			<span title="Originalupload">{v.original ? "🌟" : ""}</span>
			<a href={v.url.href}>{v.url.hostname}</a>
		{:else if v.url.hostname.includes("archive.org")}
			<details>
				<summary><a href={v.url.href}>{v.url.href}</a></summary>
				<iframe
					width="640"
					height="360"
					src={v.url.href.replace("details", "embed")}
					title=""
					frameborder="0"
					allowfullscreen
					loading="lazy"
				></iframe>
			</details>
		{:else}
			<span title="Originalupload">{v.original ? "🌟" : ""}</span>
			<a href={v.url.href}>{v.url.href}</a>
		{/if}
	</dd>
{/each}
