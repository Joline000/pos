function printReceipt(inputs) {
    var items = buildItems(inputs);
    var cartItems = buildCartItems(items);
    var receiptItem = buildReceiptItems(cartItems);
    var receipt = getReceipt(receiptItem);
    console.log(receipt);
}

function buildItems(Item) {
    var cartItems = [];
    
    Item.forEach(function(cart) {
        var elementExist = isBarcodeExist(cart, cartItems);
        if(elementExist) {
            elementExist.count++;
        }
        else {
            cartItems.push({input: cart, count: 1});
        }
    });
    
    return cartItems;
}

function isBarcodeExist(cart, barcodes) {
    var elementExist;
    barcodes.forEach(function(items) {
        if(cart.barcode === items.input.barcode) {
            elementExist = items;
        }
    });
    
    return elementExist;
}

function buildCartItems(cartItems) {
    var cart = [];
    cartItems.forEach(function(Item) {
        cart.push({cartItems: Item, subtotal: Item.input.price * Item.count});
    });
    
    return cart;
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
    receiptItem[0].forEach(function(item) {
        receipt += '名称：'+ item.cartItems.input.name +'，数量：'+ item.cartItems.count + item.cartItems.input.unit +'，单价：'
        + item.cartItems.input.price.toFixed(2) + '(元)，小计：' + item.subtotal.toFixed(2) +'(元)\n';
    });
    receipt += '----------------------\n';
    receipt += '总计：'+ receiptItem[1].toFixed(2) + '(元)\n**********************';
    
    return receipt;
}