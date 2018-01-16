package com.java.ng.Controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.java.ng.service.PrefserviceInterface;
import com.java.ng.util.HttpUtil;

@Controller
public class PrefController {

	@Autowired
	PrefserviceInterface psi;
	
	@RequestMapping(value="/Pref_on", method = RequestMethod.POST)
	public ModelAndView pref_on(HttpServletRequest req){
		return HttpUtil.returnJson(psi.prefcheck(HttpUtil.paramMap(req)));
	}
	
	@RequestMapping(value="/Pref_check", method = RequestMethod.POST)
	public ModelAndView prefchecked(HttpServletRequest req){
		return HttpUtil.returnJson(psi.prefchkpoint(HttpUtil.paramMap(req)));
	}
		
}
