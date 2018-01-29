## Device Buffet Lambda

AWS Lambda function for Device Buffet Alexa skill. Makes http requests to https://device-buffet.moonshot.cloud/ to control demo video.

### Notes
* `npm run deploy` zips the project and pushes it to Lambda. `aws` must be configured correctly for this to work.
* `/skill` contains skill information that should be updated via the [Alexa developer dashboard](https://developer.amazon.com/edw/home.html#/skills).
