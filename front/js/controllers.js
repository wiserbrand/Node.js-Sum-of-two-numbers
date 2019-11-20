angular.module('summApp', [])
.constant('SERVER_URL', 'http://localhost:3000')
.controller('SummCtrl', ['$http', 'SERVER_URL', function($http, SERVER_URL) {
    var summDigits = this;
    summDigits.resut = 0;
    summDigits.one=0;
    summDigits.two=0;
    summDigits.sending=false;
    
    summDigits.sendData = function(){
        summDigits.sending = true;
        $http.get(SERVER_URL+'/summ', {
            params:{
                'one': summDigits.one,
                'two': summDigits.two
            }
        }).then(
             function(res){
                if(res){
                    summDigits.sending = false
                    summDigits.resut = res.data;
                }
             }
            ).catch(function(err){
                summDigits.sending = false;
                summDigits.resut = err.data
                console.log(err);
            });

    }

  }]);
  //const