package com.bit_etland.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.bit_etland.web.domain.CustomerDTO;

@SessionAttributes("user")
@Controller
@RequestMapping("/customer")
public class CustomerController {
	static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@RequestMapping(value="/signin",method=RequestMethod.POST)
	public String signin(@ModelAttribute CustomerDTO customer) {
		logger.info("\n --------- MemberController {} !! ----------","signin");
		System.out.println(customer.toString());
		return "public:category/list.tiles";
	}
}
