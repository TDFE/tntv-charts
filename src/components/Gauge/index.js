/*
 * @Author: liubo 
 * @CreatDate: 2020-04-22 13:57:40 
 * @Describe: 仪表盘
 */

import React from "react";
import { merge } from "../common/utils";
import WrapCharts from "../common/WrapCharts";
// 按需引入图表类型
import "echarts/lib/chart/gauge";

// 内置默认数据
const defaultOption = {
    series: [
        {
            name: '风险等级',
            type: 'gauge',
            radius: "100%",
            detail: {
                formatter: function (param) {
                    let level = '';
                    if (param < 20) {
                        level = '预警'
                    } else if (param < 80) {
                        level = '正常'
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
                    color: [
                        [0.2, '#F7B035'],
                        [0.8, '#07C790'],
                        [1, '#EF6555']
                    ],
                    width: 20
                }
            },
            splitLine: {
                length: 20
            },
            data: [{ value: 82 }]
        }
    ]
};

export default props => {
    const { option = {} } = props;

    const hasMock = option && option.series ? false : true;
    let options = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} : {c}%'
        }
    };

    let sourceOption = hasMock ? defaultOption : option;
    options = merge(sourceOption, options);

    return (
        <WrapCharts {...props} option={options} />
    );
};


