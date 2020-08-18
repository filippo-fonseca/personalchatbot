var filippoInfo = {
    generalInfo : {
      firstName : "Filippo",
      lastName : "Fonseca",
      age : 14,
      bestFriend : "Mark Music",
    },
    sportsInfo : {
      favoriteTeam : "Golden State Warriors",
      favoriteSport : "Basketball",
      favoriteLeague : "NBA",
      favoritePlayer : "Stephen Curry",
    }
  }
  function personalChatbot(input) {

    input = document.getElementById("question").value;
      
    switch(input) {
        case "What's your name?":
          return document.getElementById("answer").innerHTML=filippoInfo.generalInfo.firstName; 
          break;
        case "What's your full name?":
          return filippoInfo.generalInfo.firstName + " " + filippoInfo.generalInfo.lastName;
          break;
        case "Who's your best friend?":
          return filippoInfo.generalInfo.bestFriend;
          break;
        case "How old are you?":
          return filippoInfo.generalInfo.age;
          break;
        case "What's your favorite team?":
          return filippoInfo.sportsInfo.favoriteTeam;
          break;
        case "What's your favorite sport?":
          return filippoInfo.sportsInfo.favoriteSport;
          break;
        case "What's your favorite league?":
          return filippoInfo.sportsInfo.favoriteLeague;
          break;
      }

  }
  
  
  