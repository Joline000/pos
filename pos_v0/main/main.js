function printReceipt(inputs) {
    var cartItems = buildCartItems(inputs);
    var receiptItems = buildReceiptItems(cartItems);
    var receipt = getReceipt(receiptItems);
    console.log(receipt);
}

function buildCartItems(Items) {

    var cartItems = [];   
    Items.forEach(function(Item) {
        cartItems.push({inputs: Item, subtotal: Item.price * Item.count});
    });
    
   return cartItems;
}

function buildReceiptItems(cartItems) {
    var receiptItem = [cartItems];
    var total = 0;
    cartItems.forEach(function(cartItems) {
        total += cartItems.subtotal;
    });
    receiptItem.push(total);     
    
    return receiptItem;
}

function getReceipt(receiptItem) {
    var receipt = '***<没钱赚商店>收据***\n';
    receiptItem[0].forEach(function(cartItems) {
        receipt += '名称：'+ cartItems.inputs.name +'，数量：'+ cartItems.inputs.count + cartItems.inputs.unit +'，单价：'
        + cartItems.inputs.price.toFixed(2) + '(元)，小计：' + cartItems.subtotal.toFixed(2) +'(元)\n';
    });
    receipt += '----------------------\n'
    receipt += '总计：'+ receiptItem[1].toFixed(2) + '(元)\n**********************';
    
    return receipt;
}
