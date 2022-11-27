<script>
	export let data;
	$: nextLaunch = data.nextLaunch.launchNext;
	$: customers = data.uniqueCustomers;
</script>

<div class="page">
	<img
		src="https://res.cloudinary.com/tihos/image/upload/v1669412174/logo_y0u8lu.png"
		alt="SpaceX Logo"
	/>

	<h2>SpaceX Customers</h2>
	<div class="customers">
		{#each customers as customer}
			<span>{customer}</span>
		{/each}
	</div>

	<article>
		<h2>Next Mission</h2>
		<img src={nextLaunch.links.mission_patch} alt="The patch of the next Mission" />
		<p>{nextLaunch.details}</p>
	</article>
</div>

<style>
	.page {
		background: #000;
		display: grid;
		place-items: center;
	}

	h2 {
		text-align: center;
	}

	article {
		max-width: 800px;
	}

	.customers {
		/* margin-top: 3rem; */
		padding: 2rem;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		font-size: 2rem;
		background: var(--bg-gradient);
		color: var(--foreground);
	}

	span {
		padding: 1rem;
	}
</style>
