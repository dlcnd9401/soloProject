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
		param.put("type", "문의");
		bean = new DaoBean("SelectList", ns+".notice", param);
		result.put("Quest", di.dao(bean));
		
		param = new HashMap<String,Object>();
		param.put("type", "자유");
		bean = new DaoBean("SelectList", ns+".notice", param);
		result.put("free", di.dao(bean));
		
		bean = new DaoBean("SelectList",ns+".prefList",param);
		result.put("pref", di.dao(bean));
		
		bean = new DaoBean("SelectList",ns+".clickList",param);
		result.put("click", di.dao(bean));
		
		
		
		
		
		
		
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

	@Override
	public HashMap<String, Object> kindList(HashMap<String, Object> param) {
		result = new HashMap<String, Object>();
		bean = new DaoBean("SelectList", ns+".kindList", param);
		result.put("list", di.dao(bean));
		return result;
	}

	@Override
	public HashMap<String, Object> deleted(HashMap<String, Object> param) {
		result = new HashMap<String, Object>();
		bean = new DaoBean("Update", ns+".boarddeleted", param);
		result.put("del_Y", di.dao(bean));
		return result;
	}
	
}
