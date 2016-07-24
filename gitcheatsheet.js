//configuring git
$ git config --global user.name "My Name"
$ git config --global user.email myEmail@example.com

//creating a new repository
$ cd Desktop/git_exercise/
$ git init

//respond 
Initialized empty Git repository in /home/user/Desktop/git_exercise/.git/

//checking the status
$ git status

On branch master

Initial commit

Untracked files:
  (use "git add ..." to include in what will be committed)

	hello.txt

//adding file
$ git add hello.txt

//adding everything
$ git add -A

//checking the status again
$ git status

On branch master

Initial commit

Changes to be committed:
  (use "git rm --cached ..." to unstage)

	new file:   hello.txt

//commiting git
$ git commit -m "Initial commit."
//At this point the file is in  local repository

//conneting to a remote repository
//Replace the URI with your own repository address.
$ git remote add origin https://github.com/tutorialzine/awesome-project.git

//uploading to a server- git push
$ git push origin master

Counting objects: 3, done.
Writing objects: 100% (3/3), 212 bytes | 0 bytes/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/tutorialzine/awesome-project.git
 * [new branch]      master -> master

 //cloning a repository
 $ git clone https://github.com/tutorialzine/awesome-project.git