class Question{
    constructor() {
        this.inputName = createInput("Name");
        this.inputAns = createInput("Letter");
        this.button = createButton('Play');
        this.question = createElement('h2');
        this.option1 = createElement('h2');
        this.option2 = createElement('h2');
      }
      hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();

        this.question.html("Question -  what galaxy do we live in");
        this.question.position(150,80);
        this.option1.html("Andromeda");
        this.option1.position(150,100);
        this.option2.html("Milky Way");
        this.option2.position(150,120);

        this.imputName.position(140,130);
        this.imputAns.position(170,130);


      }
      display(){
        var title = createElement('h2')
        title.html("My Quiz");
        title.position(350, 0);
        
        
    
      }
    }
    
