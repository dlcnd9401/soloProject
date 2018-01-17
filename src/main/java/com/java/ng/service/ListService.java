package com.java.ng.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.ng.Dao.DaoInterface;
import com.java.ng.bean.DaoBean;

@Service
public class ListService implements ListServiceInterface {
	
	@Autowired
	DaoInterface di;
	
	private final String ns = "board";
	private HashMap<String, Object> result;
	private DaoBean bean;
	
	@Override
	public HashMap<String, Object> list(HashMap<String, Object> param) {
		result = new HashMap<String, Object>();
		bean = new DaoBean("SelectList", ns+".boardlist", param);
		result.put("list", di.dao(bean));
		return result;
	}

	@Override
	public HashMap<String, Object> serial(HashMap<String, Object> param) {
		result = new HashMap<String, Object>();
		bean = new DaoBean("SelectList", ns+".serial", param);
		result.put("list", di.dao(bean));
		return result;
	}

	
	@Override
	public HashMap<String, Object> adetail(HashMap<String, Object> param) {
		result = new HashMap<String, Object>();
		bean = new DaoBean("SelectList", ns+".adetail", param);
		result.put("list", di.dao(bean));
		return result;
	}
	
	@Override
	public HashMap<String, Object> adetailparams(HashMap<String, Object> param) {
		bean = new DaoBean("SelectOne", ns+".detailbasic", param);
		result = (HashMap<String, Object>) di.dao(bean);
		return result;
	}
	
	@Override
	public HashMap<String, Object> detaillist(HashMap<String, Object> param) {
		result = new HashMap<String,Object>();
		bean = new DaoBean("SelectOne", ns+".detailcontents", param);
		result.put("list_data", di.dao(bean));
		
		HashMap<String,Object>Map = (HashMap<String,Object>)di.dao(bean);
		
		param = new HashMap<String,Object>();
		param.put("title",Map.get("title"));
		param.put("type",Map.get("type"));
		
		bean = new DaoBean("SelectList", ns+".boarddetail_reply", param);
		result.put("reply", di.dao(bean));
		
		return result;
	}

	@Override
	public HashMap<String, Object> sortSearch(HashMap<String, Object> param) {
		System.out.println("sortsearch :" + param);
		bean = new DaoBean("SelectOne", ns+".sortsearch", param);
		result.put("sort", di.dao(bean));
		bean = new DaoBean("SelectList", ns+".replylist", param);
		result.put("reply", di.dao(bean));
		/*result = (HashMap<String, Object>) di.dao(bean);*/
		System.out.println(result);
		return result;
	}
	@Override
	public HashMap<String, Object> authwrite(HashMap<String, Object> param) {
		result = new HashMap<String, Object>();
		bean = new DaoBean("Insert", ns+".listwrite", param);
		result.put("status", di.dao(bean));
		return result;
	}
	
	@Override
	public HashMap<String, Object> actcreate(HashMap<String, Object> param) {
		result = new HashMap<String, Object>();
		bean = new DaoBean("Insert", ns+".catewrite", param);
		result.put("status", di.dao(bean));
		return result;
	}

	@Override
	public HashMap<String, Object> pref_list(HashMap<String, Object> param) {
		result = new HashMap<String, Object>();
		bean = new DaoBean("SelectList", ns+".preflist", param);
		result.put("pref", di.dao(bean));
		return result;
	}

	@Override
	public HashMap<String, Object> reply_insert(HashMap<String, Object> param) {
		result = new HashMap<String, Object>();
		bean = new DaoBean("Insert", ns+".replyinsert", param);
		result.put("status", di.dao(bean));
		return result;
	}
	
	@Override
	public HashMap<String, Object> listreply_insert(HashMap<String, Object> param) {
		System.out.println("확인하기 : "+ param);
		result = new HashMap<String, Object>();
		bean = new DaoBean("Insert", ns+".list_replyinsert", param);
		result.put("status", di.dao(bean));
		return result;
	}
	
	@Override
	public HashMap<String, Object> click_up(HashMap<String, Object> param) {
		System.out.println("확인하기 : "+ param);
		result = new HashMap<String, Object>();
		bean = new DaoBean("Update", ns+".clickcategory", param);
		result.put("ctgc", di.dao(bean));

		
		System.out.println("click- category " + result);
		
		bean = new DaoBean("Update", ns+".clicknovel", param);
		result.put("nvc", di.dao(bean));
		System.out.println("click- novel " + result);
		
		return result;
	}
	
	
	
	
}
