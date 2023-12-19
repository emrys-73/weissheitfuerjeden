import { join } from 'path'
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			colors: {
				'base': '#1A6F61',
				'secondary': '#A1C4BC',
				'accent': '#C6E5D9',
			}
		},
	},
	plugins: [ require('daisyui'),
		forms,
		typography,
		skeleton({
			themes: {
				// preset: [
				// 	{
				// 		name: 'wintry',
				// 		enhancements: true,
				// 	},
				// ],
			},
		}),
	],
} satisfies Config;
