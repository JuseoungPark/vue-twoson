<template>
	<div id="app">
		<MainVisual />
		<MM></MM>
		<PP></PP>
		<Section />
		<Footer />
	</div>
</template>

<script>
import MM from '@/components/MainVisual'
import PP from '@/components/SectionPortpolio'
import Section from '@/components/Section'

export default {
	components: {
		MM,
		PP,
		Section
	},
}
</script>

<style>
	a,
	ul,
	ol,
	li {
		text-decoration: none;
		list-style-type: none;
		color: inherit;
	}

	.innerWrap {
		position: relative;
		width: 80%;
		margin: 0 auto;
	}
	.hidden {
		text-indent: -9999px;
		font-size: 0;
	}
	ul {
		padding: 0;
		margin: 0;
	}
</style>
