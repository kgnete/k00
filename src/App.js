import React, {Component} from 'react';
import ReactEcharts from 'echarts-for-react';

require('echarts/map/js/world.js');
// require('echarts/map/json/world.json');

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }
  timeTicket = null;
  getInitialState = () => ({
    option: this.getOption()
  });

  componentDidMount() {
    if (this.timeTicket) {
      clearInterval(this.timeTicket);
    }
    this.timeTicket = setInterval(() => {
      const option = this.state.option;
      const r = new Date().getSeconds();
      option.title.text = 'iphone销量' + r;
      option.series[0].name = 'iphone销量' + r;
      option.legend.data[0] = 'iphone销量' + r;
      this.setState({option: option});
    }, 1000);
  };
  componentWillUnmount() {
    if (this.timeTicket) {
      clearInterval(this.timeTicket);
    }
  };

  randomData() {
    return Math.round(Math.random() * 1000);
  };

  getOption = () => {
    return {
      title: {
        text: 'probando json',
        subtext: '纯属虚构',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['iphone3', 'iphone4', 'iphone5']
      },
      visualMap: {
        min: 0,
        max: 2500,
        left: 'left',
        top: 'bottom',
        text: [
          '高', '低'
        ], // 文本，默认为数值文本
        calculable: true
      },
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          dataView: {
            readOnly: false
          },
          restore: {},
          saveAsImage: {}
        }
      },
      series: [
        {
          name: 'iphone3',
          type: 'map',
          mapType: 'world',
          roam: false,
          label: {
            normal: {
              show: true
            },
            emphasis: {
              show: true
            }
          },
          data: [
            {
              name: 'Russia',
              value: this.randomData()
            }, {
              name: 'Portugal',
              value: this.randomData()
            }, {
              name: 'Spain',
              value: this.randomData()
            }, {
              name: 'Canada',
              value: this.randomData()
            },
          ]
        }, {
          name: 'conectado',
          type: 'map',
          mapType: 'world',
          label: {
            normal: {
              show: true
            },
            emphasis: {
              show: true
            }
          },
          data: [
            {
              name: 'Spain',
              value: this.randomData()
            }, {
              name: 'Canada',
              value: this.randomData()
            }, {
              name: 'Norway',
              value: this.randomData()
            }, {
              name: '澳门',
              value: this.randomData()
            }
          ]
        }, {
          name: 'iphone5',
          type: 'map',
          mapType: 'world',
          label: {
            normal: {
              show: true
            },
            emphasis: {
              show: true
            }
          },
          data: [
            {
              name: 'Canada',
              value: this.randomData()
            },
            {
              name: 'Nigeria',
              value: this.randomData()
            }, {
              name: 'Morocco',
              value: this.randomData()
            }
          ]
        }
      ]
    };
  };

  render() {
    return (
      <div className='examples'>
        <div className='parent'>

          <ReactEcharts
            option={this.state.option}
            style={{
            height: '500px',
            width: '100%'
          }}
            className='react_for_echarts'/>
        </div>
      </div>
    );
  };
}
