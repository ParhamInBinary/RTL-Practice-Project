# Practice Project: Mark the Mocktail Enthusiast


**Description**

Mark is a mocktail enthusiast, and loves trying new recipes. He wants you to develop a sort of "todo-list" web app where he can keep track of mocktails he has tried and add new ones he would like to try in the future. He gives you the following specifications:  

* Upon loading, the site should have the header "Mark's To-drink list"
* Mocktails should be fetched from https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic.  
 Make sure the app fetches directly from this API. 
* Mark should be able to add new drinks to the list, via a search-bar.
    * The search bar should only accept valid drinks from the API.
* Mark should be able to mark drinks as complete.
    * Completed drinks are crossed over.
* Mark should be able to delete drinks from the list.
* Mark should be able to filter by all/non-completed/completed drinks.
* Mark should be able to clear all drinks via the click of one button.

Since Mark is very passionate about this new site, he wants to make sure your code is of good quality. Make sure to write sufficient tests for  every component. No E2E testsare required.  

Mark, as the good samaritan he is, also wants to make sure that the testing do not pull resources from the production API. Please use a tool like Mock Service Worker  (https://mswjs.io/).
