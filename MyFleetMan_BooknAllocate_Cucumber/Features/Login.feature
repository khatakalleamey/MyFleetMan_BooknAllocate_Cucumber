Feature: Login features 

	This is login for MyFleetman application and User is successfully logged in on insertion of valid username and password
  
#@Sanity 
#Scenario: Successful Login with Valid Credentials 
#	Given User Launch Chrome browser 
#	When User opens URL "https://apps.kairee.in/MFMUAT/Administration/WebPages/frmLogin.aspx" 
#	And Window is closed 
#	And User enters Email as "Kairee" and Password as "2020 Fleet@#" 
#	And Click on Login 
#	Then Page Title should be "Dashboard" 
#	#	When User click on Log out link   
#	#	Then Page Title should be "Your store. Login" 
#	And close browser
		
@Functional 
Scenario: Enter Booking Details 
	Given User Launch Chrome browser 
	When User opens URL "https://apps.kairee.in/MFMUAT/Administration/WebPages/frmLogin.aspx" 
	And Window is closed 
	And User enters Email as "Kairee" and Password as "2020 Fleet@#" 
	And Click on Login 
	Then Page Title should be "Dashboard" 
	Given Open DropDown from Dashboard 
	And Open DropDown from Booking 
	And Open Booking page 
	Then click on add booking 
	Then Page title should be "Booking" 
	Then Enter Company Prefix as "ABC" and 
	And Choose required company Name as "ABC INDIA PVT. LTD.(AIPL)" 
	Then Serving City should be "PUNE" 
	Then Booking Mode change to "Online" 
	Then Select date 
	Then Enter Guest Prefix as "Am" and choose required company "AMEY 9307431221" 
	Then Enter Duty time as "12.00" 
	Then Enter Drop Location as "MUMBAI" 
	Then Choose Vehicle type as "SWIFT DEZIRE" 
	Then Choose Package name as "4HRS 40KMS" 
	#	Then Check package name is "LOCAL"
	#	Then Click on Submit 
	And Click on SubmitnAllocate 
	Then Click on pop-up 
	And Redirect Back to Allocation page 
	Then Check for Vehicle will be allocated for "Self" 
	Then Choose Vehicle number as "MH-12-SA-4000" 
	Then Enter Driver Prefix as "sa" and choose required driver "Sam" 
	And click on Submit Allocation 
	Then Click on Pop-Up after Allocation done 
	Then Verify wheather Booking has done or not and Capture booking Id as "NK210201005" 
	
	#	Then Redirect to logout 
	#	When User click on Logout link 
	#	And close browser 
	
	