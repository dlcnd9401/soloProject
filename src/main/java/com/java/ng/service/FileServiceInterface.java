package com.java.ng.service;

import java.util.HashMap;
import javax.servlet.http.HttpServletRequest;
import org.springframework.web.multipart.MultipartFile;

public interface FileServiceInterface {
	
	public HashMap<String, Object> fileOutput(MultipartFile[] file, HttpServletRequest req);
	public HashMap<String,Object> ctInsert(HashMap<String,Object>param);

}