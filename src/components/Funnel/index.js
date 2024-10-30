/*
 * @Author: liubo
 * @CreatDate: 2020-04-22 13:57:40
 * @Describe: 漏斗图
 */

import React from "react";
import { merge } from "../common/utils";
import WrapCharts from "../common/WrapCharts";
// 按需引入图表类型
import * as echarts from "echarts/core";
import { FunnelChart } from "echarts/charts";
// 注册必需的组件
echarts.use([
	FunnelChart
]);

// 内置默认数据
const defaultOption = {
	legend: {
		data: ["展现", "点击", "访问", "咨询", "订单"]
	},
	series: [
		{
			name: "网站情况",
			type: "funnel",
			label: {
				show: true,
				position: "inside"
			},
			data: [
				{ value: 100, name: "展现" },
				{ value: 80, name: "点击" },
				{ value: 60, name: "访问" },
				{ value: 40, name: "咨询" },
				{ value: 20, name: "订单" }
			]
		}
	]
};

export default props => {
	const { option = {} } = props;

	const hasMock = !(option && option.series);
	let options = {
		tooltip: {
			trigger: "item"
		},
		legend: {
			right: 0
		}
	};

	let sourceOption = hasMock ? defaultOption : option;
	options = merge(sourceOption, options);

	return (
		<WrapCharts {...props} option={options} />
	);
};

