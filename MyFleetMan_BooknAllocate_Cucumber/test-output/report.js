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
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d88.0.4324.104)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027SOFT15\u0027, ip: \u0027192.168.10.45\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00DBC0C3+3326147]\n\tOrdinal0 [0x00CA0851+2164817]\n\tOrdinal0 [0x00B27140+618816]\n\tOrdinal0 [0x00B1D404+578564]\n\tOrdinal0 [0x00B139EA+539114]\n\tOrdinal0 [0x00AC5FF5+221173]\n\tOrdinal0 [0x00AC5CAC+220332]\n\tOrdinal0 [0x00AC189B+202907]\n\tOrdinal0 [0x00AA3DF4+81396]\n\tOrdinal0 [0x00AA4DEE+85486]\n\tOrdinal0 [0x00AA4D79+85369]\n\tOrdinal0 [0x00CB85DC+2262492]\n\tGetHandleVerifier [0x00F42874+1487204]\n\tGetHandleVerifier [0x00F423CD+1486013]\n\tGetHandleVerifier [0x00F4A368+1518680]\n\tGetHandleVerifier [0x00F42F4E+1488958]\n\tOrdinal0 [0x00CAED0D+2223373]\n\tOrdinal0 [0x00CBA12B+2269483]\n\tOrdinal0 [0x00CBA26F+2269807]\n\tOrdinal0 [0x00CCECB8+2354360]\n\tBaseThreadInitThunk [0x75DC6359+25]\n\tRtlGetAppContainerNamedObjectPath [0x77937C24+228]\n\tRtlGetAppContainerNamedObjectPath [0x77937BF4+180]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:122)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:125)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:212)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:130)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat stepDefinations.StepDef.setup(StepDef.java:48)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:42)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:126)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:66)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:156)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.user_Launch_Chrome_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User opens URL \"https://apps.kairee.in/MFMUAT/Administration/WebPages/frmLogin.aspx\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_opens_URL(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Window is closed",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.window_is_closed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters Email as \"Kairee\" and Password as \"2020 Fleet@#\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.click_on_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page Title should be \"Dashboard\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.page_Title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Open DropDown from Dashboard",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.open_DropDown_from_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Open DropDown from Booking",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.open_DropDown_from_Booking()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Open Booking page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.open_Booking_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on add booking",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.click_on_add_booking()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page title should be \"Booking\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter Company Prefix as \"ABC\" and",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.enter_Company_Prefix_as_and(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Choose required company Name as \"ABC INDIA PVT. LTD.(AIPL)\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.Choose_required_company_Name_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Serving City should be \"PUNE\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.serving_City_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Booking Mode change to \"Online\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.booking_Mode_change_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select date",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.select_date()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter Guest Prefix as \"Am\" and choose required company \"AMEY 9307431221\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.enter_Guest_Prefix_as_and_choose_required_company(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter Duty time as \"12.00\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.enter_Duty_time_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter Drop Location as \"MUMBAI\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.enter_Drop_Location_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Choose Vehicle type as \"SWIFT DEZIRE\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.choose_Vehicle_type_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Choose Package name as \"4HRS 40KMS\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.choose_Package_name_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on SubmitnAllocate",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.click_on_SubmitnAllocate()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on pop-up",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.click_on_pop_up()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Redirect Back to Allocation page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.redirect_Back_to_Allocation_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Check for Vehicle will be allocated for \"Self\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.check_for_Vehicle_will_be_allocated_for_or(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Choose Vehicle number as \"MH-12-CB-2644 ( SWIFT DEZIRE )\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.choose_Vehicle_number_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter Driver Prefix as \"sa\" and choose required driver \"SABER S\"",
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
  "name": "Verify wheather Booking has done or not and Capture booking Id as \"NK210130001\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.verify_wheather_Booking_has_done_or_not_and_Capture_booking_Id_as(String)"
});
formatter.result({
  "status": "skipped"
});
});