  // TODO:暂时注释，发起网络请求获取数据
  // axios
  //   .get(
  //     `https://v2.jokeapi.dev/`
  //   )
  //   .then((res) => {
  //     console.log(res, 'res')
  //     // 处理接口返回的数据
  //   })
  //   .catch();
$(function () {
  map();
});
// 地理坐标信息，包括各个地区的经纬度
let geoCoordMap = {
  广州: [113.12244, 23.009505],
  海南: [110.3893, 19.8516],
};

// 各个地区的数值数据
let chinaDatas = [
  {
    name: '广州',
    value: 1,
  },
  {
    name: '海南',
    value: 0,
  },
];

// 定义 map 函数
function map() {
  // 获取页面中的图表容器
  let myChart = echarts.init(document.getElementById('map'));
  let iconGQ =
    'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNCRkRBMEJBQzgwRjExRUFBNUI0RTMyMThEN0UxMzFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNCRkRBMEJCQzgwRjExRUFBNUI0RTMyMThEN0UxMzFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0JGREEwQjhDODBGMTFFQUE1QjRFMzIxOEQ3RTEzMUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0JGREEwQjlDODBGMTFFQUE1QjRFMzIxOEQ3RTEzMUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5mT42iAAABQ0lEQVR42mL8LabOQCQIBOL1xChkItJAkLp+IBajpqFWQCwPxJ7UNDQCSgdQy1BmIA6Bsl2AmJMahjoAsTiUzQPETtQwNAKN709IAwvUayZQ/hcg/o0k/x6Ig9D0+ABxKJT9HYh/oMm/BBm6GYitgTgfiBmJcLkkEK/CIXcGiGNB3v8JxIVQF31gIA/8AeIWaNK7gRymG4BYH4hPkGjgXSC2A+JaWNChR9QjqIJeIP5PhIGzgdgAiI8Tin2QbSVAvIOAgROBOA0auUQlKV4gtidgqBGp6RSUFrmIKA/ESDEUPcGfBOIUIH6Lln29iTVUCIjdkJJKExDbAPFcqJdPEMpd2AwF5TBWaFKxBeJ6qOHIqaMbmjrcsBUw2AwNh7rKAEeaBaWOMiD2BeJvQOxOyFBuaFJJwZZU0MBWaHCIo0sABBgAetA4Jx5t/ToAAAAASUVORK5CYII=';

  // 配置图表参数
  //配置图表参数 option，包括 xAxis、yAxis、geo 等组件的设置，以及各个系列的数据。这里有两个系列，
  //分别是散点系列和特效散点系列。根据数据设置散点的大小、颜色等样式。
  let option = {
    xAxis: {
      show: false,
    },
    yAxis: {
      type: 'category',
      inverse: true,
      nameGap: 16,
      axisLine: {
        show: false,
        lineStyle: {
          color: '#ddd',
        },
      },
      axisTick: {
        show: false,
        lineStyle: {
          color: '#ddd',
        },
      },
      axisLabel: {
        interval: 0,
        margin: 85,
        textStyle: {
          color: '#fff',
          align: 'left',
          fontSize: 14,
        },
        rich: {
          a: {
            color: '#fff',
            backgroundColor: '#f0515e',
            width: 15,
            height: 15,
            align: 'center',
            borderRadius: 2,
          },
          b: {
            color: '#fff',
            backgroundColor: '#24a5cd',
            width: 15,
            height: 15,
            align: 'center',
            borderRadius: 2,
          },
        },
        formatter: function (params) {
          if (parseInt(params.slice(0, 2)) < 3) {
            return [
              '{a|' +
                (parseInt(params.slice(0, 2)) + 1) +
                '}' +
                '  ' +
                params.slice(2),
            ].join('\n');
          } else {
            return [
              '{b|' +
                (parseInt(params.slice(0, 2)) + 1) +
                '}' +
                '  ' +
                params.slice(2),
            ].join('\n');
          }
        },
      },
      data: [],
    },
    //地理坐标系组件：地理坐标系组件用于地图的绘制，支持在地理坐标系上绘制散点图，线集
    geo: {
      map: 'china', //使用registerMap注册的地图名称s
      show: true, //是否显示地理坐标系组件
      aspectScale: 0.85, //地图的长宽比
      layoutCenter: ['50%', '50%'], //地图位置
      layoutSize: '100%',
      zoom: 1.1, //当前视角的缩放比例
      itemStyle: {
        //地图区域的多边形 图形样式
        normal: {
          shadowColor: '#276fce', //阴影颜色
          shadowOffsetX: 0, //隐影水平方向上的偏移距离
          shadowOffsetY: 6, //阴影垂直方向上的偏移距离
          opacity: 0.3, //图形透明度
        },
        emphasis: {
          areaColor: '#276fce', //地图区域的颜色
        },
      },
      regions: [
        //在地图中对特别的区域配置样式
        {
          name: '南海诸岛',
          itemStyle: {
            //该区域的多边形样式设置
            areaColor: '#000a34',
            borderColor: '#000a34',
            normal: {
              opacity: 0,
              label: {
                show: true,
                color: '#fff',
              },
            },
          },
          label: {
            //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
            show: true, //是否显示标签
            color: '#fff',
            fontSize: 12,
          },
        },
      ],
    },

    series: [
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 1,
        data: [],
        symbolSize: 14,
        label: {
          normal: {
            show: true,
            formatter: function (params) {
              return (
                '{fline|公司：' +
                '  ' +
                params.data.telphone +
                '}\n{tline|' +
                params.data.address +
                '}'
              );
            },
            position: 'top',
            backgroundColor: getRandomColor(),
            padding: [0, 0],
            borderRadius: 3,
            lineHeight: 32,
            color: '#f7fafb',
            rich: {
              fline: {
                padding: [0, 10, 10, 10],
                color: '#ffffff',
              },
              tline: {
                padding: [10, 10, 0, 10],
                color: '#ffffff',
              },
            },
          },
          emphasis: {
            show: true,
          },
        },
        itemStyle: {
          color: '#feae21',
        },
      },
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 1,
        data: [],
        symbolSize: 14,
        label: {
          normal: {
            show: true,
            formatter: function (params) {
              return (
                '{fline|公司：' +
                '  ' +
                params.data.telphone +
                '}\n{tline|' +
                params.data.address +
                '}'
              );
            },
            position: 'top',
            backgroundColor: getRandomColor(),
            padding: [0, 0],
            borderRadius: 3,
            lineHeight: 32,
            color: '#ffffff',
            rich: {
              fline: {
                padding: [0, 10, 10, 10],
                color: '#ffffff',
              },
              tline: {
                padding: [10, 10, 0, 10],
                color: '#ffffff',
              },
            },
          },
          emphasis: {
            show: true,
          },
        },
        itemStyle: {
          color: '#e93f42',
        },
      },
      // 常规地图配置
      {
        type: 'map', //地图
        mapType: 'china', //中国
        aspectScale: 0.85, //用于scale地图的长宽比
        layoutCenter: ['50%', '50%'], //地图位置
        layoutSize: '100%', //地图大小
        zoom: 1.1, //当前视角的缩放比例
        scaleLimit: {
          //滚轮缩放的极限控制
          min: 1,
          max: 2,
        },
        itemStyle: {
          //地图区域的多边形 图形样式
          normal: {
            areaColor: '#0c274b',
            borderColor: '#1cccff',
            borderWidth: 1.5,
          },

          emphasis: {
            areaColor: '#02102b',
          },
        },
        label: {
          //设置地图字体
          show: true,
          color: '#fff', // 设置默认字体颜色为红色
          align: 'center',
          verticalAlign: 'center',
        },
        emphasis: {
          //设置地图字体
          label: {
            show: true,
            color: '#fff', // 设置悬浮字体颜色为白色
            align: 'center',
            verticalAlign: 'center',
          },
        },
      },
      {
        //首都星图标
        name: '首都',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: [
          {
            name: '首都',
            value: [116.24, 41.55, 100],
          },
        ],
        symbol: iconGQ,
        symbolSize: 20,
        label: {
          normal: {
            show: false,
          },
          emphasis: {
            show: false,
          },
        },
      },
      // 区域散点图
      {
        type: 'lines',
        symbol: 'circle',
        opacity: 1,
        lineStyle: {
          type: 'solid',
          color: '#fff',
          width: 0.5,
          opacity: 1,
        },
        data: [], //空数据
      },
    ],
  };

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  });
    // 生成随机颜色的函数
    function getRandomColor() {
      // 生成随机的 R、G、B 值
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
        return 'rgba(' + r + ',' + g + ',' + b + ', 0.9)';
    }
  //获取电话号码
  function getTel(index) {
    let tel = [
      '东南特卫（海南）国际保安服务有限公司',
      '深圳东南特卫科技集团有限公司',
    ];
    if (index === 0) {
      return tel[0];
    } else {
      return tel[1];
    }
  }

  function getAddress(num, type) {
    var addstr = '';
    if (chinaDatas[num].name === '海南') {
      addstr =
        '地址：' +
        chinaDatas[num].name +
        '省海口市秀英区海港路20号凯威大酒店5楼599房';
    } else {
      switch (type) {
        default:
          addstr =
            '地址：' +
            chinaDatas[num].name +
            '省深圳市福田区园岭街道华林社区八卦路33号八卦岭工业区512栋314B';
          break;
      }
    }
    return addstr;
  }

  // 设置定时器定时更新数据
  //设置定时器，定时更新数据，并通过 myChart.setOption() 更新图表展示。这里每隔5秒钟请求一次数据并更新图表。
  var timer = setInterval(() => {
    var validProvinces = ['海南', '广州']; // 有效的省份列表
    var runidx = Math.floor(Math.random() * validProvinces.length); // 随机选择海南或广东
    // var runidx = 1; // 固定选择海南作为第一次显示的省份
    var typeidx = Math.floor(Math.random() * 1);

    var dataidx = 1;
    if (validProvinces[runidx] === '广州') {
      dataidx = 0; // 广东在 chinaDatas 中的索引
    } else if (validProvinces[runidx] === '海南') {
      dataidx = 1; // 海南在 chinaDatas 中的索引
    }
    var ranval = Math.floor(Math.random() * 10);
    //更新数据
    chinaDatas[dataidx].value = chinaDatas[dataidx].value + ranval;
    var valarr = geoCoordMap[validProvinces[runidx]];
    valarr.push(ranval);

    //更新图表数据
    option.series[typeidx].data = [
      {
        name: '',
        telphone: getTel(runidx),
        address: getAddress(dataidx, typeidx),
        value: valarr,
      },
    ];

    //按值排序
    option.series[4].data = option.series[4].data.sort(function (a, b) {
      return b.value - a.value;
    });
    myChart.setOption(option, true);
  }, 3000);
  // 监听浏览器窗口大小变化事件，自适应图表大小
  window.addEventListener('resize', function () {
    myChart.resize();
  });
}
