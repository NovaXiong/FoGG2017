// var map = new AMap.Map('mapContainer',{
//         resizeEnable: true,
//         dragEnable: true,
//         scrollWheel:false,
//         zoom: 16,
//         center: [121.593861,31.178949]
// });
// var marker = new AMap.Marker({
//         position: [121.593861,31.178849]
// });
// marker.setMap(map);
// marker.on('click',function(e){
//   infowindow.open(map,e.target.getPosition());
// });
// AMap.plugin('AMap.AdvancedInfoWindow',function(){
//    infowindow = new AMap.AdvancedInfoWindow({
//     content: '<div class="info-title">ShanghaiTech FoGG 2017</div><div class="info-content">'+
//             '<img src="https://webapi.amap.com/images/amap.jpg">'+
//             '<strong> 地址：</strong>上海市浦东新区环科路199号<br/>ShanghaiTech BioFrontier FoGG 2017 <br/> <strong> 地点：</strong>上海科技大学生命学院L楼1层报告厅。' + 
//           '</div>',
//     offset: new AMap.Pixel(0, -30)
//   });
//   infowindow.open(map,[121.593861,31.178849]);
// });

// ['en', 'zh_en', 'zh_cn'].forEach(function(btn) {
//   var mapbutton = document.getElementById(btn);
//   AMap.event.addDomListener(mapbutton,'click',clickListener)
// });

// function clickListener() {
//     map.setLang(this.id);
// }

  //地图初始化时，在地图上添加一个marker标记,鼠标点击marker可弹出自定义的信息窗体
    var map = new AMap.Map("mapContainer", {
        resizeEnable: true,
        dragEnable: false,
        scrollWheel:false,
        zoom: 16,
        center: [121.593861,31.178949]
    });    
    addMarker();
    //添加marker标记
    function addMarker() {
        map.clearMap();
        var marker = new AMap.Marker({
            map: map,
            position: [121.593861,31.178949],
            icon: new AMap.Icon({            
                size: new AMap.Size(108, 108),  //图标大小
                image: "/img/sprites/click.svg",
                // imageOffset: new AMap.Pixel(0, -60)
            })        

        });
        //鼠标点击marker弹出自定义的信息窗体

        AMap.event.addListener(marker, 'click', function() {
            infoWindow.open(map, marker.getPosition());
        });
    }

    //实例化信息窗体
    var title = 'ShanghaiTech FoGG 2017',
        content = [];
    content.push("<a href='http://ditu.amap.com/place/B0FFHGH56Y' target='_blank'><img src='https://webapi.amap.com/images/amap.jpg'>地址：</a> 上海市浦东新区环科路199号");
    content.push("<a href='http://ditu.amap.com/place/B0FFHGH56Y' target='_blank'>Location:</a> No. 199, Huanke Rd, Pudong District, Shanghai, 201210, China");
    content.push("<a href='http://ditu.amap.com/place/B0FFHGH56Y' target='_blank'><h6>Navigate there</h6></a>");
    var infoWindow = new AMap.InfoWindow({
        isCustom: true,  //使用自定义窗体
        content: createInfoWindow(title, content.join("<br/>")),
        offset: new AMap.Pixel(16, -45)
    });


    //构建自定义信息窗体
    function createInfoWindow(title, content) {
        var info = document.createElement("div");
        info.className = "info";

        //可以通过下面的方式修改自定义窗体的宽高
        //info.style.width = "400px";
        // 定义顶部标题
        var top = document.createElement("div");
        var titleD = document.createElement("div");
        var closeX = document.createElement("img");
        top.className = "info-top";
        titleD.innerHTML = title;
        closeX.src = "http://webapi.amap.com/images/close2.gif";
        closeX.onclick = closeInfoWindow;

        top.appendChild(titleD);
        top.appendChild(closeX);
        info.appendChild(top);

        // 定义中部内容
        var middle = document.createElement("div");
        middle.className = "info-middle";
        middle.style.backgroundColor = 'white';
        middle.innerHTML = content;
        info.appendChild(middle);

        // 定义底部内容
        var bottom = document.createElement("div");
        bottom.className = "info-bottom";
        bottom.style.position = 'relative';
        bottom.style.top = '0px';
        bottom.style.margin = '0 auto';
        var sharp = document.createElement("img");
        sharp.src = "http://webapi.amap.com/images/sharp.png";
        bottom.appendChild(sharp);
        info.appendChild(bottom);
        return info;
    }

    //关闭信息窗体
    function closeInfoWindow() {
        map.clearInfoWindow();
    }

