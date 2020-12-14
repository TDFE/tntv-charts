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

require("echarts/lib/chart/funnel");

/*
 * @Author: liubo 
 * @CreatDate: 2020-04-22 13:57:40 
 * @Describe: 漏斗图
 */
// 按需引入图表类型
// 内置默认数据
var defaultOption = {
  legend: {
    data: ['展现', '点击', '访问', '咨询', '订单']
  },
  series: [{
    name: '网站情况',
    type: 'funnel',
    label: {
      show: true,
      position: 'inside'
    },
    data: [{
      value: 100,
      name: '展现'
    }, {
      value: 80,
      name: '点击'
    }, {
      value: 60,
      name: '访问'
    }, {
      value: 40,
      name: '咨询'
    }, {
      value: 20,
      name: '订单'
    }]
  }]
};

var _default = function _default(props) {
  var _props$option = props.option,
      option = _props$option === void 0 ? {} : _props$option;
  var hasMock = option && option.series ? false : true;
  var options = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      right: 0
    }
  };
  var sourceOption = hasMock ? defaultOption : option;
  options = (0, _utils.merge)(sourceOption, options);
  return _react["default"].createElement(_WrapCharts["default"], (0, _extends2["default"])({}, props, {
    option: options
  }));
};

exports["default"] = _default;