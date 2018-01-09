const Alexa = require('alexa-sdk');
const fetch = require('node-fetch');

const baseUrl = 'https://device-buffet.moonshot.cloud/video/';
const playPath = baseUrl + 'play';
const pausePath = baseUrl + 'pause';
const stopPath = baseUrl + 'stop';
console.log(playPath, pausePath, stopPath);

const handlers = {
  LaunchRequest: function() {
    this.emit(
      ':ask',
      'Look up on the TV in front of you and then tell me to play the video'
    );
  },

  Unhandled: function() {
    this.response.speak(`I'm sorry, I don't know how to handle that.`);
    this.emit(':responseReady');
  },

  StartDemoVideoIntent: function() {
    fetch(playPath)
      .then(res => {
        console.log(res);
        this.response.speak(`Playing video.`);
        this.emit(':responseReady');
      })
      .catch(e => {
        console.log(e);
        this.response.speak(
          `Unfortunately, something went wrong. Try again later.`
        );
        this.emit(':responseReady');
      });
  },

  'AMAZON.PauseIntent': function() {
    fetch(pausePath)
      .then(res => {
        console.log(res);
        this.response.speak(`Pausing video.`);
        this.emit(':responseReady');
      })
      .catch(e => {
        console.log(e);
        this.response.speak(
          `Unfortunately, something went wrong. Try again later.`
        );
        this.emit(':responseReady');
      });
  },

  'AMAZON.ResumeIntent': function() {
    fetch(playPath)
      .then(res => {
        console.log(res);
        this.response.speak(`Resuming video.`);
        this.emit(':responseReady');
      })
      .catch(e => {
        console.log(e);
        this.response.speak(
          `Unfortunately, something went wrong. Try again later.`
        );
        this.emit(':responseReady');
      });
  },

  'AMAZON.StartOverIntent': function() {
    fetch(stopPath)
      .then(res => {
        return fetch(playPath);
      })
      .then(res => {
        console.log(res);
        this.response.speak(`Restarting video.`);
        this.emit(':responseReady');
      })
      .catch(e => {
        console.log(e);
        this.response.speak(
          `Unfortunately, something went wrong. Try again later.`
        );
        this.emit(':responseReady');
      });
  },

  'AMAZON.StopIntent': function() {
    fetch(stopPath)
      .then(res => {
        console.log(res);
        this.response.speak(`Stopping video.`);
        this.emit(':responseReady');
      })
      .catch(e => {
        console.log(e);
        this.response.speak(
          `Unfortunately, something went wrong. Try again later.`
        );
        this.emit(':responseReady');
      });
  }
};

exports.handler = function(event, context, callback) {
  const alexa = Alexa.handler(event, context, callback);
  alexa.registerHandlers(handlers);
  alexa.execute();
};
