import React, {Component} from 'react';

export default class Html extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {env} = this.props;
    let stateJSON = JSON.stringify(env).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');
    stateJSON = "window.__INITIAL_STATE__ = "+stateJSON;
    return (
      <html>
        <head>
          <title>MERN website</title>
          <link rel='stylesheet' type='text/css' href='../public/css/plugin/bootstrap.min.css' />
          <link rel='stylesheet' type='text/css' href='public/css/font-awesome/css/font-awesome.css' />
        </head>
        <body>
          <h1>{props.env}</h1>
          <div id='mount'/>
          <script type="text/javascript" src="http://localhost:3008/client.js"></script>
          <script>
            {stateJSON}
          </script>
        </body>
      </html>
    );
  }
}
