package com.car.echartsdemo.util;

import java.util.Arrays;
/**
 * 预测下月销量
 *    算法模型
 *   加权移动平均（1000*1+2000*2+3000*3+...12000*12）/(1+2+3...+12)
 *   y=ax+b
 */
public  class JavaSalePredict {

    /*
    //perMonthSale数据样式：1:1434,2:1352,3:1388,4:1392,
    public static int extMonthSalePridict(String perMonthSale) {

        //split[0]=12:1373  ...
        String[] split = perMonthSale.split(",");
        //用于计算加权平均算法的分母
//        System.out.println(split.length);
        //用于计算加权平均算法的分母
        int sum=0;
        //用于计算加权平均算法的分子
        int sumPerCarSaleAmount=0;
        for (int i=0;i<split.length;i++){
            //monthAndSales[0]表示月，monthAndSales[1]表示月销量
            String[] monthAndSales = split[i].split(":");
            sum+=Integer.parseInt(monthAndSales[0]);
//            System.out.println("sum="+sum);
            sumPerCarSaleAmount+=(Integer.parseInt(monthAndSales[1])*(i+1));
        }

        int result =sumPerCarSaleAmount / sum ;
        return  result;
    }
    */


    //perMonthSale数据样式：1:1434,2:1352,3:1388,4:1392,
    public static int extMonthSalePridict(String perMonthSale) {

        //split[0]=12:1373  ...
        String[] split = perMonthSale.split(",");
        //分子
        int sum=0;
        //分母
        int sumPerCarSaleAmount=0;
        for (int i=0;i<split.length-1;i++){

            //monthAndSales[0]表示月，monthAndSales[1]表示月销量
            String[] monthAndSales1 = split[i].split(":");  //这月拆分
            String[] monthAndSales2 = split[i+1].split(":"); //下月拆分
            String thiss = monthAndSales1[1];   //这月销量
            String nexts = monthAndSales2[1];   //下月销量
            //计算两个月之间的销量增减值
            //
            //分子
            sum += (Integer.parseInt(nexts) - Integer.parseInt(thiss))*(i+1);
            //分母
            sumPerCarSaleAmount+=(i+1);  //1+2


        }

        int result =sum / sumPerCarSaleAmount ;
        //下一月
        return result+Integer.parseInt(split[11].split(":")[1]);
    }

}
