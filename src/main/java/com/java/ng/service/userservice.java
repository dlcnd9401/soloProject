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
	
	@Override
	public HashMap<String, Object> login(HashMap<String, Object> param) {
		bean = new DaoBean("SelectOne", ns+".login", param);
		result = (HashMap<String, Object>) di.dao(bean);
		
		return result;
	}
	
	@Override
	public HashMap<String, Object> signup(HashMap<String, Object> param) {
		result = new HashMap<String, Object>();
		bean = new DaoBean("Insert", ns+".signup", param);
		result.put("status", di.dao(bean));
		return result;
	}
}
