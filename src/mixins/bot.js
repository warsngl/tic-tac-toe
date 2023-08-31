export default {
    data() {
      return {
        
      };
    },
    methods: {
        rnd(kit){
            let n=Math.floor(Math.random()*kit.length)%kit.length
            return n
        },
        //bot always X
        //pickX - set value of xx=1.3.6
        botPick(){
            this.xx=this.x[this.rnd(this.x)]
        },
        botTurn(){
            this.botPick()
            this.setX([0,1,2,3,4,5,6,7,8][this.rnd([0,1,2,3,4,5,6,7,8])]).then(
                (resolve) => {
                    
                },
                (reject) => {
                    this.botTurn()
                }
            )
        }
    },
  };
  