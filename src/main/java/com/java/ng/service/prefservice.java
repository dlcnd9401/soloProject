package com.java.ng.service;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.ng.bean.DaoBean;
import com.java.ng.Dao.DaoInterface;

@Service
public class prefservice implements PrefserviceInterface {

	@Autowired
	DaoInterface di;
	
	private final String ns = "pref";
	private HashMap<String, Object> result;
	private DaoBean bean;
	
	
	
	
	@Override
	public HashMap<String, Object> prefcheck(HashMap<String, Object> param) {
		result = new HashMap<String, Object>();
		bean = new DaoBean("SelectOne", ns+".prefchecked", param);
		
		HashMap<String,Object> checked = (HashMap<String,Object>) di.dao(bean);
		if(checked == null){
			System.out.println("insert 실행 ");
			bean = new DaoBean("Insert", ns+".prefinsert", param);
			result.put("list", di.dao(bean));
			result.put("stat", 2);
			return result;
		}else{
			if(checked.get("del_yn").equals("Y")){
				System.out.println(checked.get("del_yn"));
				param.put("no", checked.get("no"));
				/*param.put("no", di.dao(bean));*/
				System.out.println("param" + param);
				bean = new DaoBean("Update", ns+".prefdelete", param);
				result.put("list", di.dao(bean));
				result.put("stat", 2);
				return result;
			}else{
				System.out.println("del_N");
				param.put("no", checked.get("no"));
				/*param.put("no", di.dao(bean));*/
				System.out.println("param" + param);
				bean = new DaoBean("Update", ns+".prefupdate", param);
				result.put("list", di.dao(bean));
				result.put("stat", 1);
				return result;
			}
			
		}
		

	}




	@Override
	public HashMap<String, Object> prefchkpoint(HashMap<String, Object> param) {
		result = new HashMap<String, Object>();
		bean = new DaoBean("SelectOne", ns+".prefchecking", param);
		HashMap<String,Object> del =  (HashMap<String, Object>) di.dao(bean);
		
		if(del == null){
			result.put("stat", 1);
		}else{
			result.put("stat", 2);
		}
			
		return result;
	}

}
