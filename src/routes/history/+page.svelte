<script>
	import { json } from '@sveltejs/kit';

	export let data;
	$: missions = data.missions.histories;
</script>

<!-- {JSON.stringify(missions, null, 2)} -->

<h1>History</h1>

<div class="history-grid">
	{#each missions as mission}
		<article>
			<h2>{mission.title}</h2>
			<p>{mission.details}</p>

			{#if mission.flight}
				<div class="images-flex">
					{#each mission.flight.links.flickr_images as img}
						<img src={img} alt={mission.title} />
					{/each}
				</div>
				<h2>Flight Details</h2>
				<p>{mission.flight.details}</p>
			{:else}
				<p>No Flight Data</p>
			{/if}
		</article>
	{/each}
</div>

<style>
	.history-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
		grid-gap: 1rem;
		padding: 1rem;
	}

	.images-flex {
		display: flex;
		overflow-x: scroll;
	}

	h2 {
		padding-top: 2rem;
	}

	img {
		width: 150px;
		height: auto;
		object-fit: cover;
	}

	article {
		background: #0005;
		padding: var(--padding);
		border-radius: 1rem;
		box-shadow: 0px 0px 40px 5px rgba(0, 0, 0, 0.85) inset, 0px 0px 40px 5px rgba(0, 0, 0, 0.85);
	}
</style>
