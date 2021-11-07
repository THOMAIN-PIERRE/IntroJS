const intro = introJs();

// var btn = document.createElement("BUTTON");
// var t = document.createTextNode("CLICK ME");
// btn.appendChild(t);

// // I have added the button append here because by default this is what intro js will do
// if (this._introItems.length > 1) {
//    buttonsLayer.appendChild(prevTooltipButton);
//    buttonsLayer.appendChild(nextTooltipButton);
//    buttonsLayer.appendChild(btn);
// }

intro.setOptions({
    hintButtonLabel: 'OK',
    // hintPosition: 'middle-middle',
    hintPosition: 'bottom-middle',
    hintAnimation: true,
    showProgress: true,
    showBullets: false,
    tooltipClass: 'customTooltip',
    steps: [
        {
            title: 'Bienvenue !',
            intro: 'Faisons un tour d\'IQALL !'
        },
        // {
        //     hint: '1er Hint',
        //     element: '#hint-1',
        //     hintPosition: 'top-middle',
        //     hintAnimation: 'true',
        // },
        {
            title: 'Info-bulle n°1',
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
        {
            element: '#step-17',
            intro: 'Premier élément affiché sur la page suivante.'
        },
        {
            element: '#step-18',
            intro: 'Deuxième élément affiché sur la page suivante.'
        },
    ],

    hints: [
        { hint: '1er Hint', element: '#hint-1'},
        { hint: 'Petit texte explicatif', element: '#hint-2'},
    ]
})


//Start the walkthrough for defined element(s).
intro.start();
// intro.addHints();




