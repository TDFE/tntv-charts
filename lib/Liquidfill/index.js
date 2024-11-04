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
require("echarts-liquidfill");
/*
 * @Author: liubo 
 * @CreatDate: 2020-04-22 13:57:40 
 * @Describe: 水球图
 */

// https://github.com/ecomfe/echarts-liquidfill

// 按需引入图表类型

// 内置默认数据
var defaultOption = {
  series: {
    data: [0.5, 0.4, 0.3]
  }
};
var _default = exports["default"] = function _default(props) {
  var _props$option = props.option,
    option = _props$option === void 0 ? {} : _props$option;
  var hasMock = option && option.series ? false : true;
  var options = {
    tooltip: {
      show: false
    },
    series: {
      type: 'liquidFill',
      radius: '90%'
    }
  };
  var sourceOption = hasMock ? defaultOption : option;
  options = (0, _utils.merge)(sourceOption, options);
  return /*#__PURE__*/_react["default"].createElement(_WrapCharts["default"], (0, _extends2["default"])({}, props, {
    option: options
  }));
};