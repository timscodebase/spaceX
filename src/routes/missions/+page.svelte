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

				<div class="flex">
					<p>{new Date(Date.parse(mission.launch_date_local))}</p>
					<p>{mission.rocket.rocket_name}</p>
				</div>
				{#if mission.links.mission_patch}
					<img src={mission.links.mission_patch} alt={mission.mission_name} />
				{:else}
					<img
						src="https://res.cloudinary.com/tihos/image/upload/f_auto,q_auto/v1669412174/logo_y0u8lu.png"
						alt="SpaceX Logo"
					/>
				{/if}
				<div class="flex">
					<a href={mission.links.video_link}>YouTube Link</a>
					<a href={mission.links.article_link}>Article Link</a>
					<a href={mission.links.wikipedia}>Wikipedia Link</a>
				</div>
			</article>
		{/each}
	</div>
</div>

<style>
	.wrapper {
		padding: 2rem;
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
		gap: 2rem;
	}

	article {
		background: #0005;
		padding: 2rem;
		border-radius: 2rem;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}

	.flex {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 0;
	}

	img {
		width: 100%;
		margin: 0 auto;
		height: auto;
	}

	p {
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
