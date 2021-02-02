$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Login.feature");
formatter.feature({
  "name": "Login features",
  "description": "\tThis is login for MyFleetman application and User is successfully logged in on insertion of valid username and password",
  "keyword": "Feature"
});
formatter.background({
  "name": "Launching Browser",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.user_Launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://apps.kairee.in/MFMUAT/Administration/WebPages/frmLogin.aspx\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Window is closed",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.window_is_closed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Email as \"Kairee\" and Password as \"2020 Fleet@#\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title should be \"Dashboard\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.page_Title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Enter Booking Details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Functional"
    }
  ]
});
formatter.step({
  "name": "Open DropDown from Dashboard",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.open_DropDown_from_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Open DropDown from Booking",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.open_DropDown_from_Booking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Open Booking page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.open_Booking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on add booking",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.click_on_add_booking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page title should be \"Booking\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Company Prefix as \"ABC\" and",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.enter_Company_Prefix_as_and(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Choose required company Name as \"ABC INDIA PVT. LTD.(AIPL)\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.Choose_required_company_Name_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Serving City should be \"PUNE\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.serving_City_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Booking Mode change to \"Online\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.booking_Mode_change_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select date",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.select_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Guest Prefix as \"Am\" and choose required company \"AMEY 9307431221\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.enter_Guest_Prefix_as_and_choose_required_company(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Duty time as \"12.00\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.enter_Duty_time_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Drop Location as \"MUMBAI\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.enter_Drop_Location_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Choose Vehicle type as \"SWIFT DEZIRE\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.choose_Vehicle_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Choose Package name as \"4HRS 40KMS\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.choose_Package_name_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on SubmitnAllocate",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.click_on_SubmitnAllocate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on pop-up",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.click_on_pop_up()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Redirect Back to Allocation page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.redirect_Back_to_Allocation_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : {\"readyState\":4,\"responseText\":\"{\\\"Message\\\":\\\"Object reference not set to an instance of an object.\\\",\\\"StackTrace\\\":\\\"   at EmailTemplateDAL.getSMSDetail(Nullable`1 companyId, Nullable`1 bookingId, String SMSType, Tbl_EmailConfiguration\\\\u0026 obj, Int64 CompanyClientID)\\\\r\\\\n   at Administration_WebPages_Booking.SendBookingMailSMS(Int64 bookingId, Nullable`1 userId)\\\\r\\\\n   at Administration_WebPages_Booking.CreateBooking(Tbl_OnlineBooking_Saswad objBookingModel, List`1 objGuestList, Int32 CompanyClientId, Int32 NoOfVehicles, Boolean IsClientSkipPO, Boolean IsReportingTimeAndAddressSame, Tbl_PoUploadDetailsSaswad ObjPoUploaddetails, List`1 ObjExtraColumnGuestList, List`1 objCustomerAddress, Tbl_Onlinebooking_ExtraColumn objBookingExtraColumn)\\\",\\\"ExceptionType\\\":\\\"System.NullReferenceException\\\"}\",\"responseJSON\":{\"Message\":\"Object reference not set to an instance of an object.\",\"StackTrace\":\"   at EmailTemplateDAL.getSMSDetail(Nullable`1 companyId, Nullable`1 bookingId, String SMSType, Tbl_EmailConfiguration\u0026 obj, Int64 CompanyClientID)\\r\\n   at Administration_WebPages_Booking.SendBookingMailSMS(Int64 bookingId, Nullable`1 userId)\\r\\n   at Administration_WebPages_Booking.CreateBooking(Tbl_OnlineBooking_Saswad objBookingModel, List`1 objGuestList, Int32 CompanyClientId, Int32 NoOfVehicles, Boolean IsClientSkipPO, Boolean IsReportingTimeAndAddressSame, Tbl_PoUploadDetailsSaswad ObjPoUploaddetails, List`1 ObjExtraColumnGuestList, List`1 objCustomerAddress, Tbl_Onlinebooking_ExtraColumn objBookingExtraColumn)\",\"ExceptionType\":\"System.NullReferenceException\"},\"status\":500,\"statusText\":\"Internal Server Error\"}}\n  (Session info: chrome\u003d88.0.4324.104): {\"readyState\":4,\"responseText\":\"{\\\"Message\\\":\\\"Object reference not set to an instance of an object.\\\",\\\"StackTrace\\\":\\\"   at EmailTemplateDAL.getSMSDetail(Nullable`1 companyId, Nullable`1 bookingId, String SMSType, Tbl_EmailConfiguration\\\\u0026 obj, Int64 CompanyClientID)\\\\r\\\\n   at Administration_WebPages_Booking.SendBookingMailSMS(Int64 bookingId, Nullable`1 userId)\\\\r\\\\n   at Administration_WebPages_Booking.CreateBooking(Tbl_OnlineBooking_Saswad objBookingModel, List`1 objGuestList, Int32 CompanyClientId, Int32 NoOfVehicles, Boolean IsClientSkipPO, Boolean IsReportingTimeAndAddressSame, Tbl_PoUploadDetailsSaswad ObjPoUploaddetails, List`1 ObjExtraColumnGuestList, List`1 objCustomerAddress, Tbl_Onlinebooking_ExtraColumn objBookingExtraColumn)\\\",\\\"ExceptionType\\\":\\\"System.NullReferenceException\\\"}\",\"responseJSON\":{\"Message\":\"Object reference not set to an instance of an object.\",\"StackTrace\":\"   at EmailTemplateDAL.getSMSDetail(Nullable`1 companyId, Nullable`1 bookingId, String SMSType, Tbl_EmailConfiguration\u0026 obj, Int64 CompanyClientID)\\r\\n   at Administration_WebPages_Booking.SendBookingMailSMS(Int64 bookingId, Nullable`1 userId)\\r\\n   at Administration_WebPages_Booking.CreateBooking(Tbl_OnlineBooking_Saswad objBookingModel, List`1 objGuestList, Int32 CompanyClientId, Int32 NoOfVehicles, Boolean IsClientSkipPO, Boolean IsReportingTimeAndAddressSame, Tbl_PoUploadDetailsSaswad ObjPoUploaddetails, List`1 ObjExtraColumnGuestList, List`1 objCustomerAddress, Tbl_Onlinebooking_ExtraColumn objBookingExtraColumn)\",\"ExceptionType\":\"System.NullReferenceException\"},\"status\":500,\"statusText\":\"Internal Server Error\"}\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027SOFT15\u0027, ip: \u0027192.168.10.45\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.104, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\Amey\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:50369}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 0a55566f932e562040b9cf7b45c08ff6\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:280)\r\n\tat stepDefinations.StepDef.redirect_Back_to_Allocation_page(StepDef.java:225)\r\n\tat ✽.Redirect Back to Allocation page(file:Features/Login.feature:45)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Check for Vehicle will be allocated for \"Self\" or \"Vendor\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.check_for_Vehicle_will_be_allocated_for_or(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Choose Vehicle number as \"MH-12-GJ-1500 ( SWIFT DEZIRE )\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.choose_Vehicle_number_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter Driver Prefix as \"sa\" and choose required driver \"Sam\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.enter_Driver_Prefix_as_and_choose_required_driver(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Submit Allocation",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.click_on_Submit_Allocation()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Pop-Up after Allocation done",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.click_on_Pop_Up_after_Allocation_done()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify wheather Booking has done or not and Capture booking Id as \"NK210202001\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.verify_wheather_Booking_has_done_or_not_and_Capture_booking_Id_as(String)"
});
formatter.result({
  "status": "skipped"
});
});