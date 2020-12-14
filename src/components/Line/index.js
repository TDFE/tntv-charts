/*
 * @Author: liubo 
 * @CreatDate: 2020-04-22 13:57:40 
 * @Describe: 折线图
 */

import React from "react";
import { merge } from "../common/utils";
import WrapCharts from "../common/WrapCharts";
// 按需引入图表类型
import "echarts/lib/chart/line";
import "echarts/lib/component/dataZoom";

// 内置默认数据
const defaultOption = {
    title: {
        text: "贷款金额"
    },
    legend: {
        data: ["申请金额", "实际放款金额"]
    },
    xAxis: {
        data: ['12/11', '12/12', '12/13', '12/14', '12/15', '12/16', '12/17', '12/18', '12/19', '12/20']
    },
    yAxis: {
        name: "单位：万"
    },
    series: [
        {
            name: "申请金额",
            data: [20, 32, 18, 34, 50, 60, 55, 40, 30, 40],
            type: 'line',
            smooth: true
        },
        {
            name: "实际放款金额",
            data: [10, 12, 9, 17, 30, 40, 35, 10, 20, 18],
            type: 'line',
            smooth: true
        }
    ]
};

export default props => {
    const { option = {} } = props;

    const hasMock = option && option.series ? false : true;
    let options = {
        tooltip: {
            trigger: "axis"
        },
        legend: {
            right: 0
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            type: 'value'
        }
    };

    let sourceOption = hasMock ? defaultOption : option;
    options = merge(sourceOption, options);

    return (
        <WrapCharts {...props} option={options} />
    );
};


