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
			<a on:click={handleClick} href="/ships">Ships</a>
			<a on:click={handleClick} href="/missions">Missions</a>
			<a on:click={handleClick} href="/roadster">Roadster</a>
		</div>
	{/if}

	<div><slot /></div>

	<footer>
		<p>Created with ❤️ by <a href="https://timsmith.tech">Tim Smith</a></p>
	</footer>
</div>

<style>
	.wrapper {
		position: relative;
	}

	.menu {
		position: fixed;
		top: 5rem;
		right: 0;
		z-index: 9999;
		padding: 2rem 4rem;
	}

	a {
		display: block;
	}

	footer {
		display: grid;
		background: #000;
		width: 100%;
		height: 200px;
		place-items: center;
	}
</style>
