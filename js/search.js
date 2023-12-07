function searchJs() {

  //---------------定义搜索引擎
  var searchEngine = [
    ['网易云音乐', 'images/searchbtn.png', 'https://music.163.com/#/search/m/?s=', ''],
    ['QQ音乐', 'images/searchbtn.png', 'https://y.qq.com/n/ryqq/search?w=', ''],
    ['百度', 'images/searchbtn.png', 'https://www.baidu.com/s?tn=66051470_pg&ie=utf-8&ch=3&wd=', ''],
    ['酷狗音乐', 'images/searchbtn.png', 'https://www.kugou.com/yy/html/search.html#searchType=song&searchKeyWord=', ''],
  ];

  // 制作菜单列表
  var oSearchTypeMenu = document.getElementById('search-type-menu');
  oSearchTypeMenu.innerHTML = '';
  //<li><img src='static/images/movie4.jpg'><span>百度搜索</span></li>
  for (var i = 0; i < searchEngine.length; i++) {
    var oSearchTypeNewLi = document.createElement('li');
    oSearchTypeNewLi.innerHTML = "<img src=''><span></span>";
    oSearchTypeNewLi.dataset.engineStart = searchEngine[i][2];
    oSearchTypeNewLi.dataset.engineEnd = searchEngine[i][3];
    oSearchTypeNewLi.children[0].src = searchEngine[i][1];
    oSearchTypeNewLi.children[1].innerHTML = searchEngine[i][0];

    oSearchTypeMenu.appendChild(oSearchTypeNewLi);
  }

  //---------------切换搜索引擎
  var oSearchType = document.getElementById('search-type');
  var oSearchTypeIcon = document.getElementById('search-type-icon');
  oSearchType.onclick = function () {
    if (oSearchTypeMenu.style.display == 'block') {
      oSearchTypeMenu.style.display = 'none';
      oSearchTypeIcon.style.transform = 'rotate(0deg)';
    }
    else {
      oSearchTypeMenu.style.display = 'block';
      oSearchTypeIcon.style.transform = 'rotate(180deg)';
    };
  }

  var oSearchTypeLi = oSearchTypeMenu.getElementsByTagName('li');
  var oSearchTypeName = document.getElementById('search-type-name');
  var oSearchLinkStart = '';
  var oSearchLinkEnd = '';

  //切换搜索引擎函数
  function changeSearchType(i) {
    oSearchLinkStart = searchEngine[i][2];
    oSearchLinkEnd = searchEngine[i][3];
    oSearchTypeName.innerHTML = searchEngine[i][0];
    window.localStorage.setItem('searchType', i);
  }
  for (var i = 0; i < oSearchTypeLi.length; i++) {
    oSearchTypeLi[i].index = i;
    oSearchTypeLi[i].onclick = function () {
      changeSearchType(this.index);
    }
  };

  //打开页面时的引擎
  if (window.localStorage.getItem('searchType')) {
    changeSearchType(Number(window.localStorage.getItem('searchType')));
  }
  else {
    window.localStorage.setItem('searchType', 0);
    changeSearchType(0);
  }

  //----------------点击搜索按钮跳转
  var oSearch = document.getElementById('search');
  var oSearchBtn = document.getElementById('search-btn');
  var oSearchForm = document.getElementById('searchForm');
  oSearchForm.addEventListener("submit", function (event) {
    if (oSearch.value) {
      window.open(oSearchLinkStart + oSearch.value.replace(/%/g, "%25").replace(/#/g, "%23").replace(/\+/g, "%2B") + oSearchLinkEnd);
    }//提交搜索 以及对% #等字符转码
    else {
      window.open(oSearchLinkStart + oSearch.placeholder + oSearchLinkEnd);
    };

    event.preventDefault();
    return false;
  });






}//end