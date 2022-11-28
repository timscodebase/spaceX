<script>
	export let data;
	$: missions = data.missions.launchesPast;
</script>

<div class="wrapper">
	<header class="page-header">
		<h1>SpaceX Missions</h1>
	</header>
	<div class="grid">
		{#each missions as mission}
			<article>
				<header>
					<h2>{mission.mission_name}</h2>
				</header>
				<div class="content">
					<p><strong>Rocket Name:</strong> {mission.rocket.rocket_name}</p>

					{#if mission.links.mission_patch_small}
						<img src={mission.links.mission_patch_small} alt={mission.mission_name} />
					{:else}
						<img
							src="https://res.cloudinary.com/tihos/image/upload/f_auto,q_auto/v1669412174/logo_y0u8lu.png"
							alt="SpaceX Logo"
						/>
					{/if}
					<p>{mission.details}</p>
				</div>
				<div class="flex">
					<a href={mission.links.video_link} target="_blank" rel="noopener noreferrer"
						>YouTube Link</a
					>
					<a href={mission.links.article_link} target="_blank" rel="noopener noreferrer"
						>Article Link</a
					>
					<a href={mission.links.wikipedia} target="_blank" rel="noopener noreferrer"
						>Wikipedia Link</a
					>
				</div>
			</article>
		{/each}
	</div>
</div>

<style>
	.wrapper {
		padding: var(--padding);
		background-attachment: fixed;
		background-size: cover;
		margin-top: var(--top);
	}

	.grid {
		max-width: 1200px;
		min-height: 100vh;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1rem;
	}

	article {
		background: #0005;
		padding: var(--padding);
		border-radius: 1rem;
	}

	.flex {
		border-top: 4px dotted #fff;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: space-around;
		align-items: center;
		padding: 2rem 0 0 0;
	}

	p {
		padding-top: 2rem;
		font-size: 1rem;
	}

	.page-header {
		display: flex;
		align-items: center;
		padding: 1rem;
		position: fixed;
		height: 150px;
		width: 100%;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 70%, rgba(0, 0, 0, 0));
		top: 0;
		left: 0;
	}
</style>
