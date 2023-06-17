//Q1----------------------


function Animal(name){
    this.name=name;
    }
  
    Animal.prototype.intro= function (){
     console.log("hello my name is "+this.name)
    }
   
    function Dog (name,breed){
    Animal.call(this,name)
   this.breed=breed
   }
  
   Dog.prototype=Object.create(Animal.prototype)

   Dog.prototype.intro2 =function (){
   console.log("i am a "+this.breed)
   }
  
    var animal =new Animal("Max")
   console.log(animal)
   animal.intro()
  
  var dog= new Dog("Pluto","labrador")
  console.log(dog)
  dog.intro()
  dog.intro2()


  //Q2-----------------
  function Parent() {
    this.parentProperty = 'Parent Property';
  }
  
  
  Parent.prototype.parentMethod = function() {
    console.log("This is a method in the parent object.");
  };
  
 
  function Child() {
    this.childProperty = 'Child Property';
  }
  
 
  Child.prototype = new Parent();
  

  var childObj = new Child();
  
 
  console.log(childObj.childProperty); 
  childObj.parentMethod(); 
  console.log(childObj.parentProperty); 

  //Q3----------------------------------------

  Array.prototype.sum = function() {
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
      sum += this[i];
    }
    return sum;
  };
  

  var array1 = [1, 2, 3, 4, 5];
  var array2 = [10, 20, 30];
  
  
  var sum1 = array1.sum();
  var sum2 = array2.sum();
  
  console.log(sum1); // Output: 15
  console.log(sum2); // Output: 60


  //Q4----------------------------

  function getAllPropertyNames(obj) {
    var propertyNames = [];
  
    
    propertyNames = propertyNames.concat(Object.getOwnPropertyNames(obj));

    var prototype = Object.getPrototypeOf(obj);
  
   
    if (prototype !== null) {
      propertyNames = propertyNames.concat(getAllPropertyNames(prototype));
    }
  
    return propertyNames;
  }
  

  var person = {
    name: 'Alice',
    age: 30
  };
  

  person.__proto__.gender = 'Female';
  
  
  var allPropertyNames = getAllPropertyNames(person);
  
  console.log(allPropertyNames);