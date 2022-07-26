<template>
	<view class="confirm">
		<uni-card note="Tips">
			<view class="tabs color-1 r-flex-4 ">
				<text>外卖配送</text>
				<text>到店自取</text>
			</view>
			<view class="address mg10-0">
				<input type="text" v-model='address' class="fs18 color-1 ">
				<p class="color-3 mg5-0" v-if="$getStorage('token')">
					<span class="mr5">{{$getStorage('token').nickname}}</span>
					<span>{{$getStorage('token').phone}}</span>
				</p>
			</view>
			<view class="way color-1">
				<p class="mg10-0">立即送出</p>
				<p class="mg10-0">支付方式</p>
			</view>
		</uni-card>
		<uni-card>
			<view class="info color-1">
				<view class="shop-name over fs12 color-3">华莱士</view>
				<view class="order mg10-0">
					<view class="order-item r-flex-2">
						<view class="r-flex-1">
							<view class="img-box46 mr10">
								<img src="/static/logo.png" alt="">
							</view>
							<view class="order-name ">
								<p class="fwbold">香辣</p>
								<p class="color-3 fs12">x1</p>
							</view>
						</view>
						<view class="order-price">
							<p><span class="fs12">￥</span><span class="fs16">19.90</span></p>
							<p class="color-3" style="text-decoration: line-through; text-align: end;"><span
									class="fs12">￥</span>46</p>
						</view>
					</view>
					<view class="tip mg10-0 fs14">
						<p class="r-flex-2">
							<view class="r-flex-1">
								<span>包装费</span>
								<span class="ml5 fs10 color-3">?</span>
							</view>
							<view>
								<span class="fs12">￥</span><span class="fs16">1.99</span>
							</view>
						</p>
						<p>
						<p class="r-flex-2">
							<view class="r-flex-1">
								<span>配送费(蓝骑士专送)</span>
								<span class="ml5 fs10 color-3">?</span>
							</view>
							<view>
								<span class="fs12">￥</span><span class="fs16">2.5</span>
							</view>
						</p>
						<p class="r-flex-2   color-3">
							<span class="fs10 over">夜间配送，配送费原价上调，另可享配送费活动减免4元</span>
							<span class=" fs10 text-line-through "><span>￥</span><span>1.99</span>
							</span>
						</p>
						<p class="r-flex-2">
							<span>红包/抵用券</span>
							<span><span class="fs10 color-3">无可用红包</span><span
									class="fs12 color-3 ml5">&gt;</span></span>
						</p>
						<p class="back r-flex-2">
							<span>下单返豆</span>
							<span class=" fs12 fwbold color-13">无可用红包</span>
						</p>

					</view>

				</view>
				<view class="r-flex-2">
					<view class="r-flex-1">
						<span class='fs12'>优惠说明</span>
						<span class="ml5">?</span>
					</view>
					<view class="r-flex-1 fs12 color-1">
						<text><span>已优惠</span><span class="color-9">￥30.1</span></text>
						<text class="ml5 r-flex-1"><span>小计￥</span><span class="fs16">24.39</span></text>
					</view>
				</view>
			</view>
		</uni-card>
		<view class="pay r-flex-6 bgc-2 pg5-12">
			<view class="mr10">
				<p><span class="fs12">合计￥</span><span class="fs16">24.39</span></p>
				<p class="fs12 color-9">已优惠￥30.1</p>
			</view>
			<view class="pay-btn pg10-20 bgc-8 color-4 " @click="pay()">
				提交订单
			</view>
		</view>
	</view>
</template>

<script>
	import uniCard from '@/uni_modules/uni-card/components/uni-card/uni-card'
	export default {
		data() {
			return {
				price: 0,
				num: 0,
				address: '福州软件园大道89号'
			}
		},
		components: {
			uniCard,
		},
		onLoad: function(option) {
			this.price = option.price
			this.num = option.num
		},
		methods: {
			pay() {
				if (!this.$getStorage('token')) {
					uni.navigateTo({
						url: `/pages/login/index`,
					})
				}
				if (!this.price || !this.num) return
				uni.showToast({
					title: '支付成功'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.uni-card {
		margin: 0.625rem .75rem !important;
		padding: 0 !important;
	}

	.info {
		// margin-bottom: 1.875rem;

		.tip {
			position: relative;

			&::after {
				content: '';
				width: 100%;
				height: 1px;
				margin: 0.625rem 0;
				background-color: whitesmoke;
				position: absolute;
			}
		}
	}

	.pay {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		border-top: 1px solid whitesmoke;

		.pay-btn {
			border-radius: 1.4375rem;
		}
	}
</style>
