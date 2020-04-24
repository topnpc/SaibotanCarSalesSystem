package com.car.echartsdemo.util;

import com.car.echartsdemo.entity.CarMonthSale;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @Description 将一些封装的方法放在这里
 * @Author jiangdihong
 * @Date   2019/12/17 21:33
 * @Param
 * @Return
 * @Exception
 */
public class CarSaleAnalysisUtil {
    //将每月的销量解析出来
    public static List<Integer> jieximonthsale(String perMonthSale){
        String[] split = perMonthSale.split(",");

        List<Integer> monthsales = new ArrayList<Integer>();

        for (int i=0;i<split.length;i++){
            //monthAndSales[0]表示月，monthAndSales[1]表示月销量

            String[] monthAndSales = split[i].split(":");
            monthsales.add(Integer.parseInt(monthAndSales[1]));
        }

        return monthsales;
    }

    public static int jidusalemethod(int start,int end,List<Integer> monthsales){
        int jidu = 0;
        for(int i=start;i<=end;i++){
            jidu += monthsales.get(i);
        }
        return jidu;
    }

    //将汽车每个季度的数据解析出来
    public static List<Integer> jiexijidusale(List<Integer> monthsales){
        List<Integer> jidusales = new ArrayList<>();

        int months = monthsales.size();
        //int jidusale1 = jidusalemethod(start,end,monthsales);
        int start = 0;int end = 2;
        for( start=0,end=2;end<monthsales.size();start+=3,end+=3){
            int jidusale1 = jidusalemethod(start,end,monthsales);
            jidusales.add(jidusale1);
        }
        return jidusales;
    }
    //将汽车每个半年的数据解析出来
    public static List<Integer> jixibanyear(List<Integer> monthsales){
        List<Integer> banyearsales = new ArrayList<>();

        int months = monthsales.size();
        //int jidusale1 = jidusalemethod(start,end,monthsales);
        int start = 0;int end = 5;
        for( start=0,end=5;end<monthsales.size();start+=6,end+=6){
            int banyearsale1 = jidusalemethod(start,end,monthsales);
            banyearsales.add(banyearsale1);
        }
        return banyearsales;
    }

    //计算季度1汽车总销量，季度2总销量，季度3总销量,季度4总销量
    public static List<Integer> jidusalesum(List<CarMonthSale> carMonthSales){
        List<Integer> jidusalesum = new ArrayList<>();
        if(carMonthSales!=null){
            int jidusum1 = 0;
            int jidusum2 = 0;
            int jidusum3 = 0;
            int jidusum4 = 0;
            for(CarMonthSale carMonthSale : carMonthSales){
                List<Integer> monthsales = jieximonthsale(carMonthSale.getPerMonthAmonunt());
                List<Integer> jidusales = jiexijidusale(monthsales);
                jidusum1 += jidusales.get(0);
                jidusum2 += jidusales.get(1);
                jidusum3 += jidusales.get(2);
                jidusum4 += jidusales.get(3);
            }
            jidusalesum.add(jidusum1);
            jidusalesum.add(jidusum2);
            jidusalesum.add(jidusum3);
            jidusalesum.add(jidusum4);
        }
        return jidusalesum;
    }

    //解析车1，占1季度百分比，占2季度百分比，占3季度百分比，占4季度百分比
    //




    //将每种车辆 在 4个季度的销量解析出来
    //{carName:'奥迪',data : [10,20,30,40]}
    public static Map<String,Object> carMonthSale2(List<CarMonthSale> carMonthSales){
        Map<String,Object> datas = new HashMap<>();
        if(carMonthSales!=null){
            for(CarMonthSale carMonthSale : carMonthSales){
                //将每种车三个月的数据累加到一个季度 [{carName:'奥迪',data : [10,20,30,40]}]
                //车1占季百分比需要每个车的每个月的销量  封装到  【1季度饼图：[{name:'车1',percent:占1季度%}，{name:'车2’,'percent:占1季度%'}],2季度饼图...】
                //车1占年百分比需要每个车的年总销量 [{name:'车1',percent:占年%},{name:'车2',percent:占年%}]
                //每季度销量占年百分比 [{name:'季度1',percent:占年%},{name:'季度2',percent:占年%}]

                //将上边的数据封装到Map 名字分别为 data1 data2 data3 data4
                List<Integer> monthsales = jieximonthsale(carMonthSale.getPerMonthAmonunt());
                List<Integer> jidusales = jiexijidusale(monthsales);
                carMonthSale.setJidusales(jidusales);
            }
            //计算季度1汽车总销量，季度2总销量，季度3总销量,季度4总销量
            List<Integer> jidusalesums = jidusalesum(carMonthSales);
            datas.put("data1",carMonthSales);
            datas.put("data2",jidusalesums);
        }
        return datas;
    }






    //封装单个月的预测
    public static void carMonthSale(List<CarMonthSale> carMonthSales){
        if(carMonthSales!=null){
            for(CarMonthSale carMonthSale : carMonthSales){
                //预测下一个月的销量
                Integer nextMonthSale = JavaSalePredict.extMonthSalePridict(carMonthSale.getPerMonthAmonunt());
                List<Integer> carmonsal =jieximonthsale(carMonthSale.getPerMonthAmonunt());
                carmonsal.add(nextMonthSale);
                carMonthSale.setMonthsales(carmonsal);
            }
        }
    }

    //封装
    public static List<CarMonthSale> fengzhaung(List<CarMonthSale> carMonthSales){
        for(CarMonthSale carMonthSale : carMonthSales){
            List<Integer> carmonsal = jieximonthsale(carMonthSale.getPerMonthAmonunt());
            if(carmonsal!=null){
                carMonthSale.setMonthsales(carmonsal);
            }
        }
        return carMonthSales;
    }
}

