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

var _geojsonDecoder = _interopRequireDefault(require("geojson-decoder"));

require("echarts/lib/chart/map");

require("echarts/lib/chart/scatter");

require("echarts/lib/chart/lines");

require("echarts/lib/chart/effectScatter");

require("echarts/lib/component/geo");

var _china = _interopRequireDefault(require("./china.json"));

/*
 * @Author: liubo 
 * @CreatDate: 2020-04-22 13:57:40 
 * @Describe: 地图
 */
// 按需引入组件
var turnChinaData = _geojsonDecoder["default"].decode(_china["default"]); // 内置默认数据


var defaultOption = {
  geo: {
    map: 'CHINA',
    show: true,
    roam: true,
    label: {
      normal: {
        show: false
      },
      emphasis: {
        show: false
      }
    },
    itemStyle: {
      normal: {
        areaColor: '#3a7fd5',
        borderColor: '#0a53e9',
        //线
        shadowColor: '#092f8f',
        //外发光
        shadowBlur: 5
      },
      emphasis: {
        areaColor: '#0a2dae',
        //悬浮区背景
        borderColor: '#0a53e9' //线

      }
    },
    zoom: 1.2,
    scaleLimit: {
      min: 0.2,
      max: 20
    }
  },
  series: [{
    name: 'Top 5',
    symbolSize: 5,
    label: {
      formatter: '{b}',
      position: 'right',
      show: true,
      color: '#111'
    },
    itemStyle: {
      color: '#fff'
    },
    type: 'scatter',
    coordinateSystem: 'geo',
    data: [{
      name: "上海",
      value: [121.472644, 31.231706, 68]
    }]
  }, {
    name: '中国地图',
    type: 'map',
    data: [121.472644, 31.231706]
  }, {
    name: 'Top 5',
    type: 'scatter',
    coordinateSystem: 'geo',
    symbol: 'pin',
    symbolSize: [50, 50],
    label: {
      show: true,
      textStyle: {
        color: '#fff',
        fontSize: 9
      },
      formatter: function formatter(value) {
        return value.data.value[2];
      }
    },
    itemStyle: {
      color: '#D8BC37' //标志颜色

    },
    data: [{
      name: "上海",
      value: [121.472644, 31.231706, 68]
    }]
  }]
};

var _default = function _default(props) {
  var _props$option = props.option,
      option = _props$option === void 0 ? {} : _props$option,
      _props$geo = props.geo,
      geo = _props$geo === void 0 ? turnChinaData : _props$geo,
      _props$geoName = props.geoName,
      geoName = _props$geoName === void 0 ? "CHINA" : _props$geoName;
  var hasMock = option && option.series ? false : true;
  var options = {
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2,
      formatter: function formatter(params) {
        return params.seriesName + '<br/>' + params.name;
      }
    },
    grid: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      containLabel: true
    }
  };
  var sourceOption = hasMock ? defaultOption : option;
  options = (0, _utils.merge)(sourceOption, options);
  return _react["default"].createElement(_WrapCharts["default"], (0, _extends2["default"])({}, props, {
    option: options,
    geo: geo,
    geoName: geoName
  }));
};

exports["default"] = _default;