package com.java.ng.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.ng.bean.DaoBean;
import com.java.ng.Dao.DaoInterface;

@Service
public class TextViewService implements TextViewServiceInterface {

	@Autowired
	DaoInterface di;
	
	private final String ns = "textview";
	private HashMap<String, Object> result;
	private DaoBean bean;
	private HashMap<String, Object> chk;
	
	
	
	@Override
	public HashMap<String, Object> Textview(HashMap<String, Object> param) {
		result=new HashMap<String,Object>();
		bean = new DaoBean("SelectOne", ns+".Novel_data", param); //최초로 Novel의 데이터 가져오기.
		result.put("Novel",di.dao(bean));
		
		chk = (HashMap<String,Object>) di.dao(bean);
		
		if(!(chk == null)){
			param = new HashMap<String,Object>();
			param.put("no",chk.get("no"));
			
			bean = new DaoBean("SelectList", ns+".Novel_reply", param);
			
			List<HashMap<String,Object>> List =(ArrayList<HashMap<String,Object>>) di.dao(bean); 
			if(!(List==null)){
				result.put("NovelReply", di.dao(bean));
				result.put("NoStatus", 1);
			}else{
				result.put("NoStatus", 0);
			}
			return result;
		}else{
			result.put("NoStatus", 0); //값이 없을 때.
			return result;
		}
	}

//화면 이동 시 데이터 가져오기.
	@Override
	public HashMap<String, Object> TVMOVE(HashMap<String, Object> param) {
		System.out.println("MOVE 이동 시작");
		result = new HashMap<String,Object>();
		chk = new HashMap<String,Object>();
		
		bean = new DaoBean("SelectOne", ns+".Novel_data_move", param);
		
		chk = (HashMap<String,Object>) di.dao(bean);
		
		if(!(chk==null)){
			result = (HashMap<String,Object>) di.dao(bean);
			result.put("stat", 1);
			return result;
		}else{
			result.put("stat", 2);
			return result;
		}
	}
	
	
	
}


























