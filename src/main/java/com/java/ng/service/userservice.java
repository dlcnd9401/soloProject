package com.java.ng.service;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.ng.bean.DaoBean;
import com.java.ng.Dao.DaoInterface;

@Service
public class userservice implements userserviceinterface {

	@Autowired
	DaoInterface di;
	
	private final String ns = "user";
	private HashMap<String, Object> result;
	private DaoBean bean;
	private HashMap<String,Object> chk;
	
	@Override
	public HashMap<String, Object> login(HashMap<String, Object> param) {
		result = new HashMap<String, Object>();
		bean = new DaoBean("SelectOne", ns+".pwcheck", param);
		
		chk = (HashMap<String, Object>) di.dao(bean);
		
		if(!(chk==null)){
			if(chk.get("pw").equals(param.get("pw"))){
				result = new HashMap<String,Object>();
				bean = new DaoBean("SelectOne", ns+".login", param);
				
				result = (HashMap<String, Object>) di.dao(bean);
				result.put("LoginChecked", 1);
				
				
				/* 유저 권한 코드 자동 업데이트*/
				chk = new HashMap<String,Object>();
				bean = new DaoBean("SelectOne", ns+".promotion",param);
				chk = (HashMap<String, Object>) di.dao(bean);
					
				
				if(!(chk==null)){
					System.out.println("등업 시스템 구동 ");
					param = new HashMap<String,Object>();
					param.put("no",  chk.get("no"));
					param.put("id",  chk.get("id"));
					
					/* 유저 권한 , 카테고리 권한, 카테고리 하위 권한. */
					bean = new DaoBean("Update", ns+".autoauth", param);
					result.put("등업", di.dao(bean));
					
					bean = new DaoBean("Update", ns+".autocategory", param);
					result.put("category", di.dao(bean));
					
					bean = new DaoBean("Update", ns+".autonovel", param);
					result.put("Novel", di.dao(bean));
					
					result.put("auto", 1);
					System.out.println("auth 찿기 " + result);
					return result;
				}else{
					return result;
				}
			}else{
				result = new HashMap<String,Object>();
				result.put("LoginChecked" , 0);
				return result;
			}
		}else{
			result = new HashMap<String,Object>();
			result.put("LoginChecked", 2);
			return result;
		}
	}
	
	
	
	
	
	
	@Override
	public HashMap<String, Object> signup(HashMap<String, Object> param) {
		result = new HashMap<String, Object>();
		bean = new DaoBean("SelectOne", ns+".idcheck", param);
		
		
		chk = (HashMap<String, Object>) di.dao(bean);
		System.out.println("chk 확인 : " + chk);
		
		if(!(chk == null)){
			result = new HashMap<String, Object>(); 
			result.put("idcheck", 0);
			return result;
		}else{
		bean = new DaoBean("Insert", ns+".signup", param);
		result.put("status", di.dao(bean));
		result.put("idcheck", 1);
		return result;
		}
	}







}

