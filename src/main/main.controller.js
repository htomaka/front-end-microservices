/**
 * Created by htomaka on 04/08/17.
 */
let dependencies = ['$rootScope'];


function MainController($rootScope){
    this.onClick = function(){
        $rootScope.$broadcast('getUserRequest');
    };

    this.onClick = this.onClick.bind(this);

    this.message = 'Hello from main app';

    $rootScope.$on('getUserSuccess', (e, data) => {
        this.message = `Hello from ${data.name}`;
    })
}

MainController.$inject = dependencies;

export default MainController;
