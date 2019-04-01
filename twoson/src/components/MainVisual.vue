<template>
	<div class="mainVisual">
		<div class="overlay"></div>
		<Header />
		<div class="mainTxt">
			<h3 class="subTitle">두손은 향합니다</h3>
			<h2 class="mainTitle">SI 사업을 넘어 <br>자체 서비스 플랫폼으로</h2>
			<button>자세히 보기</button>
		</div>
	</div>
</template>

<script>

export default {
	
}
</script>

<style>
	.mainVisual {
		background: url('../assets/main-visual-02.png') 50% 50% no-repeat;
		background-size: cover;
		width: 100%;
		height: 100vh;
		z-index: -1;
	}
	.overlay {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .5);
	}
	.mainTxt {
		position: absolute;
		top: 34%;
		left: 12%;
		z-index: 9;
		color: rgb(248, 248, 248);
		letter-spacing: -0.025em;
	}
	.mainTxt .subTitle {
		font-size: 22px;
		font-weight: 400;
		margin-bottom: 12px;
	}
	.mainTxt .mainTitle {
		font-size: 36px;
		font-weight: 700;
		margin-bottom: 60px;
	}
</style>
