>> run these in the terminal
npm install -g @aws-amplify/cli
amplify configure

- just hit enter, choose us-east-1 or whatever, click next until you see "Success" in the browser
- press enter till you see "Enter the access key..." in the terminal
- copy/paste credentials from browser to terminal 
- hit enter in terminal


>> created project using expo, "blank", default as heck


>> run "amplify init" in the terminal
- use whatever as the environment name
- choose javascript when prompted with "What type of project are you developing"
- react native
- other than that, just press enter and use default values

- Say "Y" when you want to use an AWS profile
- click the "Default" that you just made (or whatever profile you created)
- after the terminal does everything, type "amplify status" to verify that it worked!

>>> Congrats, you've created your backend


>> In the terminal
- Run "amplify add api"
- Enter, enter
- Choose "API Key"
- just accept the defaults

- no you don't have an annotated graphql thing
- YES you want a guided schema! Why not?
- choose one to many relationship because were not making a todo list lol
- it's gonna open your text editor
- edit your schema!

- run "amplify push"
- just hit enter. if you messed up youll have to edit your schema. just keep trying until you get through it
- enter, enter, etc..
- you should end up with a graphql endpoint and api key. Save both of these somewhere secure

>>> Congrats! You added an API and database 

>> Now lets get your app hooked up to this thing

- so "amplify push" should have generated a bunch of files for you in `src/graphql`. we're gonna use those


