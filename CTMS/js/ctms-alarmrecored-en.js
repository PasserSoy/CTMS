require.config({
  paths: {
    "index":"./ctms-index"
    ,"layui":"../layui/layui"
    ,"table":"./ctms-alarmrecored-table"
    ,"chart":"./ctms-alarmrecored-chart"
  },
  shim:{
    "table":['layui']
  }
});
require(['index','table','chart'])
