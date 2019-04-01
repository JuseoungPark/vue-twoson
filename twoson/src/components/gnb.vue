<template>
	<div class="gnb">
		<div class="innerWrap downside">
			<div class="depthOne" v-for="menu in gnb" :key="menu.key">
				<a href="">
					<span>{{ menu.depth }}</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			gnb: [
				{
					depth: '포트폴리오'
				},
				{
					depth: '솔루션'
				},
				{
					depth: '회사정보'
				},
				{
					depth: '뉴스룸'
				},
			]
		}
	}
}
</script>

<style>
	/* .gnb {
	} */
	.innerWrap.downside {
		position: relative;
		display: flex;
	}
	.depthOne {
		color: #ffffff;
		font-size: 20px;
		letter-spacing: -0.04em;
		padding: 19px 100px 19px 0;
	}
	.depthOne:last-of-type {
		margin-right: 0;
	}
</style>
