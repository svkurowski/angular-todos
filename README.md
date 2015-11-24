# angular-todos

This are the installation instructions as well as a description of the assignment tasks to the Angular 2 assignment of our group  "YuSaGoAnMa". Feel free to contact us, if you feels something is not right or you need some help.

# Installation

To get going with the assignment, you first need to install the package manager of [Node.js](https://nodejs.org/en/). Fortunately, there is [an installer](https://nodejs.org/en/download/ "Click here to download the Node.js installer) for your OS. You can also install node with your favorite package manager. If you run Linux and `apt-get` or Mac and `Homebrew` just enter the the correct command of the following two into your terminal
+ `sudo apt-get install node`
+ `brew install node`

After the installation you can check if everything went right by entering `node -v` into the terminal. You should see something like `v5.0.0`. If not, check if your PATH variable includes your node installation or repeat the steps above.

Download the assignment template from within the Shared Documents folder of the L2P. It is available in the folder “Final” within “YuSaGoAnMa”. You can also clone this repository, of course.

After downloading navigate to the folder `exercise.ang2/template` of this assignment template within your terminal. You can then install the missing dependencies by entering `npm install`. After the dependencies have been installed, you can finally start the application. This is done with the two following commands
+ `npm run tsc`
  + This starts the TypeScript to JavaScript compiler. The compiler registeres changes automatically.
+ `npm start`
  + This starts the static file server. After you apply changes to the code the server will automatically reload the correct browser page, no need to do it manually.

After you have entered these two commands a browser tab should open showing your basic application set up and as long as those two processes are running you can edit the code and will be able to see the changes immediately in your browser. 


# Assignment

Cookies! You love cookies! You know like ten thousand cookie recipes!!! Write an angular 2 app which enables you to save and list all your cookie recipes, so you will never again lose one of them! Cookies are great!!!

1. You should implement three components:
  + One component which can create cookie recipes
  + The second component can list all cookie recipes
  + Third component routes to the other two components
2. After that add a service which stores all your cookie recipes.
3. Now use the http module to populate the service with two or more sample cookies.
  + This can be done by storing these recipes in a JSON file within the root of the assignment folder.
  + You can then access the JSON through live-server by accessing it via its URL, e.g. “./cookies.json”.
  + Now get those cookies with the Angular http module!
  + Even though we have not shown this module in our presentation, we have added an example to this project to help you figure it out.
4. A cookie recipes should consist of several different attributes, e.g. name, difficulty, ingredients.

On the assignment sheet you can see how the app could look like in the end.

Have fun and good luck!
