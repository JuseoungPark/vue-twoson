<template>
	<div class="header">
		<div class="innerWrap upside">
			<h1 class="logo">
				<img :src="require('@/assets/logo.png')" alt="로고">
			</h1>
			<a href="" class="btn-gnb">
				<span class="hidden">gnb 버튼</span>
			</a>
			<a href="" class="contact-btn">
				{{ contact }}
				<span class="hidden">contact 버튼</span>
			</a>
		</div>
		<GNB />
	</div>
</template>

<script>
import GNB from '@/components/gnb'

export default {
	data () {
		return {
			contact: 'contact',
		}
	},

	components: {
		GNB
	}
}
</script>

<style>
	.header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 114px;
		background: rgba(255, 255, 255, 0);
		border: 1px solid rgba(255, 255, 255, 0.4);
	}
	.innerWrap.upside {
		position: relative;
		height: 114px;
	}
	.logo {
		position: absolute;
    top: 29px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 135px;
    height: 56px;
	}
	.btn-gnb {
		position: absolute;
    top: 46px;
    left: 0;
    width: 37px;
    height: 23px;
    background: url(../assets/menu-btn.png) 0 0 no-repeat;
	}
	.contact-btn {
		position: absolute;
    top: 45px;
    right: 0;
    z-index: 2;
		color: #ffffff;
		font-size: 17px;
		font-weight: 700;
		text-transform: uppercase;
	}


	.fixed-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%; 
	}
	.visible-title {
    visibility: visible;
	}
</style>
