require.config({
  paths: {
    "index":"./ctms-index"
    ,"layui":"../layui/layui"
    ,"table":"./ctms-serialport-table"
  },
  shim:{
    "table":['layui']
  }
});
require(['index','table'])
