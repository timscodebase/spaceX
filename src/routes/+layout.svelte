<script lang="ts">
	import { onMount } from 'svelte';
	import { Hamburger } from 'svelte-hamburgers';

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
		widows: 100vw;
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
