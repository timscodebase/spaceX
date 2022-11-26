<script lang="ts">
	export let data;
	$: roadster = data.space.roadster;

	let metric: boolean = true;

	const toggleMetric = () => {
		metric = !metric;
	};
</script>

<div class="wrapper">
	<header class="page-header">
		<h1>SpaceX Roadster</h1>
	</header>

	<div class="roadster">
		<h2>{roadster.name}</h2>
		<a href={roadster.wikipedia} target="_blank" rel="noopener noreferrer"
			>Here is the Wikipedia link.</a
		>
		<div class="flex">
			<button on:click={toggleMetric} class={metric ? 'active' : ''}>Metric</button>
			<button on:click={toggleMetric} class={metric ? '' : 'active'}>Imperial</button>
		</div>
		<div class="grid">
			<article>
				<h3>Distance from Earth</h3>
				{#if metric}
					<p>{Math.round(roadster.earth_distance_km).toLocaleString('en-US')} km</p>
				{:else}
					<p>{Math.round(roadster.earth_distance_mi).toLocaleString('en-US')} mi</p>
				{/if}
			</article>
			<article>
				<h3>Distance from Mars</h3>
				{#if metric}
					<p>{Math.round(roadster.mars_distance_km).toLocaleString('en-US')} km</p>
				{:else}
					<p>{Math.round(roadster.mars_distance_mi).toLocaleString('en-US')} mi</p>
				{/if}
			</article>
			<article>
				<h3>It is traveling really fast</h3>
				{#if metric}
					<p>{Math.round(roadster.speed_kph).toLocaleString('en-US')} km/hr</p>
				{:else}
					<p>{Math.round(roadster.speed_mph).toLocaleString('en-US')} mi/hr</p>
				{/if}
			</article>
			<article>
				<h3>Details</h3>
				<p>
					{roadster.name} has been in orbit for {Math.round(roadster.period_days).toLocaleString(
						'en-US'
					)} days
				</p>
			</article>
		</div>
		<p>{roadster.details}</p>
	</div>
</div>

<style>
	.wrapper {
		padding: 2rem;
		background-attachment: fixed;
		background-size: cover;
		margin-top: var(--top);
	}

	.roadster {
		max-width: 1000px;
		margin: 0 auto;
	}

	h3 {
		color: var(--highlight);
		text-decoration: underline;
	}

	article {
		background: #0005;
		padding: 2rem;
		border-radius: 2rem;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}

	.grid {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 2rem;
		padding-bottom: 2rem;
	}

	button {
		background: #0005;
		border: none;
		padding: 1rem 2rem;
		border-radius: 100vw;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		margin: 0 1rem;
		opacity: 0.5;
	}
	.active {
		opacity: 1;
	}

	.flex {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: space-evenly;
		align-items: center;
		padding: 2rem;
	}

	/* img {
		width: 100%;
		margin: 0 auto;
		height: auto;
	} */

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
