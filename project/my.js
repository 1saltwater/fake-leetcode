// 轮播图
let item =document.querySelectorAll(".banner-item");
let point =document.querySelectorAll(".point");
let all =document.querySelectorAll(".banner");
let index=0;
let time=0;
let timeId;
//清除active类，
let clearActive=function() {
    for( i=0;i<item.length;i++) {
        item[i].className="banner-item";
    }
    for(i=0;i<point.length;i++) {
        point[i].className="point";
    }
}
//轮播index图
let goIndex=function() {
    clearActive();
    item[index].className="banner-item active";
    point[index].className="point active";
}
//轮播下一个图
let gonext=function() {
    if(index<2) {
        index++;
    } else {
        index=0;
    }
    goIndex();
}
//绑定点击事件
for(i=0;i<point.length;i++) {
    point[i].addEventListener("click",function()
    {
        index=this.getAttribute("data-index");
        goIndex();
        time=0;
    })
}
//轮播效果
let play= function() {
    time++;
    if(time===20) {
        gonext();
        time=0;
    }
}
timeId =setInterval(play(),100);
play();
//鼠标进入时清除
all.onmousemove = function(){
    clearInterval(timer)
}
all.onmouseleave = function(){
    play();
}

//搜索栏
let input = document.querySelector('.search-text')
let ul = document.querySelector('.result-list')
//激活搜索栏
input.addEventListener("click",function(){
    console.log('点击了，出现光标了，此时可以输入文字')
  //(1)显示ul
    ul.style.display = 'block'
    this.className="search-text active";
  })
//  
input.addEventListener("click",function(){
    console.log('点击了，出现光标了，此时可以输入文字')
  //(1)显示ul
    ul.style.display = 'none'
  //(2)自身边框改变 （通过新增search类名）
    this.className='search-text';
  })