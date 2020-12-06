# Djangulus

This is a very simple demonstration on how to use Django, SaaS, and Stimulus 2.0 bundled using webpack.

There are two controllers included to show how these controllers can be used as well.

### Frontend 
There is a frontend folder where all the FE development happens there. When the project is built, the static files will be copied to the static folder in the djangulus folder.


### How to use

```
# Install the packages
yarn install

# Run development mode. It watches for the changes
yarn start

```


You can import Saas files in app.scss to compose your styles. For javascript, simply define your controllers in controller folder and then use them in HTML. 

### Controller Namespaces
Stimulus supports namespacing as well. If you have a controller in `controllers/folder/some_controller.js` then your controller identifier would be `folder--some-controller`.
