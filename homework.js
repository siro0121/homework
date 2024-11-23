const items_per_page = 12;
const page = 3;

last_item_index = items_per_page * page;
first_item_index = items_per_page * page - (items_per_page-1);

console.log(first_item_index);
console.log(last_item_index);