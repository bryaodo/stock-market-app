# stock-market-app
![image](https://user-images.githubusercontent.com/128628571/231853229-8bd39add-206a-467f-a2f1-7a8a52c4c88c.png)

# Installation
## Source Code
First, you’ll want to obtain the source code that runs the project, which can be found here.  Click on the green dropdown and you’ll be presented with options for how to clone the repository and get the code to your machine.

![image](https://user-images.githubusercontent.com/128628571/231878149-fd5e00f3-4c73-41a9-94d8-2821bd16427c.png)

If you aren't as familiar with setting up a GitHub repository, feel free to download this as a ZIP and open it inside of your preferred code editor.

## Installing dependencies
Next, we need to install any dependencies or libraries our source code might need in order to run our application. 

In your chosen terminal, navigate to the project folder titled `stock-app` using the `cd` command. It should look something like this: 

![image](https://user-images.githubusercontent.com/128628571/231878416-c2390195-f0c8-4ad2-9f46-0d2677556a22.png)

After you are in the directory that contains the package.json file, run the command npm install on the command line. This will install all required dependencies for running the project.

## API Keys
The last thing you will need in order to get the application running is an API key. You’ll need to get an api key from Polygon.io and change the current API key placeholder in the code in order to get the application running. 

First, go to Polygon.io and create a new account to get an API key:

![image](https://user-images.githubusercontent.com/128628571/231878444-429e2709-5580-4098-8ae5-eb532d43a5e8.png)

Then, use the left-hand navigation bar to navigate to the api key section:

![image](https://user-images.githubusercontent.com/128628571/231878488-92c48e4c-dfa5-4aa7-872d-ae15cba2b9ff.png)

From here, click “Add API key” and a key will populate:

![image](https://user-images.githubusercontent.com/128628571/231878556-f89ff95f-25da-4752-99fb-0b1e444f82bb.png)

Use the copy button to copy the key, and navigate back to your chosen code editor. Open the file `stocks.js` which is located in the `src` folder, and find the bracketed areas on line 6 and 20 and replace them with your api key.

![image](https://user-images.githubusercontent.com/128628571/231878601-fe240c04-70ea-45c9-9131-712626a6cb5a.png)

You are now finished with setting up the application!

# Starting the Page
## Running The Application
To start the application, head back to the command line and navigate to the stock-app folder. Run the command node ./src/app.js and press enter. If the app runs successfully, you should see a message like the one below: 

![image](https://user-images.githubusercontent.com/128628571/231878657-774f2c5b-03ec-4baf-9402-ce3438bc753b.png)

If there is an error, it is possible you have another application running on port 3002, which means you either need to close the existing application, or change the port number that the stock application runs on. 

To do this [insert guide here, I’d like to go back and change the app so that it uses process variables, making it so if a user needs to make a change they only have to do it in one, easy to reach spot. could do this for API key as well]

## Accessing the application
To access the application, ensure that you’ve received the message “server is up on port [port number]” and keep the terminal window open. Then, navigate to your web browser of choice and type in “http://localhost:3002/”, replacing the  “3002” with what ever port number is displayed in your terminal window. You should see the main page of the stock window, like so:

![image](https://user-images.githubusercontent.com/128628571/231878816-8bc3beb1-aa5f-4c09-8717-92651bc95e6c.png)

You’re now ready to start using the stock market application!

# Features
##Stocks Page
This is the main feature of the application, which allows you to search for any stock you would like using the ticker. You can enter the ticker in the search box and press search to get information about the stock. The search function is not case sensitive, so feel free to enter the ticker in upper case or lower case.

![image](https://user-images.githubusercontent.com/128628571/231878878-80d00f64-47e1-4417-8294-440d8567d717.png)

The application will then give you information about the closing price of the stock and company information, including headquarters address.

## Recommendations Page
From the main page, you can use the tabs located below the title named “Our recommendations” in order to access this page. You can also use this url to access the page: http://localhost:3002/recommendations

![image](https://user-images.githubusercontent.com/128628571/231878988-a75fdcc1-0a9e-40b0-bfd7-fbd9a57f9d25.png)

This shows the stock developer’s stock pick and why they picked it. 

## Contact Us Page
If you’d like to leave some feedback about the application, or the developer’s stock recommendations, navigate to the Contact Us page to get detailed contact information about the developer!


 

# Closing the program
If you want to close the program, navigate back to your terminal window and type in ctrl + C to end the program. 

![image](https://user-images.githubusercontent.com/128628571/231879075-b77356df-73b6-4560-841a-252a8cdfcaec.png)
Before `ctrl + C`

![image](https://user-images.githubusercontent.com/128628571/231879093-de4b9294-11ba-460c-8bf4-bec3fd98776f.png)
After `ctrl + C`
 

You should see the your directory path returns, and upon refreshing the webpage in your browser, you will get an error saying that the web page cannot be reached (browser dependent)

![image](https://user-images.githubusercontent.com/128628571/231879144-4aab17e0-a2c2-4b06-85de-2e3cc25b9f2d.png)

This means that the program is no longer using a port on your computer and you are free to close any terminal or browser windows.

# Support
If you have any questions, comments, or feedback on the program, please reach out via email at (bryan.odonoghue@cdw.com).
