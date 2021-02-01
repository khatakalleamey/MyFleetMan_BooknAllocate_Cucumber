$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Login.feature");
formatter.feature({
  "name": "Login features",
  "description": "\tThis is login for MyFleetman application and User is successfully logged in on insertion of valid username and password",
  "keyword": "Feature"
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
  "status": "passed"
});
formatter.step({
  "name": "Check for Vehicle will be allocated for \"Self\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.check_for_Vehicle_will_be_allocated_for_or(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Choose Vehicle number as \"MH-12-CB-2644 ( SWIFT DEZIRE )\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.choose_Vehicle_number_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Driver Prefix as \"sa\" and choose required driver \"SABER S\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.enter_Driver_Prefix_as_and_choose_required_driver(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Submit Allocation",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.click_on_Submit_Allocation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Pop-Up after Allocation done",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.click_on_Pop_Up_after_Allocation_done()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify wheather Booking has done or not and Capture booking Id as \"NK210130001\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.verify_wheather_Booking_has_done_or_not_and_Capture_booking_Id_as(String)"
});
formatter.result({
  "error_message": "java.lang.IndexOutOfBoundsException: Index: 4, Size: 4\r\n\tat java.util.ArrayList.rangeCheck(ArrayList.java:657)\r\n\tat java.util.ArrayList.get(ArrayList.java:433)\r\n\tat uat.pageObjects.BookingDetails.VerifBookingDone(BookingDetails.java:475)\r\n\tat stepDefinations.StepDef.verify_wheather_Booking_has_done_or_not_and_Capture_booking_Id_as(StepDef.java:267)\r\n\tat ✽.Verify wheather Booking has done or not and Capture booking Id as \"NK210130001\"(file:Features/Login.feature:50)\r\n",
  "status": "failed"
});
});