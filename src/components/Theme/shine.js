(function(root, factory) {
	factory(exports, require("echarts/lib/echarts"));
}(this, function(exports, echarts) {
	var log = function(msg) {
		if (typeof console !== "undefined") {
			console && console.error && console.error(msg);
		}
	};
	if (!echarts) {
		log("ECharts is not Loaded");
		return;
	}

	var colorPalette = [
		"#c12e34", "#e6b600", "#0098d9", "#2b821d",
		"#005eaa", "#339ca8", "#cda819", "#32a487"
	];

	var theme = {

		color: colorPalette,

		title: {
			left: "center",
			textStyle: {
				fontWeight: "normal"
			}
		},

		visualMap: {
			color: ["#1790cf", "#a2d4e6"]
		},

		toolbox: {
			iconStyle: {
				borderColor: "#06467c"
			}
		},

		tooltip: {
			backgroundColor: "rgba(0,0,0,0.6)"
		},

		dataZoom: {
			dataBackgroundColor: "#dedede",
			fillerColor: "rgba(154,217,247,0.2)",
			handleColor: "#005eaa"
		},

		timeline: {
			lineStyle: {
				color: "#005eaa"
			},
			controlStyle: {
				color: "#005eaa",
				borderColor: "#005eaa"
			}
		},

		candlestick: {
			itemStyle: {
				color: "#c12e34",
				color0: "#2b821d",
				lineStyle: {
					width: 1,
					color: "#c12e34",
					color0: "#2b821d"
				}

			}
		},

		graph: {
			color: colorPalette
		},

		map: {
			label: {
				textStyle: {
					color: "#c12e34"
				}
			},
			itemStyle: {
				borderColor: "#eee",
				areaColor: "#ddd"
			},
			emphasis: {
				itemStyle: {
					areaColor: "#e6b600"
				},
				label: {
					textStyle: {
						color: "#c12e34"
					}
				}
			}
		},

		gauge: {
			axisLine: {
				show: true,
				lineStyle: {
					color: [[0.2, "#2b821d"], [0.8, "#005eaa"], [1, "#c12e34"]],
					width: 5
				}
			},
			axisTick: {
				splitNumber: 10,
				length: 8,
				lineStyle: {
					color: "auto"
				}
			},
			axisLabel: {
				textStyle: {
					color: "auto"
				}
			},
			splitLine: {
				length: 12,
				lineStyle: {
					color: "auto"
				}
			},
			pointer: {
				length: "90%",
				width: 3,
				color: "auto"
			},
			title: {
				textStyle: {
					color: "#333"
				}
			},
			detail: {
				textStyle: {
					color: "auto"
				}
			}
		},
		grid: {
			top: 45,
			left: 30,
			right: 30,
			bottom: 10,
			containLabel: true
		}
	};
	echarts.registerTheme("shine", theme);
}));
