class Game{
    
    constructor(){}

    //to bring gameState from the database and put it in a variable
    getState(){
        var gameStateRef=database.ref('gameState');

        //anonymous function
        gameStateRef.on("value",function(data){
            gameState=data.val();
        });
    }

    
    //to change or update the gameState node in the database to 1 or 2.
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }

    //creates a new form to register the players when gameState is 0.
    start(){
        if (gameState==0){
            //allow player to register
            player=new Player();
            player.getCount();
            form=new Form();
            form.display();
        }
    }

    play(){
        form.hideAll();

        //this function will store all players info in the variable 'allPlayers'
        Player.getPlayerInfo();

        //undefined indicates no data in allPlayers
        if(allPlayers!=undefined){
               var display_position=130;
               //plr points to one player at a time.
               for (var plr in allPlayers){
                   display_position=display_position+20;
                   text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position);
               } 
        }

        //check if uparrow is pressed
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance=player.distance+50;
            player.update();
        }
    }
    
}

