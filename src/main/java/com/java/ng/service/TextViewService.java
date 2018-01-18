package com.java.ng.service;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.ng.bean.DaoBean;
import com.java.ng.Dao.DaoInterface;

@Service
public class TextViewService implements TextViewServiceInterface {

	@Autowired
	DaoInterface di;
	
	private final String ns = "load";
	private HashMap<String, Object> result;
	private DaoBean bean;
	
	
	
}
