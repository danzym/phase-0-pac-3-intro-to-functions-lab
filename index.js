function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  return console.log(string.toUpperCase());
}

function logWhisper(string) {
  return console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()) {
    return console.log("I can't hear you!");
  } else if (string === string.toUpperCase()) {
    return console.log("YES INDEED!");
  } else if (string === "Let's have dinner together!") {
    return console.log("I would love to!");
  }
}
sayHiToHeadphonedRoommate("hi");
sayHiToHeadphonedRoommate("HI");
sayHiToHeadphonedRoommate("Let's have dinner together!");
