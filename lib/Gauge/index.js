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

require("echarts/lib/chart/gauge");

/*
 * @Author: liubo 
 * @CreatDate: 2020-04-22 13:57:40 
 * @Describe: 仪表盘
 */
// 按需引入图表类型
// 内置默认数据
var defaultOption = {
  series: [{
    name: '风险等级',
    type: 'gauge',
    radius: "100%",
    detail: {
      formatter: function formatter(param) {
        var level = '';

        if (param < 20) {
          level = '预警';
        } else if (param < 80) {
          level = '正常';
        } else {
          level = '报警';
        }

        return level;
      },
      offsetCenter: [0, "50%"],
      textStyle: {
        fontSize: 20
      }
    },
    axisLine: {
      lineStyle: {
        color: [[0.2, '#F7B035'], [0.8, '#07C790'], [1, '#EF6555']],
        width: 20
      }
    },
    splitLine: {
      length: 20
    },
    data: [{
      value: 82
    }]
  }]
};

var _default = function _default(props) {
  var _props$option = props.option,
      option = _props$option === void 0 ? {} : _props$option;
  var hasMock = option && option.series ? false : true;
  var options = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} : {c}%'
    }
  };
  var sourceOption = hasMock ? defaultOption : option;
  options = (0, _utils.merge)(sourceOption, options);
  return _react["default"].createElement(_WrapCharts["default"], (0, _extends2["default"])({}, props, {
    option: options
  }));
};

exports["default"] = _default;