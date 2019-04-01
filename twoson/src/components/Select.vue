<template>
	<div id="select">
		<select class="select">
			<option value="" v-for="select in option" :key="select.key">{{ select.items }}</option>
		</select>
	</div>
</template>

<script>
export default {
	data () {
		return {
			option: [
				{ items: '직군 선택' },
				{ items: '보험' },
				{ items: '카드' },
				{ items: '앙' },
				{ items: '기모띠' },
			]
		}
	}
}
</script>

<style>
	.select {
		padding: 8px 67px 8px 20px;
		border-bottom: 2px solid #000;
		font-size: 36px;
		letter-spacing: -0.025em;
		font-weight: 700;
	}
</style>
