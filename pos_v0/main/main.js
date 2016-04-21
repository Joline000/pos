function printReceipt(inputs) {
    var cartItems = buildCartItems(inputs);
    var receiptItems = buildReceiptItems(cartItems);
    var receipt = getReceipt(receiptItems);
    console.log(receipt);
}

function buildCartItems(Items) {

    var cartItems = [];   
    Items.forEach(function(Item) {
        cartItems.push({info: Item, subtotal: Item.price * Item.count});
    });
    
   return cartItems;
}

function buildReceiptItems(cartItems) {
    var receiptItems = [cartItems];
    var total = 0;
    cartItems.forEach(function(cartItems) {
        total += cartItems.subtotal;
    });
    
    receiptItems.push(total);     
    
    return receiptItems;
}

function getReceipt(receiptItems) {
    var receipt = '***<没钱赚商店>收据***\n';
    receiptItems[0].forEach(function(cartItems) {
        receipt += '名称：'+ cartItems.info.name +'，数量：'+ cartItems.info.count + cartItems.info.unit +'，单价：'
        + cartItems.info.price.toFixed(2) + '(元)，小计：' + cartItems.subtotal.toFixed(2) +'(元)\n';
    });
    receipt += '----------------------\n';
    receipt += '总计：'+ receiptItems[1].toFixed(2) + '(元)\n**********************';
    
    return receipt;
}
