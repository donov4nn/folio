import adapter from '@sveltejs/adapter-static';
//npm i -D @sveltejs/adapter-static@next

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		target: '#svelte',
		adapter : adapter()
	}
};

export default config;
