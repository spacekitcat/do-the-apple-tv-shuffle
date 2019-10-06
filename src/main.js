import findPlayableFiles from "./findPlayableFiles";
import bonjour from "bonjour";
import play from "play-on-apple-tv";
import randomWrapper from "./randomWrapper";

bonjour().find({ type: "airplay" }, service => {
  findPlayableFiles("/Users/spacekitcat/Movies").then(results => {
    const appleTvAddress = service.addresses[1];
    console.log("Found a service: ", appleTvAddress);
    const device = play(
      results[randomWrapper(0, results.length - 1)],
      appleTvAddress,
      err => {
        if (err) console.log(err);
      }
    );
    device.on("event", ev => {
      console.log(ev);
    });
  });
});
