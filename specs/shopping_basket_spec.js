var shoppingBasket = require('../shopping_basket');
var assert = require('assert');

describe('shopping basket', function(){
  it('should be empty at the start', function(){
    assert.equal(0, shoppingBasket.basket);
  });
  it('possibly adding an item', function(){
    shoppingBasket.additem();
    assert.equal(1, shoppingBasket.basket.length);
  });
  it('possibly adding an item', function(){
    shoppingBasket.additem();
    shoppingBasket.removeitem();
    assert.equal(1, shoppingBasket.basket.length);
  });
  it('get my total', function(){
    assert.equal(0, shoppingBasket.total);
  });
  // it('ten percent discount', function(){
  //   shoppingBasket.tenpercentoff()
  //   assert.equal(0, shoppingBasket.total);
  // });
});
