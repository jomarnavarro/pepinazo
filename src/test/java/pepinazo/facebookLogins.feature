Feature: Facebook Login Parameters 

Scenario Outline:
User Can log into Facebook with Username and Password Combination 

	Given I have open the browser 
	
	When I open Facebook website 
	
	And I login with <username> and <password> 
	
	Then I can see Home Page 
	
	Examples: 
	
		| username 		| password 	|
		| 5579021004	| navi1334 	|
		| 5579021004	| navi1334 	|
		| 5579021004	| navi1334 	|