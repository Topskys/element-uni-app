<template>
	<view class="home bgc-1">
		<view class="home-ele">
			<view class="ele">
				饿了么
			</view>
		</view>
		<view class="home-address bgc-1">
			<view class="address r-flex-2">
				<view class="location r-flex-1">
					<view class="location-icon"></view>
					<view class="location-txt">{{location}}</view>
				</view>
				<view class="right">{{tip}}</view>
			</view>
		</view>
		<view class="search mg12 r-flex-2 br16 border-1">
			<input type="text" maxlength="140" v-model="keyword" focus placeholder="星巴克  满60减30" class="pg2-10 " />
			<view class="search-btn  fs14 bgc-3 br16" @click="search()">
				搜索
			</view>
		</view>
		<view class="recomment-shops r-flex-4 mg18-10-17 fs12 color-3">
			为你推荐附近的商家
		</view>
		<scroll-view scroll-y="true">
			<!-- v-for="good,i in goods" :key="i" -->
			<view class="good-list mg18-10-17 bgc-2 br10 ">
				<view class="good-item r-flex-1">
					<view class="mask img-box104 mg0-10">
						<img src="/static/hualaishi.jpg" alt="" class='br10'>
					</view>
					<view class="intro c-flex-3 mr10" style="flex: 1;">
						<p class='r-flex-1'>
							<view class="img-box34-14 mr10">
								<img src="/static/advertisement.png" alt="">
							</view>
							<view class="shop-name over fs16" style="flex: 1;font-weight: bold;">
								华莱士·全鸡汉堡...
							</view>
						</p>
						<p class='r-flex-2'>
							<view class="score">
								<span class='color-5 fs12'>4.6分</span><span class='color-7 fs12 ml10'>月售900+</span>
							</view>
							<view class="distance color-6 fs12">
								<span>30分钟</span><span class='ml10'>674m</span>
							</view>
						</p>
						<p class='fs12 color-6'>
							<span>起送￥15</span><span class='ml10 color-7'>免配送费</span>
						</p>
						<p class='fs10 '><span class='bgc-5 color-8 pg0-6 br4'>"薯条新鲜薯脆，好好吃"</span></p>
						<p class='fs12 color-2'><span class='color-9 br4 bgc-5'>30减17</span><span
								class='color-9 br4 pg0-6 bgc-5 ml10'>45减25</span>
							<!-- <span class='color-9'>V</span> -->
						</p>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				location: '定位获取失败',
				tip: '美食果蔬医药·30分钟送达',
				keyword: '',
				goods: [],
			}
		},
		methods: {
			search() {
				this.keyword = ''
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home {
		height: calc(100vh - 62px);
	}

	.good-list {
		.good-item {
			min-height: 7.75rem;
			// padding: 0.625rem 0.75rem 0.5rem 7.8125rem;

			.intro {
				p {
					padding: 0.125rem 0;
				}
			}
		}
	}

	.home-ele {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 44px;
		background-image: linear-gradient(90deg, rgb(41, 202, 255) 0%, rgb(0, 171, 245) 100%);
		opacity: 1;
	}

	.ele {

		height: 44px;
		line-height: 44px;
		margin-left: 0.75rem;
		z-index: 999;
		color: #fff;
		font-size: 1.125rem;
		font-weight: bold;
	}

	.home-address {
		margin-top: 44px;
		background-image: linear-gradient(90deg, rgb(41, 202, 255) 0%, rgb(0, 171, 245) 100%);

		.address {
			z-index: 51;
			padding: 0.75rem 0.75rem 0;
			margin-bottom: 0;
			background-color: #f5f5f5;
			border-radius: 1.25rem 1.25rem 0 0;

			.location {
				.location-icon {
					width: 1.125rem;
					height: 1.125rem;
					margin-right: 0.25rem;
					background-image: url('../../static/location.png');
					background-repeat: no-repeat;
					background-position: center center;
					background-size: 1.125rem 1.125rem;
				}

				.location-txt {
					max-width: 9.53125rem;
					margin-right: 0.28125rem;
					overflow: hidden;
					font-size: 1rem;
					font-weight: 500;
					line-height: normal;
					color: #333;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}

			.right {
				font-size: 0.75rem;
				line-height: 1;
				color: #999;
			}

		}


	}

	.search {
		input {
			flex: 1;
			// width: calc(100% - 4.125rem);
		}

		.search-btn {
			width: 4.125rem;
			height: 1.8rem;
			line-height: 1.78rem;
			color: #fff;
			text-align: center;
		}
	}

	.recomment-shops {

		&::before {
			content: '';
			width: 7.1875rem;
			height: 0.03125rem;
			background-color: #ccc;
		}

		&::after {
			content: '';
			width: 7.1875rem;
			height: 0.03125rem;
			background-color: #ccc;
		}
	}
</style>
