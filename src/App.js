import React, { Component } from 'react';
import cloneDeep from 'lodash.clonedeep';
import ReactEcharts from 'echarts-for-react';
import bgImg from './img1.js'

var lines = [
    {
        coords: [
            [355, 900],
            [470, 800]
        ],
    },
    {
        coords: [
            [645, 900],            [528, 800]
        ],
        effect: {
            period: 1.5,
        },
    },
    /*
    {
        coords: [
            [470, 717],
            [444, 640]
        ],
    },
    {
        coords: [
            [530, 717],
            [553, 640]
        ],
    },
    {
        coords: [
            [482, 596],
            [517, 596]
        ],
    },
    {
        coords: [
            [480, 579],
            [517, 579]
        ],
    },
    */
    {
        coords: [
            [460, 380],
            [190, 236]
        ],
        effect: {
            period: 10,
            trailLength: 0,
        },
    },
    {
        coords: [
            [498, 380],
            [498, 238]
        ],
    },
    {
        coords: [
            [542, 380],
            [812, 238]
        ],
        effect: {
            period: 2,
        },
    },
]

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }
  timeTicket = null;
  getInitialState = () => ({option: this.getOption()});


  componentWillUnmount() {
    if (this.timeTicket) {
      clearInterval(this.timeTicket);
    }
  };
  randomData() {
    return Math.round(Math.random()*1000);
  };
  getOption = () => {
    return  {
      backgroundColor: '#074883',
      grid:{
          top: 10,
          bottom: 10,
          left: 10,
          right: 10,
          width: 682,
          height: 595,
      },
      xAxis: {
          show: false,
          min: 0,
          max: 1000,
          position: 'top',
          axisPointer: {
              show: true
          }
      },
      yAxis: {
          show: false,
          min: 0,
          max: 1000,
          axisPointer: {
              show: true
          }
      },
      
      // 线条动画
      series: [
          {
              type: 'lines',
              coordinateSystem: 'cartesian2d',
              zlevel: 1,
              
              // 动画效果
              effect: {
                  show: true,
                  period: 4, //特效动画的时间，单位为 s
                  trailLength: 0.5, //特效尾迹的长度。0~1数值越大尾迹越长
                  color: '#64f2ff',
                  symbolSize: 3
              },
              
              lineStyle: {
                  normal: {
                      color: '#119dd8',
                      width: 0,
                      curveness: 0
                  }
              },
              data: lines
          }
      ],
  
      // 图片
      graphic: [
          {
              type: 'image',
              position: [10, 10],
              style: {
                  image: bgImg,
              }
          },
      ]
  };
  };
  render() {
    const code = "require('echarts/map/js/china.js'); \n" +
          "<ReactEcharts \n" +
          "  option={this.state.option || {}} \n" +
          "  style={{height: '350px', width: '100%'}}  \n" +
          "  className='react_for_echarts' />";
    return (
      <div className='examples'>
        <div className='parent'>
          <label> render a china map. <strong>MAP charts</strong>: </label>
          <ReactEcharts
            option={this.state.option}
            style={{height: '800px', width: '100%'}}
            className='react_for_echarts' />
          <label> code below: </label>
          <pre>
            <code>{code}</code>
          </pre>
        </div>
      </div>
    );
  };
}