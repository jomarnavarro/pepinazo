package facebookPOM.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginPage {

	@FindBy(how = How.ID_OR_NAME, using = "email")
	WebElement emailField;

	// By.name("pass")
	@FindBy(how = How.NAME, using = "pass")
	WebElement passwordField;

	// By.xpath("//*[@data-testid='royal_login_button']"
	@FindBy(how = How.XPATH, using = "//*[@data-testid='royal_login_button']")
	WebElement loginButton;

	// WebElements de createAccount
	WebElement nameNewAccount;
	WebElement lastnameNewAccount;
	WebElement emailNewAccount;
	WebElement pwdNewAccount;
	WebElement birthdayNewAccount;
	WebElement birthmonthNewAccount;
	WebElement birthyearNewAccount;
	WebElement birthdaySelect;
	WebElement birthmonthSelect;
	WebElement birthyearSelect;
	WebElement sexNewAccount;

	public WebDriver driver;
	public WebDriverWait wait;

	public LoginPage(WebDriver testDriver) {
		driver = testDriver;
		wait = new WebDriverWait(driver, 15);
		PageFactory.initElements(driver, this);
	}

	

	public boolean at() {
		// existe el campo de busqueda?
		// existe el boton de busqueda?
		// retorna verdadero.
		return emailField.isDisplayed() && passwordField.isDisplayed() && loginButton.isDisplayed();
	}

	public void login(String user, String password) {
		
		emailField.sendKeys(user);
		
		passwordField.sendKeys(password);
	
		loginButton.click();

	}

	public void createAccount(String name, String lastName, String email, String password, int birthDay,
			String birthMonth, int birthYear, String sex) {

		nameNewAccount = driver.findElement(By.xpath("//input[@name='firstname']"));
		nameNewAccount.sendKeys(name);
		lastnameNewAccount = driver.findElement(By.xpath("//input[@name='reg_email__']"));
		lastnameNewAccount.sendKeys(lastName);
		emailNewAccount = driver.findElement(By.xpath("//input[@name='lastname']"));
		emailNewAccount.sendKeys(email);
		pwdNewAccount = driver.findElement(By.xpath("//input[@name='reg_passwd__']"));
		pwdNewAccount.sendKeys(password);

		Select birthDaySelect = new Select(driver.findElement(By.id("day")));
		birthDaySelect.selectByVisibleText("12");
		birthdayNewAccount = driver.findElement(By.xpath("//select[@name='birthday_day']"));
		birthdayNewAccount.click();
		birthdaySelect = driver.findElement(By.xpath("//select[@name='birthday_day']/option[27]"));
		birthdaySelect.click();
		birthmonthNewAccount = driver.findElement(By.xpath("//select[@name='birthday_month']/option[05]"));
		birthmonthNewAccount.click();
		birthmonthSelect = driver.findElement(By.xpath("//select[@name='birthday_day']/option"));
		birthmonthSelect.click();
		birthyearNewAccount = driver.findElement(By.xpath("//select[@name='birthday_month']/option[05]"));
		birthyearNewAccount.click();
		birthyearNewAccount = driver.findElement(By.xpath("//select[@id='year']/option[30]"));
		sexNewAccount = driver.findElement(By.xpath("//input[@type='radio'][position()=1]"));

	}

	public void startRecentSession(String name) {

	}



	public boolean loginButtonDisabled() {
		return !loginButton.isEnabled();
	}



	public void clickLoginButton() {
		loginButton.click();
		
	}

	/*
	 * LoginPage:
	 * 
	 * WebElements: 1. emailField -&gt; name: �email� 2. passwordField -&gt; name:
	 * �pass� 3. loginButton -&gt; path:
	 * �//input[@data-testid=�royal_login_button�]�
	 * 
	 * Acciones, procesos de negocio: 1. login(user, password) 2.
	 * createAccount(name, lastName, email, password, birthDay, birthMonth,
	 * birthYear, sex) 3. startRecentSession(name)
	 * 
	 * 
	 * HomePage:
	 * 
	 * WebElements: 1. facebookLogo -&gt; //*[@data-click='bluebar_logo'] 2.
	 * searchField -&gt; name=&quot;q&quot; 3. searchButton -&gt;
	 * //*[@data-testid='facebar_search_button'] 4. profileLink -&gt; 5. startLink
	 * -&gt; 6. createLink -&gt;
	 * 
	 * Acciones, procesos de negocio:
	 * 
	 * buscarAmigo(nombreAmigo) publicarEstado(mensaje) likePhoto();
	 * commentPost(mensaje) compartirEstado(mensaje); compartirEstadoSinMensaje();
	 */

}
