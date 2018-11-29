const option = {
  // ------------------------------------- esto es para que no salgan los ejes
  grid: {
    left: '0',
    right: '0',
    bottom: '0'
  },

  xAxis: [
    {
      boundaryGap: false,
      data: new Array(30),
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
        color: '#d2e6f4' // 
      }, {
        offset: 1,
        color: '#a5d9ee' //
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
      data: Array(10)
        .fill(0)
        .concat([
          6,
          7,
          17
        ])
        .concat([2, 4]),

        // para que no se vea el controno
      symbolSize: 0,
      lineStyle: {
        normal: {
          width: 0
        }
      }
    }
  ]
};

// ------------------------------------

export default option