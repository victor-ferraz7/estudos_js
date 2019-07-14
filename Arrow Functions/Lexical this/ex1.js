var normal = function(){
    return this === obj;
};

var arrow = () =>{
    return this === window;
};

var obj = {normal: normal,  arrow: arrow};

console.log(normal());// false
