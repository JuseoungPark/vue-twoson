<template>
	<div class="section">
		<Title />
		<Select />
	</div>
</template>

<script>
import Select from '@/components/Select'

export default {
	data () {
		return {

		}
	},

	components: {
		Select,
	}
}
</script>

<style>
	.section {
		height: 990px;
		background: rgba(0, 0, 0, .4);
	}
</style>
