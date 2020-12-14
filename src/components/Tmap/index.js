/*
 * @Author: liubo 
 * @CreatDate: 2020-04-22 13:57:40 
 * @Describe: 地图
 */

import React from "react";
import { merge } from "../common/utils";
import WrapCharts from "../common/WrapCharts";
import encoder from 'geojson-decoder';
// 按需引入组件
import "echarts/lib/chart/map";
import "echarts/lib/chart/scatter";
import "echarts/lib/chart/lines";
import "echarts/lib/chart/effectScatter";
import "echarts/lib/component/geo";
import chinaData from "./china.json";

const turnChinaData = encoder.decode(chinaData);

// 内置默认数据
const defaultOption = {
    geo: {
        map: 'CHINA',
        show: true,
        roam: true,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false,
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#3a7fd5',
                borderColor: '#0a53e9',//线
                shadowColor: '#092f8f',//外发光
                shadowBlur: 5
            },
            emphasis: {
                areaColor: '#0a2dae',//悬浮区背景
                borderColor: '#0a53e9',//线
            }
        },
        zoom: 1.2,
        scaleLimit: {
            min: 0.2,
            max: 20
        }
    },
    series: [
        {
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
            }],
        },
        {
            name: '中国地图',
            type: 'map',
            data: [121.472644, 31.231706]
        },
        {
            name: 'Top 5',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin',
            symbolSize: [50, 50],
            label: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 9,
                },
                formatter(value) {
                    return value.data.value[2]
                }
            },
            itemStyle: {
                color: '#D8BC37', //标志颜色
            },
            data: [{
                name: "上海",
                value: [121.472644, 31.231706, 68]
            }]
        },
    ]
};

export default props => {
    const { option = {}, geo = turnChinaData, geoName = "CHINA" } = props;

    const hasMock = option && option.series ? false : true;
    let options = {
        tooltip: {
            trigger: 'item',
            showDelay: 0,
            transitionDuration: 0.2,
            formatter: function (params) {
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

    let sourceOption = hasMock ? defaultOption : option;
    options = merge(sourceOption, options);

    return (
        <WrapCharts {...props} option={options} geo={geo} geoName={geoName} />
    );
};


