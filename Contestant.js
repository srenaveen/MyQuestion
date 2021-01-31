class Contestant{
    constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    }
      
    getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
    playerCount = data.val();
    })
    }
    
    updateCount(count){
    database.ref('/').update({
    playerCount: count
    });
    }
      
    update(){
          var contestantIndex = "Contestant" + this.index;
          database.ref(contestantIndex).set({
            name:this.name,
          });
        }
        static getContestantInfo(){
          var ContestantInfoRef = database.ref('players');
          ContestantInfoRef.on("value",(data)=>{
            allPlayers = data.val();
          })
        }
      }
      
