function populateFoods() {
  let Foods = [
    {
      name: "Caesar Salad",
      calories: 260,
      description: "balebalebale",
      image:
        "https://media.healthyfood.com/wp-content/uploads/2020/10/SmokedSalmonFrittas.jpg",
    },
    {
        name: "Baked salmon with cauliflower rice",
        calories: 372,
        description: "balebalebale",
        image:
          "https://media.healthyfood.com/wp-content/uploads/2021/06/Baked-Salmon-Cauliflower-Rice-1024x652.gif",
      },
      {
        name: "Baked salmon with cauliflower rice",
        calories: 372,
        description: "balebalebale",
          image: "https://media.healthyfood.com/wp-content/uploads/2016/11/30-ways-to-make-a-meal-gluten-free-500x409.jpg"
      }
  ];

  let foodDiv = document.getElementById("diet-foods");
  for (const food of Foods) {
    // console.log(food.name, ">>");
    // console.log(food.image, ">>");
    foodDiv.innerHTML +=`
    <div class="col-3 mt-3">
    <div class="card" style="width: 18rem;">
        <img src="${food.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${food.name}</h5>
          <p class="card-text">${food.calories} Kal</p>
          <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
      </div>
  </div>
    `
    
  }
}

function submitData(event){
    event.preventDefault()
    let name = document.getElementById("name").value
    console.log("masuk sini", name);
    let objPerson = {
        name: "seven",
        age: 18,

    }
    localStorage.setItem("userData", JSON.stringify(objPerson))
    
    
    
}

function main() {
  populateFoods();
  if (localStorage.getItem("userData")) {
    let dataStorageUser = JSON.parse(localStorage.getItem("userData"))
    console.log(">>>>", dataStorageUser.name);
      document.getElementById("username").textContent = dataStorageUser.name
  }
}

function clearData() {
    localStorage.clear() // semua data
    localStorage.removeItem('name') //satuan
}

main();
