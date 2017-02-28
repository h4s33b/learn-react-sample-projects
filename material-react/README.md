In this Example I have used Material UI with react.

<b>Steps to include it in your project is</b><br />
- npm install material-ui react-tap-event-plugin --save
- Material-UI components require a theme to be provided. The quickest way to get up and running is by using the MuiThemeProvider to inject the theme into your application context.
- In your App.js(root js file) 
```
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
```
- In Your Root Component Wrap it in
```
<MuiThemeProvider>
  <YOURCHILDCOMPONENT />
</MuiThemeProvider>
```
- For using any material component you have to import that in your component by
```
import RaisedButton from 'material-ui/RaisedButton';
```
- Now you can use this as
```
<RaisedButton label="Default" />
```

You can view the complete details of Material-UI from https://github.com/callemall/material-ui