import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {

  constructor() { }

  foodDetails = [
    {
      id: 1,
      packageName: "Paty Chapoy",
      description: "Scramble eggs with jam, tomato, onion and chilly pepper.\nCoffee.\nVanilla Concha\nIncludes a Ventana Cookie.",
      price: 60.00,
      type: "Breakfast",
      image: "https://www.milenio.com/uploads/media/2020/06/16/pati-chapoy-genera-memes-regreso_172_154_631_393.jpg",
      foodImg: "../../../assets/paty.jpg"
    },
    {
      id: 2,
      packageName: "Venga la Alegría",
      description: "Hotcakes (Galilea Montijo shaped).\nOrange juice\nFruit bowl.\nBring your gossip neighbour and get a 2x1 for this menu.",
      price: 80.00,
      type: "Breakfast",
      image: "../../../assets/Galiela-Montijo.jpeg",
      foodImg: "../../../assets/hotcackes.jpeg"
    },
    {
      id: 3,
      packageName: "Tv Notas",
      description: "Chilaquiles (with chicken, sour cream and cheese).\nCarrot juice.\nFruit bowl.\nIncludes the newest magazine",
      price: 80.00,
      type: "Breakfast",
      image: "../../../assets/tv-notas.jpeg",
      foodImg: "../../../assets/chilaquiles.jpeg"
    },
    {
      id: 4,
      packageName: "Kunno",
      description: "Roasted nopal with panela cheese.\nOrganic avocado toast.\nCoca-light.\nFor another $1,000 MXN includes a fan meeting video.",
      price: 150.00,
      type: "Breakfast",
      image: "../../../assets/kunno.jpeg",
      foodImg: "../../../assets/nopal.jpeg"
    },
    {
      id: 5,
      packageName: "Anahí Ex RBD",
      description: "Enfrijoladas of tortilla of nopal (with cheese and filled with tofu).\nMatcha frappe.\nIncludes a collectible RBD Barbie.",
      price: 150.00,
      type: "Breakfast",
      image: "../../../assets/anahi-xrbd.jpeg",
      foodImg: "../../../assets/enfrijoladas.jpeg"
    },
    {
      id: 6,
      packageName: "Lolita Ayala",
      description: "\"Phil Barrera\" salad (with spinach, cranberry, tajín chili, apple, peanuts).\nMichoacana's fruit water.\nIncludes a rose with a healthy fact saying \"Información que cura\".",
      price: 120.00,
      type: "Meal",
      image: "../../../assets/Lolita-Ayala.png",
      foodImg: "../../../assets/salad-fruit.jpeg"
    },
    {
      id: 7,
      packageName: "Cuando Calienta El Sol",
      description: "Carne asada with cebollitas.\nBeer \"Sol\" \n Includes an UBER discount​.\n *Don't leave before you finish!",
      price: 180.00,
      type: "Meal",
      image: "../../../assets/Luis-Miguel.jpeg",
      foodImg: "../../../assets/carnita.jpeg"
    },
    {
      id: 8,
      packageName: "Bárbara De Regil",
      description: "Chicken salad.\nGreen juice (pineapple, cucumber, celery, lemon)​.\nBanana cookie without carbs and sugar-free.\n1 wholemeal bread slice.\nIncludes 1 paleta payaso which is always going to SMILE at you.",
      price: 150.00,
      type: "Meal",
      image: "../../../assets/Barbara-Regil.jpeg",
      foodImg: "../../../assets/salad.jpeg"
    },
    {
      id: 9,
      packageName: "Pedrito Sola",
      description: "Breaded sliced chicken with McCormick mayonnaise torta.\nCoca-Cola.\nPudin.\nIncludes a surprise that will make you FLY from the emotion.",
      price: 120.00,
      type: "Meal",
      image: "../../../assets/Pedrito-Sola.jpg",
      foodImg: "../../../assets/torta-pollo.jpeg"
    },
    {
      id: 10,
      packageName: "Sofía Vergara",
      description: "Hamburger with cheese (includes Modern Family sauce and french chips).\nMineral water.\nIncludes a QUAKER cookie.\n",
      price: 150.00,
      type: "Meal",
      image: "../../../assets/Sofia-Vergara.jpeg",
      foodImg: "../../../assets/burger.jpeg"
    },
  ]

  foodSpecials = [
    {id: 1,
      packageName: "Paty Chapoy",
      description: "Scramble eggs with jam, tomato, onion and chilly pepper.\nCoffee.\nVanilla Concha\nIncludes a Ventana Cookie.",
      price: 60.00,
      type: "Breakfast",
      image: "../../../assets/Paty-Chapoy.jpeg",
      foodImg: "../../../assets/paty.jpg"
    },
    {
      id: 5,
      packageName: "Anahí Ex RBD",
      description: "Enfrijoladas of tortilla of nopal (with cheese and filled with tofu).\nMatcha frappe.\nIncludes a collectible RBD Barbie.",
      price: 150.00,
      type: "Breakfast",
      image: "../../../assets/anahi-xrbd.jpeg",
      foodImg: "../../../assets/enfrijoladas.jpeg"
    },
    {
      id: 9,
      packageName: "Pedrito Sola",
      description: "Breaded sliced chicken with McCormick mayonnaise torta.\nCoca-Cola.\nPudin.\nIncludes a surprise that will make you FLY from the emotion.",
      price: 120.00,
      type: "Meal",
      image: "../../../assets/Pedrito-Sola.jpg",
      foodImg: "../../../assets/torta-pollo.jpeg"
    },
    {
      id: 8,
      packageName: "Bárbara De Regil",
      description: "Chicken salad.\nGreen juice (pineapple, cucumber, celery, lemon)​.\nBanana cookie without carbs and sugar-free.\n1 wholemeal bread slice.\nIncludes 1 paleta payaso which is always going to SMILE at you.",
      price: 150.00,
      type: "Meal",
      image: "../../../assets/Barbara-Regil.jpeg",
      foodImg: "../../../assets/salad.jpeg"
    }
  ]

}
