package com.java.ng.service;

import java.util.HashMap;

public interface PrefserviceInterface {
	public HashMap<String,Object>prefcheck(HashMap<String,Object>param);
	public HashMap<String,Object>prefchkpoint(HashMap<String,Object>param);
	public HashMap<String,Object>userpref_update(HashMap<String,Object>param);
	
}
