//const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch("../prophets/json/prophets.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    
    for (let i = 0; i < prophets.length; i++) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let birthDate= document.createElement('p');
      let birthPlace= document.createElement('p');
      let numOfChildren = document.createElement('p');
      let orderOfProphet = document.createElement('p');
      let image = document.createElement('img');

      h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
      birthDate.textContent = "Date of Birth: " + prophets[i].birthdate;
      birthPlace.textContent = "Place of Birth: " + prophets[i].birthplace;
      numOfChildren.textContent = "Number of Children: " + prophets[i].numofchildren;
      orderOfProphet.textContent = "Latter-day Prophet #" + prophets[i].order;
      image.setAttribute('src', prophets[i].imageurl);
      image.setAttribute('alt', `${prophets[i].name} ${prophets[i].lastname}`);
      image.setAttribute('loading', 'lazy');

      card.appendChild(image);
      card.appendChild(h2);
      card.appendChild(birthDate);
      card.appendChild(birthPlace);
      card.appendChild(numOfChildren);
      card.appendChild(orderOfProphet);

      document.querySelector('div.cards').appendChild(card);
    }
  });