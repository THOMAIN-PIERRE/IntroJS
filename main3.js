$("button").on("click", function(){
	
    // create an array with objects describing each step in the guided tour 
    var Steps = [
        {
            intro: 'Attention, cette page a été changée. Des points lumineux vont vous montrer les changements et vous permettront d\'accéder à des informations'
        },
        {
            element: '#step-1',
        intro: 'Ajout d\'un champs de recherche rapide par segment'
        },
        // {
        //     element: '#step-2',
        //     intro: 'Cliquez ici pour rerouver les messages de l\'administrateur.'
        // },
        // {
        //     element: '#step-3',
        //     intro: 'Cliquez ici pour retrouver la liste des tâches que vous avez à mener.'
        // },
        // {
        //     element: '#step-4',
        //     intro: 'Cliquez ici pour accéder à vos notifications.'
        // },
        // {
        //     element: '#step-5',
        //     intro: 'Cliquez ici pour accéder à l\'aide IQ-ALL de cette page.'
        // },
        // {
        //     element: '#step-6',
        //     intro: 'Cliquez ici pour accéder à votre profil et modifier vos réglages.'
        // },
        // {
        //     element: '#step-7',
        //     intro: 'Cliquez ici pour revenir à l\'accueil du site (Dashboard).'
        // },
        // {
        //     element: '#step-8',
        //     intro: 'Accédez ici aux thématiques relatives aux inspections.'
        // },
        // {
        //     element: '#step-9',
        //     intro: 'Accédez ici aux thématiques relatives a la traçabilité.'
        // },
        // {
        //     element: '#step-10',
        //     intro: 'Accédez ici aux thématiques relatives aux vendeurs et manufactureurs.'
        // },
        // {
        //     element: '#step-11',
        //     intro: 'Accédez ici aux thématiques relatives aux filliales.'
        // },
        // {
        //     element: '#step-12',
        //     intro: 'Accédez ici aux statistiques.'
        // },
        // {
        //     element: '#step-13',
        //     intro: 'Accédez ici aux thématiques relatives a l\'administration et aux users.'
        // },
        // {
        //     element: '#step-14',
        //     intro: 'Numéro de version de votre logiciel IQALL'
        // },
        // {
        //     element: '#step-15',
        //     intro: 'Fenêtre d\'affichage de vos tâches reçues.'
        // },
        // {
        //     element: '#step-16',
        //     intro: 'Fenêtre d\'affichage de vos notifications reçues.'
        // },
    ];
              
    // initialize an introjs instance          
    var intro = introJs();
  
    // load data
    intro.setOptions({steps: Steps });
  
    // start intro.js
    intro.addHints();
    
  })


//Start the walkthrough for defined element(s).
// intro.start();
// intro2.addHints();