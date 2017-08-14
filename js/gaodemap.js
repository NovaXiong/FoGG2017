var map = new AMap.Map('mapContainer',{
        resizeEnable: false,
        scrollWheel:false,
        zoom: 16,
        center: [121.593861,31.178949]
});
var marker = new AMap.Marker({
        position: [121.593861,31.178849]
});
marker.setMap(map);
marker.on('click',function(e){
  infowindow.open(map,e.target.getPosition());
});
AMap.plugin('AMap.AdvancedInfoWindow',function(){
   infowindow = new AMap.AdvancedInfoWindow({
    content: '<div class="info-title">ShanghaiTech FoGG 2017</div><div class="info-content">'+
            '<img src="https://webapi.amap.com/images/amap.jpg">'+
            '<strong> 地址：</strong>上海市浦东新区环科路199号<br/>ShanghaiTech BioFrontier FoGG 2017 <br/> <strong> 地点：</strong>上海科技大学生命学院L楼1层报告厅。' + 
          '</div>',
    offset: new AMap.Pixel(0, -30)
  });
  infowindow.open(map,[121.593861,31.178849]);
});

// ['en', 'zh_en', 'zh_cn'].forEach(function(btn) {
//   var mapbutton = document.getElementById(btn);
//   AMap.event.addDomListener(mapbutton,'click',clickListener)
// });

// function clickListener() {
//     map.setLang(this.id);
// }