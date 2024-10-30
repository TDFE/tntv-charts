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
	var contrastColor = "#eee";
	var axisCommon = function() {
		return {
			axisLine: {
				lineStyle: {
					color: contrastColor
				}
			},
			axisTick: {
				lineStyle: {
					color: contrastColor
				}
			},
			axisLabel: {
				textStyle: {
					color: contrastColor
				}
			},
			splitLine: {
				lineStyle: {
					type: "dashed",
					color: "#aaa"
				}
			},
			splitArea: {
				areaStyle: {
					color: contrastColor
				}
			}
		};
	};

	var colorPalette = ["#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42"];
	var theme = {
		color: colorPalette,
		backgroundColor: "#333",
		tooltip: {
			axisPointer: {
				lineStyle: {
					color: contrastColor
				},
				crossStyle: {
					color: contrastColor
				}
			}
		},
		legend: {
			top: 10,
			right: 10,
			textStyle: {
				color: contrastColor
			}
		},
		textStyle: {
			color: contrastColor
		},
		title: {
			top: 5,
			left: "center",
			textStyle: {
				color: contrastColor
			}
		},
		toolbox: {
			iconStyle: {
				borderColor: contrastColor
			}
		},
		dataZoom: {
			textStyle: {
				color: contrastColor
			}
		},
		timeline: {
			lineStyle: {
				color: contrastColor
			},
			itemStyle: {

				color: colorPalette[1]

			},
			label: {
				textStyle: {
					color: contrastColor
				}
			},
			controlStyle: {
				color: contrastColor,
				borderColor: contrastColor
			}
		},
		timeAxis: axisCommon(),
		logAxis: axisCommon(),
		valueAxis: axisCommon(),
		categoryAxis: axisCommon(),

		line: {
			symbol: "circle"
		},
		graph: {
			color: colorPalette
		},
		gauge: {
			title: {
				textStyle: {
					color: contrastColor
				}
			}
		},
		candlestick: {
			itemStyle: {
				color: "#FD1050",
				color0: "#0CF49B",
				borderColor: "#FD1050",
				borderColor0: "#0CF49B"
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
	theme.categoryAxis.splitLine.show = false;
	echarts.registerTheme("dark", theme);
}));
