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
require("echarts/lib/chart/line");
require("echarts/lib/component/dataZoom");
/*
 * @Author: liubo
 * @CreatDate: 2020-04-22 13:57:40
 * @Describe: 折线图
 */

// 按需引入图表类型

// 内置默认数据
var defaultOption = {
  title: {
    text: "贷款金额"
  },
  legend: {
    type: "scroll",
    data: ["申请金额", "实际放款金额"]
  },
  xAxis: {
    data: ["12/11", "12/12", "12/13", "12/14", "12/15", "12/16", "12/17", "12/18", "12/19", "12/20"]
  },
  yAxis: {
    name: "单位：万"
  },
  series: [{
    name: "申请金额",
    data: [20, 32, 18, 34, 50, 60, 55, 40, 30, 40],
    type: "line",
    smooth: true
  }, {
    name: "实际放款金额",
    data: [10, 12, 9, 17, 30, 40, 35, 10, 20, 18],
    type: "line",
    smooth: true
  }]
};
var _default = exports["default"] = function _default(props) {
  var _props$option = props.option,
    option = _props$option === void 0 ? {} : _props$option;
  var hasMock = !(option && option.series);
  var options = {
    tooltip: {
      trigger: "axis"
    },
    legend: {
      right: 0
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      type: "value"
    }
  };
  var sourceOption = hasMock ? defaultOption : option;
  options = (0, _utils.merge)(sourceOption, options);
  return /*#__PURE__*/_react["default"].createElement(_WrapCharts["default"], (0, _extends2["default"])({}, props, {
    option: options
  }));
};