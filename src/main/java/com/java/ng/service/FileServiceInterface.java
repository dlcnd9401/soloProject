package com.java.ng.service;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public interface FileServiceInterface {
	public HashMap<String, Object> fileOutput(MultipartFile[] file, HttpServletRequest req);
}
