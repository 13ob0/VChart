---
category: examples
group: vscreen
title: sankey
keywords: sankey,composition,distribution,relationship,comparison,flow,animation
cover: /vchart/preview/vscreen-sankey.png
option: vscreen
---

# sankey

Sankey diagram in large screen scene

## Key option

- `categoryField` property declares the category field, representing the node name
- `valueField` property declares the numeric field, representing the weight of the relationships between nodes
- `sourceField` property declares the numeric field, representing the source node index
- `targetField` property declares the numeric field, representing the target node index
- `nodeAlign` property declares the alignment type of the nodes, this attribute can be set to 'left' | 'right' | 'center' | 'justify' | 'start' | 'end'
- `nodeGap` property declares the size of the gap between two nodes within the same layer
- `nodeWidth` property declares the width of each node, supporting three types of values: 1. Percentage string, such as `{ nodeWidth: '12%' }`; 2. Simple number with 'px' as the unit, such as `{ nodeWidth: 20 }`; 3. Function, specifying nodeWidth through custom calculation
- `minNodeHeight` property declares the minimum size of a node when the data is not zero or empty, this configuration can be used to avoid nodes that are too small to be seen when the data is too small, preferably less than 5px
- `label` property declares label configuration, label layout can be set to `position: 'outside' | 'inside-start' | 'inside-middle' | 'inside-end' | 'left' | 'right'`, label text maximum abbreviation length can be set using `limit` configuration
- `node` property declares the styling configuration for nodes in different states
- `link` property declares the styling configuration for edges in different states

## Demo source

```javascript livedemo
const spec = {
  // default size
  // width: 400,
  // height: 225,
  type: 'sankey',
  nodeGap: 5,
  nodeWidth: 12,
  nodeAlign: 'justify',
  iterations: 0,
  padding: {
    left: 6,
    right: 6,
    top: 6,
    bottom: 6
  },
  categoryField: 'key',
  valueField: 'value',
  link: {
    style: {
      pathType: 'smooth'
    },
    state: {
      hover: {
        cursor: 'pointer',
        fillOpacity: 0.8,
        stroke: '#58595B',
        lineWidth: 0,
        zIndex: 500
      },
      selected: {
        cursor: 'pointer',
        fillOpacity: 1,
        stroke: '#58595B',
        lineWidth: 1
      },
      blur: {
        fillOpacity: 0.025
      }
    }
  },
  color: {
    field: 'color',
    type: 'ordinal',
    range: [
      '#006EFF',
      '#00E5E5',
      '#2E55EA',
      '#B8E7FE',
      '#00D689',
      '#B7F9F5',
      '#FBCC71',
      '#F46E50',
      '#006EFF',
      '#00E5E5',
      '#2E55EA',
      '#B8E7FE',
      '#00D689'
    ],
    specified: {
      'z2EheLjuT4UR-河北': '#006EFF',
      'z2EheLjuT4UR-山西': '#00E5E5',
      'z2EheLjuT4UR-内蒙古': '#2E55EA',
      'z2EheLjuT4UR-辽宁': '#B8E7FE',
      'z2EheLjuT4UR-吉林': '#00D689',
      'z2EheLjuT4UR-江西': '#B7F9F5',
      'troz2pohbqB0-江西': '#B7F9F5',
      'z2EheLjuT4UR-山东': '#FBCC71',
      'troz2pohbqB0-河南': '#F46E50',
      'z2EheLjuT4UR-河南': '#F46E50',
      'troz2pohbqB0-湖北': '#006EFF',
      'z2EheLjuT4UR-湖北': '#006EFF',
      'troz2pohbqB0-湖南': '#00E5E5',
      'z2EheLjuT4UR-湖南': '#00E5E5',
      'troz2pohbqB0-广东': '#2E55EA',
      'troz2pohbqB0-广西': '#B8E7FE',
      'troz2pohbqB0-福建': '#00D689'
    },
    domain: [
      'z2EheLjuT4UR-河北',
      'troz2pohbqB0-河南',
      'z2EheLjuT4UR-山西',
      'troz2pohbqB0-湖北',
      'z2EheLjuT4UR-内蒙古',
      'troz2pohbqB0-湖南',
      'z2EheLjuT4UR-辽宁',
      'troz2pohbqB0-广东',
      'z2EheLjuT4UR-吉林',
      'troz2pohbqB0-广西',
      'z2EheLjuT4UR-江西',
      'z2EheLjuT4UR-山东',
      'troz2pohbqB0-福建',
      'z2EheLjuT4UR-河南',
      'z2EheLjuT4UR-湖北',
      'troz2pohbqB0-江西',
      'z2EheLjuT4UR-湖南'
    ]
  },
  data: [
    {
      id: 'data',
      parser: {
        clone: false
      },
      values: [
        {
          nodes: [
            {
              type: 'node',
              name: '河北',
              key: 'z2EheLjuT4UR-河北',
              color: '河北',
              group: 'z2EheLjuT4UR',
              value: 20,
              z2EheLjuT4UR: '河北',
              sqcCIHg2KymZ: 20,
              children: [
                {
                  type: 'node',
                  name: '河南',
                  key: 'troz2pohbqB0-河南',
                  color: '河南',
                  group: 'troz2pohbqB0',
                  value: 20,
                  troz2pohbqB0: '河南',
                  sqcCIHg2KymZ: 20,
                  children: []
                }
              ]
            },
            {
              type: 'node',
              name: '山西',
              key: 'z2EheLjuT4UR-山西',
              color: '山西',
              group: 'z2EheLjuT4UR',
              value: 15,
              z2EheLjuT4UR: '山西',
              sqcCIHg2KymZ: 15,
              children: [
                {
                  type: 'node',
                  name: '湖北',
                  key: 'troz2pohbqB0-湖北',
                  color: '湖北',
                  group: 'troz2pohbqB0',
                  value: 15,
                  troz2pohbqB0: '湖北',
                  sqcCIHg2KymZ: 50,
                  children: []
                }
              ]
            },
            {
              type: 'node',
              name: '内蒙古',
              key: 'z2EheLjuT4UR-内蒙古',
              color: '内蒙古',
              group: 'z2EheLjuT4UR',
              value: 50,
              z2EheLjuT4UR: '内蒙古',
              sqcCIHg2KymZ: 50,
              children: [
                {
                  type: 'node',
                  name: '湖南',
                  key: 'troz2pohbqB0-湖南',
                  color: '湖南',
                  group: 'troz2pohbqB0',
                  value: 50,
                  troz2pohbqB0: '湖南',
                  sqcCIHg2KymZ: 94,
                  children: []
                }
              ]
            },
            {
              type: 'node',
              name: '辽宁',
              key: 'z2EheLjuT4UR-辽宁',
              color: '辽宁',
              group: 'z2EheLjuT4UR',
              value: 15,
              z2EheLjuT4UR: '辽宁',
              sqcCIHg2KymZ: 15,
              children: [
                {
                  type: 'node',
                  name: '广东',
                  key: 'troz2pohbqB0-广东',
                  color: '广东',
                  group: 'troz2pohbqB0',
                  value: 15,
                  troz2pohbqB0: '广东',
                  sqcCIHg2KymZ: 80,
                  children: []
                }
              ]
            },
            {
              type: 'node',
              name: '吉林',
              key: 'z2EheLjuT4UR-吉林',
              color: '吉林',
              group: 'z2EheLjuT4UR',
              value: 57,
              z2EheLjuT4UR: '吉林',
              sqcCIHg2KymZ: 57,
              children: [
                {
                  type: 'node',
                  name: '广西',
                  key: 'troz2pohbqB0-广西',
                  color: '广西',
                  group: 'troz2pohbqB0',
                  value: 57,
                  troz2pohbqB0: '广西',
                  sqcCIHg2KymZ: 57,
                  children: []
                }
              ]
            },
            {
              type: 'node',
              name: '江西',
              key: 'z2EheLjuT4UR-江西',
              color: '江西',
              group: 'z2EheLjuT4UR',
              value: 44,
              z2EheLjuT4UR: '江西',
              sqcCIHg2KymZ: 44,
              children: [
                {
                  type: 'node',
                  name: '湖南',
                  key: 'troz2pohbqB0-湖南',
                  color: '湖南',
                  group: 'troz2pohbqB0',
                  value: 44,
                  troz2pohbqB0: '湖南',
                  sqcCIHg2KymZ: 94,
                  children: []
                }
              ]
            },
            {
              type: 'node',
              name: '山东',
              key: 'z2EheLjuT4UR-山东',
              color: '山东',
              group: 'z2EheLjuT4UR',
              value: 20,
              z2EheLjuT4UR: '山东',
              sqcCIHg2KymZ: 20,
              children: [
                {
                  type: 'node',
                  name: '福建',
                  key: 'troz2pohbqB0-福建',
                  color: '福建',
                  group: 'troz2pohbqB0',
                  value: 20,
                  troz2pohbqB0: '福建',
                  sqcCIHg2KymZ: 20,
                  children: []
                }
              ]
            },
            {
              type: 'node',
              name: '河南',
              key: 'z2EheLjuT4UR-河南',
              color: '河南',
              group: 'z2EheLjuT4UR',
              value: 65,
              z2EheLjuT4UR: '河南',
              sqcCIHg2KymZ: 65,
              children: [
                {
                  type: 'node',
                  name: '广东',
                  key: 'troz2pohbqB0-广东',
                  color: '广东',
                  group: 'troz2pohbqB0',
                  value: 65,
                  troz2pohbqB0: '广东',
                  sqcCIHg2KymZ: 80,
                  children: []
                }
              ]
            },
            {
              type: 'node',
              name: '湖北',
              key: 'z2EheLjuT4UR-湖北',
              color: '湖北',
              group: 'z2EheLjuT4UR',
              value: 40,
              z2EheLjuT4UR: '湖北',
              sqcCIHg2KymZ: 40,
              children: [
                {
                  type: 'node',
                  name: '江西',
                  key: 'troz2pohbqB0-江西',
                  color: '江西',
                  group: 'troz2pohbqB0',
                  value: 40,
                  troz2pohbqB0: '江西',
                  sqcCIHg2KymZ: 40,
                  children: []
                }
              ]
            },
            {
              type: 'node',
              name: '湖南',
              key: 'z2EheLjuT4UR-湖南',
              color: '湖南',
              group: 'z2EheLjuT4UR',
              value: 35,
              z2EheLjuT4UR: '湖南',
              sqcCIHg2KymZ: 35,
              children: [
                {
                  type: 'node',
                  name: '湖北',
                  key: 'troz2pohbqB0-湖北',
                  color: '湖北',
                  group: 'troz2pohbqB0',
                  value: 35,
                  troz2pohbqB0: '湖北',
                  sqcCIHg2KymZ: 50,
                  children: []
                }
              ]
            }
          ],
          __VCHART_DEFAULT_DATA_INDEX: 0,
          __VCHART_DEFAULT_DATA_KEY: ''
        }
      ]
    }
  ],
  legends: [
    {
      type: 'discrete',
      item: {
        label: {
          formatMethod: text => text.split('-')[1],
          style: {
            fontSize: 12,
            fill: 'rgba(255,255,255,0.45)',
            fontFamily: 'D-DIN',
            fontWeight: 'normal'
          },
          state: {
            unSelected: {
              fillOpacity: 0.2
            }
          }
        },
        focus: true,
        focusIconStyle: {
          size: 14
        },
        maxWidth: 400,
        spaceRow: 0,
        spaceCol: 0,
        padding: 0,
        background: {
          visible: false,
          style: {
            fillOpacity: 0.001
          }
        },
        shape: {
          style: {
            lineWidth: 0,
            symbolType: 'circle',
            size: 12,
            fillOpacity: 1,
            width: 12,
            height: 7.416
          }
        }
      },
      visible: true,
      id: 'legend-discrete',
      orient: 'top',
      position: 'end',
      layoutType: 'normal',
      maxRow: 1,
      title: {
        textStyle: {
          fontSize: 12,
          fill: 'rgba(255,255,255,0.45)'
        }
      },
      layoutLevel: 70,
      pager: {
        layout: 'horizontal',
        padding: 0,
        textStyle: {},
        space: 0,
        handler: {
          preShape: 'triangleLeft',
          nextShape: 'triangleRight',
          style: {},
          state: {
            disable: {}
          }
        }
      },
      alignSelf: 'end',
      padding: {
        top: 0,
        bottom: 16,
        left: 0,
        right: 0
      }
    }
  ],
  label: {
    visible: false,
    offset: 3,
    overlap: {
      hideOnHit: true,
      avoidBaseMark: false,
      strategy: [
        {
          type: 'position',
          position: ['top', 'bottom']
        }
      ]
    },
    style: {
      fontSize: 19,
      fontFamily: 'D-DIN',
      fontWeight: 'normal',
      zIndex: 400,
      lineHeight: '100%',
      fill: 'rgba(255,255,255,1)',
      strokeOpacity: 0
    },
    limit: 200,
    interactive: false,
    fontWeight: 'normal'
  },
  tooltip: {
    visible: true,
    renderMode: 'canvas',
    mark: {
      visible: true
    },
    style: {
      panel: {
        padding: {
          top: 5,
          bottom: 10,
          left: 10,
          right: 10
        },
        backgroundColor: 'rgba(8, 28, 48, 0.95)',
        border: {
          color: '#CFCFCF',
          width: 0,
          radius: 2
        },
        shadow: {
          x: 0,
          y: 4,
          blur: 12,
          spread: 0,
          color: 'rgba(0, 0, 0, 0.2)'
        }
      },
      titleLabel: {
        fontSize: 14,
        fontColor: '#FFF',
        fontWeight: 'bold',
        fontFamily: 'D-DIN',
        align: 'left',
        lineHeight: 18
      },
      keyLabel: {
        fontSize: 12,
        fontColor: 'rgba(255,255,255,0.65)',
        fontWeight: 'normal',
        fontFamily: 'SourceHanSansCN-Normal',
        align: 'left',
        lineHeight: 18
      },
      valueLabel: {
        fontSize: 12,
        fontColor: '#FFF',
        fontWeight: 'normal',
        fontFamily: 'D-DIN',
        align: 'right',
        lineHeight: 18
      },
      shape: {
        size: 10,
        spacing: 10
      },
      spaceRow: 10
    },
    dimension: {
      visible: true
    }
  },
  background: 'rgba(0, 0, 0, 1)',
  hover: {
    enable: true
  },
  select: {
    enable: true
  },
  emphasis: {
    enable: true,
    effect: 'related'
  },
  node: {
    state: {
      hover: {
        cursor: 'pointer',
        fillOpacity: 0.8,
        stroke: '#58595B',
        lineWidth: 1,
        zIndex: 500
      },
      selected: {
        cursor: 'pointer',
        fillOpacity: 1,
        stroke: '#58595B',
        lineWidth: 1
      },
      blur: {
        fillOpacity: 0.1
      }
    }
  },
  animation: false,
  crosshair: {
    xField: {
      line: {
        style: {
          fillOpacity: 1,
          fill: 'rgba(80,156,255,0.1)'
        }
      },
      visible: false
    },
    yField: {
      line: {
        style: {
          fillOpacity: 1,
          fill: 'rgba(80,156,255,0.1)'
        }
      },
      visible: false
    }
  },
  morph: {
    enable: false
  },
  axesPadding: true,
  plotLayout: {
    clip: false
  },
  shape: 'diagonal',
  hash: '42e786514e060837c6d6b486de71e9c5'
};

const vchart = new VChart(spec, { dom: CONTAINER_ID });
vchart.renderSync();

// Just for the convenience of console debugging, DO NOT COPY!
window['vchart'] = vchart;
```

## 相关教程

[饼图](link)