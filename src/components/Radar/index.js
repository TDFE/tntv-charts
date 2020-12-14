/*
 * @Author: liubo 
 * @CreatDate: 2020-04-22 13:57:40 
 * @Describe: 雷达图
 */

import React from "react";
import { merge } from "../common/utils";
import WrapCharts from "../common/WrapCharts";
// 按需引入图表类型
import "echarts/lib/chart/radar";

// 内置默认数据
const defaultOption = {
    legend: {
        data: ['预算分配', '实际开销']
    },
    radar: {
        indicator: [
            { name: '销售', max: 6500 },
            { name: '管理', max: 16000 },
            { name: '信息技术', max: 30000 },
            { name: '客服', max: 38000 },
            { name: '研发', max: 52000 },
            { name: '市场', max: 25000 }
        ]
    },
    series: [{
        name: '预算 vs 开销',
        type: 'radar',
        data: [
            {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: '预算分配'
            },
            {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: '实际开销'
            }
        ]
    }]
};

export default props => {
    const { option = {} } = props;

    const hasMock = option && option.series ? false : true;
    let options = {
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
            },
        }
    };

    let sourceOption = hasMock ? defaultOption : option;
    options = merge(sourceOption, options);

    return (
        <WrapCharts {...props} option={options} />
    );
};


