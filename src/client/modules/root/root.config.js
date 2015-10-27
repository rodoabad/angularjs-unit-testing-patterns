export default function ($stateProvider) {

  const root = {
    name: 'root',
    url: '/',
    views: {
      'mainContainer@': {
        template: '<main-container></main-container>'
      }
    }
  };

  $stateProvider.state(root);

}