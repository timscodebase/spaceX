<script>
	export let data;
	$: ships = data.space.ships;
</script>

<div class="wrapper">
	<header class="page-header">
		<h1>SpaceX Ships</h1>
	</header>
	<div class="grid">
		{#each ships as ship}
			<article>
				<h2>{ship.name}</h2>

				{#if ship.image}
					<img src={ship.image} alt={ship.name} />
				{:else}
					<img
						src="https://res.cloudinary.com/tihos/image/upload/f_auto,q_auto/v1669412174/logo_y0u8lu.png"
						alt="SpaceX Logo"
					/>
				{/if}

				<div class="flex">
					{#each ship.missions as mission}
						<p>{mission.name}</p>
					{/each}
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
