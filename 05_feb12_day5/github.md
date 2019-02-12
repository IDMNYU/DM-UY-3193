### Some Resources

[Github Pages](https://pages.github.com/)

[Deploying to Github Pages Walkthrough](https://github.com/sarahrose26/Mashups/tree/master/05_Structuring_Your_App/Github_Pages)

[Github Collaboration Tutorial](https://www.udacity.com/course/github-collaboration--ud456)

[Github Collaboration Tips](https://code.tutsplus.com/tutorials/how-to-collaborate-on-github--net-34267)

### Basic Push to Github

The first time you are pushing to a repository:

1. git init *initializes a new repository*

2. git add *works one of two ways:*

  * git add . *adds the entire contents of the repository*
  
  * git add <file or folder name> *just adds what you have indicated*
  
3. git commit -m "commit message" *must include a commit message or you might end up in vim*

4. git remote add origin < origin url from github >
  
5. git push -u origin master


Every other time you push to that repository:

1. git add *either the entire contents or a specific folder or file name*

2. git commit -m "commit message" *must include a commit message or you might end up in vim*

3. git push

NOTE: If the contents of your repository have changed because a collaborator made changes, or perhaps you edited a file via Github's web interface, you will have to git pull to integrate those changes locally before you can push.