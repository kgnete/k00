import React, { Component } from 'react'
import echarts from 'echarts'
import ReactEcharts from 'echarts-for-react';


const c = 1
const f = 1

echarts.registerMap('pk',

  // =====================================

  {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [
                  -4.12811279296875,
                  0.5273363048115169
                ],
                [
                  1.14532470703125,
                  0.703107352436491
                ],
                [
                  1.14532470703125,
                  3.6888551431470478
                ],
                [
                  -4.47967529296875,
                  3.8642546157214084
                ],
                [
                  -4.12811279296875,
                  0.5273363048115169
                ]
              ]
            },
            "properties": {}
          },
      //  panel
      {
        "type": "Feature",
        "properties": {
          "name": "NO11"
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                0.0, 0.0
              ],
              [
                1.0, 0.0
              ],
              [
                1.0, 0.5
              ],
              [0.0, 0.5]
            ]
          ]
        }
      },

      //  panel
      {
        "type": "Feature",
        "properties": {
          "name": "NO12"
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                0.0 + 1 * c,
                0.0 + 0 * f
              ],
              [
                1.0 + 1 * c,
                0.0
              ],
              [
                1.0 + 1,
                0.5
              ],
              [
                0.0 + 1,
                0.5
              ]
            ]
          ]
        }
        //  panel

      }, {
        "type": "Feature",
        "properties": {
          "name": "NO13"
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                0.0 + 2 * c,
                0.0
              ],
              [
                1.0 + 2 * c,
                0.0
              ],
              [
                1.0 + 2,
                0.5
              ],
              [
                0.0 + 2,
                0.5
              ]
            ]
          ]
        }
      }
    ]
  }

  // =======================================
  );

export default class tturf extends Component {
  render() {
    return (
      <div>
          
          <ReactEcharts
  option={this.getOption()}
  style={{height: '300px', width: '100%'}}
  className='echarts-for-echarts'
  theme='my_theme' 
  map='pk'/>
  // =======================================
      </div>
    )
  }
}
