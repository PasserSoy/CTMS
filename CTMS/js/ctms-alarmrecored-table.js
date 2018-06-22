layui.use(['layer','form','table','laydate'], function(){
  var $ = layui.jquery,layer = layui.layer,form = layui.form,table = layui.table,laydate = layui.laydate;
	// 弹窗主体
	var active = {
    offset: function(othis){
      var type = othis.data('type')
      ,text = othis.text()
      ,forms = $('.insert').html();        
      layer.open({
        type: 1
        ,offset: type
        ,title:text
        ,shadeClose:true
        ,id: 'mylayer'+type //防止重复弹出
        ,content: '<div style="padding: 2px 10px;">'+ forms +'</div>'
      });
    }
  };
  // 呼出弹窗
  $('.addbtn').on('click',function(){
    var othis = $(this), method = othis.data('method');
    active[method] ? active[method].call(this, othis) : '';
    form.render();
  });
  // 提交表单
  form.on('submit(*)', function(data){
    alert('提交');
    layer.closeAll();
    console.log(data.elem) //被执行事件的元素DOM对象，一般为button对象
    console.log(data.form) //被执行提交的form对象，一般在存在form标签时才会返回
    console.log(data.field) //当前容器的全部表单字段，名值对形式：{name: value}
    return false;//阻止表单跳转。如果需要表单跳转，去掉这段即可。
  });
  // 表单验证
  form.verify({
    special: function(value, item){ //value：表单的值、item：表单的DOM对象
      if(!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)){
        return '不能有特殊字符';
      }
    }
  });
  //日期时间范围
  laydate.render({
    elem: '#chooseTime'
    ,type: 'datetime'
    ,range: '到'
    ,format: 'yyyy/MM/dd HH:mm'
  });
	//自定义皮肤
	layer.config({
	  extend: '/myskin/style.css', 
	  skin: 'layer-ext-myskin'
	});
});