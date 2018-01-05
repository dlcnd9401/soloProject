package com.java.ng.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CharmController {

	@RequestMapping("/Charm")
	public String charm(){
		
		return "charm";
	}
}
