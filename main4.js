$("button2").on("click", function(){
	
    // create an array with objects describing each step in the guided tour 
    var Steps = [
        {
            intro: 'Test !'
        },
        {
            element: '#step-100',
            intro: 'Numéro de version D\'IQALL !'
        },
    ];
              
    // initialize an introjs instance          
    var intro = introJs();
  
    // load data
    intro.setOptions({steps: Steps });
  
    // start intro.js
    intro.start();
    
  })