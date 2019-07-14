let prints = []

for(let i = 0; i < 3; i++){
    prints.push(() => console.log(i))
}

prints.forEach(f => f())