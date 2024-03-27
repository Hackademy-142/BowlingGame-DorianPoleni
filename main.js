//Esercizio bowling replicato in classe

//Global Tag Declaration
btnAddPlayer = document.querySelector("#btnAddPlayer");
playerName = document.querySelector("#playerName");
startGame = document.querySelector("#startGame");
resetGame = document.querySelector("#resetGame");
tabPlayerscontainer = document.querySelector("#tabPlayerscontainer");




const bowling = {
    //Current players
    "players" : [],
    
    //Create New Player
    "createPlayer" : function(playerName) {
        let newPlayerName = playerName;
        this.players.push( {"name" : newPlayerName , "scores" : [] , "totalScore" : 0} );
        console.log(this.players);
    },

        //Create Table
    "createTable" : function() {
        this.players.forEach( (player,i) => {
            let playerRow = document.createElement("tr");

            tabPlayerscontainer.innerHTML = ""
            // tabPlayerscontainer.appendChild(playerRow);

            playerRow.innerHTML = `
            <th scope="row">${i + 1}</th>                            
            <td>${player.name}</td>                            
            <td>${player.scores[0] ? player.scores[0] : 0}</td>
            <td>${player.scores[1] ? player.scores[1] : 0}</td>
            <td>${player.scores[2] ? player.scores[2] : 0}</td>
            <td>${player.scores[3] ? player.scores[3] : 0}</td>
            <td>${player.scores[4] ? player.scores[4] : 0}</td>
            <td>${player.scores[5] ? player.scores[5] : 0}</td>
            <td>${player.scores[6] ? player.scores[6] : 0}</td>
            <td>${player.scores[7] ? player.scores[7] : 0}</td>
            <td>${player.scores[8] ? player.scores[8] : 0}</td>
            <td>${player.scores[9] ? player.scores[9] : 0}</td>
            <td>0</td>
            `
            tabPlayerscontainer.appendChild(playerRow);
            
        }    )
    },

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


//Main Program

//Add new player
btnAddPlayer.addEventListener("click", () => {

    bowling.createPlayer(playerName.value);
    playerName.value = "";
     
})

let roundCounter = 0;

//Play a round
startGame.addEventListener("click", () => {
    bowling.createTable();
    
    
    
    
    
    
    // bowling.players.forEach( (nPlayer) => {       
    //     if (roundCounter < 10){
    //         nPlayer.scores.push(random1_10()) ;
    //         let th = document.createElement("th");
    //         th.innerHTML = 
    //         `<td>${nPlayer.scores[roundCounter]}</td>`
    //         tabPlayerscontainer.appendChild(th);   
    //         roundCounter ++;
    //     }
        
    //     console.log(nPlayer);
    //     console.log(roundCounter);
        
    // }
    // )
})




//Reset Game
resetGame.addEventListener("click", () => {
    bowling.players = [];
    console.log(bowling.players);
})







bowling.setScore();
bowling.setTotalScore();

bowling.declareWinner();

bowling.ranking();



//Functions
function random1_10() {
    return Math.round( Math.random() * (10 - 0) + 0 );
}

