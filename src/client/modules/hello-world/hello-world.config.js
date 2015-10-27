export default function ($stateProvider) {

  const helloWorld = {
    name: 'root.helloWorld',
    url: 'hello-world',
    views: {
      'mainContent@root': {
        template: `<h1>Hello world!</h1>`
      }
    }
  };

  $stateProvider.state(helloWorld);

}