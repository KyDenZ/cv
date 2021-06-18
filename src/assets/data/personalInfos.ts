export const personalInfos = {
  name: 'Flavien VACCARETTI',
  infos: [
    { name: 'birthday', icon: 'fa fa-birthday-cake', value: '27/01/1994' },
    { name: 'phone', icon: 'fa fa-phone', value: '06 88 02 22 97' },
    { name: 'mail', icon: 'far fa-envelope-open', value: 'flavien.vaccaretti@gmail.com' },
    { name: 'web site', icon: 'fa fa-mouse-pointer', value: 'www.kydenz.fr' },
  ],
  formations: [
    {
      title: "Cycle d'ingénierie architecte logiciel, développeur d’applications",
      date: 'Mars 2017 - 2020',
      place: 'ETNA, Ivry-sur-seine',
    },
    {
      title: 'BTS : Services Informatiques aux Organisations',
      date: '2013 - 2015',
      place: 'Lycée Geoffroy Saint-Hilaire, Etampes',
    },
  ],
  // favoriteTechnologies: [
  //     { name: 'Angular', src: require('assets/img/angular.png'), value: 80 },
  // ],
  centerInterests: [
    { name: 'Musculation', icon: 'fa fa-dumbbell' },
    { name: 'Design', icon: 'fa fa-pencil-alt' },
    { name: 'Veille technologique', icon: 'fa fa-laptop-code' },
  ],
  technologies: [
    { name: 'Angular', src: require('assets/img/angular.png') },
    { name: 'Loopback', src: require('assets/img/loopback.png') },
    { name: 'Boostrap', src: require('assets/img/bootstrap.png') },
    { name: 'Ionic', src: require('assets/img/ionic.png') },
    { name: 'React', src: require('assets/img/react.png') },
    { name: 'Symfony', src: require('assets/img/symfony.png') },
    { name: 'Capacitor', src: require('assets/img/capacitor.png') },
    { name: 'MongoDB', src: require('assets/img/mongo.png') },
    { name: 'MySQL', src: require('assets/img/mysql.png') },
    { name: 'PHP', src: require('assets/img/php.png') },
    { name: 'TS/JS', src: require('assets/img/ts.png') },
    { name: 'Redux', src: require('assets/img/redux.png') },
    { name: 'HTML', src: require('assets/img/html.png') },
    { name: 'CSS', src: require('assets/img/css.png') },
    { name: 'Github', src: require('assets/img/github.png') },
    { name: 'Photoshop', src: require('assets/img/photoshop.png') },
    { name: 'Unity', src: require('assets/img/unity.png') },
    { name: '3ds Max', src: require('assets/img/3dsmax.png') },
  ],
  jobs: [
    {
      place: 'Opensee',
      job: 'Développeur Frontend',
      date: 'Depuis Ocobtre 2020',
      description: '<p>Traitement de big data dans une interface sous forme de pivot et de graphique</p>',
      technologies: ['Angular 12', 'TypeScript', 'Lerna'],
    },
    {
      place: 'Inéa Conseil',
      job: 'Freelance Fullstack',
      date: 'Mai 2020 - Aout 2020',
      description:
        "<p>Développement d'un système d'analyse de comportement et de parole avec reporting pour une entreprise de formation</p>",
      technologies: ['Azure', 'Elasticsearch', 'Angular 9', 'TypeScript'],
    },
    {
      place: 'Inéa Conseil',
      job: 'Développeur Fullstack',
      date: 'Décembre 2018 - Avril 2020',
      description:
        "<p>Refonte complète de l'architecture d'une entreprise de formation: API, Application mobile, Site web, Backoffice. Authentification, parcours de formations, lecture offline</p>",
      technologies: ['Angular 9', 'Ngrx', 'Ionic 5', 'Loopback', 'Mongodb'],
    },
    {
      place: 'TDP',
      job: 'CTO',
      date: 'Juin 2017 - Octobre 2018',
      description:
        "<p>TDP est une entreprise de déménagement (BtoC) et de transport (BtoB).</p><p>Développement de l'API, Application mobile, Site web, Backoffice. Application avec système de géolocalisation pour le suivi des chauffeurs.</p>",
      technologies: ['Angular 6', 'Ionic 4', 'Symfony', 'Mysql'],
    },
    {
      place: 'TDP',
      job: 'Freelance Fullstack',
      date: 'Mars 2017 - Juin 2017',
      description:
        "<p>Développement d'une première version du site web de reservation pour une société de déménagement.</p>",
      technologies: ['Angular 4', 'Symfony', 'PHP'],
    },
    {
      place: 'CEA',
      job: 'Développeur Fullstack',
      date: 'Septembre 2016 - Mars 2017',
      description:
        "<p>Le CEA est un organisme de recherche sur la défense et la sécurité, les énergies nucléaire et renouvelables.</p><p>Développement de nouvelles fonctionnalités, ainsi qu'une refonte graphique pour un service biologique.</p>",
      technologies: ['Symfony', 'Mysql', 'VueJS'],
    },
    {
      place: 'Manjencia',
      job: 'Freelance Fullstack',
      date: 'Mars 2015 - Décembre 2016',
      description:
        "<p>Développement d'un intranet pour une société d’aménagements d’espaces tertiaires et publics.</p>",
      technologies: ['Symfony', 'Bootstrap', 'Angular', 'Ionic'],
    },
    {
      place: 'Lycée Geoffroy-Saint-Hilaire',
      job: 'Développeur Fullstack',
      date: 'Mai 2014 - Juin  2014',
      description: '<p>Refonte complète du site du Lycée avec WordPress.</p>',
      technologies: ['Wordpress'],
    },
  ],
};
