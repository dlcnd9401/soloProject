package com.java.ng.Controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.java.ng.service.userserviceinterface;
import com.java.ng.util.HttpUtil;

@Controller
public class UserController {

	@Autowired
	userserviceinterface tsi;
	
	@RequestMapping(value = "/signup", method = RequestMethod.POST)
	public ModelAndView addUser(HttpServletRequest req){
		return HttpUtil.returnJson(tsi.signup(HttpUtil.paramMap(req)));
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public ModelAndView login(HttpServletRequest req){
		return HttpUtil.returnJson(tsi.login(HttpUtil.paramMap(req)));
	}
	
	
	@RequestMapping(value="/loginchk", method = RequestMethod.POST)
	public ModelAndView loginchk(HttpServletRequest req){
		return HttpUtil.returnJson(tsi.login(HttpUtil.paramMap(req)));
	}
	
}
