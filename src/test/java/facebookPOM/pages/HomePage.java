package facebookPOM.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HomePage {

	@FindBy(how = How.XPATH, using = "//h1[@data-click='bluebar_logo']")
	WebElement facebookLogo;
	//name = "q"
	@FindBy(how = How.NAME, using = "q" )
	WebElement searchField;

	@FindBy (how = How.XPATH, using = "//button[@data-testid='facebar_search_button']")
	WebElement searchButton;

	public WebDriver driver;
	public WebDriverWait wait;

	public HomePage(WebDriver testDriver) {
		driver = testDriver;
		wait = new WebDriverWait(driver, 15);
		PageFactory.initElements(driver, this);
	}

	public boolean at() {
		//existe el campo de busqueda?
		//existe el boton de busqueda?
		//retorna verdadero.
		//wait.until(ExpectedConditions)
		return searchField.isDisplayed() && searchButton.isDisplayed();
	}

	public void buscarAmigo(String nombreAmigo) {
		searchField.sendKeys(nombreAmigo);
		searchButton.click();
	}
	public void publicarEstado(String mensaje) {

	}
	public void likePhoto() {

	}
	public void commentPost(String mensaje) {

	}
	public void compartirEstado(String mensaje) {

	}
	public void compartirEstadoSinMensaje() {

	}

}
