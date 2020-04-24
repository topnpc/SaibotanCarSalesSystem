import bigDataExecutor.{AdressAmount, CarSales, ColorAmount, SexAmount}

/**
  * 数据处理后，导入到数据库
  *
  *
  */
object MainCarExecutor {
  def main(args: Array[String]): Unit = {
    /**
      * 1.生成mysql汽车表
      *   local[*] yanr standand
      * readFilePosition   读取的文件位置  "in/carData/source/carSource.csv"
      *  mysqlUsername   mysql用户名  root
      *  MysqlPassword   mysql 密码  jiang
      * sparkSaveMode   spark保存模式  append overwrite
      *  JDBCUrl     jdbc url   "jdbc:mysql://localhost:3306/bigdatacar"
      * tableName  表名   "carsSale"
      */
    val pass="root"
    CarSales. carsDataToMysql("local[*]","in/carData/source",
                "root",pass,"overwrite",
                "jdbc:mysql://localhost:3306/bigdata","carsSale")


    /**
      * 2.生成性别表 参数含义和上面的相同
      *   表名：sexYearAmount
      */
   SexAmount.perSexAmount("local[*]","in/carData/source",
      "root",pass,"overwrite",
      "jdbc:mysql://localhost:3306/bigdata","sexYearAmount")

    /**
      * 3.生成地区表
      */
    AdressAmount.perAdressAmount("local[*]","in/carData/source",
      "root",pass,"overwrite",
      "jdbc:mysql://localhost:3306/bigdata","adressYearAmount")

    /**
      * 4.生成汽车color表
      *
      */
    ColorAmount.perColorAmount("local[*]","in/carData/source",
      "root",pass,"overwrite",
      "jdbc:mysql://localhost:3306/bigdata","colorYearAmount")


  }
}
