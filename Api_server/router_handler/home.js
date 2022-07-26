
// 登录
exports.login = (req, res) => {
	console.log("Hello",new Date())
	const account=req.query.user;
	const pwd=req.query.pwd;
	if(account==pwd){
		res.send({
			status: 200,
			info:{
				account: account,
				nickname:'罗先生',
				phone:1868086428,
				address:"",
				age:18,
			}
		})
	}
}


// catelist
exports.categoryList=(req, res)=>{
	const imgBaseUrl='https://fuss10.elemecdn.com'
	res.send({
		status:200,
		list:[
			{
			icon: imgBaseUrl+"/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",
			title: "甜品饮品"
		},
		{
			icon: imgBaseUrl+"/0/da/f42235e6929a5cb0e7013115ce78djpeg.jpeg",
			title: "商超便利"
		},
		{
			icon: imgBaseUrl+"/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg",
			title: "美食"
		},
		{
			icon:imgBaseUrl+ "/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg",
			title: "简餐"
		},
		{
			icon: imgBaseUrl+"/3/84/8e031bf7b3c036b4ec19edff16e46jpeg.jpeg",
			title: "新店特惠"
		},
		{
			icon: imgBaseUrl+"/3/84/8e031bf7b3c036b4ec19edff16e46jpeg.jpeg",
			title: "准时达"
		},{
			icon: imgBaseUrl+"/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg",
			title: "预订早餐"
		},{
			icon: imgBaseUrl+"/e/7e/02b72b5e63c127d5bfae57b8e4ab1jpeg.jpeg",
			title: "土豪推荐"
		},
		{
			icon: imgBaseUrl+"/9/7c/9700836a33e05c2410bda8da59117jpeg.jpeg",
			title: "川湘菜"
		},{
			icon: imgBaseUrl+"/3/c7/a9ef469a12e7a596b559145b87f09jpeg.jpeg",
			title: "麻辣烫"
		},{
			icon: imgBaseUrl+"/2/17/244241b514affc0f12f4168cf6628jpeg.jpeg",
			title: "包子粥店"
		},{
			icon: imgBaseUrl+"/8/83/171fd98b85dee3b3f4243b7459b48jpeg.jpeg",
			title: "鲜花蛋糕"
		},{
			icon: imgBaseUrl+"/6/1a/1e0f448be0624c62db416e864d2afjpeg.jpeg",
			title: "日韩料理"
		},{
			icon: imgBaseUrl+"/4/34/ea0d51c9608310cf41faa5de6b8efjpeg.jpeg",
			title: "果蔬生鲜"
		},{
			icon: imgBaseUrl+"/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg",
			title: "汉堡薯条"
		},{
			icon: imgBaseUrl+"/7/b6/235761e50d391445f021922b71789jpeg.jpeg",
			title: "披萨意面"
		}
	]
	})
}

// 商家列表
exports.shopList= (req, res) => {
	res.send({
		status:200,
		list:[{
		
"name": "华莱士",
"address": "广东省广州市越秀区中山五路219号华联购物中心F1",
"id": 1,
"latitude": 23.12497,
"longitude": 113.26308,
"location": [
113.26308,
23.12497
],
"phone": "13437850035",
"category": "快餐便当/简餐",
"supports": [],
"status": 1,
"recent_order_num": 106,
"rating_count": 961,
"rating": 4.7,
"promotion_info": "热情掌柜",
"piecewise_agent_fee": {
"tips": "配送费约¥5"
},
"opening_hours": [
"8:30/20:30"
],
"license": {
"catering_service_license_image": "https://gw.alicdn.com/tfs/TB1HmQ0bODsXe8jSZR0XXXK6FXa-68-36.png",
"business_license_image": "https://gw.alicdn.com/tfs/TB1HmQ0bODsXe8jSZR0XXXK6FXa-68-36.png"
},
"is_new": true,
"is_premium": true,
"image_path": "https://img.alicdn.com/imgextra/i1/2201077674987/O1CN01oyWJmp1mi5vFM47bj_!!2201077674987-0-koubei.jpg_400x400Q85s50.jpg_.webp",
"identification": {
"registered_number": "",
"registered_address": "",
"operation_period": "",
"licenses_scope": "",
"licenses_number": "",
"licenses_date": "",
"legal_person": "",
"identificate_date": null,
"identificate_agency": "",
"company_name": ""
},
"float_minimum_order_amount": 20,
"float_delivery_fee": 5,
"distance": "10公里",
"order_lead_time": "40分钟",
"description": "sad",
"delivery_mode": {
"color": "57A9FF",
"id": 1,
"is_solid": true,
"text": "蜂鸟专送"
},
"activities": [],
"__v": 0
},{
"name": "塔斯汀",
"address": "上海市浦东新区中科",
"id": 2,
"latitude": 34.563215,
"longitude": 113.888708,
"location": [
113.76077,
34.73822
],
"phone": "11526161616",
"category": "快餐便当",
"supports": [
{
"description": "已加入“外卖保”计划，食品安全有保障",
"icon_color": "999999",
"icon_name": "保",
"id": 7,
"name": "外卖保",
"_id": "5bfc9a30d51a913e8655d397"
},
{
"description": "准时必达，超时秒赔",
"icon_color": "57A9FF",
"icon_name": "准",
"id": 9,
"name": "准时达",
"_id": "5bfc9a30d51a913e8655d396"
},
{
"description": "该商家支持开发票，请在下单时填写好发票抬头",
"icon_color": "999999",
"icon_name": "票",
"id": 4,
"name": "开发票",
"_id": "5bfc9a30d51a913e8655d395"
}
],
"status": 0,
"recent_order_num": 100,
"rating_count": 218,
"rating": 5,
"promotion_info": "“分量很足,非常好吃,干净卫生”",
"piecewise_agent_fee": {
"tips": "配送费约¥5"
},
"opening_hours": [
"06:30/09:00"
],
"license": {
"catering_service_license_image": "",
"business_license_image": "https://gw.alicdn.com/tfs/TB1HmQ0bODsXe8jSZR0XXXK6FXa-68-36.png"
},
"is_new": true,
"is_premium": true,
"image_path": "https://img.alicdn.com/imgextra/i4/2214299659589/O1CN012x0v3A2Khoe4kcFrv_!!2214299659589-2-koubei.png_400x400Q85s50.jpg_.webp",
"identification": {
"registered_number": "",
"registered_address": "",
"operation_period": "",
"licenses_scope": "",
"licenses_number": "",
"licenses_date": "",
"legal_person": "",
"identificate_date": null,
"identificate_agency": "",
"company_name": ""
},
"float_minimum_order_amount": 20,
"float_delivery_fee": 5,
"distance": "10公里",
"order_lead_time": "40分钟",
"description": "cvvv452se",
"delivery_mode": {
"color": "57A9FF",
"id": 1,
"is_solid": true,
"text": "蜂鸟专送"
},
"activities": [
{
"icon_name": "减",
"name": "满减优惠",
"description": "满30减5，满60减8",
"icon_color": "f07373",
"id": 1,
"_id": "5bfc9a30d51a913e8655d398"
}
],
"__v": 0
},
{
"name": "串烧",
"address": "湖南省长沙市岳麓区茶子山路19号(政府对面长郡中学西侧)",
"id": 3,
"latitude": 39.044098,
"longitude": 121.749497,
"location": [
113.156124,
23.46175
],
"phone": "121345678900",
"category": "快餐便当",
"supports": [
{
"description": "已加入“外卖保”计划，食品安全有保障",
"icon_color": "999999",
"icon_name": "保",
"id": 7,
"name": "外卖保",
"_id": "5bfd051cd51a913e8655d827"
},
{
"description": "准时必达，超时秒赔",
"icon_color": "57A9FF",
"icon_name": "准",
"id": 9,
"name": "准时达",
"_id": "5bfd051cd51a913e8655d826"
},
{
"description": "该商家支持开发票，请在下单时填写好发票抬头",
"icon_color": "999999",
"icon_name": "票",
"id": 4,
"name": "开发票",
"_id": "5bfd051cd51a913e8655d825"
}
],
"status": 1,
"recent_order_num": 54,
"rating_count": 670,
"rating": 4.3,
"promotion_info": "招牌秘制小龙虾不错的,下次还点",
"piecewise_agent_fee": {
"tips": "配送费约¥5"
},
"opening_hours": [
"8:30/20:30"
],
"license": {
"catering_service_license_image": "https://gw.alicdn.com/tfs/TB1HmQ0bODsXe8jSZR0XXXK6FXa-68-36.png",
"business_license_image": "https://gw.alicdn.com/tfs/TB1HmQ0bODsXe8jSZR0XXXK6FXa-68-36.png"
},
"is_new": true,
"is_premium": true,
"image_path": "https://img.alicdn.com/imgextra/i1/2208276648981/O1CN01wLxmz02GDLpLANpx6_!!2208276648981-0-koubei.jpg_400x400Q85s50.jpg_.webp",
"identification": {
"registered_number": "",
"registered_address": "",
"operation_period": "",
"licenses_scope": "",
"licenses_number": "",
"licenses_date": "",
"legal_person": "",
"identificate_date": null,
"identificate_agency": "",
"company_name": ""
},
"float_minimum_order_amount": 20,
"float_delivery_fee": 5,
"distance": "10公里",
"order_lead_time": "40分钟",
"description": "互惠1",
"delivery_mode": {
"color": "57A9FF",
"id": 1,
"is_solid": true,
"text": "蜂鸟专送"
},
"activities": [
{
"icon_name": "特",
"name": "优惠大酬宾",
"description": "111",
"icon_color": "EDC123",
"id": 1,
"_id": "5bfd051cd51a913e8655d82a"
},
{
"icon_name": "新",
"name": "新用户立减",
"description": "2123",
"icon_color": "70bc46",
"id": 2,
"_id": "5bfd051cd51a913e8655d829"
},
{
"icon_name": "领",
"name": "进店领券",
"description": "23123",
"icon_color": "E3EE0D",
"id": 3,
"_id": "5bfd051cd51a913e8655d828"
}
],
"__v": 0
},
]})
}



// 商家详情
exports.shopDetail=(req, res)=>{
	let id=parseInt(req.query.id)
	console.log(id)
	if(id%2!==0){
		res.send(
		{
			status: 200,
			shop_detail: {
				name:'华莱士(杨桥西路点)',
				img:'https://img.alicdn.com/imgextra/i1/2201077674987/O1CN01oyWJmp1mi5vFM47bj_!!2201077674987-0-koubei.jpg_400x400Q85s50.jpg',
				score:'4.7分',
				express:'商家配送',
				need_time:'约42分钟',
				sell:'月销1031',
				tips:'商家公告未见商品请备注，到付135 5910 6259。外卖如有遗漏或拿错，不论产品金额大小，请您及时来电，我们将立即为您(补差价.更换.补送)100%处理！',
				reduce:6,
				tags: [],
			}
		})
	}else{
		res.send(
		{
			status: 200,
			shop_detail: {
				name:'塔斯汀·中国汉堡（金辉淮）',
				img:'https://img.alicdn.com/imgextra/i4/2214299659589/O1CN012x0v3A2Khoe4kcFrv_!!2214299659589-2-koubei.png_400x400Q85s50.jpg_.webp',
				score:'4.2分',
				express:'商家配送',
				need_time:'约65分钟',
				sell:'月销190',
				tips:'商家公告未见商品请备注，到付135 5910 6259。外卖如有遗漏或拿错，不论产品金额大小，请您及时来电，我们将立即为您(补差价.更换.补送)100%处理！',
				reduce:7,
				tags: [],
			}
		})
	}

	
		// 
}

// 商品分类列表
exports.goodCateList=(req, res)=>{
	res.send({
		status: 200,
		list:[
			{
				id:1,
				title: "单品活动",
			},
			{
				id:2,
				title: "满减活动",
			},
			{
				id:3,
				title: "热销爆款",
			},
			{
				id:4,
				title: "阳光果切",
			},
			{
				id:5,
				title: "水果礼盒",
			},
			{
				id:6,
				title: "零食果汁",
			},
			{
				id:7,
				title: "榴莲山竹",
			}
		]
	})
}


// 商品信息
exports.goodInfo= (req, res) => {
	let id=parseInt(req.query.id)
	console.log(id)
	if(id%2==0){
		res.send({
			status: 200,
			list: [
				{
			id:1,
			title: "百事可乐",
			price: 45.88,
			img:'https://img.alicdn.com/i4/2206645345433/O1CN01Luptcr1q0MOgFIQNE_!!2206645345433-0-eleretail.jpg_460x460Q90s50g_.webp',
			sell:'68份',
			tips:'福安名产',
		},
		{
			id:2,
			title: "百事可乐",
			price: 45.88,
			img:'https://img.alicdn.com/i4/2206645345433/O1CN01Luptcr1q0MOgFIQNE_!!2206645345433-0-eleretail.jpg_460x460Q90s50g_.webp',
			sell:'68份',
			tips:'福安名产',
		},{
			id:3,
			title: "百事可乐",
			price: 45.88,
			img:'https://img.alicdn.com/i4/2206645345433/O1CN01Luptcr1q0MOgFIQNE_!!2206645345433-0-eleretail.jpg_460x460Q90s50g_.webp',
			sell:'68份',
			tips:'福安名产',
		},{
			id:4,
			title: "百事可乐",
			price: 45.88,
			img:'https://img.alicdn.com/i4/2206645345433/O1CN01Luptcr1q0MOgFIQNE_!!2206645345433-0-eleretail.jpg_460x460Q90s50g_.webp',
			sell:'68份',
			tips:'福安名产',
		},{
			id:5,
			title: "百事可乐",
			price: 45.88,
			img:'https://img.alicdn.com/i4/2206645345433/O1CN01Luptcr1q0MOgFIQNE_!!2206645345433-0-eleretail.jpg_460x460Q90s50g_.webp',
			sell:'68份',
			tips:'福安名产',
		},{
			id:6,
			title: "百事可乐",
			price: 45.88,
			img:'https://img.alicdn.com/i4/2206645345433/O1CN01Luptcr1q0MOgFIQNE_!!2206645345433-0-eleretail.jpg_460x460Q90s50g_.webp',
			sell:'68份',
			tips:'福安名产',
		},{
			id:7,
			title: "百事可乐",
			price: 45.88,
			img:'https://img.alicdn.com/i4/2206645345433/O1CN01Luptcr1q0MOgFIQNE_!!2206645345433-0-eleretail.jpg_460x460Q90s50g_.webp',
			sell:'68份',
			tips:'福安名产',
		},{
			id:8,
			title: "百事可乐",
			price: 45.88,
			img:'https://img.alicdn.com/i4/2206645345433/O1CN01Luptcr1q0MOgFIQNE_!!2206645345433-0-eleretail.jpg_460x460Q90s50g_.webp',
			sell:'68份',
			tips:'福安名产',
		},{
			id:9,
			title: "百事可乐",
			price: 45.88,
			img:'https://img.alicdn.com/i4/2206645345433/O1CN01Luptcr1q0MOgFIQNE_!!2206645345433-0-eleretail.jpg_460x460Q90s50g_.webp',
			sell:'68份',
			tips:'福安名产',
		},{
			id:10,
			title: "百事可乐",
			price: 45.88,
			img:'https://img.alicdn.com/i4/2206645345433/O1CN01Luptcr1q0MOgFIQNE_!!2206645345433-0-eleretail.jpg_460x460Q90s50g_.webp',
			sell:'68份',
			tips:'福安名产',
		},{
			id:11,
			title: "百事可乐",
			price: 45.88,
			img:'https://img.alicdn.com/i4/2206645345433/O1CN01Luptcr1q0MOgFIQNE_!!2206645345433-0-eleretail.jpg_460x460Q90s50g_.webp',
			sell:'68份',
			tips:'福安名产',
		},{
			id:12,
			title: "百事可乐",
			price: 45.88,
			img:'https://img.alicdn.com/i4/2206645345433/O1CN01Luptcr1q0MOgFIQNE_!!2206645345433-0-eleretail.jpg_460x460Q90s50g_.webp',
			sell:'68份',
			tips:'福安名产',
		},{
			id:13,
			title: "百事可乐",
			price: 45.88,
			img:'https://img.alicdn.com/i4/2206645345433/O1CN01Luptcr1q0MOgFIQNE_!!2206645345433-0-eleretail.jpg_460x460Q90s50g_.webp',
			sell:'68份',
			tips:'福安名产',
		},{
			id:14,
			title: "百事可乐",
			price: 45.88,
			img:'https://img.alicdn.com/i4/2206645345433/O1CN01Luptcr1q0MOgFIQNE_!!2206645345433-0-eleretail.jpg_460x460Q90s50g_.webp',
			sell:'68份',
			tips:'福安名产',
		}]})
	}else{
		res.send({
		status: 200,
		list: [
		{
			id:1,
			title: "(进口)喜力啤酒330ml/听",
			price: 9.90,
			img:'https://img.alicdn.com/i1/111483146/O1CN01AUf8HC1Z6uh1okFa3_!!111483146-2-eleretail.png_1200x1200Q90s50g_.webp',
			sell:'567份',
			tips:'德国',
		},
		{
			id:2,
			title: "(进口)喜力啤酒330ml/听",
			price: 9.90,
			img:'https://img.alicdn.com/i1/111483146/O1CN01AUf8HC1Z6uh1okFa3_!!111483146-2-eleretail.png_1200x1200Q90s50g_.webp',
			sell:'567份',
			tips:'德国',
		},{
			id:3,
			title: "(进口)喜力啤酒330ml/听",
			price: 9.90,
			img:'https://img.alicdn.com/i1/111483146/O1CN01AUf8HC1Z6uh1okFa3_!!111483146-2-eleretail.png_1200x1200Q90s50g_.webp',
			sell:'567份',
			tips:'德国',
		},{
			id:4,
			title: "(进口)喜力啤酒330ml/听",
			price: 9.90,
			img:'https://img.alicdn.com/i1/111483146/O1CN01AUf8HC1Z6uh1okFa3_!!111483146-2-eleretail.png_1200x1200Q90s50g_.webp',
			sell:'567份',
			tips:'德国',
		},{
			id:5,
			title: "(进口)喜力啤酒330ml/听",
			price: 9.90,
			img:'https://img.alicdn.com/i1/111483146/O1CN01AUf8HC1Z6uh1okFa3_!!111483146-2-eleretail.png_1200x1200Q90s50g_.webp',
			sell:'567份',
			tips:'德国',
		},{
			id:6,
			title: "(进口)喜力啤酒330ml/听",
			price: 9.90,
			img:'https://img.alicdn.com/i1/111483146/O1CN01AUf8HC1Z6uh1okFa3_!!111483146-2-eleretail.png_1200x1200Q90s50g_.webp',
			sell:'567份',
			tips:'德国',
		},{
			id:7,
			title: "(进口)喜力啤酒330ml/听",
			price: 9.90,
			img:'https://img.alicdn.com/i1/111483146/O1CN01AUf8HC1Z6uh1okFa3_!!111483146-2-eleretail.png_1200x1200Q90s50g_.webp',
			sell:'567份',
			tips:'德国',
		},{
			id:8,
			title: "(进口)喜力啤酒330ml/听",
			price: 9.90,
			img:'https://img.alicdn.com/i1/111483146/O1CN01AUf8HC1Z6uh1okFa3_!!111483146-2-eleretail.png_1200x1200Q90s50g_.webp',
			sell:'567份',
			tips:'德国',
		},{
			id:9,
			title: "(进口)喜力啤酒330ml/听",
			price: 9.90,
			img:'https://img.alicdn.com/i1/111483146/O1CN01AUf8HC1Z6uh1okFa3_!!111483146-2-eleretail.png_1200x1200Q90s50g_.webp',
			sell:'567份',
			tips:'德国',
		},{
			id:10,
			title: "(进口)喜力啤酒330ml/听",
			price: 9.90,
			img:'https://img.alicdn.com/i1/111483146/O1CN01AUf8HC1Z6uh1okFa3_!!111483146-2-eleretail.png_1200x1200Q90s50g_.webp',
			sell:'567份',
			tips:'德国',
		},{
			id:11,
			title: "(进口)喜力啤酒330ml/听",
			price: 9.90,
			img:'https://img.alicdn.com/i1/111483146/O1CN01AUf8HC1Z6uh1okFa3_!!111483146-2-eleretail.png_1200x1200Q90s50g_.webp',
			sell:'567份',
			tips:'德国',
		},
		

	]})
	}
}


// 获取轮播图处理函数
exports.banner = (req, res) => {
	res.send({
		status: 200,
		banners: [{
				id: 1,
				imgUrl: 'https://img2.baidu.com/it/u=565131110,1019873086&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=213',
			},
			{
				id: 2,
				imgUrl: 'https://img2.baidu.com/it/u=2117849157,1090834569&fm=253&fmt=auto&app=138&f=JPEG?w=1920&h=450',
			},
			{
				id: 3,
				imgUrl: 'https://img2.baidu.com/it/u=811612525,2038032208&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=273',
			}
		]
	})
}


//商品数据
exports.goods = (req, res) => {

	res.send({
		status: 200,
		goods: [{
				id: 80,
				name: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
				imgUrl: 'https://img2.baidu.com/it/u=630073645,435613256&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
				sell_price: 2199,
				market_price: 3999,
				add_time: 234567896554,
				click: 0,
				stock_quantity: 60,
			},
			{
				id: 81,
				name: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
				imgUrl: 'https://img2.baidu.com/it/u=2587088083,2201480197&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375',
				sell_price: 2199,
				market_price: 3999,
				add_time: 234567896554,
				click: 0,
				stock_quantity: 60,
			},
			{
				id: 82,
				name: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
				imgUrl: 'https://img1.baidu.com/it/u=3716490085,3300901908&fm=253&fmt=auto&app=138&f=JPEG?w=539&h=500',
				sell_price: 2199,
				market_price: 3999,
				add_time: 234567896554,
				click: 0,
				stock_quantity: 60,
			},
			{
				id: 83,
				name: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
				imgUrl: 'https://img1.baidu.com/it/u=4058525751,1868086428&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
				sell_price: 2199,
				market_price: 3999,
				add_time: 234567896554,
				click: 0,
				stock_quantity: 60,
			},
			{
				id: 84,
				name: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
				imgUrl: 'https://img0.baidu.com/it/u=1903415377,57708049&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=946',
				sell_price: 2199,
				market_price: 3999,
				add_time: 234567896554,
				click: 0,
				stock_quantity: 60,
			},
			{
				id: 85,
				name: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
				imgUrl: 'https://img0.baidu.com/it/u=1903415377,57708049&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=946',
				sell_price: 2199,
				market_price: 3999,
				add_time: 234567896554,
				click: 0,
				stock_quantity: 60,
			},
			{
				id: 86,
				name: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
				imgUrl: 'https://img0.baidu.com/it/u=1903415377,57708049&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=946',
				sell_price: 2199,
				market_price: 3999,
				add_time: 234567896554,
				click: 0,
				stock_quantity: 60,
			},
			{
				id: 87,
				name: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
				imgUrl: 'https://img0.baidu.com/it/u=1903415377,57708049&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=946',
				sell_price: 2199,
				market_price: 3999,
				add_time: 234567896554,
				click: 0,
				stock_quantity: 60,
			},
			{
				id: 88,
				name: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
				imgUrl: 'https://img0.baidu.com/it/u=1903415377,57708049&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=946',
				sell_price: 2199,
				market_price: 3999,
				add_time: 234567896554,
				click: 0,
				stock_quantity: 60,
			},
			{
				id: 89,
				name: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
				imgUrl: 'https://img0.baidu.com/it/u=1903415377,57708049&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=946',
				sell_price: 2199,
				market_price: 3999,
				add_time: 234567896554,
				click: 0,
				stock_quantity: 60,
			},
			{
				id: 90,
				name: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
				imgUrl: 'https://img0.baidu.com/it/u=1903415377,57708049&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=946',
				sell_price: 2199,
				market_price: 3999,
				add_time: 234567896554,
				click: 0,
				stock_quantity: 60,
			},
			{
				id: 91,
				name: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
				imgUrl: 'https://img0.baidu.com/it/u=1903415377,57708049&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=946',
				sell_price: 2199,
				market_price: 3999,
				add_time: 234567896554,
				click: 0,
				stock_quantity: 60,
			},
			{
				id: 92,
				name: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
				imgUrl: 'https://img0.baidu.com/it/u=1903415377,57708049&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=946',
				sell_price: 2199,
				market_price: 3999,
				add_time: 234567896554,
				click: 0,
				stock_quantity: 60,
			},
			{
				id: 93,
				name: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
				imgUrl: 'https://img0.baidu.com/it/u=1903415377,57708049&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=946',
				sell_price: 2199,
				market_price: 3999,
				add_time: 234567896554,
				click: 0,
				stock_quantity: 60,
			},
			{
				id: 94,
				name: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
				imgUrl: 'https://img0.baidu.com/it/u=1903415377,57708049&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=946',
				sell_price: 2199,
				market_price: 3999,
				add_time: 234567896554,
				click: 0,
				stock_quantity: 60,
			}
		]
	})
}

//获取图片分类
exports.imgcates = (req, res) => {
	res.send({
		status: 200,
		cates: [{
				title: "家居生活",
				id: 14,
			},
			{
				title: "摄影设计",
				id: 15
			}, {
				title: "明星美女",
				id: 16
			}, {
				title: "空间设计",
				id: 17
			}, {
				title: "户型装饰",
				id: 18
			}, {
				title: "广告摄影",
				id: 19
			}, {
				title: "摄影学习",
				id: 20
			}, {
				title: "摄影器材",
				id: 21
			}, {
				title: "明星写真",
				id: 22
			}, {
				title: "清纯甜美",
				id: 23
			}, {
				title: "古典美女",
				id: 24
			}
		]
	})
}



//获取cate图片imgs
exports.imgs = (req, res) => {
	const id = parseInt(req.params.id) //获取请求路径上的参数 /:id----{ id: '14' 
	console.log("get_imgs_id:", id)

	switch (id) {
		case 14:

			res.send({
				status: 200,
				imgs: [{
						id: 80,
						title: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
						img_url: 'https://img0.baidu.com/it/u=1903415377,57708049&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=946'
					},
					{
						id: 81,
						title: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
						img_url: 'https://img0.baidu.com/it/u=1903415377,57708049&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=946'
					},
					{
						id: 82,
						title: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
						img_url: 'https://img0.baidu.com/it/u=1903415377,57708049&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=946'
					},

				]
			})
			break
		case 15:
			res.send({
				status: 200,
				imgs: [{
						id: 80,
						title: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
						img_url: 'https://img2.baidu.com/it/u=2587088083,2201480197&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375'
					},
					{
						id: 81,
						title: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
						img_url: 'https://img0.baidu.com/it/u=1903415377,57708049&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=946'
					},
					{
						id: 82,
						title: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
						img_url: 'https://img2.baidu.com/it/u=2587088083,2201480197&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375'
					},

				]
			})
			break

		default:
			return
	}
}



//news获取处理函数
exports.newslist = (req, res) => {
	console.log('newslist')
	res.send({
		status: 200,
		newslist: [{
				id: 13,
				title: '滚动播报｜千股飘红！A股港股午后异动拉升，沪指收复3000点',
				img_url: 'http://inews.gtimg.com/newsapp_ls/0/14824592533_640330/0',
				add_time: '2022-04-29',
				view_count: 45672,
			},
			{
				id: 14,
				title: '俄官员称波兰“正与美国制定秘密计划吞并乌克兰西部”，波兰否认',
				img_url: 'http://inews.gtimg.com/newsapp_ls/0/14824550061_640330/0',
				add_time: '2022-4-29',
				view_count: 23456,
			},
			{
				id: 15,
				title: '马英九称“台湾地位未定论”是“荒谬言论” 国台办回应',
				img_url: 'http://inews.gtimg.com/newsapp_ls/0/14823761941_640330/0',
				add_time: '2022-04-29',
				view_count: 75686,
			},
			{
				id: 16,
				title: '湖北一女子路边买假材料骗贷31次，工行十堰三支行损失3亿元',
				img_url: 'http://inews.gtimg.com/newsapp_ls/0/14824645858_640330/0',
				add_time: '2022-04-29',
				view_count: 657,
			},
			{
				id: 17,
				title: '绝色蓝洁瑛、星爷搭档吴孟达、黄药师曾江…撑起港片的老戏骨走了大半',
				img_url: 'http://inews.gtimg.com/newsapp_ls/0/14824270774_640330/0',
				add_time: '2022-04-29',
				view_count: 467572,
			},
			{
				id: 18,
				title: '连线北京车内自我隔离的好邻居：不想给别人添麻烦 本人高烧已退',
				img_url: 'http://inews.gtimg.com/newsapp_ls/0/14824660677_640330/0',
				add_time: '2022-04-29',
				view_count: 88898,
			},
			{
				id: 19,
				title: '银行回应“应聘者需存1000万元以上”：可通过人脉完成',
				img_url: 'http://inews.gtimg.com/newsapp_ls/0/14824643231_640330/0',
				add_time: '2022-04-29',
				view_count: 123,
			},
			{
				id: 20,
				title: '泽连斯基：联合国秘书长访问基辅期间，5枚导弹就打过来了',
				img_url: 'https://inews.gtimg.com/newsapp_bt/0/14822893116/1000',
				add_time: '2022-04-29',
				view_count: 23451,
			},
			{
				id: 21,
				title: '招行原行长田惠宇落马背后，金融反腐走向深水区',
				img_url: 'http://inews.gtimg.com/newsapp_ls/0/14824425516_640330/0',
				add_time: '2022-04-29',
				view_count: 5546,
			},
			{
				id: 22,
				title: '滚动播报｜千股飘红！A股港股午后异动拉升，沪指收复3000点',
				img_url: 'http://inews.gtimg.com/newsapp_ls/0/14824592533_640330/0',
				add_time: '2022-04-29',
				view_count: 547,
			},
			{
				id: 23,
				title: '滚动播报｜千股飘红！A股港股午后异动拉升，沪指收复3000点',
				img_url: 'http://inews.gtimg.com/newsapp_ls/0/14824592533_640330/0',
				add_time: '2022-04-29',
				view_count: 45,
			},
			{
				id: 24,
				title: '滚动播报｜千股飘红！A股港股午后异动拉升，沪指收复3000点',
				img_url: 'http://inews.gtimg.com/newsapp_ls/0/14824592533_640330/0',
				add_time: '2022-04-29',
				view_count: 4567,
			},
			{
				id: 25,
				title: '滚动播报｜千股飘红！A股港股午后异动拉升，沪指收复3000点',
				img_url: 'http://inews.gtimg.com/newsapp_ls/0/14824592533_640330/0',
				add_time: '2022-04-29',
				view_count: 672,
			},
			{
				id: 26,
				title: '滚动播报｜千股飘红！A股港股午后异动拉升，沪指收复3000点',
				img_url: 'http://inews.gtimg.com/newsapp_ls/0/14824592533_640330/0',
				add_time: '2022-04-29',
				view_count: 472,
			},
			{
				id: 27,
				title: '滚动播报｜千股飘红！A股港股午后异动拉升，沪指收复3000点',
				img_url: 'http://inews.gtimg.com/newsapp_ls/0/14824592533_640330/0',
				add_time: '2022-04-29',
				view_count: 72,
			},
			{
				id: 28,
				title: '滚动播报｜千股飘红！A股港股午后异动拉升，沪指收复3000点',
				img_url: 'http://inews.gtimg.com/newsapp_ls/0/14824592533_640330/0',
				add_time: '2022-04-29',
				view_count: 456,
			},
			{
				id: 29,
				title: '滚动播报｜千股飘红！A股港股午后异动拉升，沪指收复3000点',
				img_url: 'http://inews.gtimg.com/newsapp_ls/0/14824592533_640330/0',
				add_time: '2022-04-29',
				view_count: 2,
			}, {
				id: 30,
				title: '滚动播报｜千股飘红！A股港股午后异动拉升，沪指收复3000点',
				img_url: 'http://inews.gtimg.com/newsapp_ls/0/14824592533_640330/0',
				add_time: '2022-04-29',
				view_count: 42,
			}
		]
	})
}



//获取news详情处理函数
exports.newsDetail = (req, res) => {
	console.log('newsDetail')
	res.send({
		status: 200,
		news_detail: [{
			id: 13,
			title: '滚动播报｜资本市场异动拉升！A股收复3000点，港股科网股大涨',
			add_time: '2022-4-29',
			view_count: '3245',
			content: `离岸人民币兑美元大幅反弹400点

13点10：人民币兑美元午后持续走高，离岸人民币收复日内全部失地，较日低反弹约400点，此前一度跌破6.69。

香港恒生指数午后拉升！

13点05：香港恒生指数午后短线拉升，现涨近4%；恒生科技指数涨超10%，京东涨20%，阿里巴巴、哔哩哔哩涨超15%。

A股创业板指大涨

13点05：创业板指涨超3%，深成指涨超3%，互联网电商、教育、小家电板块涨幅居前。

沪指站上3000点

13点05：A股三大股指集体涨超2%，沪指站上3000点。创业板指涨超3%，深成指涨超3%，互联网电商、教育、小家电板块涨幅居前。`
		}]
	})
}
