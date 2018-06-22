require.config({
  paths: {
    "index":"./ctms-index"
    ,"layui":"../layui/layui"
    ,"table":"./ctms-home-table"
    ,"chart":"./ctms-home-chart"
  },
  shim:{
    "table":['layui']
  }
});
require(['index','table',"chart"])
