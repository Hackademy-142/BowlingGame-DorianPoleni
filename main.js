//Esercizio bowling replicato in classe

//Global Tag Declaration
const bowling = {
    //Current players
    "players" : [],
    
    //Set players score randomly
    "setScore" : function() {
        this.players.forEach( (nPlayer) => {
            for (let i = 0; i < 10; i++) {
                nPlayer.scores.push(random1_10());
            }
        }
        )
    },
    
    //Set player's total score
    "setTotalScore" : function() {
        this.players.forEach( (nPlayer) =>
        nPlayer.totalScore = nPlayer.scores.reduce( (acc,cur) => acc + cur , 0 )
        );  
    },
    
    //Declare games winner
    "declareWinner" : function(){
        let winnerScore = 0;
        let winnerName = "";
        this.players.forEach( (nPlayer) => {
            if (nPlayer.totalScore > winnerScore){
                winnerScore = nPlayer.totalScore;
                winnerName = nPlayer.name;
            }
        }
        )
        console.log(`The winner is: ${winnerName} with ${winnerScore} points.`)
    },
    
    //Create a new player (call it how many times how many players you have)
    "createNewPlayer": function(){
        let newPlayerName = prompt("insert new player name");
        this.players.push( {"name" : newPlayerName , "scores" : [] , "totalScore" : 0} )
    },
    
    //Create players ranking
    "ranking" : function() {         
        let rankedPlayers = this.players.map( (pl) => ({...pl}) ); 
        rankedPlayers.sort( (a , b) => b.totalScore - a.totalScore ); 
        
        console.log(this.players);
        
        for (let i = 0; i < rankedPlayers.length; i++) {
            console.log(`Position: ${i + 1} - Name: ${rankedPlayers[i].name} - Points: ${rankedPlayers[i].totalScore}`);    
        }
        
    }
    
    
} //bowling


//Main
bowling.createNewPlayer();
bowling.createNewPlayer();
bowling.createNewPlayer();

bowling.setScore();
bowling.setTotalScore();

bowling.declareWinner();

bowling.ranking();



//Functions
function random1_10() {
    return Math.round( Math.random() * (10 - 0) + 0 );
}

