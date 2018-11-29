


const option = {
    // -------------------------------------
  grid: {
    left: '0',
    right: '0',
    bottom: '0'
  },
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



    // cloud
    {
      type: 'graph',
      data: (function () {
        var arr = [
          {
            symbolSize: 0,
            x: 0,
            y: 0
          }, {
            symbolSize: 0,
            x: 200,
            y: 100
          }
        ]
        for (var i = 0; i < 5; i++) {
          var size = [
            Math.random() * 60 + 60,
            60
          ];
          var x = Math.random() * 40 + 40 * i;
          var y = Math.random() * 5 + 5;
          arr.push({
            symbolSize: size,
            x: x,
            y: y,
            symbolOffset: [0, -30]
          })
          arr.push({
            symbolSize: size,
            x: x,
            y: y,
            symbolOffset: [-30, 0]
          })
          arr.push({
            symbolSize: size,
            x: x,
            y: y,
            symbolOffset: [30, 0]
          })
        }
        return arr
      })(),
      itemStyle: {
        normal: {
          color: '#fff'
        }
      },
      symbolSize: [
        80, 20
      ],
      z: -1,
      animationDelay: 1800
    }
  ]
};

// ------------------------------------


export default option