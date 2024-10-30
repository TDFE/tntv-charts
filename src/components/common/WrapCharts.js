/*
 * @Author: liubo
 * @CreatDate: 2020-04-22 13:57:40
 * @Describe: 图表包裹组件
 */

import React, { useEffect, useRef, useState } from "react";
// 按需加载echarts，注意引入文件的路径
// import * as Echarts from "echarts/lib/echarts";
// import * as echarts from "echarts";
import * as echarts from "echarts/core";
import { FunnelChart } from "echarts/charts";
import {
	TitleComponent,
	TooltipComponent,
	GridComponent,
	LegendComponent,
	LegendScrollComponent
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
// 默认主题
import "../Theme/default";

// 注册必需的组件
echarts.use([
	FunnelChart,
	TitleComponent,
	TooltipComponent,
	GridComponent,
	LegendComponent,
	LegendScrollComponent,
	CanvasRenderer
]);

export default (props) => {
	const {
		option = {},
		height = 300,
		theme = "default",
		geo = {},
		geoName = "",
		getChartInstance
	} = props;
	const ref = useRef();

	let [myChart, setMyChart] = useState(null);
	if (myChart) {
		myChart.setOption(option, true);
	}

	useEffect(() => {
		if (myChart) {
			myChart.clear();
			myChart.dispose();
		}
		const { current } = ref;
		myChart = echarts.init(current, theme);

		// 注册地图数据
		if (Object.keys(geo).length > 0) {
			echarts.registerMap(geoName, {geoJSON: geo});
		}

		myChart.setOption(option, true);
		setMyChart(myChart);
		getChartInstance && getChartInstance(myChart);

		function resize() {
			myChart.resize();
		}

		window.addEventListener("resize", resize);
		return () => {
			window.removeEventListener("resize", resize);
			if (myChart) {
				myChart.clear();
				myChart.dispose();
			}
		};
	}, [theme]);

	return <div ref={ref} style={{ height }}></div>;
};
