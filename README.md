## nickstew.github.io

**Demo:** http://nickstew.github.io/

Professional website using React, JSON Resume and the wonderful responsive template project
[Developer-Theme](https://github.com/xriley/Developer-Theme) by [Xiaoying Riley](https://github.com/xriley).

## Development Dependencies

- [node.js](https://nodejs.org/)

## Development

Make sure you're working off of the development branch if you're setting this up like I have for my github profile.
Github Pages is setup so that if this repo is named `<your_username>.github.io` it will use whatever is on your 
`master` branch as the content for that domain.  Which is why I never manually commit to the `master` branch.
I either use Travis CI to deploy to do it manually with `npm run deploy`.

### Install Dependencies

`npm install`

### Run Locally

`npm run start`

### Deploying to Github Pages (Option 1: Manual)

`npm run deploy`

*If this doesn't work and you get an authentication error from Github then you have 2 possible solutions:

    1. Install a Git Credential Store and attempt to push a change `git commit -m "testing" && git push"
        - If there is a popup window where you need to authenticate, then it will save some key to your machine to allow all further commands to work.
    2. 
        - Setup SSH Key for your machine -> [Github Docs](https://help.github.com/articles/connecting-to-github-with-ssh/)
        - Change remote origin url in this file `.git/config` to be in this format `git@github.com:<username>/<username>.github.io` or the ssh url for your repo
 
 ### Deploying to Github Pages (Option 2: Travis CI)
 
 In an effort to make this project more accessible to everyone I added the config for Travis CI to this project, but 
 Travis CI requires you to do a small bit of work.
 
 You need to go add a <b>PRIVATE</b> Environment Variable for Travis CI to do the same manual deploy (above) for you.
 Follow these [directions](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) to
 generate the token. Then add a <b>PRIVATE</b> Variable in Travis for that repo called `GITHUB_TOKEN` with the token as
 the value.
 Every time you push changes, Travis will take care of the deployment.  Thanks Travis!
 
#### Notes

If you run into anything strange and have done at least a google search on it, <b>please</b> let me know.

I built this project to showcase my skills and want it to help others do the same. :heart:

Happy Coding!
 
## Credits

I couldn't have built this project without the help of this awesome open source community, I've grown up in.

I love you all.

You give me hope, when mine's all used up.

- [Bootstrap](http://getbootstrap.com/)
- [FontAwesome](http://fortawesome.github.io/Font-Awesome/)
- [jQuery](http://jquery.com/)
- [GitHub Activity Stream](http://caseyscarborough.com/projects/github-activity/)
- [GitHub Calendar Plugin](https://github.com/IonicaBizau/github-calendar)
- [React](https://facebook.github.io/react/)
- [Create React App](https://github.com/facebookincubator/create-react-app)
- [JSON Resume](https://jsonresume.org)
- [Developer-Theme](https://github.com/xriley/Developer-Theme)
