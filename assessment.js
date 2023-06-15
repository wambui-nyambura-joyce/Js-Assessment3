// **Ancestral Stories:** In many African cultures, the art of storytelling is passed
// down from generation to generation. Imagine you're creating an application that
// records these oral stories and translates them into different languages. The
// stories vary by length, moral lessons, and the age group they are intended for.
// Think about how you would model `Story`, `StoryTeller`, and `Translator`
// objects, and how inheritance might come into play if there are different types of
// stories or storytellers.

       //Pseudo code
       //Input
      //  length,morallessons,ageGroup
      // Output
      // the types of stories,the story teller and the language,the translator
      // Process
      // Creating a base class of the stories and having subclasses of the types of stories,the story teller
      //  and the translator

// Base Story class
class Story {
    constructor(title, content, ageGroup,length) {
      this.title = title;
      this.content = content;
      this.ageGroup = ageGroup;
      this.length = length
    }
  
    tellStory() {
      console.log(this.content);
    }
  }
  let story = new Story('Tales of the Elephant','animal word',4,'4hrs');
  console.log(story);
  
 
  class Fable extends Story {
    constructor(title, content, ageGroup, moralLesson) {
      super(title, content, ageGroup);
      this.moralLesson = moralLesson;
    }
  }
  let fable = new Fable('Tales of Zebra','Zebras feeding',3,'Caring for the animals');
  console.log(fable);
  
  class Myth extends Story {
    constructor(title, content, ageGroup, origin) {
      super(title, content, ageGroup);
      this.origin = origin;
    }
  }
  let myth = new Myth('Mystery of Giraffes','Giraffes have hands',15,'Grandparents')
  console.log(myth);
  
  
  class StoryTeller {
    constructor(name, language) {
      this.name = name;
      this.language = language;
    }
  
    tellStory(story) {
      console.log(`Story Title: ${story.title}`);
      console.log(`Age Group: ${story.ageGroup}`);
      console.log(`Language: ${this.language}`);
      story.tellStory();
    }
  }
let storyteller = new StoryTeller('Joan','Kikuyu')
console.log(storyteller);
story.tellStory()
  
  // Translator class
  class Translator {
    constructor(languageFrom, languageTo) {
      this.languageFrom = languageFrom;
      this.languageTo = languageTo;
    }
    translate(story) {
        
      }
} 


// question2
// **African Cuisine:** You're creating a recipe app specifically for African cuisine.
// The app needs to handle recipes from different African countries, each with its
// unique ingredients, preparation time, cooking method, and nutritional
// information. Consider creating a `Recipe` class, and think about how you might
// create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
// `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
// methods.

   //Pseudo code
        // Input
        // ingredients,preparation time,cooking method,nutritional information
        // Output
        // different types of recipes with different properties
        // Process
        // creating a base class for the recipe and having the subclasses that will help us create subclasses
        // with different methods and properties



class Recipe {
  constructor(name, country, ingredients, preparationTime, cookingMethod, nutritionalInfo) {
    this.name = name;
    this.country = country;
    this.ingredients = ingredients;
    this.preparationTime = preparationTime;
    this.cookingMethod = cookingMethod;
    this.nutritionalInfo = nutritionalInfo;
  }

  displayRecipe() {
    console.log(`Recipe: ${this.name}`);
    console.log(`Country: ${this.country}`);
    console.log(`Ingredients: ${this.ingredients.join(", ")}`);
    console.log(`Preparation Time: ${this.preparationTime}`);
    console.log(`Cooking Method: ${this.cookingMethod}`);
    console.log(`Nutritional Information: ${this.nutritionalInfo}`);
  }
}

class MoroccanRecipe extends Recipe {
  constructor(name, ingredients, preparationTime, cookingMethod, nutritionalInfo, spices) {
    super(name, "Morocco", ingredients, preparationTime, cookingMethod, nutritionalInfo);
    this.spices = spices;
  }

  displayRecipe() {
    super.displayRecipe();
    console.log(`Spices: ${this.spices.join(", ")}`);
  }
}

class EthiopianRecipe extends Recipe {
  constructor(name, ingredients, preparationTime, cookingMethod, nutritionalInfo, injera) {
    super(name, "Ethiopia", ingredients, preparationTime, cookingMethod, nutritionalInfo);
    this.injera = injera;
  }

  displayRecipe() {
    super.displayRecipe();
    console.log(`Injera: ${this.injera}`);
  }
}

class NigerianRecipe extends Recipe {
  constructor(name, ingredients, preparationTime, cookingMethod, nutritionalInfo, jollofRice) {
    super(name, "Nigeria", ingredients, preparationTime, cookingMethod, nutritionalInfo);
    this.jollofRice = jollofRice;
  }

  displayRecipe() {
    super.displayRecipe();
    console.log(`Jollof Rice: ${this.jollofRice}`);
  }
}


// Create Moroccan recipe
const moroccanRecipe = new MoroccanRecipe(
  "Tagine",
  ["Chicken", "Onions", "Tomatoes", "Spices"],
  "1 hour",
  "Stew",
  "Calories: 400",
  ["Cumin", "Coriander", "Cinnamon"]
);
moroccanRecipe.displayRecipe();

// Create Ethiopian recipe
const ethiopianRecipe = new EthiopianRecipe(
  "Doro Wat",
  ["Chicken", "Onions", "Berbere", "Spices"],
  "2 hours",
  "Stew",
  "Calories: 500",
  "Injera bread"
);
ethiopianRecipe.displayRecipe();

// Create Nigerian recipe
const nigerianRecipe = new NigerianRecipe(
  "Jollof Rice",
  ["Rice", "Tomatoes", "Peppers", "Onions", "Chicken", "Spices"],
  "45 minutes",
  "Cooking",
  "Calories: 600",
  "Yes"
);
nigerianRecipe.displayRecipe();


// question7
// Create a FlightBooking class that represents a flight booking system. Implement
// methods to search for available flights based on destination and date, reserve
// seats for customers, manage passenger information, and generate booking
// confirmations.

// Pseudo code 
// input 
// destination,time,reserved seats,passanger instanceof,booking 
// output
// flights available,passenger that has booked,bookings 
class FlightBooking {
    constructor() {
      this.flights = [];
      this.bookings = [];
    }
    
  
    searchFlights(destination, date) {
      return this.flights.filter((flight) => flight.destination === destination && flight.date === date);
    }
  
    reserveSeat(flightId, passenger) {
      const flight = this.flights.find((flight) => flight.id === flightId);
      if (flight) {
        if (flight.availableSeats > 0) {
          flight.availableSeats;
          const booking = {
            flightId: flight.id,
            passenger: passenger,
          };
          this.bookings.push(booking);
          return booking;
        } else {
          console.log("No available seats for this flight.");
        }
      } else {
        console.log("Flight not found.");
      }
    }
    
  }
  
  class Flight {
    constructor(id, destination, date, availableSeats) {
      this.id = id;
      this.destination = destination;
      this.date = date;
      this.availableSeats = availableSeats;
    }
  }
  
  let flightBooking = new FlightBooking();

  let flight1 = new Flight("FL1", "Rwanda", "2023-06-20", 100);
  let flight2 = new Flight("FL2", "Ethiopia", "2023-06-22", 80);
  // flightBooking.addFlight(flight1);
  flightBooking.addFlight(flight2);
  console.log(flightBooking);
  





// question8
// Create a class called Product with attributes for name, price, and quantity.
// Implement a method to calculate the total value of the product (price * quantity).
// Create multiple objects of the Product class and calculate their total values.
class Product {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  
    calculateTotalValue() {
      return this.price * this.quantity;
    }
  }
  
  let product1 = new Product("Item 1", 10, 5);
  let product2 = new Product("Item 2", 15, 3);
  let product3 = new Product("Item 3", 20, 2);
  
  let totalValue1 = product1.calculateTotalValue();
  let totalValue2 = product2.calculateTotalValue();
  let totalValue3 = product3.calculateTotalValue();
  
  console.log(` ${totalValue1}`);
  console.log(` ${totalValue2}`);
  console.log(` ${totalValue3}`);
  

















