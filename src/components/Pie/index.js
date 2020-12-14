/*
 * @Author: liubo 
 * @CreatDate: 2020-04-22 13:57:40 
 * @Describe: 柱状图
 */

import React from "react";
import { merge } from "../common/utils";
import WrapCharts from "../common/WrapCharts";
// 按需引入图表类型
import "echarts/lib/chart/pie";

// 内置默认数据
const defaultOption = {
    legend: {
        data: ['需求阶段', '开发阶段', '验证阶段', '审批阶段', '投产阶段', "下线归档", '未知']
    },
    series: {
        name: "各阶段模型统计",
        data: [
            { value: 100, name: '需求阶段' },
            { value: 50, name: '开发阶段' },
            { value: 40, name: '验证阶段' },
            { value: 30, name: '审批阶段' },
            { value: 100, name: '投产阶段' },
            { value: 20, name: '下线归档' },
            { value: 10, name: '未知' }
        ]
    }
};

export default props => {
    const { option = {} } = props;

    let hasMock = true;
    let seriesObj = true;
    if (option && option.series) {
        hasMock = false;
        if (option.series.data) {
            seriesObj = true;
        } else if (option.series instanceof Array) {
            seriesObj = false;
        }
    }
    let options = {
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

    let sourceOption = hasMock ? defaultOption : option;
    options = merge(sourceOption, options);

    return (
        <WrapCharts {...props} option={options} />
    );
};


