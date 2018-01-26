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
	private int sort = 1;
	
	
	@Override
	public HashMap<String, Object> Textview(HashMap<String, Object> param) {
		result=new HashMap<String,Object>();
		bean = new DaoBean("SelectOne", ns+".Novel_data", param); //최초로 Novel의 데이터 가져오기.
		result.put("Novel",di.dao(bean));
		
		chk = (HashMap<String,Object>) di.dao(bean);
		
		if(!(chk == null)){
			param = new HashMap<String,Object>();
			param.put("no",chk.get("no"));
			param.put("sort",chk.get("sort"));
			param.put("title",chk.get("title"));
			
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

	@Override
	public HashMap<String, Object> TextInsert(HashMap<String, Object> param){
		result = new HashMap<String,Object>();
		chk = new HashMap<String,Object>();
		
		bean = new DaoBean("SelectOne",ns+".Novel_insert_data_params",param);
		chk = (HashMap<String, Object>)di.dao(bean);
		
		if(!(chk == null)){
			sort = Integer.parseInt(chk.get("sort").toString()) + 1;
			param.put("sort",sort);
			
			bean = new DaoBean("Insert",ns+".Novel_insert",param);
			
			result.put("Stat", di.dao(bean));
			result.put("sort", param.get("sort"));
			
			bean =new DaoBean("Update",ns+".Novel_Category_date_refresh",param);
			result.put("Date_Update",di.dao(bean));
			
			return result;
		}else{
			param.put("sort", 1);
			
			bean = new DaoBean("Insert",ns+".Novel_insert",param);
			result.put("Stat", di.dao(bean));
			result.put("sort", param.get("sort"));
			
			return result;
		}
		
		
	}
	
	
	@Override
	public HashMap<String, Object> Insert_IDCheck(HashMap<String, Object> param){
		result = new HashMap<String,Object>();
		chk = new HashMap<String,Object>();
		
		bean = new DaoBean("SelectOne",ns+".Novel_insert_data_params",param);
		chk = (HashMap<String, Object>)di.dao(bean);
		System.out.println("chk" + chk);
		if(!(chk == null)){
			result.put("Name", chk.get("id"));
			return result;
		}else{
			chk = new HashMap<String,Object>();
			bean = new DaoBean("SelectOne",ns+".Noel_insert_Data_category",param);
			chk = (HashMap<String, Object>)di.dao(bean);
			if(!(chk == null)){
				result.put("Name", chk.get("id"));
				return result;
			}else{
				result.put("status",0);
				return result;
			}
			
		}
	}
	
	
	
}


























