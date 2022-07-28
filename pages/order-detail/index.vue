<template>
	<view class="order-detail">
		订单详情

	</view>
</template>

<script>
	// "http://api.map.baidu.com/getscript?v=2.0&ak=A396783ee700cfdb9ba1df281ce36862&services=&t=20140930184510"
	export default {
		onLoad() {
			this.l()
		},
		methods: {
			l() {
				console.log("fg")
				uni.getLocation({
					type: 'wgs84',
					success: function(res) {
						console.log('当前位置的经度：' + res.longitude);
						console.log('当前位置的纬度：' + res.latitude);
					}
				});

			}
		}
	}
</script>

<style>

</style>
