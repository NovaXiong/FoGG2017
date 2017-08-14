

// 百度地图API功能


var map = new BMap.Map('allmap');
var cp = new BMap.Point(121.601652,31.186888);
map.centerAndZoom(cp, 16);
// map.enableScrollWheelZoom();

//创建检索信息窗口对象
var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
                '<strong> 地址：</strong>上海市浦东新区环科路199号<br/>ShanghaiTech BioFrontier FoGG 2017 <br/> <strong> 地点：</strong>上海科技大学生命学院L楼1层报告厅。' + 
              '</div>';

var poi = new BMap.Point(121.606089,31.180947);
var searchInfoWindow = null;
searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
    title  : "会议地点",      //标题
    width  : 298,             //宽度
    height : 88,              //高度
    panel  : "panel",         //检索结果面板
    enableAutoPan : true,     //自动平移
    searchTypes   :[
      BMAPLIB_TAB_SEARCH,   //周边检索
      BMAPLIB_TAB_TO_HERE,  //到这里去
      BMAPLIB_TAB_FROM_HERE //从这里出发
    ]
  });
// var marker = new BMap.Marker(poi); //创建marker对象
// // marker.enableDragging(); //marker可拖拽
// marker.addEventListener("click", function(e){
//   searchInfoWindow.open(marker);
// })
// map.addOverlay(marker); //在地图中添加marker
// marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画


//创建检索信息窗口对象
// var hotel1 = new BMap.Point(121.601497,31.194657);
// var content1 = '<div style="margin:0;line-height:20px;padding:2px;">' +
//                 '锦江之星酒店（华佗路店）<br/>地址：上海市浦东新区华佗路800号（近张衡路）<br/>电话：86-21-61639688' +
//               '</div>';
// var searchInfoWindow1 = null;
// searchInfoWindow1 = new BMapLib.SearchInfoWindow(map, content1, {
//     title  : "住宿推荐 ",      //标题
//     width  : 290,             //宽度
//     height : 105,              //高度
//     panel  : "panel",         //检索结果面板
//     enableAutoPan : true,     //自动平移
//     searchTypes   :[
//       BMAPLIB_TAB_SEARCH,   //周边检索
//       BMAPLIB_TAB_TO_HERE,  //到这里去
//       BMAPLIB_TAB_FROM_HERE //从这里出发
//     ]
//   });
// var marker1 = new BMap.Marker(hotel1); //创建marker对象
// // marker1.enableDragging(); //marker可拖拽
// marker1.addEventListener("click", function(e){
//   searchInfoWindow1.open(marker1);
// })
// map.addOverlay(marker1); //在地图中添加marker
// marker1.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画


// //创建检索信息窗口对象
// var hotel2 = new BMap.Point(121.597371,31.19166);
// var content2 = '<div style="margin:0;line-height:20px;padding:2px;">' +
//                 '张江美居酒店<br/>地址：上海市张江高科技园区科苑路1500号（近张衡路）<br/>电话：86-21-61651111' +
//               '</div>';

// var searchInfoWindow2 = null;
// searchInfoWindow2 = new BMapLib.SearchInfoWindow(map, content2, {
//     title  : "住宿推荐",      //标题
//     width  : 290,             //宽度
//     height : 105,              //高度
//     panel  : "panel",         //检索结果面板
//     enableAutoPan : true,     //自动平移
//     searchTypes   :[
//       BMAPLIB_TAB_SEARCH,   //周边检索
//       BMAPLIB_TAB_TO_HERE,  //到这里去
//       BMAPLIB_TAB_FROM_HERE //从这里出发
//     ]
//   });
// var marker2 = new BMap.Marker(hotel2); //创建marker对象
// // marker2.enableDragging(); //marker可拖拽
// marker2.addEventListener("click", function(e){
//   searchInfoWindow2.open(marker2);
// })
// map.addOverlay(marker2); //在地图中添加marker
// marker2.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画


var polygon = new BMap.Polygon([
  new BMap.Point(121.596457,31.185685),
  new BMap.Point(121.598133,31.186075),
  new BMap.Point(121.600118,31.186449),
  new BMap.Point(121.603253,31.186669),
  new BMap.Point(121.604991,31.186746),
  new BMap.Point(121.607529,31.181518),
  new BMap.Point(121.6054,31.179807),
  new BMap.Point(121.598734,31.17898),
  new BMap.Point(121.595186,31.183244),
  new BMap.Point(121.59736,31.183846)
], {strokeColor:"#ea6153", dasharray:1, strokeWeight:5, strokeOpacity:0.68, fillOpacity: 0.01});  //创建多边形
map.addOverlay(polygon);   //增加多边形

//创建logo
var pt = new BMap.Point(121.601043,31.182665);
var myIcon = new BMap.Icon("http://jiecaogc.oss-cn-hangzhou.aliyuncs.com/biofrontier/Tech_logo.png", new BMap.Size(180,180));
var marker8 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
marker8.addEventListener("click", function(e){
  searchInfoWindow.open(marker8);
})
map.addOverlay(marker8);              // 将标注添加到地图中
