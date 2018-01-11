package com.java.ng.Controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.java.ng.service.ListServiceInterface;
import com.java.ng.util.HttpUtil;

@Controller
public class ListController {
	
	@Autowired
	ListServiceInterface lsi;
	
	@RequestMapping(value="/List", method = RequestMethod.POST)
	public ModelAndView List(HttpServletRequest req){
		return HttpUtil.returnJson(lsi.list(HttpUtil.paramMap(req)));
	}
	
	
	@RequestMapping(value="/Serial", method = RequestMethod.POST)
	public ModelAndView serial1(HttpServletRequest req){
		return HttpUtil.returnJson(lsi.serial(HttpUtil.paramMap(req)));
	}
	
	@RequestMapping(value="/Adetail", method = RequestMethod.POST)
	public ModelAndView addetail(HttpServletRequest req){
		return HttpUtil.returnJson(lsi.adetail(HttpUtil.paramMap(req)));
	}
	
	@RequestMapping(value="/DetailList", method = RequestMethod.POST)
	public ModelAndView detaillist(HttpServletRequest req){
		return HttpUtil.returnJson(lsi.detaillist(HttpUtil.paramMap(req)));
	}
	
	@RequestMapping(value="/SortSearch", method = RequestMethod.POST)
	public ModelAndView sortSearch(HttpServletRequest req){
		return HttpUtil.returnJson(lsi.sortSearch(HttpUtil.paramMap(req)));
	}
	
	@RequestMapping(value="/Authwrite", method = RequestMethod.POST)
	public ModelAndView authwrite(HttpServletRequest req){
		return HttpUtil.returnJson(lsi.authwrite(HttpUtil.paramMap(req)));
	}
	
	@RequestMapping(value="/ActCreate", method = RequestMethod.POST)
	public ModelAndView actcreate(HttpServletRequest req){
		return HttpUtil.returnJson(lsi.actcreate(HttpUtil.paramMap(req)));
	}
	
	
	
}
