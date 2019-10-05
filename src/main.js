import findPlayableFiles from "./findPlayableFiles";
import bonjour from "bonjour";
import play from "play-on-apple-tv";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "PLAY":
      console.log("Play operation recieved.");
      return ++state;
    case "PLAYING":
          console.log("Video now playing.");
          return ++state;
    default:
      console.error("Unknown action.");
      break;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));
store.dispatch({ type: "PLAY" });

const sendPlayRequestToDevice = (filepath, appleTvAddress, errorHandler) => {
  return play(filepath, appleTvAddress, errorHandler);
};

const createSendPlayRequestAction = (filepath, appleTvAddress) => {
  return dispatch =>
    sendPlayRequestToDevice(filepath, appleTvAddress, err => {
      if (err) {
        console.error(err);
      }

      return dispatch({ type: "PLAYING" });
    });
};

bonjour().find({ type: "airplay" }, service => {
  findPlayableFiles("/Users/spacekitcat/Movies").then(results => {
    const appleTvAddress = service.addresses[1];
    console.log("Found a service: ", appleTvAddress);
    store.dispatch(createSendPlayRequestAction(
      results[Math.floor((results.length - 1) * Math.random())],
      appleTvAddress
    ));
  });
});
