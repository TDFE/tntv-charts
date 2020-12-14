/*
 * @Author: liubo
 * @CreatDate: 2020-04-22 13:57:40
 * @Describe: 图表包裹组件
 */

import React, { useEffect, useRef, useState } from "react";
// 按需加载echarts，注意引入文件的路径
import Echarts from "echarts/lib/echarts";
// 按需引入公共图表类型，标题，提示信息等
import "echarts/lib/component/legend";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
// 默认主题
import "../Theme/default";

export default props => {
	const { option = {}, height = 300, theme = "default", geo = {}, geoName = "", getChartInstance } = props;
	const ref = useRef();

	let [myChart, setMyChart] = useState(null);
	if (myChart) {
		myChart.setOption(option, true);
	}

	useEffect(() => {
		if (myChart) {
			myChart.dispose();
		}
		const { current } = ref;
		myChart = Echarts.init(current, theme);

		// 注册地图数据
		if (Object.keys(geo).length > 0) {
			Echarts.registerMap(geoName, geo);
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
				myChart.dispose();
			}
		};
	}, [theme]);

	return (
		<div ref={ref} style={{ height }}></div>
	);
};

