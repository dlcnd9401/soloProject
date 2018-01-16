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
	public ModelAndView login(HttpServletRequest req, HttpSession session){
		   HashMap<String, Object> map = tsi.login(HttpUtil.paramMap(req));
		   session.setAttribute("user", map);	
		return HttpUtil.returnJson(tsi.login(HttpUtil.paramMap(req)));
	}
	
	@RequestMapping(value = "/Logoff", method = RequestMethod.POST)
	public void LogOut(HttpServletResponse resp, HttpSession session){
		session.invalidate();
	}
	
	
	 @RequestMapping(value="/LoginCheck", method = RequestMethod.POST)
	   public void LoginCheck(HttpServletResponse resp, HttpSession session){
	      HashMap<String, Object> userinfo = (HashMap<String, Object>) session.getAttribute("user");
	      HashMap<String, Object> map = new HashMap<String, Object>();
	      if(userinfo == null){
	         map.put("status", 0);
	      }else{
	         map.put("status", 1);
	         map.put("user", userinfo);
	      }
	      HttpUtil.sendResponceToJson(resp, map);
	   }
	}