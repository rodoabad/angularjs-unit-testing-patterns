/*@ngInject*/
export default   $stateProvider => {

  const state = {
    name: 'root',
    url: '/',
    views: {
      'mainContainer@': {
        template: '<main-container></main-container>'
      }
    }
  };

  $stateProvider.state(state);

};