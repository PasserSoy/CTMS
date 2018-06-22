require.config({
  paths: {
    "index":"./ctms-index"
    ,"layui":"../layui/layui"
    ,"table":"./ctms-home-table"
  },
  shim:{
    "table":['layui']
  }
});
require(['index','table'])
