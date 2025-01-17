# Amigo Sorteado

## Descrição
O principal objetivo deste projeto é fortalecer habilidades em lógica de programação. Aqui, você deverá desenvolver a lógica para resolver o problema de adicionar amigos a uma lista e sortear um nome aleatoriamente.

## Linguagens Utilizadas
![HTML](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white&style=flat)
![CSS](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white&style=flat)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat)

## Funcionalidades
- Adicionar amigos à lista
- Exibir a lista de amigos na tela
- Sortear um amigo da lista
- Exibir o nome do amigo sorteado na tela
- Limpar a lista de amigos e a exibição do nome sorteado

## Como Usar
1. **Adicionar Amigos:**
   - Digite o nome de um amigo no campo de entrada.
   - Clique no botão "Adicionar" para incluir o nome na lista de amigos.

2. **Sortear Amigo:**
   - Clique no botão "Sortear" para selecionar um amigo aleatoriamente da lista.

3. **Limpar Nome:**
   - O campo de entrada será automaticamente limpo após adicionar um amigo.
   - A tela será limpa para mostrar apenas o nome sorteado.

## Exemplo de Código
```javascript
let ChosenFriends = [];

// Function to add friends to the list
function AddFriends() {
    let addedFriend = document.querySelector('#friend').value;
    let upperCaseFriend = addedFriend.toUpperCase();

    if (upperCaseFriend === '') {
        alert("Please enter a name.");
    } else {
        ChosenFriends.push(upperCaseFriend);
        ClearName();
        updateFriendsOnScreen();
    }
}

// Function to update the list of friends on the screen
function updateFriendsOnScreen() {
    let friendList = document.querySelector('#friendList');
    friendList.innerHTML = '';

    for (let friend of ChosenFriends) {
        let friendLi = document.createElement('li');
        friendLi.textContent = friend;
        friendList.appendChild(friendLi);
    }
}

// Function to generate a random number based on the number of friends
function generateRandomNumber() {
    let max = ChosenFriends.length;
    return Math.floor(Math.random() * max);
}

// Function to display the drawn friend's name
function showDrawnName() {
    let result = document.querySelector('#result');
    result.innerHTML = '';  // Clear previous result

    if (ChosenFriends.length === 0) {
        alert("Please enter a name.");
    } else {
        let drawnIndex = generateRandomNumber();
        let drawnFriend = ChosenFriends[drawnIndex];
        let resultNameLi = document.createElement('li');
        resultNameLi.textContent = `Drawn friend: ${drawnFriend}`;
        result.appendChild(resultNameLi);
    }
}

// Function to clear the input field
function ClearName() {
    let addedFriend = document.querySelector('#friend');
    addedFriend.value = '';

    let result = document.querySelector('#result');
    result.innerHTML = ''; 
}

// Function to draw a friend's name and show it on the screen
function drawFriend(){
    // Clear the screen to only show the drawn name
    let friendList = document.querySelector('#friendList');
    friendList.innerHTML = '';

    showDrawnName();
    // Clear the list of chosen names
    ChosenFriends = []
}
