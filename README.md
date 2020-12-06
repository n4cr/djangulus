# Djangulus

This is a very simple demonstration on how to use Django, Sass, and Stimulus 2.0 bundled using webpack. 

### How to use

```
# Install the packages
yarn install

# Run development mode. It watches for the changes
yarn start

```

You can import Sass files in app.scss to compose your styles. For javascript, simply define your controllers in controller folder and then use them in HTML. 

### Example controllers
There are examples included to show how Stimulus 2.0 values API is used to pass context variables in the templates to controllers:

```
<div data-controller="content-loader"
     data-content-loader-url-value="{% url 'other' %}">

    <div data-content-loader-target="container"></div>
</div>

```

Also an exmaple spinner controller is included and can be used whenever a loading spinner needed to be shown. In this example there is a button to toggle the spinner:

```
<div data-controller="spinner">
    <button data-action="click->spinner#toggle">Toggle Spinner</button>
    <div data-spinner-target="container"></div>
</div>

```

### Frontend 
There is a frontend folder where all the FE development happens there. When the project is built, the static files will be copied to the static folder in the djangulus folder.

### Controllers

1. **hello**: Sample empty controller, copy and reuse
1. **spinner**: a controller to use when you want to show a loading spinner
1. **content-loader**: Receives a url and loads the content in the `container` target when it is connected. In this project it loads the content from another view.

### Controller Namespaces
Stimulus supports namespacing as well. If you have a controller in `controllers/folder/some_controller.js` then your controller identifier would be `folder--some-controller`.

## Contribute
Please open an issue or submit a PR if there you find any issues or bugs.