export const defaultElement = {
   priority: 10,
   name: 'Ogarnąć obiekty',
   id: 1
}

export const sortDesc = ( list ) => {
  //rozproszenie 
  return list
}

//create new object and add as new item
export const addItem = (name, priority, items) =>{
  return items;
}

//find object with id and remove
export const deleteItem = (id, items) =>{
  return [];
}

//create validation object
export const validateName = ( name ) => {
    //ERROR 
    //if length shorter than 20 letters
    //if starts with number
    //if has word javascript
    return false;
}

//create validation object
export const validatePriority = ( priority ) => {
    //ERROR 
    //only numbers
    //max 10
    return false;
}