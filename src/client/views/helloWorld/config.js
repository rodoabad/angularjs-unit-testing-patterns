export default [
  '$stateProvider',
  $stateProvider => {

    const state = {
      name: 'root.helloWorld',
      url: 'helloWorld',
      views: {
        'mainContent@root': {
          template: `<h1>Hello world!</h1>`
        }
      }
    };

    $stateProvider.state(state);

  }
];
