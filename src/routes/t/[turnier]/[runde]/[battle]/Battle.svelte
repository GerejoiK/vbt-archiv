<script>
	export let name;
	export let video;

	if (!Array.isArray(video)) {
		video = [video];
	}
    video = video.filter(v => v)
	video = video.map((v) => {
		return new URL(v);
	});
</script>

<dt>{name}</dt>
{#each video as v}
	<dd>
		{#if ['www.youtube.com'].includes(v.hostname)}
			<details>
				<summary><a href={v}>{v}</a></summary>
				<iframe
					width="540"
					height="320"
					src={v}
					title=""
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				/>
			</details>
		{:else}
			<a href={v}>{v}</a>
		{/if}
	</dd>
{/each}
