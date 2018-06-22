$(function(){
  // 菜单栏
  // 父元素点击，子元素展开
  $('body').on('click','.parent',function(e){
    var _son = $(this).children('.son');
    _son.slideToggle("slow");
  });
  // 引用菜单栏
  $('.ctms-menu').load('../view/menu.html .my-menu',function(){
    var links = $(".my-menu li a"),  
        index = 0, //默认第一个菜单项  
    //取当前URL最后一个/后面的文件名，pop方法是删除最后一个元素并返回最后一个元素  
    url = location.href.split("?")[0].split("/").pop();  
    if(url){//如果有取到，则进行匹配，否则默认首页（即index所指向的那个）  
        for(var i=0;i<links.length;i++){//遍历menu中的链接地址  
            if(links[i].href.indexOf(url)!=-1){  
              index = i;  
              break;  
            }  
        }  
    }  
    $(".my-menu li").eq(index).addClass("active")           //给对应的<li>增加选中样式  
                    .parents('.parent').addClass("active")       //父元素加选中样式
                    .find('.son').show(0);                  //子元素显示
  })
})