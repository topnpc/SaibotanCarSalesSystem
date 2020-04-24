package com.car.service;

import com.car.bean.CarBean;
import com.car.dao.CarDao;
import com.car.dao.CarTypeDao;
import com.car.util.Result;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.io.File;
import java.util.HashMap;
import java.util.List;

@Service
public class CarService {
    private Result result;
    @Autowired
    CarDao carDao;

    public Result setResult(int code, String msg, Object o){
        Result rs=new Result();
        rs.setCode(code);
        rs.setMsg(msg);
        rs.setData(o);
        return rs;
    }

    /**
     * 根据typeid查询汽车
     * @param typeid
     * @return
     */
    public Result selectByTypeid(int pageNum, int pageSize, Integer typeid){

        List<CarBean> cars1 = carDao.selectByTypeid(typeid);
        int carNum = cars1.size();
        //获取一页数据
        PageHelper.startPage(pageNum, pageSize);
        List<CarBean> cars = carDao.selectByTypeid(typeid);
        HashMap<String, Object> map = new HashMap<>();
        map.put("carnum", carNum);
        map.put("cars", cars);
        return this.setResult(1,"查询成功",map);
    }

    public Result selectByTypeName(String typeName){
        Result result = new Result();
        //先去查typeName对应的id
        int id  = carTypeDao.selectTypeid(typeName);

        //再根据typeid 查询车辆
        List<CarBean> carBeans = carDao.selectByTypeid(id);
        if(carBeans!=null){
            result.setMsg("成功");
            result.setCode(1);
            result.setData(carBeans);
        }else{
            result.setMsg("失败");
            result.setCode(-1);
        }
        return result;
    }

    public Result selectByName(String name){
        Result result = new Result();
        CarBean carBean = carDao.selectByName(name);
        if(carBean!=null){
            result.setMsg("成功");
            result.setCode(1);
            result.setData(carBean);
        }else{
            result.setMsg("失败");
            result.setCode(-1);
        }
        return result;
    }








    /**
     * 查询当页信息
     *
     * @param pageNum
     * @param pageSize：页大小
     * @return
     */
    public Result selectCarByname(int pageNum, int pageSize, String name) {
        //汽车总数
        int carNum=0;
        if(StringUtils.isEmpty(name)){
            System.out.println("搜索名为空");
            //汽车总数
            carNum = carDao.carNum();
            //获取一页数据
            PageHelper.startPage(pageNum, pageSize);
            List<CarBean> cars = carDao.selectAll();
            HashMap<String, Object> map = new HashMap<>();
            map.put("carnum", carNum);
            map.put("cars", cars);
            return this.setResult(1,"查询成功",map);
        }else {
            System.out.println("搜索名为"+name);
            //带有查询名字的汽车总数
            List<CarBean> cars1 = carDao.selectBynameLike(name);
            carNum=cars1.size();
            System.out.println("含有查询名字的汽车总数："+carNum);
            //获取一页数据
            PageHelper.startPage(pageNum, pageSize);
            List<CarBean> cars = carDao.selectBynameLike(name);
            HashMap<String, Object> map = new HashMap<>();
            map.put("carnum", carNum);
            map.put("cars", cars);
            return this.setResult(1,"查询成功",map);
        }
    }


    /**
     * 查询当页信息
     *
     * @param pageNum
     * @param pageSize：页大小
     * @return
     */
    public Result selectCar(int pageNum, int pageSize) {
        //汽车总数
        int carNum = carDao.carNum();
        Result result = new Result();
        //获取一页数据
        PageHelper.startPage(pageNum, pageSize);
        List<CarBean> cars = carDao.selectAll();
        HashMap<String, Object> map = new HashMap<>();
        map.put("carnum", carNum);
        map.put("cars", cars);

        result.setCode(1);
        result.setMsg("查询汽车成功");
        result.setData(map);

        return result;
    }
    @Autowired
    CarTypeDao carTypeDao;

    /**
     * 添加汽车
     *
     * @param name
     * @param price
     * @param color
     * @param describe
     * @param url
     * @param imgurl：汽车图片相对路径
     * @param typeid
     * @param sales_number
     * @param collect_number
     * @param cartype
     * @return
     */
    public Result addCar(String name, String price, String color,
                         String describe, String url, String imgurl,
                         int typeid, int sales_number, int collect_number,
                         String cartype) {
        typeid=carTypeDao.selectTypeid(cartype);
        List<String> names = carDao.selectName();
        //判断名字是否已存在
        int n = 0;
        for (String name1 : names) {
            if (name.equals(name1) || name == name1) {
                break;
            }
            n++;
        }
        int carNum = carDao.carNum();
        //不存在
        if (n == carNum) {
            carDao.insertCar(name, price, color, describe, url, imgurl, typeid, sales_number, collect_number, cartype);
            result = new Result(1, "插入成功", null);
        }
        //存在
        else {
            result = new Result(-1, "插入失败", null);
        }
        return result;
    }

    /**
     * 删除
     *
     * @param name
     * @return
     */
    public Result deleteCar(String name) {
        result = new Result();
        CarBean car = carDao.selectByName(name);
        String imgurl = car.getImgurl();
        int i = carDao.deleteCar(name);
        if ((i == 1) && (imgurl.length()>8)) {
            delCarImg(new File("D:\\images\\car\\" + imgurl.substring(8)));
        }
        result.setMsg("删除成功");
        result.setCode(1);

        return result;
    }

    /**
     * 批量删除
     * @param names
     * @return
     */
    public Result deleteCars(String[] names){
        Result rs=new Result();
        int i=0;
        for (String name:names){
            Result result = deleteCar(name);
            if (result.getCode()==1){
                i++;
            }
        }
        if (names.length==i){
            rs.setMsg("删除成功");
            rs.setCode(1);
        }
        return rs;
    }

    //删除图片库中对应图片
    private boolean delCarImg(File file) {
        boolean flag = false;
        if (file.exists()) {
            if (file.isDirectory()) {
                File[] files = file.listFiles();
                for (File file1 : files) {
                    delCarImg(file1);
                }
            }
            file.delete();
        }
        return flag;
    }

    /**
     * 修改
     *
     * @param rename：修改后名字
     * @param name：修改前名字
     * @param price
     * @param color
     * @param describe
     * @param imgurl
     * @param typeid
     * @param sales_number
     * @param collect_number
     * @param cartype
     * @return
     */
    public Result updateCar(String rename, String name, String price,
                            String color, String describe, String imgurl,
                            int typeid, int sales_number, int collect_number,
                            String cartype) {
        Result rs = new Result();
        CarBean car = carDao.selectByName(name);
        String imgurl1 = car.getImgurl();
        int update=0;
        //判断图片是否修改
        if (imgurl==null){
            update = carDao.update(rename, name, price, color, describe, imgurl1, typeid, sales_number, collect_number, cartype);
        }else {
            update = carDao.update(rename, name, price, color, describe, imgurl, typeid, sales_number, collect_number, cartype);
            if ((update == 1)&&(imgurl.length()>8)) {
                delCarImg(new File("D:\\images\\car\\"+imgurl1.substring(8)));
            }
        }
        if (update == 1) {
            rs.setMsg("修改成功");
            rs.setCode(1);
        }else {
            rs.setMsg("修改失败");
            rs.setCode(0);
        }
        return rs;
    }

    public Result selectByname(String name){
        Result rs=new Result();
        CarBean carBean = carDao.selectByName(name);
        rs.setCode(1);
        rs.setMsg("查询成功");
        rs.setData(carBean);
        return rs;
    }
}
