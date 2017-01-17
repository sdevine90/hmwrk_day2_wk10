var shoppingBasket = {
  basket: [],
  total: 0,
  additem: function(item){
    this.basket.push(item);
  },
  removeitem: function(item){
    this.basket.shift(item);
    // this.basket.splice(0,1);
    // first argument is the index second one is the amount u want it to remove
  },
  totalbasket: function(){
    this.total = 0;
    for (var item of basket){
      this.total += shoppingBasket.total;
    }
  },
  tenpercentoff: function(){
    this.total = 0
    if (this.total > 20.00){
      this.total * 0.9;
    }
  },
//   loyaltycard: function(){
//     this.total = 0
//     if ()
//   }
// }

};

module.exports = shoppingBasket;
