window.onload = function () {

  //跳转mobile--------------------------------
  var mobileAgent = new Array("android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "iphone", "ipod", "ipad", "lg", "ucweb", "skyfire");
  var browser = navigator.userAgent.toLowerCase();
  var pcLink = false;
  //判断是否是强制访问电脑版链接  ?webpage=1--------------------------------
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == 'webpage') {
      if (pair[1] == 1) {
        pcLink = true;
      }
    }
  }

  for (var i = 0; i < mobileAgent.length; i++) {
    if (browser.indexOf(mobileAgent[i]) != -1 && !pcLink) {
      location.href = '/m';
      break;
    }
  }

  //经过显示详情--------------------------------
  var oMusicInformation = document.getElementById('music-information');
  var oMusicName = document.getElementById('music-name');
  var oMusicImgA = document.getElementById('music-img-a');
  var oMusicImgFixed = document.getElementById('music-img-fixed');

  oMusicInformation.onmouseover = oMusicName.onmouseover = oMusicImgA.onmouseover = function () {
    oMusicImgFixed.style.display = 'block';
  }
  oMusicInformation.onmouseleave = oMusicName.onmouseleave = oMusicImgA.onmouseleave = function () {
    oMusicImgFixed.style.display = 'none';
  }
















  searchJs();
}//end