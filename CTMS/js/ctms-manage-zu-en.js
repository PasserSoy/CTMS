require.config({
  paths: {
    "index":"./ctms-index"
    ,"layui":"../layui/layui"
    ,"table":"./ctms-manage-zu-table"
  },
  shim:{
    "table":['layui']
  }
});
require(['index','table'])
