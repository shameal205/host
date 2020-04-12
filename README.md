## React Site

For this repo, it is broken up into two halves: elyah and react express.


UI was developed on Reactjs. 
Backend was developed with VS code and MySQL paired together. 


There are a total of 3 pages.
There is a heard for easy access to the different pages.
First page is the "home page" where I added a sticky header and a large amount of text to show that I removed the scroll bar.
Second page is the "extra page" where I placed an interactive graph that changes appearance based on key events. Futher explaination will be on that page.
Third page is the "database page" where all the information stored inside mysql db is displayed. 


## reactexpress

The "reactexpress" folder is for communicating with a mysql database and this is the first package that should be run before executing the main package. If you don't mind not seeing a working 3rd page then skip over to "elyah" instructions.

To get started make sure the following is setup:

Assuming mysql is not already installed. Go to https://dev.mysql.com/downloads/mysql/.

1) Create a mysql server with your instance set to "localhost:3306".
2) Make sure your user credentials are both set to "admin".
(Note: look at elyah/reactexpress/server.js to verify what the setup should look like)
3) Once the setup is complete go to Server => Data Import => Select "expressCollection.sql" and "select tables" button.
4) Press "Start Import" and on the left hand side verify that "collection" schema and "data" table exist. They should be prepopulted for you.
5) Make sure you have npm/yarn installed. If so, then you should be able to install "nodemon".
6) Go into "elyah/reactexpress/".
7) Execute command "npm install -g nodemon" to install "nodemon". 
8) Execute "nodemon server.js" and you should now have the database setup.

## elyah

1) Assuming you already have npm installed just run the command "npm start" inside "elyah/elyah/" path.
