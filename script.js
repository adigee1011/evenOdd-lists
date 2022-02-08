let usersWord = "";
let oddList = document.getElementById("odd");
let evenList = document.getElementById("even")

function updateWord(element) {
    usersWord = element.value

    console.log(usersWord)
  }

  function handleSubmit() {
    let newListItem = document.createElement('li')
    newListItem.innerText = usersWord

    if(usersWord % 2 == 0) {
        evenList.appendChild(newListItem)
      } else {
        oddList.appendChild(newListItem)
      }

    usersWord = ""
    document.getElementById("even-odd-form").reset();
  }