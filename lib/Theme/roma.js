"use strict";

(function (root, factory) {
  factory(exports, require('echarts/lib/echarts'));
})(void 0, function (exports, echarts) {
  var log = function log(msg) {
    if (typeof console !== 'undefined') {
      console && console.error && console.error(msg);
    }
  };
  if (!echarts) {
    log('ECharts is not Loaded');
    return;
  }
  var colorPalette = ['#E01F54', '#001852', '#f5e8c8', '#b8d2c7', '#c6b38e', '#a4d8c2', '#f3d999', '#d3758f', '#dcc392', '#2e4783', '#82b6e9', '#ff6347', '#a092f1', '#0a915d', '#eaf889', '#6699FF', '#ff6666', '#3cb371', '#d5b158', '#38b6b6'];
  var theme = {
    title: {
      left: "center"
    },
    color: colorPalette,
    visualMap: {
      color: ['#e01f54', '#e7dbc3'],
      textStyle: {
        color: '#333'
      }
    },
    candlestick: {
      itemStyle: {
        normal: {
          color: '#e01f54',
          color0: '#001852',
          lineStyle: {
            width: 1,
            color: '#f5e8c8',
            color0: '#b8d2c7'
          }
        }
      }
    },
    graph: {
      color: colorPalette
    },
    gauge: {
      axisLine: {
        lineStyle: {
          color: [[0.2, '#E01F54'], [0.8, '#b8d2c7'], [1, '#001852']],
          width: 8
        }
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
  echarts.registerTheme('roma', theme);
});