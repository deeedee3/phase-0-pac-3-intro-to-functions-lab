function shout(string) {
    return string.toUpperCase(); // 'HELLO!'
  }
  function whisper(string) {
    return string.toLowerCase(); // 'hello!'
  }
  function logShout(string) {
    console.log('HELLO')
  }
  function logWhisper(string) {
    console.log('hello')
  }
  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()){
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
    console.log(sayHiToHeadphonedRoommate('hello'));
    console.log(sayHiToHeadphonedRoommate('HELLO'));
    console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));
  }