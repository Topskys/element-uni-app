<template>
	<view class="center bgc-1">
		<view class="ele opacity1" style="height:44px;">
			<view class="ele-txt">饿了么</view>
		</view>
		<view class="account r-flex-2">
			<view class="left r-flex-1">
				<view class="avatar mr10">
					<img :src="avatar" alt="nickname" class="img-1" />
				</view>
				<!-- <view class="fs18 fw600" >立即登录</view> -->
				<view class="nickname fs18 fw600">Topskys</view>
			</view>
			<view class="right">
				<button>账户设置</button>
			</view>
		</view>
		<view class="property r-flex-2">
			<view class="property-item c-flex-2">
				<view class="property-packet"></view>
				<view class="fs12 color-2">我的资产</view>
			</view>
			<view class="property-item c-flex-2 ">
				<view class="property-red-packet"></view>
				<view class="color-2 fs13">红包</view>
				<view class="fs12 color-3">查看我的红包</view>
			</view>
			<view class="property-item c-flex-2 ">
				<view class="property-reduce"></view>
				<view class="fs13 color-2">劵包</view>
				<view class="fs12 color-3">查看我的劵</view>
			</view>
		</view>
		<view class="functions">

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				avatar: '/static/logo.png'
			}
		}
	}
</script>

<style lang="scss" scoped>
	.center {
		.ele {
			z-index: 999;

			.ele-txt {
				margin: 0 0.5rem 0 .75rem;
				color: rgb(0, 0, 0);
				font-size: 1.125rem;
				font-weight: bold;
				line-height: 44px;
			}
		}

		.account {
			height: 2.75rem;
			padding-right: 1rem;

			.left {
				.avatar {
					margin-left: 1rem;
					width: 2rem;
					height: 2rem;
				}
			}

			.right {
				>button {
					width: 5rem;
					font-size: 0.75rem;
					border-radius: 30.67px;
					border: 1px solid #ddd;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
		}

		.property {
			height: 5.9375rem;
			margin: 10px 1rem;
			background-color: #fff;
			border-radius: 0.625rem;
			flex-wrap: wrap;

			.property-item {
				width: 25%;

				.property-packet {
					background-image: url("/static/bag.png");
					width: 1.375rem;
					height: 1.375rem;
					background-repeat: no-repeat;
					background-position: center;
					background-size: contain;
					uc-perf-stat-ignore: image;
					margin-bottom: 4px;
				}

				.property-red-packet {
					background-image: url("/static/red-packet.png");
					width: 1.375rem;
					height: 1.375rem;
					background-repeat: no-repeat;
					background-position: center;
					background-size: contain;
					uc-perf-stat-ignore: image;
					margin-bottom: 4px;
				}

				.property-reduce {
					background-image: url("/static/reduce.png");
					width: 1.375rem;
					height: 1.375rem;
					background-repeat: no-repeat;
					background-position: center;
					background-size: contain;
					uc-perf-stat-ignore: image;
					margin-bottom: 4px;
				}
			}


		}
	}
</style>
