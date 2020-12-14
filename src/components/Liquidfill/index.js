/*
 * @Author: liubo 
 * @CreatDate: 2020-04-22 13:57:40 
 * @Describe: 水球图
 */

// https://github.com/ecomfe/echarts-liquidfill

import React from "react";
import { merge } from "../common/utils";
import WrapCharts from "../common/WrapCharts";
// 按需引入图表类型
import "echarts-liquidfill";

// 内置默认数据
const defaultOption = {
    series: {
        data: [0.5, 0.4, 0.3]
    }
};

export default props => {
    const { option = {} } = props;

    const hasMock = option && option.series ? false : true;
    let options = {
        tooltip: {
            show: false
        },
        series: {
            type: 'liquidFill',
            radius: '90%'
        }
    };

    let sourceOption = hasMock ? defaultOption : option;
    options = merge(sourceOption, options);

    return (
        <WrapCharts {...props} option={options} />
    );
};


