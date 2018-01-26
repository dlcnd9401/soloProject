package com.java.ng.service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.java.ng.Dao.DaoInterface;
import com.java.ng.bean.DaoBean;

@Service
public class FileService implements FileServiceInterface {
	
	// 전역변수 선언
	private HashMap<String, Object> resultMap;
	private List<HashMap<String, Object>> fileList;
	
	@Autowired
	DaoInterface di;
	
	private final String ns = "board";
	private HashMap<String, Object> result;
	private HashMap<String,Object> chk;
	private DaoBean bean;
	private String img;
	
	@Override
	public HashMap<String, Object> fileOutput(MultipartFile[] file, HttpServletRequest req) {
		fileList = new ArrayList<HashMap<String, Object>>();
		
		// 파일 수 만큼 반복문 실행
		for(int i = 0; i < file.length; i++){
			String name = file[i].getOriginalFilename();
			String path = "";
			String path2 = "resources/img/";

			/*path = "D:/GIT/soloProject/src/main/webapp/" + path2;*/
			path = req.getSession().getServletContext().getRealPath("/") + path2;
		img = path2 + name;
			
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
				
				//insert 문 실행 
				HashMap<String,Object> Data = new HashMap<String,Object>();
				
				System.out.println(img);
				Data.put("id", req.getParameter("id"));
				Data.put("title", req.getParameter("title"));
				Data.put("type", req.getParameter("type"));
				Data.put("auth", req.getParameter("auth"));
				Data.put("introduce", req.getParameter("introduce"));
				Data.put("img", img);

				result = new HashMap<String, Object>();
				System.out.println("insert 확인하기");
				bean = new DaoBean("Insert", ns+".catewrite", Data);
				result.put("status", di.dao(bean));
				
				
				
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		
		resultMap = new HashMap<String, Object>();
		resultMap.put("Rows", fileList);
		
		return resultMap;
		

	}
	
	@Override
	public HashMap<String, Object> ctInsert(HashMap<String, Object> param) {
		result = new HashMap<String, Object>();
		System.out.println("insert 확인하기");
		bean = new DaoBean("Insert", ns+".catewrite", param);
		result.put("status", di.dao(bean));
		return result;
		
	}

	@Override
	public HashMap<String, Object> fileSearch(HashMap<String, Object> param) {
		result= new HashMap<String,Object>();
		bean = new DaoBean("SelectOne", ns+".catechk", param);
		chk = (HashMap<String,Object>) di.dao(bean);
		
		System.out.println(chk);
		if(!(chk == null)){
			System.out.println("insert : 실패");
			result.put("cate", "실패");
			return result;
		}else{
			System.out.println("insert : 성공");
			result.put("cate", "성공");
			return result;
		}
	}
	
	
	
	

}