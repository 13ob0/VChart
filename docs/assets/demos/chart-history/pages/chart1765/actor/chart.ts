import type { BaseActor, Player, VChartActor } from '@visactor/story-player';
// eslint-disable-next-line no-duplicate-imports
import { ActorType } from '@visactor/story-player';

export const pageChart1765ActorChart = (player: Player, actorMap: Record<string, BaseActor>) => {
  actorMap.pageChart1765ActorChart = player.createActor<VChartActor>(ActorType.vchart, {
    name: 'chart',
    defaultStyle: {
      opacity: '0',
      width: '292px',
      height: '331px',
      left: '798px',
      top: '172px',
      backgroundColor: '#ffffff'
    },
    defaultSpec: {
      type: 'sequence',
      color: ['#64b5fc', '#ff8f62'],
      series: [
        {
          type: 'link',
          dataId: 'dataLinkSeries',
          dotSeriesIndex: 1,
          fromField: 'from',
          toField: 'to',
          tooltip: {
            mark: {
              title: {
                key: 'link 信息',
                value: 'link 信息'
              },
              content: [
                {
                  hasShape: true,
                  shapeType: 'square',
                  key: 'from',
                  value: (datum: any) => datum.from
                },
                {
                  hasShape: true,
                  shapeType: 'square',
                  key: 'to',
                  value: (datum: any) => datum.to
                }
              ]
            }
          },
          arrow: {
            style: {
              visible: false
            }
          },
          link: {
            style: {
              stroke: '#ccc'
            }
          }
        },
        {
          type: 'dot',
          dataId: 'dataDotSeries',
          xField: 'event_time',
          yField: 'player_name',
          dotTypeField: 'event_type',
          titleField: 'player_name',
          highLightSeriesGroup: '',
          height: 500,
          clipHeight: 800,
          title: {
            style: {
              fill: 'rgba(46, 47, 50)'
            }
          },
          subTitle: {
            style: {
              fill: 'rgba(46, 47, 50)',
              dy: 7
            }
          },
          grid: {
            style: {
              visible: false
            }
          },
          symbol: {
            style: {
              visible: false
            }
          },
          tooltip: {
            mark: {
              title: {
                key: 'event 信息',
                value: 'event 信息'
              },
              content: [
                {
                  hasShape: true,
                  shapeType: 'square',
                  key: (datum: any) => datum.player_name
                },
                {
                  hasShape: false,
                  key: 'event_time_stamp',
                  value: (datum: any) => datum.event_time
                }
              ]
            }
          }
        }
      ],
      axes: [
        {
          orient: 'top',
          type: 'time',
          range: {
            min: -2209017943000,
            max: -2209015063000
          },
          layers: [
            {
              tickStep: 28800,
              timeFormat: '%Y%m%d'
            },
            {
              tickStep: 28800,
              timeFormat: '%H:%M'
            }
          ],
          label: {
            visible: false
          }
        }
      ],
      data: [
        {
          id: 'dataDotSeries',
          values: [
            {
              player_name: 'Deandre Ayton',
              type: 'Deandre Ayton',
              dots: [
                {
                  event_time: -2209017943000,
                  node_name: 'Deandre Ayton_0_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209017476000,
                  node_name: 'Deandre Ayton_0_end_node',
                  event_type: 'end'
                },
                {
                  event_time: -2209016998000,
                  node_name: 'Deandre Ayton_1_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209016057000,
                  node_name: 'Deandre Ayton_1_end_node',
                  event_type: 'end'
                },
                {
                  event_time: -2209015551000,
                  node_name: 'Deandre Ayton_2_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209015127000,
                  node_name: 'Deandre Ayton_2_end_node',
                  event_type: 'end'
                },
                {
                  event_time: -2209015116000,
                  node_name: 'Deandre Ayton_3_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209015063000,
                  node_name: 'Deandre Ayton_3_end_node',
                  event_type: 'end'
                }
              ]
            },
            {
              player_name: 'Devin Booker',
              type: 'Devin Booker',
              dots: [
                {
                  event_time: -2209017943000,
                  node_name: 'Devin Booker_0_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209017293000,
                  node_name: 'Devin Booker_0_end_node',
                  event_type: 'end'
                },
                {
                  event_time: -2209016892000,
                  node_name: 'Devin Booker_1_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209015783000,
                  node_name: 'Devin Booker_1_end_node',
                  event_type: 'end'
                },
                {
                  event_time: -2209015380000,
                  node_name: 'Devin Booker_2_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209015063000,
                  node_name: 'Devin Booker_2_end_node',
                  event_type: 'end'
                }
              ]
            },
            {
              player_name: 'Kyle Lowry',
              type: 'Kyle Lowry',
              dots: [
                {
                  event_time: -2209017943000,
                  node_name: 'Kyle Lowry_0_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209017476000,
                  node_name: 'Kyle Lowry_0_end_node',
                  event_type: 'end'
                },
                {
                  event_time: -2209017223000,
                  node_name: 'Kyle Lowry_1_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209016762000,
                  node_name: 'Kyle Lowry_1_end_node',
                  event_type: 'end'
                },
                {
                  event_time: -2209016614000,
                  node_name: 'Kyle Lowry_2_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209016057000,
                  node_name: 'Kyle Lowry_2_end_node',
                  event_type: 'end'
                },
                {
                  event_time: -2209015884000,
                  node_name: 'Kyle Lowry_3_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209015063000,
                  node_name: 'Kyle Lowry_3_end_node',
                  event_type: 'end'
                }
              ]
            },
            {
              player_name: 'Jae Crowder',
              type: 'Jae Crowder',
              dots: [
                {
                  event_time: -2209017943000,
                  node_name: 'Jae Crowder_0_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209017293000,
                  node_name: 'Jae Crowder_0_end_node',
                  event_type: 'end'
                },
                {
                  event_time: -2209016998000,
                  node_name: 'Jae Crowder_1_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209016139000,
                  node_name: 'Jae Crowder_1_end_node',
                  event_type: 'end'
                },
                {
                  event_time: -2209015651000,
                  node_name: 'Jae Crowder_2_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209015063000,
                  node_name: 'Jae Crowder_2_end_node',
                  event_type: 'end'
                }
              ]
            },
            {
              player_name: 'Aron Baynes',
              type: 'Aron Baynes',
              dots: [
                {
                  event_time: -2209017943000,
                  node_name: 'Aron Baynes_0_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209017476000,
                  node_name: 'Aron Baynes_0_end_node',
                  event_type: 'end'
                },
                {
                  event_time: -2209016503000,
                  node_name: 'Aron Baynes_1_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209016166000,
                  node_name: 'Aron Baynes_1_end_node',
                  event_type: 'end'
                }
              ]
            },
            {
              player_name: 'Pascal Siakam',
              type: 'Pascal Siakam',
              dots: [
                {
                  event_time: -2209016892000,
                  node_name: 'Pascal Siakam_0_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209015788000,
                  node_name: 'Pascal Siakam_0_end_node',
                  event_type: 'end'
                },
                {
                  event_time: -2209015528000,
                  node_name: 'Pascal Siakam_1_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209015063000,
                  node_name: 'Pascal Siakam_1_end_node',
                  event_type: 'end'
                },
                {
                  event_time: -2209017943000,
                  node_name: 'Pascal Siakam_2_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209017223000,
                  node_name: 'Pascal Siakam_2_end_node',
                  event_type: 'end'
                }
              ]
            },
            {
              player_name: 'Mikal Bridges',
              type: 'Mikal Bridges',
              dots: [
                {
                  event_time: -2209017943000,
                  node_name: 'Mikal Bridges_0_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209017650000,
                  node_name: 'Mikal Bridges_0_end_node',
                  event_type: 'end'
                },
                {
                  event_time: -2209016998000,
                  node_name: 'Mikal Bridges_1_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209016762000,
                  node_name: 'Mikal Bridges_1_end_node',
                  event_type: 'end'
                },
                {
                  event_time: -2209016503000,
                  node_name: 'Mikal Bridges_2_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209016003000,
                  node_name: 'Mikal Bridges_2_end_node',
                  event_type: 'end'
                },
                {
                  event_time: -2209015783000,
                  node_name: 'Mikal Bridges_3_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209015063000,
                  node_name: 'Mikal Bridges_3_end_node',
                  event_type: 'end'
                }
              ]
            },
            {
              player_name: 'Chris Paul',
              type: 'Chris Paul',
              dots: [
                {
                  event_time: -2209017943000,
                  node_name: 'Chris Paul_0_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209017476000,
                  node_name: 'Chris Paul_0_end_node',
                  event_type: 'end'
                },
                {
                  event_time: -2209016998000,
                  node_name: 'Chris Paul_1_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209016057000,
                  node_name: 'Chris Paul_1_end_node',
                  event_type: 'end'
                },
                {
                  event_time: -2209015551000,
                  node_name: 'Chris Paul_2_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209015063000,
                  node_name: 'Chris Paul_2_end_node',
                  event_type: 'end'
                }
              ]
            },
            {
              player_name: 'OG Anunoby',
              type: 'OG Anunoby',
              dots: [
                {
                  event_time: -2209017943000,
                  node_name: 'OG Anunoby_0_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209017476000,
                  node_name: 'OG Anunoby_0_end_node',
                  event_type: 'end'
                },
                {
                  event_time: -2209017223000,
                  node_name: 'OG Anunoby_1_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209016614000,
                  node_name: 'OG Anunoby_1_end_node',
                  event_type: 'end'
                },
                {
                  event_time: -2209016503000,
                  node_name: 'OG Anunoby_2_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209016021000,
                  node_name: 'OG Anunoby_2_end_node',
                  event_type: 'end'
                },
                {
                  event_time: -2209015788000,
                  node_name: 'OG Anunoby_3_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209015063000,
                  node_name: 'OG Anunoby_3_end_node',
                  event_type: 'end'
                }
              ]
            },
            {
              player_name: 'Fred VanVleet',
              type: 'Fred VanVleet',
              dots: [
                {
                  event_time: -2209016892000,
                  node_name: 'Fred VanVleet_0_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209015884000,
                  node_name: 'Fred VanVleet_0_end_node',
                  event_type: 'end'
                },
                {
                  event_time: -2209015651000,
                  node_name: 'Fred VanVleet_1_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209015063000,
                  node_name: 'Fred VanVleet_1_end_node',
                  event_type: 'end'
                },
                {
                  event_time: -2209017943000,
                  node_name: 'Fred VanVleet_2_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209017223000,
                  node_name: 'Fred VanVleet_2_end_node',
                  event_type: 'end'
                }
              ]
            },
            {
              player_name: 'Cameron Johnson',
              type: 'Cameron Johnson',
              dots: [
                {
                  event_time: -2209017650000,
                  node_name: 'Cameron Johnson_0_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209016998000,
                  node_name: 'Cameron Johnson_0_end_node',
                  event_type: 'end'
                },
                {
                  event_time: -2209016762000,
                  node_name: 'Cameron Johnson_1_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209016503000,
                  node_name: 'Cameron Johnson_1_end_node',
                  event_type: 'end'
                },
                {
                  event_time: -2209016139000,
                  node_name: 'Cameron Johnson_2_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209015651000,
                  node_name: 'Cameron Johnson_2_end_node',
                  event_type: 'end'
                }
              ]
            },
            {
              player_name: 'Yuta Watanabe',
              type: 'Yuta Watanabe',
              dots: [
                {
                  event_time: -2209017476000,
                  node_name: 'Yuta Watanabe_0_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209016892000,
                  node_name: 'Yuta Watanabe_0_end_node',
                  event_type: 'end'
                },
                {
                  event_time: -2209016021000,
                  node_name: 'Yuta Watanabe_1_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209015651000,
                  node_name: 'Yuta Watanabe_1_end_node',
                  event_type: 'end'
                }
              ]
            },
            {
              player_name: 'Dario Saric',
              type: 'Dario Saric',
              dots: [
                {
                  event_time: -2209017476000,
                  node_name: 'Dario Saric_0_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209016998000,
                  node_name: 'Dario Saric_0_end_node',
                  event_type: 'end'
                },
                {
                  event_time: -2209016057000,
                  node_name: 'Dario Saric_1_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209015551000,
                  node_name: 'Dario Saric_1_end_node',
                  event_type: 'end'
                },
                {
                  event_time: -2209015127000,
                  node_name: 'Dario Saric_2_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209015116000,
                  node_name: 'Dario Saric_2_end_node',
                  event_type: 'end'
                }
              ]
            },
            {
              player_name: 'Chris Boucher',
              type: 'Chris Boucher',
              dots: [
                {
                  event_time: -2209017476000,
                  node_name: 'Chris Boucher_0_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209016998000,
                  node_name: 'Chris Boucher_0_end_node',
                  event_type: 'end'
                },
                {
                  event_time: -2209015962000,
                  node_name: 'Chris Boucher_1_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209015528000,
                  node_name: 'Chris Boucher_1_end_node',
                  event_type: 'end'
                }
              ]
            },
            {
              player_name: 'Norman Powell',
              type: 'Norman Powell',
              dots: [
                {
                  event_time: -2209017476000,
                  node_name: 'Norman Powell_0_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209017119000,
                  node_name: 'Norman Powell_0_end_node',
                  event_type: 'end'
                },
                {
                  event_time: -2209016762000,
                  node_name: 'Norman Powell_1_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209016547000,
                  node_name: 'Norman Powell_1_end_node',
                  event_type: 'end'
                },
                {
                  event_time: -2209016057000,
                  node_name: 'Norman Powell_2_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209015063000,
                  node_name: 'Norman Powell_2_end_node',
                  event_type: 'end'
                }
              ]
            },
            {
              player_name: 'Cameron Payne',
              type: 'Cameron Payne',
              dots: [
                {
                  event_time: -2209017476000,
                  node_name: 'Cameron Payne_0_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209016998000,
                  node_name: 'Cameron Payne_0_end_node',
                  event_type: 'end'
                },
                {
                  event_time: -2209016057000,
                  node_name: 'Cameron Payne_1_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209015551000,
                  node_name: 'Cameron Payne_1_end_node',
                  event_type: 'end'
                }
              ]
            },
            {
              player_name: 'Langston Galloway',
              type: 'Langston Galloway',
              dots: [
                {
                  event_time: -2209017293000,
                  node_name: 'Langston Galloway_0_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209016998000,
                  node_name: 'Langston Galloway_0_end_node',
                  event_type: 'end'
                }
              ]
            },
            {
              player_name: 'Jevon Carter',
              type: 'Jevon Carter',
              dots: [
                {
                  event_time: -2209017293000,
                  node_name: 'Jevon Carter_0_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209016892000,
                  node_name: 'Jevon Carter_0_end_node',
                  event_type: 'end'
                },
                {
                  event_time: -2209016003000,
                  node_name: 'Jevon Carter_1_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209015380000,
                  node_name: 'Jevon Carter_1_end_node',
                  event_type: 'end'
                }
              ]
            },
            {
              player_name: 'Malachi Flynn',
              type: 'Malachi Flynn',
              dots: [
                {
                  event_time: -2209017119000,
                  node_name: 'Malachi Flynn_0_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209016892000,
                  node_name: 'Malachi Flynn_0_end_node',
                  event_type: 'end'
                }
              ]
            },
            {
              player_name: 'Alex Len',
              type: 'Alex Len',
              dots: [
                {
                  event_time: -2209016998000,
                  node_name: 'Alex Len_0_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209016503000,
                  node_name: 'Alex Len_0_end_node',
                  event_type: 'end'
                },
                {
                  event_time: -2209016166000,
                  node_name: 'Alex Len_1_start_node',
                  event_type: 'start'
                },
                {
                  event_time: -2209015962000,
                  node_name: 'Alex Len_1_end_node',
                  event_type: 'end'
                }
              ]
            },
            {
              player_name: "DeAndre' Bembry",
              type: "DeAndre' Bembry",
              dots: [
                {
                  event_time: -2209016547000,
                  node_name: "DeAndre' Bembry_0_start_node",
                  event_type: 'start'
                },
                {
                  event_time: -2209015783000,
                  node_name: "DeAndre' Bembry_0_end_node",
                  event_type: 'end'
                }
              ]
            }
          ]
        },
        {
          id: 'dataLinkSeries',
          values: [
            {
              from: 'Deandre Ayton_0_start_node',
              to: 'Deandre Ayton_0_end_node'
            },
            {
              from: 'Deandre Ayton_1_start_node',
              to: 'Deandre Ayton_1_end_node'
            },
            {
              from: 'Deandre Ayton_2_start_node',
              to: 'Deandre Ayton_2_end_node'
            },
            {
              from: 'Deandre Ayton_3_start_node',
              to: 'Deandre Ayton_3_end_node'
            },
            {
              from: 'Devin Booker_0_start_node',
              to: 'Devin Booker_0_end_node'
            },
            {
              from: 'Devin Booker_1_start_node',
              to: 'Devin Booker_1_end_node'
            },
            {
              from: 'Devin Booker_2_start_node',
              to: 'Devin Booker_2_end_node'
            },
            {
              from: 'Kyle Lowry_0_start_node',
              to: 'Kyle Lowry_0_end_node'
            },
            {
              from: 'Kyle Lowry_1_start_node',
              to: 'Kyle Lowry_1_end_node'
            },
            {
              from: 'Kyle Lowry_2_start_node',
              to: 'Kyle Lowry_2_end_node'
            },
            {
              from: 'Kyle Lowry_3_start_node',
              to: 'Kyle Lowry_3_end_node'
            },
            {
              from: 'Jae Crowder_0_start_node',
              to: 'Jae Crowder_0_end_node'
            },
            {
              from: 'Jae Crowder_1_start_node',
              to: 'Jae Crowder_1_end_node'
            },
            {
              from: 'Jae Crowder_2_start_node',
              to: 'Jae Crowder_2_end_node'
            },
            {
              from: 'Aron Baynes_0_start_node',
              to: 'Aron Baynes_0_end_node'
            },
            {
              from: 'Aron Baynes_1_start_node',
              to: 'Aron Baynes_1_end_node'
            },
            {
              from: 'Pascal Siakam_0_start_node',
              to: 'Pascal Siakam_0_end_node'
            },
            {
              from: 'Pascal Siakam_1_start_node',
              to: 'Pascal Siakam_1_end_node'
            },
            {
              from: 'Pascal Siakam_2_start_node',
              to: 'Pascal Siakam_2_end_node'
            },
            {
              from: 'Mikal Bridges_0_start_node',
              to: 'Mikal Bridges_0_end_node'
            },
            {
              from: 'Mikal Bridges_1_start_node',
              to: 'Mikal Bridges_1_end_node'
            },
            {
              from: 'Mikal Bridges_2_start_node',
              to: 'Mikal Bridges_2_end_node'
            },
            {
              from: 'Mikal Bridges_3_start_node',
              to: 'Mikal Bridges_3_end_node'
            },
            {
              from: 'Chris Paul_0_start_node',
              to: 'Chris Paul_0_end_node'
            },
            {
              from: 'Chris Paul_1_start_node',
              to: 'Chris Paul_1_end_node'
            },
            {
              from: 'Chris Paul_2_start_node',
              to: 'Chris Paul_2_end_node'
            },
            {
              from: 'OG Anunoby_0_start_node',
              to: 'OG Anunoby_0_end_node'
            },
            {
              from: 'OG Anunoby_1_start_node',
              to: 'OG Anunoby_1_end_node'
            },
            {
              from: 'OG Anunoby_2_start_node',
              to: 'OG Anunoby_2_end_node'
            },
            {
              from: 'OG Anunoby_3_start_node',
              to: 'OG Anunoby_3_end_node'
            },
            {
              from: 'Fred VanVleet_0_start_node',
              to: 'Fred VanVleet_0_end_node'
            },
            {
              from: 'Fred VanVleet_1_start_node',
              to: 'Fred VanVleet_1_end_node'
            },
            {
              from: 'Fred VanVleet_2_start_node',
              to: 'Fred VanVleet_2_end_node'
            },
            {
              from: 'Cameron Johnson_0_start_node',
              to: 'Cameron Johnson_0_end_node'
            },
            {
              from: 'Cameron Johnson_1_start_node',
              to: 'Cameron Johnson_1_end_node'
            },
            {
              from: 'Cameron Johnson_2_start_node',
              to: 'Cameron Johnson_2_end_node'
            },
            {
              from: 'Yuta Watanabe_0_start_node',
              to: 'Yuta Watanabe_0_end_node'
            },
            {
              from: 'Yuta Watanabe_1_start_node',
              to: 'Yuta Watanabe_1_end_node'
            },
            {
              from: 'Dario Saric_0_start_node',
              to: 'Dario Saric_0_end_node'
            },
            {
              from: 'Dario Saric_1_start_node',
              to: 'Dario Saric_1_end_node'
            },
            {
              from: 'Dario Saric_2_start_node',
              to: 'Dario Saric_2_end_node'
            },
            {
              from: 'Chris Boucher_0_start_node',
              to: 'Chris Boucher_0_end_node'
            },
            {
              from: 'Chris Boucher_1_start_node',
              to: 'Chris Boucher_1_end_node'
            },
            {
              from: 'Norman Powell_0_start_node',
              to: 'Norman Powell_0_end_node'
            },
            {
              from: 'Norman Powell_1_start_node',
              to: 'Norman Powell_1_end_node'
            },
            {
              from: 'Norman Powell_2_start_node',
              to: 'Norman Powell_2_end_node'
            },
            {
              from: 'Cameron Payne_0_start_node',
              to: 'Cameron Payne_0_end_node'
            },
            {
              from: 'Cameron Payne_1_start_node',
              to: 'Cameron Payne_1_end_node'
            },
            {
              from: 'Langston Galloway_0_start_node',
              to: 'Langston Galloway_0_end_node'
            },
            {
              from: 'Jevon Carter_0_start_node',
              to: 'Jevon Carter_0_end_node'
            },
            {
              from: 'Jevon Carter_1_start_node',
              to: 'Jevon Carter_1_end_node'
            },
            {
              from: 'Malachi Flynn_0_start_node',
              to: 'Malachi Flynn_0_end_node'
            },
            {
              from: 'Alex Len_0_start_node',
              to: 'Alex Len_0_end_node'
            },
            {
              from: 'Alex Len_1_start_node',
              to: 'Alex Len_1_end_node'
            },
            {
              from: "DeAndre' Bembry_0_start_node",
              to: "DeAndre' Bembry_0_end_node"
            }
          ]
        }
      ]
    }
  });
};