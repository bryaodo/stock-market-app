# stock-market-app

## Overview
This project is a basic webpage that allows users to search for stock information using a simple front-end interface hosted locally. Complete with recommendation and contact pages, it provides a great basis for users to use directly or customize and make their own. Below contains installation and usage instructions for the project. 

## Prerequisites
- A terminal/code editor (I prefer to use an IDE like [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial)
- An email address for API signup

# Installation
## Source Code
First, you’ll want to obtain the source code that runs the project, which can be found [here](https://github.com/bryaodo/stock-market-app).  Click on the green dropdown and you’ll be presented with options for how to clone the repository and get the code to your machine.

![image](https://user-images.githubusercontent.com/128628571/231878149-fd5e00f3-4c73-41a9-94d8-2821bd16427c.png)

If you aren't as familiar with setting up a GitHub repository, feel free to download this as a ZIP and open it inside of your preferred code editor.

## Installing dependencies
Next, we need to install any dependencies or libraries our source code might need in order to run our application. 

In your chosen terminal, navigate to the project folder titled `stock-app` using the `cd` command. It should look something like this: 

![image](https://user-images.githubusercontent.com/128628571/231884628-e8031c1d-697d-45e6-9459-6178225f084c.png)

After you are in the directory that contains the package.json file, run the command `npm install` on the command line. This will install all required dependencies for running the project.

## API Keys
The last thing you will need in order to get the application running is an API key. You’ll need to get an api key from [Polygon.io](https://polygon.io/) and change the current API key placeholder in the code in order to get the application running. 

First, go to [Polygon.io](https://polygon.io/) and create a new account to get an API key:

![image](https://user-images.githubusercontent.com/128628571/231878444-429e2709-5580-4098-8ae5-eb532d43a5e8.png)

Then, use the left-hand navigation bar to navigate to the api key section:

![image](https://user-images.githubusercontent.com/128628571/231878488-92c48e4c-dfa5-4aa7-872d-ae15cba2b9ff.png)

From here, click “Add API key” and a key will populate:

![image](https://user-images.githubusercontent.com/128628571/231878556-f89ff95f-25da-4752-99fb-0b1e444f82bb.png)

Use the copy button to copy the key, and navigate back to your chosen code editor. Open the file `stocks.js` which is located in the `src` folder, and find the bracketed areas on line 6 and 30 and replace them with your api key.

![image](https://user-images.githubusercontent.com/128628571/231885234-8e407273-0e11-40ed-a225-7b9409453407.png)

After you've saved the files`stocks.js`, you are now finished with setting up the application!

# Starting the Page
## Running The Application
To start the application, head back to the command line and navigate to the stock-app folder. Run the command `node ./src/app.js` and press enter. If the app runs successfully, you should see a message like the one below: 

![image](https://user-images.githubusercontent.com/128628571/231885906-4757c24a-9523-4aaf-9d3a-bc6cff3472f9.png)

If there is an error, it is possible you have another application running on port 3002, which means you either need to close the existing application that is currently running on port 3002.

### Director's commentary - this code was written before I learned about process.env variables or customization, so changing the port is not reflected in this project

## Accessing the application
To access the application, ensure that you’ve received the message “server is up on port 3002” and keep the terminal window open. Then, navigate to your web browser of choice and type in http://localhost:3002/. You should see the main page of the stock window, like so:

![image](https://user-images.githubusercontent.com/128628571/231878816-8bc3beb1-aa5f-4c09-8717-92651bc95e6c.png)

You’re now ready to start using the stock market application!

# Features
## Stocks Page
This is the main feature of the application, which allows you to search for any stock you would like using the ticker. You can enter the ticker in the search box and press search to get information about the stock. The search function is not case sensitive, so feel free to enter the ticker in upper case or lower case.

![image](https://user-images.githubusercontent.com/128628571/231878878-80d00f64-47e1-4417-8294-440d8567d717.png)

The application will then give you information about the closing price of the stock and company information, including headquarters address.

## Recommendations Page
From the main page, you can use the tabs located below the title named “Our recommendations” in order to access this page. You can also access the page [here](http://localhost:3002/recommendations)

![image](https://user-images.githubusercontent.com/128628571/231878988-a75fdcc1-0a9e-40b0-bfd7-fbd9a57f9d25.png)


#notFinancialAdvice

This shows the stock developer’s stock pick and why they picked it. 

## Contact Us Page

If you’d like to leave some feedback about the application, or the developer’s stock recommendations, navigate to the [Contact Us page](http://localhost:3002/contact) to get detailed contact information about the developer!

![image](https://user-images.githubusercontent.com/128628571/231881553-1b09b258-5584-4467-bc9d-e0188f5eafb3.png)

And, if you aren't a computer, be sure to hit the button below the binary to translate the text into English!

 ![image](https://user-images.githubusercontent.com/128628571/231881739-3f5e3354-aeb1-443c-98c1-01eeb5b3ba0d.png)

# Closing the program
If you want to close the program, navigate back to your terminal window and type in `ctrl + C` to end the program. 

![image](https://user-images.githubusercontent.com/128628571/231886674-8e7097e9-bd1d-4d37-83f6-c6af91c19e57.png)

Before `ctrl + C`

![image](https://user-images.githubusercontent.com/128628571/231886716-57ddaefa-d5fa-4a59-b94d-495701f13a82.png)

After `ctrl + C`
 

You should see the your directory path returns, and upon refreshing the webpage in your browser, you will get an error saying that the web page cannot be reached (the error displayed will browser dependent).

![image](https://user-images.githubusercontent.com/128628571/231879144-4aab17e0-a2c2-4b06-85de-2e3cc25b9f2d.png)

This means that the program is no longer using a port on your computer and you are free to close any terminal or browser windows.

# Support
If you have any questions, comments, or feedback on the application, please reach out via email at (bryan.odonoghue@cdw.com).
