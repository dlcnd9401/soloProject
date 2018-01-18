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

import com.java.ng.service.TextViewServiceInterface;
import com.java.ng.util.HttpUtil;

@Controller
public class TextViewController {

	@Autowired
	TextViewServiceInterface tvsi;
	
	}