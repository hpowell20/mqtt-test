import React, { Component } from 'react';
import './App.css';

import Amplify from 'aws-amplify';
import { AWSIoTProvider } from '@aws-amplify/pubsub/lib/Providers';

// Setup Amplift Credentials
Amplify.configure({
  Auth: {
    identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
    region: process.env.REACT_APP_REGION,
    userPoolId: process.env.REACT_APP_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_USER_POOL_WEB_CLIENT_ID
  }
});

// Setup the connection with AWS IoT
Amplify.addPluggable(new AWSIoTProvider({
  aws_pubsub_region: process.env.REACT_APP_REGION,
  aws_pubsub_endpoint: `wss://${process.env.REACT_APP_MQTT_ID}.iot.${process.env.REACT_APP_REGION}.amazonaws.com/mqtt`,
}));

// Subscribe to the MQTT topic
let topicName = process.env.REACT_APP_TOPIC_NAME;
Amplify.PubSub.subscribe(topicName).subscribe({
  next: data => {
    let timestamp = new Date(data.value.timestamp);
    console.log(Date.now() - timestamp);

  },
  error: error => console.error(error),
  close: () => console.log('Done'),
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IoT Data Test</h1>
        <p>Please open the console to see the topic output</p>
      </div>
    );
  }
}

export default App;
