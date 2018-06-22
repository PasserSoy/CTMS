require.config({
  paths: {
    "index":"./ctms-index"
    ,"layui":"../layui/layui"
    ,"table":"./ctms-manage-group-table"
  },
  shim:{
    "table":['layui']
  }
});
require(['index','table'])
