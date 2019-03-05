package com.bit_etland.web.controller;

import java.util.Date;
import java.text.SimpleDateFormat;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
@Controller
public class HomeController {
	@RequestMapping(value="/", method=RequestMethod.GET)
	public String home(Model model) {
		System.out.println("컨트롤 진입");
		model.addAttribute("serverTime", new SimpleDateFormat("yyyy-MM-dd-hh-mm-ss").format(new Date()));
		return "home";
	}
}