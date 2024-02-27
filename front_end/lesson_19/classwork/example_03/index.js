const humanJohn = {
    name: 'John',
    hello: function() {
        console.log(`My name is ${this.name}`)
    }
}

//humanJohn.hello();


// bind, call, apply

//const testVar = humanJohn.hello.bind({name: "Karl"});
//testVar(); // нет контекста

const testVar = humanJohn.hello;
testVar.call({name: "Karl"});

//Практическое применение

document.querySelectorAll('a');
[].map.call(nodesList, callFunction, param2, param3);

[].map.apply(nodesList, callFunction, param2, param3);