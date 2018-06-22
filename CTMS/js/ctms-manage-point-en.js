require.config({
  paths: {
    "index":"./ctms-index"
    ,"layui":"../layui/layui"
    ,"table":"./ctms-manage-point-table"
  },
  shim:{
    "table":['layui']
  }
});
require(['index','table'])
