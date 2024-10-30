/*
 * @Author: liubo
 * @CreatDate: 2020-04-22 13:57:40
 * @Describe: 词云
 */

import React from "react";
import { merge } from "../common/utils";
import WrapCharts from "../common/WrapCharts";
// 按需引入图表类型
import "echarts-wordcloud";

// 内置默认数据
const defaultOption = {
	series: {
		data: [
			{ name: " 张三", value: 30 },
			{ name: " 李四", value: 24 },
			{ name: " 王五", value: 21 },
			{ name: " 娜拉", value: 10 },
			{ name: " 李白", value: 14 },
			{ name: " 成吉思汗", value: 11 },
			{ name: " 李世民", value: 21 },
			{ name: " 陈宫", value: 33 },
			{ name: " 成龙", value: 8 },
			{ name: " 李小龙", value: 9 },
			{ name: " 乌兰巴托", value: 12 },
			{ name: " 小燕子", value: 34 },
			{ name: " 古天乐", value: 12 },
			{ name: " 罗志祥", value: 16 },
			{ name: " 周扬青", value: 19 },
			{ name: " 杨蛋蛋", value: 28 },
			{ name: " 王宝强", value: 24 },
			{ name: " 马蓉", value: 11 }
		]
	}
};

export default props => {
	const { option = {} } = props;

	const hasMock = !(option && option.series);
	let options = {
		tooltip: {},
		series: {
			type: "wordCloud",
			// Shape can be 'circle', 'cardioid', 'diamond', 'triangle-forward', 'triangle', 'pentagon', 'star'
			shape: "circle",
			gridSize: 15, // 网格尺寸
			sizeRange: [12, 40], // 尺寸范围
			textStyle: {
				color: function() {
					return "rgb(" + [
						Math.round(Math.random() * 160),
						Math.round(Math.random() * 160),
						Math.round(Math.random() * 160)
					].join(",") + ")";
				}
			},
			emphasis: {
				textStyle: {
					shadowBlur: 10,
					shadowColor: "#333"
				}
			}
		},
		grid: {
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			containLabel: true
		}
	};

	let sourceOption = hasMock ? defaultOption : option;
	options = merge(sourceOption, options);

	return (
		<WrapCharts {...props} option={options} />
	);
};

