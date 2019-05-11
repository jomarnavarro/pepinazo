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
  "duration": 76500574,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.I_open_Facebook_website()"
});
formatter.result({
  "duration": 3365712344,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.Login_button_should_exist()"
});
formatter.result({
  "duration": 39610918,
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
  "duration": 11541,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.I_open_Facebook_website()"
});
formatter.result({
  "duration": 3254236104,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.Login_button_should_be_disabled()"
});
formatter.result({
  "duration": 40064569,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:48)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:20)\r\n\tat junit.framework.Assert.assertFalse(Assert.java:34)\r\n\tat junit.framework.Assert.assertFalse(Assert.java:41)\r\n\tat pepinazo.StepDefs.Login_button_should_be_disabled(StepDefs.java:62)\r\n\tat ✽.Then Login button should be disabled(pepinazo\\FacebookLogin.feature:18)\r\n",
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
  "duration": 20198,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.I_open_Facebook_website()"
});
formatter.result({
  "duration": 1920314895,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.I_click_the_login_button()"
});
formatter.result({
  "duration": 1306679726,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.Facebook_asks_me_to_enter_credentials()"
});
formatter.result({
  "duration": 88449701,
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
  "name": "I can see Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.I_have_open_the_browser()"
});
formatter.result({
  "duration": 23404,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.I_open_Facebook_website()"
});
formatter.result({
  "duration": 3250666850,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.I_login_using_cell_phone_number()"
});
formatter.result({
  "duration": 4392600204,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.I_can_see_Home_Page()"
});
formatter.result({
  "duration": 60717378,
  "status": "passed"
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
  "line": 13,
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
  "line": 7,
  "name": "I open Facebook website",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I login with omar.selenium.abril@gmail.com and Test@1234",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I can see Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.I_have_open_the_browser()"
});
formatter.result({
  "duration": 3363106,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.I_open_Facebook_website()"
});
formatter.result({
  "duration": 3261570497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "omar.selenium.abril@gmail.com",
      "offset": 13
    },
    {
      "val": "Test@1234",
      "offset": 47
    }
  ],
  "location": "StepDefs.I_login_with_user_and_pass(String,String)"
});
formatter.result({
  "duration": 3603763538,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.I_can_see_Home_Page()"
});
formatter.result({
  "duration": 76599319,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
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
  "line": 7,
  "name": "I open Facebook website",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I login with omar.selenium.abril@gmail.com and Test@1234",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I can see Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.I_have_open_the_browser()"
});
formatter.result({
  "duration": 22762,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.I_open_Facebook_website()"
});
formatter.result({
  "duration": 3481113383,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "omar.selenium.abril@gmail.com",
      "offset": 13
    },
    {
      "val": "Test@1234",
      "offset": 47
    }
  ],
  "location": "StepDefs.I_login_with_user_and_pass(String,String)"
});
formatter.result({
  "duration": 4467373699,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.I_can_see_Home_Page()"
});
formatter.result({
  "duration": 97923787,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
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
  "line": 7,
  "name": "I open Facebook website",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I login with omar.selenium.abril@gmail.com and Test@1234",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I can see Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.I_have_open_the_browser()"
});
formatter.result({
  "duration": 25649,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.I_open_Facebook_website()"
});
formatter.result({
  "duration": 3356618171,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "omar.selenium.abril@gmail.com",
      "offset": 13
    },
    {
      "val": "Test@1234",
      "offset": 47
    }
  ],
  "location": "StepDefs.I_login_with_user_and_pass(String,String)"
});
formatter.result({
  "duration": 3954682381,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.I_can_see_Home_Page()"
});
formatter.result({
  "duration": 161464699,
  "status": "passed"
});
});