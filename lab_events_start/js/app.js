document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const formInput = document.querySelector('#new-item-form');
  formInput.addEventListener('submit', handleFormInput);

  //Extension for Delete Button -  create 'delete all' button and attach it to the (HTML) body tag.
  const deleteButton = document.createElement('button');
  deleteButton.textContent = "Delete All";
  const bodyParent = document.querySelector('body');
  bodyParent.appendChild(deleteButton);

  // Listen for any events originating from the 'delete all' button.
  const deletePress = document.querySelector('button');
  deletePress.addEventListener('click', handleDeleteAllInput);
})


// Handle form submit events
const handleFormInput = function(event){
  event.preventDefault();

  // grab values from form:
  const titleInput = event.target.title.value;
  const authorInput = event.target.author.value;
  const categoryInput = event.target.category.value;

  // create new list item for each book
  const newListItem = document.createElement('li');
  newListItem.textContent = `Title: ${titleInput} Author: ${authorInput}
                             Category: ${categoryInput}`;
  const listParent = document.querySelector('#reading-list');

  // attach the newly created list item to the unordered list
  listParent.appendChild(newListItem);


  // Reset the form fields, so that they are blank and ready for input from the user.
  document.getElementById("new-item-form").reset();
};


// Handle 'delete all' events
const handleDeleteAllInput = function(){
  const deleter = document.getElementById("reading-list");
  deleter.remove();
}