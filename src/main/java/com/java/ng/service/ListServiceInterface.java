package com.java.ng.service;

import java.util.HashMap;

public interface ListServiceInterface {
	HashMap<String,Object>list(HashMap<String,Object>param);
	HashMap<String,Object>serial(HashMap<String,Object>param);
	HashMap<String,Object>adetail(HashMap<String,Object>param);
	HashMap<String,Object>detaillist(HashMap<String,Object>param);
	HashMap<String,Object>sortSearch(HashMap<String,Object>param);
	HashMap<String,Object>authwrite(HashMap<String, Object>param);
	HashMap<String,Object>actcreate(HashMap<String, Object>param);
	HashMap<String,Object>pref_list(HashMap<String,Object>param);
	HashMap<String,Object>reply_insert(HashMap<String,Object>param);
	HashMap<String,Object>adetailparams(HashMap<String,Object>param);
	
	
	HashMap<String,Object>listreply_insert(HashMap<String,Object>param);
	
	
	
	
	HashMap<String,Object>click_up(HashMap<String,Object>param);
	
	
}

