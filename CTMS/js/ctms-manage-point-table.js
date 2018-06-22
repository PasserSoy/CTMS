layui.use(['layer','form','table'], function(){
  var $ = layui.jquery,layer = layui.layer,form = layui.form,table = layui.table,cid=1;
  // 表单
  table.render({
    elem: '#mytable'
    ,height: 315
    ,id:'testReload'
    ,url: '/js/test.form.json' //数据接口
    // ,where:{cid:localStorage.cid}在需要获取的页面写入此参数
    ,page: { //支持传入 laypage 组件的所有参数（某些参数除外，如：jump/elem） - 详见文档
      layout: ['limit', 'prev',  'skip',  'next','count'] //自定义分页布局
      //,curr: 5 //设定初始在第 5 页
      ,groups: 1 //只显示 1 个连续页码
      ,first: false //不显示首页
      ,last: false //不显示尾页
      
    }
    ,cols: [[ //表头
      {field: 'id', title: '序号',align:'center'}
      ,{field: 'gnum', title: '群号',templet: '#gnum',align:'center'}
      ,{field: 'znum', title: '组号',templet: '#znum',align:'center'}
      ,{field: 'pnum', title: '监测点号',align:'center'}
      ,{field: 'pname', title: '监测点名称',align:'center'}
      ,{field: 'nature', title: '性质',align:'center'}
      ,{field: 'state', title: '状态',align:'center'}
      ,{field: 'marks', title: '备注',align:'center'}
      ,{field: 'operate', title: '操作',toolbar: '#optbar',align:'center'}
    ]]
  });
  // 存入参数
  $('body').on('click','[data-cid]',function(){
    cid = $(this).attr('data-cid');
    localStorage.cid = cid;
  })
	//监听工具条
	table.on('tool(mytable)', function(obj){
	  var data = obj.data; //获得当前行数据
	  var layEvent = obj.event; //获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
	  var tr = obj.tr; //获得当前行 tr 的DOM对象
	 
	  if(layEvent === 'del'){ //删除
	    layer.confirm('确定要删除此监测点吗？',{ title:'提示',shadeClose:true,btnAlign: 'c',btn:['取消', '确定']},function(index){
	      // 取消
	      layer.close(index);
	    },function(index){
	    	obj.del(); //删除对应行（tr）的DOM结构，并更新缓存
	      layer.close(index);
	      //向服务端发送删除指令
	    });
	  }else if(obj.event === 'edit'){
      var forms = $('.insert').html();
      layer.open({
        type: 1
        ,offset: 'auto'
        ,title:'编辑监测点'
        ,shadeClose:true
        ,id: 'mylayerauto' //防止重复弹出
        ,content: '<div style="padding: 2px 10px;">'+ forms +'</div>'
      });
      // 表单初始赋值
      form.val('myform',{
        gnum:data.gnum,
        znum:data.znum,
        pnum:data.pnum,
        pname:data.pname,
        nature:data.nature,
        state:data.state,
        marks:data.marks
      })
    }
	});
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
    },
    // 查找
    reload: function(){
      var demoReload = $('#demoReload');     
      //执行重载
      table.reload('testReload', {
        page: {
          curr: 1 //重新从第 1 页开始
        }
        ,where: {
          key: {
            id: demoReload.val()
          }
        }
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
  // 搜索
  $('.search-btn').on('click', function(){
    var type = $(this).data('type');
    active[type] ? active[type].call(this) : '';
  });
	//自定义皮肤
	layer.config({
	  extend: '/myskin/style.css', 
	  skin: 'layer-ext-myskin'
	});
});