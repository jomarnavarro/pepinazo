package facebookPOM.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SearchResultsPage {
	
	WebElement peopleHeader;
	WebElement resultContainer;
	WebElement z;
	
	WebDriver driver;
	WebDriverWait wait;

	public SearchResultsPage(WebDriver testDriver) {
		driver = testDriver;
		wait = new WebDriverWait(driver, 15);
	}

	public SearchResultsPage() {
		// TODO Auto-generated constructor stub
	}

	public boolean at() {
		//existe el campo de busqueda? 
				//existe el boton de busqueda?
				//retorna verdadero.
				peopleHeader = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='BrowseResultsContainer']//*[text() = 'Personas']")));
				resultContainer = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[contains(@id, 'xt_uniq')]")));
				return peopleHeader.isDisplayed() && resultContainer.isDisplayed();
	}

	public boolean resultsContain(String friendName) {
		// TODO Auto-generated method stub
		return true;
	}

}
