/********************** 当前报警 ************************/
var myChart1 = echarts.init(document.getElementById('alarmrecored'));
var option1 = {
  tooltip: {
    trigger: 'axis',
    formatter: `<ul class="echartData">
                <li class="edate"><i>日期：</i><em>2018-01-01</em></li>
                <li class="Aphase"><i>{a1}：</i><em>{c1}</em></li>
                <li class="Bphase"><i>{a2}：</i><em>{c2}</em></li>
                <li class="Cphase"><i>{a3}：</i><em>{c3}</em></li>
                <li class="Nphase"><i>{a4}：</i><em>{c4}</em></li>
              </ul>`,
    backgroundColor: '#17324d'
  },
  grid: {
    left: '3%',
    right: '10%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [{
    type: 'category',
    name: "日期(T)",
    data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    max: function (value) {
      return value.max + 5;
    },
    axisLabel: {
      interval: 0 // 每个刻度都显示

    },
    boundaryGap: false // 坐标轴留白策略
  }],
  yAxis: [{
    type: 'value',
    max: 100,
    name: "次数(Y)",
    splitNumber: 5, // 刻度间隔
    axisLine: {
      show: false // 是否显示坐标线
    },
    axisTick: {
      show: false // 是否显示坐标刻度
    }
  }],
  series: [{
    name: '日期',
    type: 'line',
    label: {
      normal: {
        show: true, // 是否显示坐标值
        position: 'right', // 值所在位置
        color: '#ff4802' // 值的颜色
      }
    },
    itemStyle: { // 面积颜色
      color: {
        type: 'linear',
        x: 1,
        x2: 0,
        y: 0,
        y2: 1,
        colorStops: [{
          offset: 0,
          color: '#f4f5b9' // 0% 处的颜色
        }, {
          offset: 1,
          color: '#ddd' // 100% 处的颜色
        }],
        globalCoord: true
      },
      borderColor: '#000' // 拐点颜色
    },
    lineStyle: {
      normal: {
        color: '#293c55' // 折线颜色
      }
    },
    areaStyle: {
      normal: {}
    },
    data: [0, 20, 0, 40, 60, 40, 50, 22, 80, 23, 80, 23, 40, 20, 40, 0, 8]
  }, {
    name: 'A相',
    type: 'line',
    itemStyle: {
      color: 'red',
      opacity: 0 // 不绘制拐点
    },
    lineStyle: {
      opacity: 0 // 不绘制线
    },
    data: [10, 31, 24, 13, 21, 35, 36, 72, 28, 59, 18, 22, 31, 12, 45, 14, 56]
  }, {
    name: 'B相',
    type: 'line',
    itemStyle: {
      color: 'red',
      opacity: 0 // 不绘制拐点
    },
    lineStyle: {
      opacity: 0 // 不绘制线
    },
    data: [23, 25, 765, 34, 654, 56, 32, 123, 34, 124, 154, 43, 12, 42, 33, 1, 16]
  }, {
    name: 'C相',
    type: 'line',
    itemStyle: {
      color: 'red',
      opacity: 0 // 不绘制拐点
    },
    lineStyle: {
      opacity: 0 // 不绘制线
    },
    data: [0, 14, 32, 324, 445, 655, 667, 137, 843, 91, 103, 111, 34, 3, 133, 15, 5]
  }, {
    name: 'N相',
    type: 'line',
    itemStyle: {
      color: 'red',
      opacity: 0 // 不绘制拐点
    },
    lineStyle: {
      opacity: 0 // 不绘制线
    },
    data: [23, 143, 2111, 3342, 4532, 5565, 67, 2, 84, 9, 234, 33, 432, 13, 43, 6545, 2316]
  }]
};
// 使用刚指定的配置项和数据显示图表。
myChart1.setOption(option1);
$(window).resize(function () {
  myChart1.resize();
});
