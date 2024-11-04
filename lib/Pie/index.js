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
require("echarts/lib/chart/pie");
/*
 * @Author: liubo 
 * @CreatDate: 2020-04-22 13:57:40 
 * @Describe: 柱状图
 */

// 按需引入图表类型

// 内置默认数据
var defaultOption = {
  legend: {
    data: ['需求阶段', '开发阶段', '验证阶段', '审批阶段', '投产阶段', "下线归档", '未知']
  },
  series: {
    name: "各阶段模型统计",
    data: [{
      value: 100,
      name: '需求阶段'
    }, {
      value: 50,
      name: '开发阶段'
    }, {
      value: 40,
      name: '验证阶段'
    }, {
      value: 30,
      name: '审批阶段'
    }, {
      value: 100,
      name: '投产阶段'
    }, {
      value: 20,
      name: '下线归档'
    }, {
      value: 10,
      name: '未知'
    }]
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
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      right: 0,
      orient: 'vertical'
    },
    series: seriesObj ? {
      type: 'pie',
      radius: '55%',
      center: ['50%', '50%'],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    } : []
  };
  var sourceOption = hasMock ? defaultOption : option;
  options = (0, _utils.merge)(sourceOption, options);
  return /*#__PURE__*/_react["default"].createElement(_WrapCharts["default"], (0, _extends2["default"])({}, props, {
    option: options
  }));
};