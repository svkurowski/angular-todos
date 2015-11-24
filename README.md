# angular-todos

This are the installation instructions as well as a description of the assignment tasks to the Angular 2 assignment of our group  "YuSaGoAnMa". Feel free to contact us, if you feels something is not right or you need some help.

# Installation

To get going with the assignment, you first need to install the package manager of [Node.js](https://nodejs.org/en/). Fortunately, there is [an installer](https://nodejs.org/en/download/ "Click here to download the Node.js installer) for your OS. You can also install node with your favorite package manager. If you run Linux and `apt-get` or Mac and `Homebrew` just enter the the correct command of the following two into your terminal
+ `sudo apt-get install node`
+ `brew install node`

After the installation you can check if everything went right by entering `node -v` into the terminal. You should see something like `v5.0.0`. If not, check if your PATH variable includes your node installation or repeat the steps above.

Download the assignment template from within the Shared Documents folder of the L2P. It is available in the folder “Final” within “YuSaGoAnMa”. You can also clone this repository, of course.

# Assignment

After downloading navigate to the folder `exercise.ang2/template` of this assignment template within your terminal. You can then install the missing dependencies by entering `npm install`. After the dependencies have been installed, you can finally start the application. This is done with the two following commands
+ `npm run tsc`
  + This starts the TypeScript to JavaScript compiler. The compiler registeres changes automatically.
+ `npm start`
  + This starts the static file server. After you apply changes to the code the server will automatically reload the correct browser page, no need to do it manually.

As long as those two processes are running you can edit the code and will be able to see the changes immediately in your browser. 

After you have entered these two commands a browser tab should open showing your basic application set up.

Have fun and good luck!


