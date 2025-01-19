export default function (plop) {
  plop.setGenerator('scaffold-app', {
    description: 'Scaffold a new WUH app',
    prompts: [{
      type: 'input',
      name: 'app_name',
      message: 'App name:'
    }],
    actions: [{
      type: 'add',
      path: "./{{snakeCase app_name}}.u",
      templateFile: 'templates/scaffold_app.u.hbs'
    }]
  });
  plop.setGenerator('shoelace-ui', {
    description: 'Add in shoelace types',
    prompts: [],
    actions: [{
      type: 'add',
      path: "./shoelace.u",
      templateFile: 'templates/shoelace.u.hbs'
    }]
  });
  plop.setGenerator('scaffold-service', {
    description: 'Scaffold a new service based on a new model. Includes stubbing the model, a service like ability, and routes',
    prompts: [{
      type: 'input',
      name: 'model',
      message: 'Model name:'
    }],
    actions: [{
      type: 'add',
      path: "./{{snakeCase model}}.u",
      templateFile: 'templates/service.u.hbs'
    }]
  });
};
