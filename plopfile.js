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
};
