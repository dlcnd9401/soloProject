package com.java.ng.service;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.ng.bean.DaoBean;
import com.java.ng.Dao.DaoInterface;

@Service
public class Loadservice implements Loadserviceinterface {

	@Autowired
	DaoInterface di;
	
	private final String ns = "load";
	private HashMap<String, Object> result;
	private DaoBean bean;
	
	@Override
	public HashMap<String, Object> noticeList(HashMap<String, Object> param) {
		result = new HashMap<String, Object>();
		param.put("type", "공지");
		bean = new DaoBean("SelectList", ns+".notice", param);
		result.put("notice", di.dao(bean));
		
		param = new HashMap<String,Object>();
		param.put("type", "연재");
		bean = new DaoBean("SelectList", ns+".notice", param);
		result.put("novel", di.dao(bean));
		
		param = new HashMap<String,Object>();
		param.put("type", "자유");
		bean = new DaoBean("SelectList", ns+".notice", param);
		result.put("free", di.dao(bean));
		
		
		
		return result;
	}

	@Override
	public HashMap<String, Object> newActor(HashMap<String, Object> param) {
		result = new HashMap<String, Object>();
		param.put("auth", 1);
		bean = new DaoBean("SelectList", ns+".actor", param);
		result.put("actor", di.dao(bean));
		
		param = new HashMap<String,Object>();
		param.put("auth", 2);
		bean = new DaoBean("SelectList", ns+".actor", param);
		result.put("amature", di.dao(bean));
		
		return result;
	}
	
}
