"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _utils = require("../common/utils");
var _WrapCharts = _interopRequireDefault(require("../common/WrapCharts"));
require("echarts/lib/chart/bar");
require("echarts/lib/component/polar");
require("echarts/lib/component/angleAxis");
require("echarts/lib/component/radiusAxis");
/*
 * @Author: liubo
 * @CreatDate: 2020-04-22 13:57:40
 * @Describe: 环
 */

// 按需引入图表类型

// 内置默认数据
var defaultOption = {
  title: {
    text: "60%",
    // 内容
    top: "35%",
    // 文字位置
    textStyle: {
      fontSize: "20",
      // 文字大小
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
    data: [60],
    // 数据
    itemStyle: {
      normal: {
        color: "#f90" // 有数据环的颜色
      }
    }
  }
};
var _default = exports["default"] = function _default(props) {
  var _props$option = props.option,
    option = _props$option === void 0 ? {} : _props$option;
  var hasMock = true;
  var seriesObj = true;
  if (option && option.series) {
    hasMock = false;
    if (option.series.data) {
      seriesObj = true;
    } else if (option.series instanceof Array) {
      seriesObj = false;
    }
  }
  var options = {
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
  var sourceOption = hasMock ? defaultOption : option;
  options = (0, _utils.merge)(sourceOption, options);
  return /*#__PURE__*/_react["default"].createElement(_WrapCharts["default"], (0, _extends2["default"])({}, props, {
    option: options
  }));
};