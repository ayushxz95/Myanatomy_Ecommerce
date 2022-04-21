import {
  FETCH_ITEM,
  ADD_ITEM,
  FETCH_CATEGORY_ITEM_SUCCESS,
  UPDATE_ITEM_SUCCESS,
  SEARCH_ITEM,
  RESET_CATEGORY_ITEMS,
} from "../Actions/types";

// const initialState = {
//   vals: [],
//   categoryVals: [],
// };
// //destructuring 
// export default function (state = initialState, action) {
//   switch (action.type) {
//     case FETCH_ITEM:
//       const allItems = action.payload;
//       return {
//         ...state,
//         vals: allItems,
//         categoryVals: allItems,
//       };
//     case ADD_ITEM:
//       console.log(action.payload);
//       const singleItems = action.payload;
//       return {
//         ...state,
//         categoryVals: [singleItems , ...state.categoryVals],
//       };
  
//     case UPDATE_ITEM_SUCCESS:
//         const updatedData = action.payload.newItem;
//         const filterUpdatedId = action.payload.newId;
//         // console.log(filterUpdatedId + " " + updatedData.toString());
//         const filteredAllItems = state.vals.filter(
//           (item) => item.id !== filterUpdatedId
//         );
//         const categoryUpdatedItems = filteredAllItems.filter((item) => item.type)
//         // console.log(categoryUpdatedItems);
//         const categoryValsUpdated = categoryUpdatedItems.concat(updatedData);
//         // categoryValsUpdated.reverse();
//         // console.log(categoryValsUpdated);
//         return {
//             ...state,
//             categoryVals: categoryValsUpdated,
//         }

//     case FETCH_CATEGORY_ITEM_SUCCESS:
//       const filteredCategory = action.payload;
//       const categoryItems = state.vals.filter(
//         (item) => item.type === filteredCategory
//       );
//       //console.log(categoryItems);
//       return {
//         ...state,
//         categoryVals: categoryItems,
//       };
//     case SEARCH_ITEM:
//       const searchedItem = action.payload.toLowerCase();
//       let filteredItem;
//       if (searchedItem === "") {
//         filteredItem = state.vals;
//       } else {
//         filteredItem = state.vals.filter(
//           (item) =>
//             item.name.toLowerCase().includes(searchedItem) ||
//             item.company.toLowerCase().includes(searchedItem)
//         );
//       }
//       return {
//         ...state,
//         categoryVals: filteredItem,
//       };
//     default:
//       return { 
//         ...state
//       }
//   }
// }

const initialState = {
    cloths: [],
    grocery: [],
    electronics: [],
    allItems: {},
    categoryItems: {},
    searchedItems: {},
}

export default function(state = initialState, action){
  switch(action.type) {
    case FETCH_ITEM: {
      const items = action.payload;
      const allItems = {};
      const grocery =  [];
      const electronics = [];
      const cloths = [];
      items.map((item) => {
        const id = item.id;
        const type = item.type;
        allItems[id] = item;
        if(type === "Cloths"){
          cloths.push(id);
        }else if(type === "Grocery") {
          grocery.push(id);
        }else {
          electronics.push(id);
        }
      })
      return {
        ...state,
        cloths: cloths,
        grocery: grocery,
        electronics: electronics,
        allItems: allItems,
        searchedItems: allItems,
      }}
    case FETCH_CATEGORY_ITEM_SUCCESS: {
      const {cloths, electronics, grocery, allItems} = state;
      const category = action.payload;
      let categoryIds;
      // console.log("Reducer" + category);
      if(category === "Cloths") {
        categoryIds = cloths;
      }else if(category === "Electronics") {
        categoryIds = electronics;
      }else if(category === "Grocery") {
        categoryIds = grocery;
      }
      // console.log(categoryIds);
      const categoryItemsKeys = Object.keys(allItems).filter((key) => categoryIds.includes(allItems[key].id))
      const categoryItems = categoryItemsKeys.map((key) => allItems[key])
      return {
        ...state,
        categoryItems: categoryItems,
        searchedItems: categoryItems,
      }
    }
    case ADD_ITEM:{
      const {allItems, electronics, grocery, cloths} = state;
      const {data, category} = action.payload;
      const newAllItems = {
        ...allItems,
        [data.id]: data,
      }
      if(data.type === "Cloths") {
        cloths.push(data.id)
      }else if(data.type  === "Grocery") {
        grocery.push(data.id)
      }else  {
        electronics.push(data.id)
      }
      return {
        ...state,
        allItems: newAllItems,
        cloths: cloths,
        electronics: electronics,
        grocery: grocery,
      }}
    case RESET_CATEGORY_ITEMS:{
      return {
        ...state,
        categoryItems: {},
        searchedItems: {},
      }}
    case UPDATE_ITEM_SUCCESS:{
      const {allItems, cloths, electronics, grocery} = state;
      const {newItem} = action.payload;
      console.log(allItems);
      const itemKey = Object.keys(allItems).filter((key) => parseInt(key) === newItem.id);
      const oldItem = allItems[itemKey];
      const oldType = oldItem.type;
      const newType = newItem.type
      let newCloths = cloths;
      let newGrocery = grocery;
      let newElectronics = electronics;
      if(oldType !== newType) {
        if(cloths.includes(parseInt(itemKey[0]))) {
          newCloths = cloths.filter((id) => id !== parseInt(itemKey[0]));
          if(newType === "Electronics") {
            newElectronics.push(parseInt(itemKey[0]));
          }else {
            newGrocery.push(parseInt(itemKey[0]));
          }
        }else if(grocery.includes(parseInt(itemKey[0])))  {
          newGrocery = grocery.filter((id) => id !== parseInt(itemKey[0]));
          if(newType === "Cloths") {
            newCloths.push(parseInt(itemKey[0]));
          }else {
            newElectronics.push(parseInt(itemKey[0]));
          }
        }else {
          newElectronics = electronics.filter((id) => id !== parseInt(itemKey[0]));
          if(newType === "Cloths") {
            newCloths.push(parseInt(itemKey[0]));
          }else {
            newGrocery.push(parseInt(itemKey[0]));
          }
        }
      }
      console.log(itemKey); 
      const newAllItems = {
        ...allItems,
        [itemKey]: newItem
      }
      return {
        ...state,
        allItems: newAllItems,
        searchedItems: newAllItems,
        grocery: newGrocery,
        electronics: newElectronics,
        cloths: newCloths,
      }
    }
    case SEARCH_ITEM:
      const {text, category} = action.payload;
      const {allItems, categoryItems} = state;
      let itemsToBeSearched;
      if(category === "Home") {
        itemsToBeSearched = allItems;
      }else {
        itemsToBeSearched = categoryItems;
      }
      let searchResult;
      const newText = text.toLowerCase();
      if(newText === "") {
        searchResult = itemsToBeSearched;
      }else {
        const searchResultKeys = Object.keys(itemsToBeSearched).filter((key) =>
        itemsToBeSearched[key].name.toLowerCase().includes(newText) ||
        itemsToBeSearched[key].company.toLowerCase().includes(newText))
        searchResult = searchResultKeys.map((key) => itemsToBeSearched[key])
      } 
      return {
        ...state,
        searchedItems: searchResult,
      }
    default:
      return {...state}
  }
}


