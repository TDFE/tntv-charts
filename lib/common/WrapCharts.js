"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _echarts = _interopRequireDefault(require("echarts/lib/echarts"));

require("echarts/lib/component/legend");

require("echarts/lib/component/tooltip");

require("echarts/lib/component/title");

require("../Theme/default");

/*
 * @Author: liubo
 * @CreatDate: 2020-04-22 13:57:40
 * @Describe: 图表包裹组件
 */
// 按需加载echarts，注意引入文件的路径
// 按需引入公共图表类型，标题，提示信息等
// 默认主题
var _default = function _default(props) {
  var _props$option = props.option,
      option = _props$option === void 0 ? {} : _props$option,
      _props$height = props.height,
      height = _props$height === void 0 ? 300 : _props$height,
      _props$theme = props.theme,
      theme = _props$theme === void 0 ? "default" : _props$theme,
      _props$geo = props.geo,
      geo = _props$geo === void 0 ? {} : _props$geo,
      _props$geoName = props.geoName,
      geoName = _props$geoName === void 0 ? "" : _props$geoName,
      getChartInstance = props.getChartInstance;
  var ref = (0, _react.useRef)();

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      myChart = _useState2[0],
      setMyChart = _useState2[1];

  if (myChart) {
    myChart.setOption(option, true);
  }

  (0, _react.useEffect)(function () {
    if (myChart) {
      myChart.dispose();
    }

    var current = ref.current;
    myChart = _echarts["default"].init(current, theme); // 注册地图数据

    if (Object.keys(geo).length > 0) {
      _echarts["default"].registerMap(geoName, geo);
    }

    myChart.setOption(option, true);
    setMyChart(myChart);
    getChartInstance && getChartInstance(myChart);

    function resize() {
      myChart.resize();
    }

    window.addEventListener("resize", resize);
    return function () {
      window.removeEventListener("resize", resize);

      if (myChart) {
        myChart.dispose();
      }
    };
  }, [theme]);
  return _react["default"].createElement("div", {
    ref: ref,
    style: {
      height: height
    }
  });
};

exports["default"] = _default;