// *** Esercizio bowling replicato in classe ***

// *** Global Tag Declaration ***
btnAddPlayer = document.querySelector("#btnAddPlayer");
playerName = document.querySelector("#playerName");
btnStartGame = document.querySelector("#btnStartGame");
btnPlayRound = document.querySelector("#btnPlayRound");
btnResetGame = document.querySelector("#btnResetGame");
tabPlayerscontainer = document.querySelector("#tabPlayerscontainer");
winnerPlayer = document.querySelector("#winnerPlayer");

let gameFinished = false;



const bowling = {
    //Current players
    "players" : [],
    
    //Create New Player
    "createPlayer" : function(playerName) {
        // let newPlayerName = playerName;
        this.players.push( {"name" : playerName , "scores" : [] , "totalScore" : 0} );
        this.createTable();
        console.log(this.players);
    },
    
    //Create Table
    "createTable" : function() {
        tabPlayerscontainer.innerHTML = "";
        
        this.players.forEach( (player,i) => {
            let playerRow = document.createElement("tr");
            
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
            <td>${player.totalScore}</td>
            `
            tabPlayerscontainer.appendChild(playerRow);
            
        }    )
    },
    
    //Set players score randomly
    "playRound" : function() {
        this.players.forEach( (nPlayer) => {
            if (nPlayer.scores.length < 10){
                let playerScoreTemp = random1_10();
                nPlayer.scores.push(playerScoreTemp);
                console.log(playerScoreTemp);
                this.setTotalScore();
                this.createTable();
                if (playerScoreTemp == 10){
                    let strike = true;
                    console.log(`player ${nPlayer.name} striked.`);
                }
            }
         
            if ((nPlayer.scores.length == 10) && (gameFinished == false)){
                this.declareWinner();
                gameFinished = true;
            }
            
        }
        )
    },
    
    "startGame" : function() {
        btnAddPlayer.classList.add("d-none");
        btnPlayRound.classList.remove("d-none");
        btnStartGame.classList.add("d-none");
    },
    
    "resetGame" : function() {
        this.players = [];
        btnAddPlayer.classList.remove("d-none");
        this.createTable(); 
        btnStartGame.classList.remove("d-none");
        btnPlayRound.classList.add("d-none");
        gameFinished = false;
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
        
        console.log(`The winner is: ${winnerName} with ${winnerScore} points.`);
        let wp = document.createElement("div");
        wp.innerHTML = `${winnerName}`;
        winnerPlayer.appendChild(wp);
        
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


// *** Main Program ***

//Add new player
btnAddPlayer.addEventListener("click", ()=> {
    bowling.createPlayer(playerName.value);
    playerName.value = "";
});

// });

//Start Game
btnStartGame.addEventListener("click", () => {
    bowling.startGame();
})

//Play a round
let roundCounter = 0;
btnPlayRound.addEventListener("click", () => {
    bowling.playRound();
    // bowling.setTotalScore();
    bowling.startGame();
})

//Reset Game
btnResetGame.addEventListener("click", () => {
    bowling.resetGame();
    console.log(bowling.players);
})


// *** Functions ***
function random1_10() {
    return Math.round( Math.random() * (10 - 0) + 0 );
}

