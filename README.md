# authenticationSecurity
A website which shows secrets of a community only when a user is registered with the website(community).
(This website has a backend so the data doesnot get lost when refreshing websites or servers.)

## Technologies
* Javascript
  - ejs
* Node.js
  - Express.js
* MongoDB
  - Mongoose

## How to use
To clone and run this application, you'll need Git, Node.js (which comes with npm) and MongoDB installed on your computer. 
Start your mongoDB process on some terminal preferably Hyper.

If you do not have mongodb, you can get it from [https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/)

From your command line:
```bash
# Clone this repository
git clone https://github.com/HimanthReddyGurram/authenticationSecurity.git

# Go into the repository
$ cd authenticationSecurity.git

# Install dependencies
npm install

#Run the app
nodemon app.js
```
The output will be "Server started on port 4000"

## User Interface
* You can now navigate to home page where you can see an option to login or register, you can login into the website to see the community secrets.
* If you donot login with correct mail or password it will be showed accordingly and you will not be logged in.
* You have an option to add your secret and it stays anonyomous.
