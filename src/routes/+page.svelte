<script>
	import { onMount } from 'svelte';
	export let data;
	$: nextLaunch = data.nextLaunch.launchNext;
	$: customers = data.uniqueCustomers;

	onMount(() => {
		const hero = document.querySelector('.hero');
		hero?.addEventListener('mousemove', parallax);
		function parallax(event) {
			const x = (window.innerWidth + event.pageX) / 45;
			const y = (window.innerHeight + event.pageY) / 45;

			hero.style.backgroundPosition = `${x}% ${y}%`;
		}
	});
</script>

<div class="page">
	<div class="hero">
		<h1>
			<img
				class="logo"
				src="https://res.cloudinary.com/tihos/image/upload/f_auto,q_auto/v1669587361/logo-alpha_hikk5m.png"
				alt="SpaceX Logo"
			/> API Fun
		</h1>
	</div>

	<article>
		<h2>Next Mission</h2>
		<img src={nextLaunch.links.mission_patch_small} alt="The patch of the next Mission" />
		<p>{nextLaunch.details}</p>
	</article>

	<h2>SpaceX Customers</h2>
	<div class="customers">
		{#each customers as customer}
			<span>{customer}</span>
		{/each}
	</div>
</div>

<style>
	.page {
		background: #000;
		display: grid;
		place-items: center;
	}

	.hero {
		display: grid;
		place-content: center;
		width: 100%;
		height: 550px;
		background: linear-gradient(to bottom, #0000, #000 50%, #0000, #000),
			url('https://res.cloudinary.com/tihos/image/upload/f_auto,q_auto/v1669586639/First-Humans-on-Mars-scaled_nimfzs.jpg');
		background-size: 130%;
		background-position: center;
		box-shadow: 0px 0px 75px 10px rgba(0, 0, 0, 0.75) inset;
	}

	h1 {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	h2 {
		text-align: center;
	}

	img {
		display: block;
		width: 400px;
		margin: 0 auto;
	}

	article {
		max-width: 800px;
		padding: var(--padding);
	}

	.customers {
		/* margin-top: 3rem; */
		padding: var(--padding);
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		font-size: 2rem;
		background: var(--bg-gradient);
		color: var(--foreground);
	}

	@media (max-width: 600px) {
		h2 {
			font-size: 2rem;
		}
		.customers {
			font-size: 1.5rem;
		}
	}

	span {
		padding: 1rem;
	}
</style>
