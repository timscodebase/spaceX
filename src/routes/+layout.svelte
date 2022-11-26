<script lang="ts">
	import { page } from '$app/stores';
	import { Hamburger } from 'svelte-hamburgers';

	let open: boolean = false;
</script>

<div class="wrapper">
	{#if $page.url.pathname !== '/'}
		<header>
			<Hamburger bind:open --color="white" />
		</header>
	{/if}

	{#if open}
		<a href="/">Home</a>
		<a href="/missions">SpaceX Missions</a>
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
	div {
		display: grid;
		place-items: center;
		padding-top: var(--top);
	}

	footer {
		display: grid;
		background: #000;
		height: 200px;
		place-items: center;
	}
</style>
