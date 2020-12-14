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

require("echarts/lib/chart/radar");

/*
 * @Author: liubo 
 * @CreatDate: 2020-04-22 13:57:40 
 * @Describe: 雷达图
 */
// 按需引入图表类型
// 内置默认数据
var defaultOption = {
  legend: {
    data: ['预算分配', '实际开销']
  },
  radar: {
    indicator: [{
      name: '销售',
      max: 6500
    }, {
      name: '管理',
      max: 16000
    }, {
      name: '信息技术',
      max: 30000
    }, {
      name: '客服',
      max: 38000
    }, {
      name: '研发',
      max: 52000
    }, {
      name: '市场',
      max: 25000
    }]
  },
  series: [{
    name: '预算 vs 开销',
    type: 'radar',
    data: [{
      value: [4300, 10000, 28000, 35000, 50000, 19000],
      name: '预算分配'
    }, {
      value: [5000, 14000, 28000, 31000, 42000, 21000],
      name: '实际开销'
    }]
  }]
};

var _default = function _default(props) {
  var _props$option = props.option,
      option = _props$option === void 0 ? {} : _props$option;
  var hasMock = option && option.series ? false : true;
  var options = {
    tooltip: {},
    legend: {
      right: 0,
      orient: 'vertical'
    },
    radar: {
      name: {
        textStyle: {
          color: '#909399'
        }
      }
    }
  };
  var sourceOption = hasMock ? defaultOption : option;
  options = (0, _utils.merge)(sourceOption, options);
  return _react["default"].createElement(_WrapCharts["default"], (0, _extends2["default"])({}, props, {
    option: options
  }));
};

exports["default"] = _default;