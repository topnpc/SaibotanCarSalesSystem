# SaibotanCarSalesSystem
赛博坦汽车销售系统

CarDataExecutor项目：用来生成测试数据，分析测试数据，将分析的结果以Mysql数据表的形式存储在bigdata数据库中，
运行项目前先删除bigdata里面的表

car-manager项目：用来方便管理员，对数据库的维护，系统的维护，主要都是增删查改，包含了从商品（汽车）的管理-类型管理-导航栏管理-
-轮播图管理-视频管理-订单的管理-图表分析

其中图表分析（大数据项目的图表）：其中包含了汽车从12个月-4个季度-半年为时间段分析了每个时间段汽车的销售情况，
其中包含了颜色销量分析，性别销量分析，城市销量分析，12个月的每种汽车的销量对比

car-sale项目：用来对用户开放的，包含了用户从游客到-注册-登录-购买/加购-查看订单-结算-支付-评价的一个流程

echartsdemo项目：用来分析数据用的，主要是访问MySql的bigdata数据库里边的表，分析汽车的销量，主要是编写restful接口

具体请部署项目，自己运行查看

bigdata.sql : 由CarDataExecutor项目生成，用来保存分析的结果
test.sql : car-manager项目 和 car-sale项目 都会改变该数据库的数据，car-sale项目侧重用户的操作，car-manager项目侧重管理员的操作

test-- banner 对轮番图的管理
      -- car 对汽车的管理
      -- cartype 对汽车类型的管理
      -- main_nav 对导航栏的管理
      -- manager 对管理员的管理（只有一个）
      -- orderitem 对订单的管理
      -- video 对视频的管理

bigdata --  adressyearamount 生成的汽车地址销量分析的结果
              -- carssale 生成的汽车12个月汽车销量分析的结果
              -- coloryearamount 生成的汽车颜色销量分析的结果
              -- sexyearamount 生成的汽车性别销量分析的结果

images 文件需要拷贝到D盘根目录

配置Maven 请百度，并不难，配置好Maven后，用idea打开项目，在idea里边配置Maven ，也不难，配置好，刷新maven，
直到项目不报错，就可以运行项目启动类，这样项目就运行好了，大数据项目不需要虚拟机，运行一次CarDataExecutor项目就行
（因为里边导了Spark依赖, Spark内部有完整的一套大数据的封装）

测试时建议先清除test  -- orderitem 表里的数据
