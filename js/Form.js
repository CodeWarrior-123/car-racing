class Form {
  constructor() {
   this.input=createInput("").attribute("placeholder","Name");
   this.button=createButton("PLAY");
   this.greeting=createElement('h2')
   this.reset=createButton("RESET")
  }
  hide(){
    this.input.hide();
   this.button.hide();
   this.greeting.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2-50, 0);
      
    this.input.position(displayWidth/2-40, displayHeight/2-80);
    this.button.position(displayWidth/2+30, displayHeight/2);
    this.reset.position=(displayWidth-300,50);

    

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index=playerCount;
      player.update()
      player.updateCount(playerCount);
      
      this.greeting.html("Hello " + player.name )
      this.greeting.position(displayWidth/2-70, displayHeight/4)
    });

    this.reset.mousePressed(()=>{
      game.update(0);
      player.updateCount(0);
     // Player.updateCarsAtEnd();
     // ref=database.ref('players')
      //ref.remove() 
      database.ref('/').update({
        'players': null,
        'carsAtEnd':0
      })
      
    })
  }
}
