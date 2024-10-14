const cars = [
    {
      car_make: "Honda Civic",
      year: "2019",
      price: "20,000",
    },
    {
        car_make: "Honda Accord",
        year: "2020",
        price: "22,000",
      },
    {
        car_make: "Chevy Trax",
        year: "2017",
        price: "18,000",
      },
    {
        car_make: "Volkswagen ID.4",
        year: "2021",
        price: "27,000",
      },
]

const act = () => {
    console.log("success")
    let action = document.querySelector("#choice").value;
    let carQuery;
    switch (action) {
        case "C":
            listACar();
            break;
        case "R":
            readACar();
            break;
        case "U":
            carQuery = findACar();
            alert(carQuery);
            console.log(carQuery);
            updateACar(carQuery);
            break;
        case "D":
            carQuery = findACar();
            deleteACar(carQuery);
            break;
    }
};

const listACar = () => {
    console.log("sucess")
    let car_name = prompt("Car Name?");
    let car_model = prompt("Car Model?");
    let car_price = prompt("Car Price?");
    cars.push({
        car_make: car_name,
        model: car_model,
        price: parseFloat(car_price),
    });
    listCars();
    console.log(cars);
};

const readACar = () => {
    choiceOfCar = prompt("Which car?");
    carStr = `Our ${cars.car_make} ${cars.model} is listed at ${cars.price}`;
    console.log(carStr);
}

const updateACar = (carQuery) =>{
    carToUpdate = prompt("What is the car name?");
    carMatch = [];
    let hasCar = cars.find((car) => {
      if (carQuery == cars.car_make){
        let car_name = prompt("Car Name?");
        let car_model = prompt("Car Model?");
        let car_price = prompt("Car Price?");
      };
      
      cars.splice(1, 1, 0)
      cars.push({
        car_make: car_name,
        model: car_model,
        price: parseFloat(car_price),
    });
})
}

const deleteACar = (carQuery) => {
    carToDelete = prompt("What is the car name?");
    carMatch = [];
    let deleteCar = cars.find((car)=> {
        if (carQuery == cars.car_make){
            cars.splice(1,1,0)
        }
    })
}




