function makeFriendsList(friends) {
  let ulElement = document.createElement('UL');
  
  for (let friend of friends) {
    ulElement.insertAdjacentHTML('beforeEnd', `<li>${friend.firstName} ${friend.lastName}</li>`);
  };

  return ulElement;
}
