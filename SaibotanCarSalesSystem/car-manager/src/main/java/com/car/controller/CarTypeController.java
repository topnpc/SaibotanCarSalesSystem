package com.car.controller;

import com.car.service.CarTypeService;
import com.car.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class CarTypeController {
    @Autowired
    CarTypeService carTypeService;

    /**
     * 添加
     * @param typeid
     * @param cartype
     * @param typedescribe
     * @return
     */
    @ResponseBody
    @PostMapping("/addCarType.do")
    public Result addCarType(Integer typeid, String cartype, String typedescribe){
        System.out.println("传进来的cartype为"+cartype);
        System.out.println("传进来的id为"+typeid);
        System.out.println("传进来的describe为"+typedescribe);
        return carTypeService.addCarType(typeid,cartype,typedescribe);
    }

    /**
     * 查询列表
     * @return
     */
    @GetMapping("/selectAllType.do")
    @ResponseBody
    public Result selectAllType(){
        return carTypeService.selectAll();
    }

    //查询所有车型名字
    @GetMapping("/selectTypeNames.do")
    @ResponseBody
    public Result selectTypename(){
        return carTypeService.selectCartypeName();
    }


    /**
     * 通过typeid查询要修改的cartype
     * @param typeid
     * @return
     */
    @GetMapping("/selectCartypebytypeid.do")
    @ResponseBody
    public Result selectCartypebytypeid(Integer typeid){
        return carTypeService.selectCartypebytypeid(typeid);
    }

    //删除
    @GetMapping("/deleteType.do")
    @ResponseBody
    public Result deleteType(Integer typeid){
        return carTypeService.deleteCartype(typeid);
    }

    /**
     * 修改车型
     * @param typeid
     * @param typename
     * @return
     */
    @PostMapping("/updateCartype.do")
    @ResponseBody
    public Result updateCartype(Integer typeid, String typedescribe, String typename){
        return carTypeService.updateCartype(typeid, typedescribe,typename);
    }
}
