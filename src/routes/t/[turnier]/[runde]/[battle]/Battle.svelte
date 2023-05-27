<script>
	export let name;
	export let video;

	video = video.map(v => {
		const vid = Object.assign({}, v);
		vid.url = new URL(v.url);
		return vid;
	});
</script>

<dt>{name}</dt>
{#each video as v}
	<dd>
		{#if ["www.youtube.com"].includes(v.url.hostname)}
			<details>
				<summary
					><span title="Originalupload">{v.original ? "🌟" : ""}</span>
					<a href={v.url.href}>{v.url.href}</a></summary
				>
				<iframe
					width="540"
					height="320"
					src={v.url.href}
					title=""
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
					loading="lazy"
				/>
			</details>
		{:else}
			<span title="Originalupload">{v.original ? "🌟" : ""}</span>
			<a href={v.url.href}>{v.url.href}</a>
		{/if}
	</dd>
{/each}
