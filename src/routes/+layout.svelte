<script lang="ts">
	import '../app.postcss';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { animate } from './stores';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	const cats = [
		{
			title: 'Start',
			url: '/',
			icon: 'home',
		},
		{
			title: 'Über mich',
			url: '/about',
			icon: 'info',
		},
		{
			title: 'Blog',
			url: '/blogs',
			icon: 'blog',
		}
	]


</script>

<style>
	h2::selection {
		background: #C6DDF8;
	}


</style>

<AppShell class="text-black bg-white">
	<svelte:fragment slot="header">
		<section class="w-full h-28 fixed top-0 backdrop-blur-xl altashadow flex flex-col items-center justify-center">
			<div class="w-full text-center justify-center items-center">
				<h2 class="text-4xl font-serif font-semibold py-2">
					Weißheit für jeden
				</h2>
			</div>
			<div class="flex flex-row gap-6 justify-center items-center">
				{#each cats as c}
					<a href={c.url} class="{$animate} text-md font-light hover:font-bold">
						{c.title}
					</a>
				{/each}
			</div>
		</section>
	</svelte:fragment>
	<!-- (sidebarLeft) -->
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">
		<section class="w-full h-full bg-white altashadow">
			<div class="py-8 justify-center items-center flex">
				<span class="opacity-50 text-sm">
					©2023 von Weisheit für jeden.
				</span>
			</div>
		</section>
	</svelte:fragment>
	<!-- (footer) -->
</AppShell>
