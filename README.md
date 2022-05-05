# Web Application Development 2
 Coursework2

This repository contains the source code for Web Development Application 2

## Developer

|Name|SMN|Email|
|---|---|---|
|Anthony To|S1823998|[ato204@caledonian.ac.uk](mailto:ato204@caledonian.ac.uk)|


## How to Run the Application
To execute the Express development server:

1. Create an `.env` file in the project directory and add your variable for the applicable

```
SECRET=<YOUR_SECRET_KEY>
```

2. Run the application using one of the following 2 methods

```
node index.js
```

or if you have install nodemon (**Highly recommended** - `npm install --save nodemon`)

```
nodemon index.js
```

3. To Access Staff Login use the following details
```
Shanty(Username) / Shack(Password)
```

The development server has been hardcoded to run on port `3000` and can be accessed in the browser
at [localhost:3000](http://localhost:3000).


## Features

### Main Site
-------------

Home
 - The landing page of the website
 - Staff Login Button
 - Navigation bar
 - 
Menu
 - Dish names & prices
 - Name,
 - Price,
 - Description,
 - Ingredients,
 - Allergens

Contact
- Contact form tomake reviews or questions
- Contact details;
 - Firstname,
 - Lastname,
 - Email,
 - Review

### Staff Interface
-------------
Dashboard
 - Admin Dashboard Hero Interface

Register
 - Admin account creation

Menu
 - N/A

Logout
 - Returns to main site
