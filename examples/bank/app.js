var couchRepository = require('../../lib/repository/couchRepository').getInstance(),
    repository = require('../../lib/repository').getInstance(),
    couchStorage = require('../../lib/storage/couchStorage').getInstance(),
    Account = require('./account'),
    AccountBalancesView = require('./accountBalancesView');

var App = function() {}

App.prototype.init = function() {
  repository.strategy = couchRepository;	
  couchRepository.database = couchStorage.database = 'bank';
}



var app = new App();
app.init();

var account = new Account(1);

// for(var i = 0; i < 1000; i++)
//   account.deposit(Math.floor(Math.random() * 1000));

var accountBalancesView = new AccountBalancesView();
accountBalancesView.load(function() {
  console.log(this.data);
});