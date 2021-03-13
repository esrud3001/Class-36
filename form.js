class Form{

    constructor(){
        this.title=createElement("h1");
        this.buttonPlay = createButton("play");
        this.greeting = createElement("h2");
        this.inputbox=createInput("enter name");
       
    }

    display(){
     
        this.title.html("Car Racing Game");
        this.title.position(130,10);

        //inputbox to accept name from the player
    
        this.inputbox.position(130,160);

        //button to press
        this.buttonPlay.position(130,180);

        // greeting greetings
      
       this.greeting.position(130,220);

        //arrow function
        this.buttonPlay.mousePressed(()=>{
            //take the name given by the player and assign to variable
            //name.
            player.name=this.inputbox.value();

            //increase the playercoutn variable
            playerCount=playerCount+1;
            
            //increase the playerCount node in database
           
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.inputbox.hide();
            this.buttonPlay.hide();

            this.greeting.html("Hello "+player.name+" , please wait until game starts");

        });
        }
        hideAll(){
            this.inputbox.hide();
            this.buttonPlay.hide();
            this.greeting.hide();
                }              
}

