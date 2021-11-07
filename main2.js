// $("button").on("click", function(){

    document.getElementById('aide1').onclick = function(){
	
    // create an array with objects describing each step in the guided tour 
    var Steps = [
        {
            title: 'Tour n°1',
            intro: 'Bienvenue sur le tour n°1 !'
        },
        {
            element: '#step-1',
            intro: 'Le nouveau logo de l\'entreprise.'
        },
        {
            element: '#step-2',
            intro: 'Cliquez ici pour rerouver les messages de l\'administrateur.'
        },
        {
            element: '#step-3',
            intro: 'Cliquez ici pour retrouver la liste des tâches que vous avez à mener.'
        },
        {
            element: '#step-4',
            intro: 'Cliquez ici pour accéder à vos notifications.'
        },
        {
            element: '#step-5',
            intro: 'Cliquez ici pour accéder à l\'aide IQ-ALL de cette page.'
        },
        {
            element: '#step-6',
            intro: 'Cliquez ici pour accéder à votre profil et modifier vos réglages.'
        },
        {
            element: '#step-7',
            intro: 'Cliquez ici pour revenir à l\'accueil du site (Dashboard).'
        },
        {
            element: '#step-8',
            intro: 'Accédez ici aux thématiques relatives aux inspections.'
        },
        {
            element: '#step-9',
            intro: 'Accédez ici aux thématiques relatives a la traçabilité.'
        },
        {
            element: '#step-10',
            intro: 'Accédez ici aux thématiques relatives aux vendeurs et manufactureurs.'
        },
        {
            element: '#step-11',
            intro: 'Accédez ici aux thématiques relatives aux filliales.'
        },
        {
            element: '#step-12',
            intro: 'Accédez ici aux statistiques.'
        },
        {
            element: '#step-13',
            intro: 'Accédez ici aux thématiques relatives a l\'administration et aux users.'
        },
        {
            element: '#step-14',
            intro: 'Numéro de version de votre logiciel IQALL'
        },
        {
            element: '#step-15',
            intro: 'Fenêtre d\'affichage de vos tâches reçues.'
        },
        {
            element: '#step-16',
            intro: 'Fenêtre d\'affichage de vos notifications reçues.'
        },
    ];
              
    // initialize an introjs instance          
    var intro = introJs();
  
    // load data
    intro.setOptions({
        hintButtonLabel: 'OK',
        // hintPosition: 'middle-middle',
        hintPosition: 'bottom-middle',
        hintAnimation: false,
        showProgress: true,
        showBullets: false,
        tooltipClass: 'customTooltip',      
        steps: Steps });
  
    // start intro.js
    intro.start();
    
  }

  document.getElementById('aide2').onclick = function(){
	
    // create an array with objects describing each step in the guided tour 
    var Steps = [
        {
            title: 'Tour n°2',
            intro: 'Bienvenue sur le tour n°2 !'
        },
        {
            title: 'Info-bulle n°1',
            element: '#step-1',
            intro: 'Le nouveau logo de l\'entreprise.'
        },
        {
            title: 'Info-bulle n°2',
            element: '#step-2',
            intro: 'Cliquez ici pour rerouver les messages de l\'administrateur.'
        },
        {
            title: 'Info-bulle n°3',
            element: '#step-3',
            intro: 'Cliquez ici pour retrouver la liste des tâches que vous avez à mener.'
        },
        {
            title: 'Info-bulle n°4',
            element: '#step-4',
            intro: 'Cliquez ici pour accéder à vos notifications.'
        },
        {
            title: 'Info-bulle n°5',
            element: '#step-5',
            intro: 'Cliquez ici pour accéder à l\'aide IQ-ALL de cette page.'
        },
        {
            title: 'Info-bulle n°6',
            element: '#step-6',
            intro: 'Cliquez ici pour accéder à votre profil et modifier vos réglages.'
        },
        {
            title: 'Info-bulle n°7',
            element: '#step-7',
            intro: 'Cliquez ici pour revenir à l\'accueil du site (Dashboard).'
        },
        {
            title: 'Info-bulle n°8',
            element: '#step-8',
            intro: 'Accédez ici aux thématiques relatives aux inspections.'
        },
        {
            title: 'Info-bulle n°9',
            element: '#step-9',
            intro: 'Accédez ici aux thématiques relatives a la traçabilité.'
        },
        {
            title: 'Info-bulle n°10',
            element: '#step-10',
            intro: 'Accédez ici aux thématiques relatives aux vendeurs et manufactureurs.'
        },
        {
            title: 'Info-bulle n°11',
            element: '#step-11',
            intro: 'Accédez ici aux thématiques relatives aux filliales.'
        },
        {
            title: 'Info-bulle n°12',
            element: '#step-12',
            intro: 'Accédez ici aux statistiques.'
        },
        {
            title: 'Info-bulle n°13',
            element: '#step-13',
            intro: 'Accédez ici aux thématiques relatives a l\'administration et aux users.'
        },
        {
            title: 'Info-bulle n°14',
            element: '#step-14',
            intro: 'Numéro de version de votre logiciel IQALL'
        },
        {
            title: 'Info-bulle n°15',
            element: '#step-15',
            intro: 'Fenêtre d\'affichage de vos tâches reçues.'
        },
        {
            title: 'Info-bulle n°16',
            element: '#step-16',
            intro: 'Fenêtre d\'affichage de vos notifications reçues.'
        },
        // {
        //     element: '#step-17',
        //     intro: 'Toto64.'
        // },
    ];
    // Attention: si j'ajoute ce hint ici, le tour ne fonctionne plus !
    // var Hints = [
    //     { hint: '1er Hint', element: '#hint-1'},
    //     { hint: 'Toto', element: '#hint-2'},
    // ]
              
    // initialize an introjs instance          
    var intro = introJs();
  
    // load data
    intro.setOptions({
        steps: Steps,
        doneLabel: 'Next page',
        hintButtonLabel: 'OK',
        hintPosition: 'bottom-middle',
        hintAnimation: true,
        showProgress: true,
        showBullets: false,
        tooltipClass: 'customTooltip',
        doneLabel: "Next page",
        // overlayOpacity: 0.8,
        disableInteraction: true,
        showStepNumbers: true,
        // hints: Hints
     });
  
    // start intro.js
    // intro.start();
    // A la fin du tour, on demande d'aller sur une autre page
    intro.start().oncomplete(function() {
        window.location.href = '/Inspector.html?multipage=true';
      });

    var Hints = [
        // { hint: '1er Hint', element: '#hint-1'},
        { hint: 'Retrouvez ici un peu texte explicatif sur un endroit spécifique de la page', element: '#hint-2'},
    ]

    // initialize an introjs instance          
    var intro = introJs();

    // load data
    intro.setOptions({
        hints: Hints,
        hintButtonLabel: 'OK',
        hintPosition: 'top-right',
        hintAnimation: true,
     });

    //Le hint apparaît alors à l'écran mais alors, le tour n°2 ne fonctionne plus !
    intro.addHints();
    
  }

//  Affichage d'un hint dans la page. Il apparaît au chargement de la page, de façon indépendnate du déclenchement du tour n°1 ou du tour n°2
// const intro = introJs();

// intro.setOptions({
//     hintButtonLabel: 'OK',
//     hintPosition: 'bottom-middle',
//     hintAnimation: true,
//     showProgress: true,
//     showBullets: false,
//     tooltipClass: 'customTooltip',

//     hints: [
//         { hint: '1er Hint', element: '#hint-1'},
//         { hint: 'Petit texte explicatif', element: '#hint-2'},
//     ]
// })

// intro.addHints();
