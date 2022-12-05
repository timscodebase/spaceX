<script lang="ts">
	import { onMount } from 'svelte';
	import { Hamburger } from 'svelte-hamburgers';

	onMount(() => {
		const body = document.querySelector('body');
		body?.addEventListener('mousemove', parallax);
		function parallax(event) {
			const x = (window.innerWidth + event.pageX) / 45;
			const y = (window.innerHeight + event.pageY) / 45;

			body.style.backgroundPosition = `${x}% ${y}%`;
		}
	});

	let open: boolean = false;

	const handleClick = () => {
		open = !open;
	};
</script>

<div class="wrapper">
	<header>
		<Hamburger bind:open --color="white" />
	</header>

	{#if open}
		<div class="menu">
			<a on:click={handleClick} href="/">Home</a>
			<a on:click={handleClick} href="/missions">Missions</a>
			<a on:click={handleClick} href="/roadster">Roadster</a>
			<a on:click={handleClick} href="/ships">Ships</a>
			<a on:click={handleClick} href="/history">History</a>
		</div>
	{/if}

	<div><slot /></div>

	<footer>
		<p>Created with ❤️ by <a class="footer-link" href="https://timsmith.tech">Tim Smith</a></p>
	</footer>
</div>

<style>
	.wrapper {
		position: relative;
		max-width: 1400px;
		margin: 0 auto;
	}

	.menu {
		position: fixed;
		top: 0rem;
		right: 0;
		left: 0;
		bottom: 0;
		z-index: 9999;
		padding: 2rem 4rem;
		background-color: #000000ee;
		display: grid;
		place-content: center;
		font-size: 2.5rem;
	}

	a {
		display: block;
		background: none;
	}

	.footer-link {
		display: inline-block;
	}

	footer {
		display: grid;
		background: #000;
		width: 100%;
		height: 200px;
		place-items: center;
	}
</style>
