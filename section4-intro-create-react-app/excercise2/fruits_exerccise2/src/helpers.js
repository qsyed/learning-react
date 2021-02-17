function choice(items){

    let food_item = Math.floor(Math.random() * items.length);
    return items[food_item]

}

function remove(items, item){

}



export {choice, remove};