package com.java.ng.service;

import java.util.HashMap;

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
		bean = new DaoBean("SelectOne", ns+".detailcontents", param);
		result = (HashMap<String, Object>) di.dao(bean);
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
	public HashMap<String, Object> pref_on(HashMap<String, Object> param) {
		result = new HashMap<String, Object>();
		bean = new DaoBean("Insert", ns+".prefchecked", param);
		result.put("prefchk", di.dao(bean));
		return result;
	}
	
	
}
