function saySomething(message){
return this.name + " is " + message;
}
var person4 = {name: "John"};
saySomething.apply(person4, ["awesome"]);
