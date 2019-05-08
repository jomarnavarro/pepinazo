package pepinazo;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import cucumber.annotation.After;
import cucumber.annotation.Before;
import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;
import cucumber.runtime.PendingException;
import facebookPOM.pages.HomePage;
import facebookPOM.pages.LoginPage;
import facebookPOM.pages.SearchResultsPage;
import junit.framework.Assert;

import static junit.framework.Assert.*;

public class StepDefs {

	public WebDriver driver;
	
	LoginPage login;
	HomePage home;
	SearchResultsPage results;
	
	@Before
	public void setUpTest() {
		ChromeOptions opt = new ChromeOptions();
		opt.addArguments("--disable-notifications");
		driver = new ChromeDriver(opt);
		login = new LoginPage(driver);
		home = new HomePage(driver);
		results = new SearchResultsPage(driver);
	}
	
	@After
	public void tearDownTest() {
		driver.quit();
		
	}

	@Given("^I have open the browser$")
	public void I_have_open_the_browser() {
		assertNotNull(driver);
	}

	@When("^I open Facebook website$")
	public void I_open_Facebook_website() {
		driver.get("https://facebook.com");
	}

	@Then("^Login button should exist$")
	public void Login_button_should_exist() {
		assertTrue(login.at());
	}

	@Then("^Login button should be disabled$")
	public void Login_button_should_be_disabled() {
		assertTrue(login.loginButtonDisabled());
	}

	@When("^I click the login button$")
	public void I_click_the_login_button() {
		login.clickLoginButton();
	}

	@Then("^Facebook asks me to enter credentials$")
	public void Facebook_asks_me_to_enter_credentials() {
		// Express the Regexp above with the code you wish you had
		System.out.println("");
	}

	@When("^I login using cell phone number$")
	public void I_login_using_cell_phone_number() {
		// Express the Regexp above with the code you wish you had
		System.out.println("");
	}

	@Then("^Facebook Home Page must appear$")
	public void Facebook_Home_Page_must_appear() {
		assertTrue(home.at());
	}

	@When("^I login with ([^\"]*) and ([^\"]*)$")
	public void I_login_with_user_and_pass(String username, String password) {
		login.login(username, password);
	}

	@Then("^I can see Home Page$")
	public void I_can_see_Home_Page() {
		assertTrue(home.at());
	}

}
