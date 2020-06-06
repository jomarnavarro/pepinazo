package pepinazo;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;


import static junit.framework.Assert.*;

import java.util.concurrent.TimeUnit;

public class StepDefs {

	public WebDriver driver;

	@Before
	public void setUpTest() {
		ChromeOptions opt = new ChromeOptions();
		opt.addArguments("--disable-notifications");
		driver = new ChromeDriver(opt);
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	}

	@After
	public void tearDownTest() {
		driver.quit();
	}

	@Given("I have open the browser")
	public void I_have_open_the_browser() {
		assertNotNull(driver);
	}

	@When("I open Facebook website")
	public void I_open_Facebook_website() {
		driver.get("https://facebook.com");
	}

	@Then("Login button should exist")
	public void Login_button_should_exist() {
		String loginButtonXpath = "//input[@data-testid='royal_login_button']";
		WebElement loginButton = driver.findElement(By.xpath(loginButtonXpath));
		assertTrue(loginButton.isDisplayed());
	}

	@Then("Login button should be disabled")
	public void Login_button_should_be_disabled() {
		String loginButtonXpath = "//input[@data-testid='royal_login_button']";
		WebElement loginButton = driver.findElement(By.xpath(loginButtonXpath));
		assertFalse(loginButton.isEnabled());
	}

	@When("I click the login button")
	public void I_click_the_login_button() {
		String loginButtonXpath = "//input[@data-testid='royal_login_button']";
		WebElement loginButton = driver.findElement(By.xpath(loginButtonXpath));
		loginButton.click();
	}

	@Then("Facebook asks me to enter credentials")
	public void Facebook_asks_me_to_enter_credentials() {
		WebElement emailField = driver.findElement(By.id("email"));
		WebElement passField = driver.findElement(By.id("pass"));
		assertTrue(emailField.isDisplayed() && passField.isDisplayed());

	}

	@When("I login using cell phone number")
	public void I_login_using_cell_phone_number() {
		WebElement emailField = driver.findElement(By.id("email"));
		WebElement passField = driver.findElement(By.id("pass"));
		String loginButtonXpath = "//input[@data-testid='royal_login_button']";
		WebElement loginButton = driver.findElement(By.xpath(loginButtonXpath));

		emailField.sendKeys("omar.selenium.abril@gmail.com");

		passField.sendKeys("Test@1234");


		loginButton.click();
	}

	@Then("Facebook Home Page must appear")
	public void Facebook_Home_Page_must_appear() {
		WebElement facebookLogo = driver.findElement(By.cssSelector("[data-click='bluebar_logo']"));
		WebElement searchBox = driver.findElement(By.name("q"));
		assertTrue(facebookLogo.isDisplayed() && searchBox.isDisplayed());
	}

	@When("I login with {word} and {word}")
	public void I_login_with_user_and_pass(String username, String password) {
		WebElement emailField = driver.findElement(By.id("email"));
		WebElement passField = driver.findElement(By.id("pass"));
		String loginButtonXpath = "//input[@data-testid='royal_login_button']";
		WebElement loginButton = driver.findElement(By.xpath(loginButtonXpath));

		emailField.sendKeys(username);

		passField.sendKeys(password);

		loginButton.click();

	}

	@Then("I can see Home Page")
	public void I_can_see_Home_Page() {
		WebElement facebookLogo = driver.findElement(By.cssSelector("[data-click='bluebar_logo']"));
		WebElement searchBox = driver.findElement(By.name("q"));
		assertTrue(facebookLogo.isDisplayed() && searchBox.isDisplayed());
	}
}
