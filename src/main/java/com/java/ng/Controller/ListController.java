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
}
