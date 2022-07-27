<template>
	<view class="order bgc-1">
		<view class="order-ele">
			<view class="ele">
				饿了么
			</view>
			<view class="tabs r-flex-1 bgc-1">
				<view class="tab " :class="i==0?'tab-active':''" v-for="tab,i in tabs" :key="i">
					{{tab.name}}
				</view>
			</view>
		</view>

		<!-- v-if="$getStorage('token')" -->
		<view class="order-item bgc-2 pg10 br10" >
			<view class="title r-flex-2">
				<view class="shop r-flex-1">
					<view class="shop-img img-box36 mr10">
						<img :src="order.shop_img" class='br5'>
					</view>
					<view class="shop-name over" @click="navTo('/pages/order-detail')">
						{{order.shop_name}}<i class="fa fa-chevron-right fs14 ml5" style="color: #bbb;"></i>
					</view>
				</view>
				<view class="status fs14" style="color: #999; ">
					{{order.order_status}}
				</view>
			</view>
			<view class="tip mg5-0">
				<span class="tip-txt">{{order.rest}}</span>
			</view>
			<view class="imgs r-flex-2 mg10-0">
				<view class="img-list r-flex-1 ">
					<!-- <view class="img-item img-box56 " v-for="item,i in imgs" :key="i"> -->
					<img :src="item.img" alt="" v-for="item,i in order.imgs" :key="i" class=" img-box56 br5" :class="l<2?'mr10':''">
					<!-- </view> -->
					<span v-if="l<2" class='fs14'>{{order.name}}</span>
				</view>
				<view class="price pg0-10" align='center'>
					<p><span class="fs12">￥</span>{{order.price}}</p>
					<p class="fs12 color-3 mt5">共{{order.num}}件</p>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabs: [{
						name: '全部',
						path: '全部'
					},
					{
						name: '待付款',
						path: '待付款'
					},
					{
						name: '待评价',
						path: '待评价'
					},
					{
						name: '退款',
						path: '退款'
					}
				],
				order: {},
				l:0,
			}
		},
		onLoad() {
			this.$getStorage('token') ? '' : location.href = '/#/pages/login/index'
			this.getOrder()
		},
		methods: {
			navTo(url) {
				uni.navTo(url)
			},
			async getOrder(){
				let res =await this.$http({
					url:`/order`//?token=${this.$getStorage('token').account }
				})
				this.order=res.order
				this.l=this.order.imgs.length
			} 
		}
	}
</script>

<style lang="scss" scoped>
	.order {
		height: calc(100vh - 3.9375rem);

		.tabs {
			padding: 0;
		}

		.tab {
			padding-bottom: 0.3125rem;
			margin: 0.3125rem 0.625rem;
			position: relative;

			&:first-child {
				margin-left: 1.625rem;
			}

			&::after {
				content: '';
				width: 100%;
				height: 3px;
				position: absolute;
				bottom: 0;
				left: 0;
				border-radius: 2px;
			}
		}

		.tab-active {
			&::after {
				background-color: #00a6ff;
			}
		}

		.img-list {
			width: calc(100% - 4rem);
			overflow: scroll;

			img:last-child {
				margin: 0;
			}
		}

		.price {
			width: 2.75rem;
		}
	}

	.order-item {
		margin: calc(44px + 2.1875rem) 1rem 1rem 1rem;

		.tip {

			.tip-txt {
				color: white;
				font-size: 0.875rem;
				padding: 0 5px 1px 5px;
				border-radius: 3px;
				background-color: #999999;

			}
		}
	}

	.order-ele {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 44px;
		background-color: #f5f5f5;
		opacity: 1;

		.ele {
			height: 44px;
			line-height: 44px;
			margin-left: 0.75rem;
			z-index: 999;
			color: #191919;
			font-size: 1.125rem;
			font-weight: bold;
		}
	}
</style>


<!-- orders: [{
					name: '果然不同',
					img: '/static/pig.jpg',
					vegetable: [{
							img: '/static/logo.png'
						}, {
							img: '/static/logo.png'
						}, {
							img: '/static/logo.png'
						},
						{
							img: '/static/logo.png'
						},
						{
							img: '/static/logo.png'
						},
						{
							img: '/static/logo.png'
						},
						{
							img: '/static/logo.png'
						},
					], -->