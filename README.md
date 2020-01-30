# AWS IoT MQTT Test

Small React application for testing pub/sub functionality using an AWS IoT topic and AWS Amplify.  Bootstrapped using create-react-app.

## Build and run the application

1. Install the dependencies
```bash
npm install
```
2. Create a .env.local file with the IoT Topic and Cognito details
```bash
REACT_APP_IDENTITY_POOL_ID='<identity_pool_id>'
REACT_APP_REGION='<app_region>'
REACT_APP_USER_POOL_ID='<user_pool_id>'
REACT_APP_USER_POOL_WEB_CLIENT_ID='<user_pool_app_client_id>'
REACT_APP_MQTT_ID='<mqtt_id>'
REACT_APP_TOPIC_NAME='<mqtt_topic_name>'
```
3. Run the application
```bash
npm start
```
