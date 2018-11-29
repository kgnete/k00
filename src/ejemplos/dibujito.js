


const option = {
    // -------------------------------------

  xAxis: [
    {
      boundaryGap: false,
      data: new Array(60),
      splitLine: {
        show: false
      }
    }
  ],
  yAxis: [
    {
      min: 0,
      max: 20,
      type: 'value',
      splitLine: {
        show: false
      }

    }
  ],
  backgroundColor: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [
      {
        offset: 0,
        color: '#d2e6f4' // 0% 处的颜色
      }, {
        offset: 1,
        color: '#a5d9ee' // 100% 处的颜色
      }
    ]
  },
  series: [
    {
      type: 'line',
      areaStyle: {
        normal: {
          color: '#354967',
          opacity: 1
        }
      },
      data: (function () {
        var arr = new Array(20)
          .fill(0)
          .concat([
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            11,
            13,
            12,
            11,
            12,
            11,
            13,
            11,
            12,
            11,
            10.5,
            12,
            13,
            11,
            12,
            10.5,
            10,
            9,
            11,
            10,
            9,
            8,
            17
          ])

        return arr
      })(),

      symbolSize: 0,
      lineStyle: {
        normal: {
          width: 0
        }
      },
    }
  ]
};

// ------------------------------------


export default option