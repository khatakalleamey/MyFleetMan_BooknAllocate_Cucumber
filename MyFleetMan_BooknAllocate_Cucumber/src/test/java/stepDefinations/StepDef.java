package stepDefinations;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.mortbay.log.Log;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import uat.pageObjects.BookingDetails;
import uat.pageObjects.LoginPage;

public class StepDef extends BaseClass {

	@Before
	public void setup() throws IOException {
		// Logging
		logger = Logger.getLogger("MFMUAT");
		PropertyConfigurator.configure("log4j.properties");
		logger.setLevel(Level.DEBUG);

		// Load properties file
		configProp = new Properties();
		FileInputStream configPropfile = new FileInputStream(".//Configurations//config.properties");
		configProp.load(configPropfile);

		String br = configProp.getProperty("browser"); // getting the browser name from config.properties file

		// Launching browser
		if (br.equals("firefox")) {
			System.setProperty("webdriver.gecko.driver", configProp.getProperty("firefoxpath"));
			driver = new FirefoxDriver();
		}

		else if (br.equals("chrome")) {
			System.setProperty("webdriver.chrome.driver", configProp.getProperty("chromepath"));
			driver = new ChromeDriver();
		}

		else if (br.equals("ie")) {
			System.setProperty("webdriver.ie.driver", configProp.getProperty("iepath"));
			driver = new InternetExplorerDriver();
		}

	}

	@Given("User Launch Chrome browser")
	public void user_Launch_Chrome_browser() {
		logger.info("************* Launching Browser *****************");
		lp = new LoginPage(driver);
	}

	@When("User opens URL {string}")
	public void user_opens_URL(String url) {
		logger.info("************* Opening URL  *****************");
		driver.manage().window().maximize();
		driver.get(url);
	}

	@When("Window is closed")
	public void window_is_closed() throws InterruptedException {
		logger.info("*********** Window Closed ************");
		Thread.sleep(5000);
		lp.removeIcon();
	}

	@When("User enters Email as {string} and Password as {string}")
	public void user_enters_Email_as_and_Password_as(String Username, String Password) throws InterruptedException {
		Thread.sleep(3000);
		lp.setUN(Username);
		logger.info(" Username Entered ");
		Thread.sleep(3000);
		lp.setPWD(Password);
		logger.info(" Password Entered ");
	}

	@When("Click on Login")
	public void click_on_Login() throws InterruptedException {
		Thread.sleep(3000);
		lp.ClickLGbtn();
		Thread.sleep(5000);
		logger.info(" User logged in Seccessfully ");
	}

	@Then("Page Title should be {string}")
	public void page_Title_should_be(String Title) {
		System.out.println("The Page Title is " + driver.getTitle());

		Assert.assertEquals(Title, driver.getTitle());
	}

	@Given("Open DropDown from Dashboard")
	public void open_DropDown_from_Dashboard() throws InterruptedException {
		bd = new BookingDetails(driver);
		Thread.sleep(5000);
		bd.clickDropDown1();
	}

	@Given("Open DropDown from Booking")
	public void open_DropDown_from_Booking() throws InterruptedException {
		Thread.sleep(5000);
		bd.clickDropDown2();
	}

	@Given("Open Booking page")
	public void open_Booking_page() throws InterruptedException {
		Thread.sleep(5000);
		bd.clickBook();
	}

	@Then("click on add booking")
	public void click_on_add_booking() throws InterruptedException {
		Thread.sleep(5000);
		bd.addNewbooking();
	}

	@Then("Page title should be {string}")
	public void page_title_should_be(String Booking_title) {
		Assert.assertEquals(Booking_title, driver.getTitle());
	}

	@Then("Enter Company Prefix as {string} and")
	public void enter_Company_Prefix_as_and(String PrefixName) throws InterruptedException {
		Thread.sleep(5000);
		bd.setPrefixName(PrefixName);
	}

	@Then("Choose required company Name as {string}")
	public void Choose_required_company_Name_as(String CompanyName) throws InterruptedException {
		Thread.sleep(5000);
		bd.setCompanyName(CompanyName);
	}

	@Then("Serving City should be {string}")
	public void serving_City_should_be(String ServingCity) throws InterruptedException {
		Thread.sleep(5000);
		bd.setServingCity(ServingCity);
	}

	@Then("Booking Mode change to {string}")
	public void booking_Mode_change_to(String BookingMode) throws InterruptedException {
		Thread.sleep(5000);
		bd.setBookMode(BookingMode);

	}

	@Then("Select date")
	public void select_date() throws InterruptedException {
		Thread.sleep(5000);
		bd.chosetheDate();
	}

	@Then("Enter Guest Prefix as {string} and choose required company {string}")
	public void enter_Guest_Prefix_as_and_choose_required_company(String GuestPrefix, String GuestName)
			throws InterruptedException {
		Thread.sleep(5000);
		bd.setGuestPrefix(GuestPrefix);
		Thread.sleep(5000);
		bd.setGuestName(GuestName);
	}

	@Then("Enter Duty time as {string}")
	public void enter_Duty_time_as(String Time) throws InterruptedException {
		Thread.sleep(5000);
		bd.setGuestBookingtime(Time);
	}

	@Then("Enter Drop Location as {string}")
	public void enter_Drop_Location_as(String DropLocation) throws InterruptedException {
		Thread.sleep(5000);
		bd.setDropLocation(DropLocation);
	}

	@Then("Choose Vehicle type as {string}")
	public void choose_Vehicle_type_as(String VehicleType) throws InterruptedException {
		Thread.sleep(5000);
		bd.setVehicletype(VehicleType);
	}

	@Then("Choose Package name as {string}")
	public void choose_Package_name_as(String PackageName) throws InterruptedException {
		Thread.sleep(5000);
		bd.setPackageName(PackageName);
	}

//	@Then("Click on Submit")
//	public void click_on_Submit() throws InterruptedException {
//		Thread.sleep(5000);
//		bd.Clicksubmit();
//	}
//	
	@Given("Click on SubmitnAllocate")
	public void click_on_SubmitnAllocate() throws InterruptedException {
		Thread.sleep(3000);
		bd.ClickSubmitnAllocate();
	}

	@Then("Click on pop-up")
	public void click_on_pop_up() throws InterruptedException {
		Thread.sleep(3000);
		bd.OffAlertSameGuestName();
		Thread.sleep(5000);
		bd.offAlertBooking();

	}

	@Then("Redirect Back to Allocation page")
	public void redirect_Back_to_Allocation_page() throws InterruptedException {
		Thread.sleep(3000);
		String Booking = driver.getWindowHandle();
		if (driver.getTitle().equals("Booking")) {
			driver.switchTo().window(Booking);
		}
	}

	@Then("Check for Vehicle will be allocated for {string}")
	public void check_for_Vehicle_will_be_allocated_for_or(String AllocationType) throws InterruptedException {
		Thread.sleep(3000);
		bd.setChooseAllcationType(AllocationType);
	}

	@Then("Choose Vehicle number as {string}")
	public void choose_Vehicle_number_as(String VehicleNu) throws InterruptedException {
		Thread.sleep(3000);
		bd.setchooseVehicleNu(VehicleNu);
	}

	@Then("Enter Driver Prefix as {string} and choose required driver {string}")
	public void enter_Driver_Prefix_as_and_choose_required_driver(String DriverPrefix, String DriverName)
			throws InterruptedException {
		Thread.sleep(3000);
		bd.setDriverPre(DriverPrefix);
		Thread.sleep(3000);
		bd.setDriverName(DriverName);
	}

	@Then("click on Submit Allocation")
	public void click_on_Submit_Allocation() throws InterruptedException {
		Thread.sleep(3000);
		bd.ClickSubmitonAllocation();
	}

	@Then("Click on Pop-Up after Allocation done")
	public void click_on_Pop_Up_after_Allocation_done() throws InterruptedException {
		Thread.sleep(3000);
		bd.offAlertAllocation();
		Thread.sleep(10000);
		String Allocation = driver.getWindowHandle();
		driver.switchTo().window(Allocation);
	}

	@Then("Verify wheather Booking has done or not and Capture booking Id as {string}")
	public void verify_wheather_Booking_has_done_or_not_and_Capture_booking_Id_as(String bookID)
			throws InterruptedException {

		Thread.sleep(5000);
		boolean CheckBookindDonestatus = bd.VerifBookingDone(bookID);
		if (CheckBookindDonestatus == true) {
			logger.info(" Test Done and TestResult is Pass");
			Assert.assertEquals(true, CheckBookindDonestatus);
		} else {
			logger.info("Test Done and TestResult is Fail");
		}
	}

	/*
	 * @Then("Redirect to logout") public void redirect_to_logout() throws
	 * InterruptedException { bd.clickOnwelcome_LogoutScreen(); }
	 * 
	 * @When("User click on Logout link") public void user_click_on_Logout_link()
	 * throws InterruptedException { bd.Clickonlogout(); Thread.sleep(5000); }
	 * 
	 * @Then("close browser") public void close_browser() { driver.quit();
	 * Log.info("********** browser Closed *********"); }
	 */
}
