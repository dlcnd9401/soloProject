package com.java.ng.Controller;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.java.ng.service.Loadserviceinterface;
import com.java.ng.util.HttpUtil;

@Controller
public class LoadController {

	@Autowired
	Loadserviceinterface lsi;
	
	@RequestMapping(value = "/NewListData", method = RequestMethod.POST)
	public ModelAndView newListData(HttpServletRequest req){
		return HttpUtil.returnJson(lsi.noticeList(HttpUtil.paramMap(req)));
	}
	
	@RequestMapping(value = "/NewListAct_Data", method = RequestMethod.POST)
	public ModelAndView newActor(HttpServletRequest req){
		return HttpUtil.returnJson(lsi.newActor(HttpUtil.paramMap(req)));
	}
	
	/* select box Load */
	@RequestMapping(value = "/KindList", method = RequestMethod.POST)
	public ModelAndView kindList(HttpServletRequest req){
		return HttpUtil.returnJson(lsi.kindList(HttpUtil.paramMap(req)));
	}
	}