package stepDefinations;

import java.util.Properties;

import org.apache.commons.lang.RandomStringUtils;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;

import uat.pageObjects.BookingDetails;
import uat.pageObjects.LoginPage;

public class BaseClass {
	public WebDriver driver;
	public LoginPage lp;
	public BookingDetails bd;
	public static Logger logger;
	public Properties configProp;

	// Created for generating random string for Unique email
	public static String randomestring() {
		String generatedString1 = RandomStringUtils.randomAlphabetic(5);
		return (generatedString1);
	}

}
