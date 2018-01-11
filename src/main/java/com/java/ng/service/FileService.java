package com.java.ng.service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.java.ng.util.HttpUtil;

@Service
public class FileService implements FileServiceInterface {

	// 전역변수 선언
	private HashMap<String, Object> resultMap;
	private List<HashMap<String, Object>> fileList;
	
	@Override
	public HashMap<String, Object> fileOutput(MultipartFile[] file, HttpServletRequest req) {
		fileList = new ArrayList<HashMap<String, Object>>();
		
		HashMap<String, Object> param = HttpUtil.paramMap(req);
		System.out.println(param);
		
		// 파일 수 만큼 반복문 실행
		for(int i = 0; i < file.length; i++){
			String name = file[i].getOriginalFilename();
			String path = "";
			String path2 = "resources/upload/";
			System.out.println(path2 + name);
			
			path = "D:/GDJ7/angularjs/1214/src/main/webapp/" + path2;
//			path = req.getSession().getServletContext().getRealPath("/") + path2;
			System.out.println(path);
			
			// 파일 저장 부분
			try {
				byte[] bytes = file[i].getBytes();
				File fDir = new File(path);
				
				// 파일 경로 없을 때 폴더 생성하기
				if(!fDir.exists()){
					fDir.mkdirs();
				}
				
				File newFile = new File(path + name);
				// 경로에 같은 파일이 없을때 파일 생성
				if(!newFile.exists()){
					OutputStream out = new FileOutputStream(newFile);
					out.write(bytes);
					out.close();
				}
				
				// 파일 저장 내용 리스트에 담기
				HashMap<String, Object> map = new HashMap<String, Object>();
				map.put("path", path2);
				map.put("name", name);
				fileList.add(map);
				
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		
		// 저장 내용 리턴 받기 위해 담기
		resultMap = new HashMap<String, Object>();
		resultMap.put("Rows", fileList);
		
		return resultMap;
	}

}
