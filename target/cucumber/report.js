$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('pepinazo\FacebookLogin.feature');
formatter.feature({
  "line": 1,
  "name": "Facebook Login",
  "description": "",
  "id": "facebook-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login button exists",
  "description": "",
  "id": "facebook-login;login-button-exists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I open Facebook website",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Login button should exist",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.I_have_open_the_browser()"
});
formatter.result({
  "duration": 89389761,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.I_open_Facebook_website()"
});
formatter.result({
  "duration": 1859771514,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.Login_button_should_exist()"
});
formatter.result({
  "duration": 496931844,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login button is disabled when fields are empty",
  "description": "",
  "id": "facebook-login;login-button-is-disabled-when-fields-are-empty",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I open Facebook website",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Login button should be disabled",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.I_have_open_the_browser()"
});
formatter.result({
  "duration": 20519,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.I_open_Facebook_website()"
});
formatter.result({
  "duration": 1800224292,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.Login_button_should_be_disabled()"
});
formatter.result({
  "duration": 418671120,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:48)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:20)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:27)\r\n\tat pepinazo.StepDefs.Login_button_should_be_disabled(StepDefs.java:61)\r\n\tat ✽.Then Login button should be disabled(pepinazo\\FacebookLogin.feature:18)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 21,
  "name": "User cannot log into facebook without credentials",
  "description": "",
  "id": "facebook-login;user-cannot-log-into-facebook-without-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I open Facebook website",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Facebook asks me to enter credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.I_have_open_the_browser()"
});
formatter.result({
  "duration": 20839,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.I_open_Facebook_website()"
});
formatter.result({
  "duration": 1830530101,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.I_click_the_login_button()"
});
formatter.result({
  "duration": 1097419864,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.Facebook_asks_me_to_enter_credentials()"
});
formatter.result({
  "duration": 85601,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "User can log into facebook with cell phone number",
  "description": "",
  "id": "facebook-login;user-can-log-into-facebook-with-cell-phone-number",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I open Facebook website",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I login using cell phone number",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Facebook Home Page must appear",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.I_have_open_the_browser()"
});
formatter.result({
  "duration": 27572,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.I_open_Facebook_website()"
});
formatter.result({
  "duration": 1804437316,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.I_login_using_cell_phone_number()"
});
formatter.result({
  "duration": 50976,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.Facebook_Home_Page_must_appear()"
});
formatter.result({
  "duration": 420189809,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"name\",\"selector\":\"q\"}\n  (Session info: chrome\u003d74.0.3729.131)\n  (Driver info: chromedriver\u003d2.42.591088 (7b2b2dca23cca0862f674758c9a3933e685c27d5),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-FMK0MPG\u0027, ip: \u0027192.168.0.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.42.591088 (7b2b2dca23cca0..., userDataDir: C:\\Users\\OmarPapa\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:64939}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 74.0.3729.131, webStorageEnabled: true}\nSession ID: 6dc19af6b3c2f5d5ce1727585729ee2d\n*** Element info: {Using\u003dname, value\u003dq}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.isDisplayed(Unknown Source)\r\n\tat facebookPOM.pages.HomePage.at(HomePage.java:41)\r\n\tat pepinazo.StepDefs.Facebook_Home_Page_must_appear(StepDefs.java:83)\r\n\tat ✽.Then Facebook Home Page must appear(pepinazo\\FacebookLogin.feature:39)\r\n",
  "status": "failed"
});
formatter.uri('pepinazo\facebookLogins.feature');
formatter.feature({
  "line": 1,
  "name": "Facebook Login Parameters",
  "description": "",
  "id": "facebook-login-parameters",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 17,
  "name": "",
  "description": "",
  "id": "facebook-login-parameters;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I open Facebook website",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I login with 5579021004 and navi1334",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I can see Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.I_have_open_the_browser()"
});
formatter.result({
  "duration": 3347079,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.I_open_Facebook_website()"
});
formatter.result({
  "duration": 1782882963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5579021004",
      "offset": 13
    },
    {
      "val": "navi1334",
      "offset": 28
    }
  ],
  "location": "StepDefs.I_login_with_user_and_pass(String,String)"
});
formatter.result({
  "duration": 6442413577,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.I_can_see_Home_Page()"
});
formatter.result({
  "duration": 56187319,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "",
  "description": "",
  "id": "facebook-login-parameters;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I open Facebook website",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I login with 5579021004 and navi1334",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I can see Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.I_have_open_the_browser()"
});
formatter.result({
  "duration": 22442,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.I_open_Facebook_website()"
});
formatter.result({
  "duration": 1837336790,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5579021004",
      "offset": 13
    },
    {
      "val": "navi1334",
      "offset": 28
    }
  ],
  "location": "StepDefs.I_login_with_user_and_pass(String,String)"
});
formatter.result({
  "duration": 4416721543,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.I_can_see_Home_Page()"
});
formatter.result({
  "duration": 65176982,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "",
  "description": "",
  "id": "facebook-login-parameters;;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I open Facebook website",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I login with 5579021004 and navi1334",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I can see Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.I_have_open_the_browser()"
});
formatter.result({
  "duration": 24366,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.I_open_Facebook_website()"
});
formatter.result({
  "duration": 1755960781,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5579021004",
      "offset": 13
    },
    {
      "val": "navi1334",
      "offset": 28
    }
  ],
  "location": "StepDefs.I_login_with_user_and_pass(String,String)"
});
formatter.result({
  "duration": 4798329538,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.I_can_see_Home_Page()"
});
formatter.result({
  "duration": 66001568,
  "status": "passed"
});
});