const items_per_page = 12;
const page = 3;

last_item_index = items_per_page * page;
first_item_index = items_per_page * page - (items_per_page-1);


const compute_first_index = (page,items_per_page) => {
  return page * items_per_page - (items_per_page-1);
};

console.log(compute_first_index(7,12))

