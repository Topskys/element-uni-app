<template>
	<view class="home">
		<view class="home-ele">
			<view class="ele">
				饿了么
			</view>
		</view>
		<view class="home-address">
			<view class="address r-flex-2">
				<view class="location r-flex-1">
					<view class="location-icon"></view>
					<view class="location-txt">{{location}}</view>
				</view>
				<view class="right">{{tip}}</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				location: '定位获取失败',
				tip: '美食果蔬医药·30分钟送达',
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home-ele {
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
		background-image: linear-gradient(90deg, rgb(41, 202, 255) 0%, rgb(0, 171, 245) 100%);

		.address {
			z-index: 51;
			padding: 0.75rem 0.75rem 0;
			margin-bottom: 0;
			background-color: #fff;
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
</style>
