/*
 * @Author: liubo
 * @CreatDate: 2020-04-22 13:57:40
 * @Describe: 环
 */

import React from "react";
import { merge } from "../common/utils";
import WrapCharts from "../common/WrapCharts";
// 按需引入图表类型
import "echarts/lib/chart/bar";
import "echarts/lib/component/polar";
import "echarts/lib/component/angleAxis";
import "echarts/lib/component/radiusAxis";

// 内置默认数据
const defaultOption = {
	title: {
		text: "60%", // 内容
		top: "35%", // 文字位置
		textStyle: {
			fontSize: "20", // 文字大小
			color: "#666" // 文字颜色
		}
	},
	polar: {
		radius: ["84%", "100%"] // 环的内外半径
	},
	series: {
		backgroundStyle: {
			color: "#f1f2f5" // 灰色环
		},
		data: [60], // 数据
		itemStyle: {
			normal: {
				color: "#f90" // 有数据环的颜色
			}
		}
	}
};

export default props => {
	const { option = {} } = props;

	let hasMock = true;
	let seriesObj = true;
	if (option && option.series) {
		hasMock = false;
		if (option.series.data) {
			seriesObj = true;
		} else if (option.series instanceof Array) {
			seriesObj = false;
		}
	}
	let options = {
		title: {
			text: "60%",
			x: "center",
			top: "45%",
			textStyle: {
				fontSize: "14",
				color: "#666"
			}
		},
		polar: {
			radius: ["84%", "100%"],
			center: ["50%", "50%"]
		},
		angleAxis: {
			max: 100,
			show: false
		},
		radiusAxis: {
			type: "category",
			show: true,
			axisLabel: {
				show: false
			},
			axisLine: {
				show: false

			},
			axisTick: {
				show: false
			}
		},
		series: {
			type: "bar",
			roundCap: true,
			barWidth: 60,
			showBackground: true,
			backgroundStyle: {
				color: "#ccc"
			},
			data: [60],
			coordinateSystem: "polar",
			itemStyle: {
				normal: {
					color: "#f90"
				}
			}
		}
	};

	let sourceOption = hasMock ? defaultOption : option;
	options = merge(sourceOption, options);

	return (
		<WrapCharts {...props} option={options} />
	);
};

