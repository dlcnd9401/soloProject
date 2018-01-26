package com.java.ng.Controller;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.java.ng.service.FileServiceInterface;
import com.java.ng.util.HttpUtil;

@Controller
public class FileController {
	
		@Autowired
		FileServiceInterface fsi;
		
		@RequestMapping(value="/fileupload", method=RequestMethod.POST)
		public ModelAndView fileUpload(@RequestParam("file") MultipartFile[] file,HttpServletRequest req){
			System.out.println("param 값 확인 "+ req.getParameter("auth"));
			System.out.println("param 값 확인 "+ req.getParameter("id"));
			System.out.println("param 값 확인 "+ req.getParameter("introduce"));
			System.out.println("param 값 확인 "+ req.getParameter("title"));
			System.out.println("param 값 확인 "+ req.getParameter("type"));
			return HttpUtil.returnJson(fsi.fileOutput(file, req));
		}
		
		@RequestMapping(value="/fileInsert", method = RequestMethod.POST)
		public ModelAndView serial1(HttpServletRequest req){
			return HttpUtil.returnJson(fsi.ctInsert(HttpUtil.paramMap(req)));
		}
		
		@RequestMapping(value="/fileSearch", method = RequestMethod.POST)
		public ModelAndView serial(HttpServletRequest req){
			return HttpUtil.returnJson(fsi.fileSearch(HttpUtil.paramMap(req)));
		}
}
		
