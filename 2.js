const person = "John Malkovich"

(() => {
      console.log("Original person was " + person)

      person = "Drew Barrymore"

      console.log("New person " + person)
})()

/* 

Output is error "TypeError: Assignment to constant variable." 
1. There might be semicolumn in a line 1.
2. You can't reassign constant variable.
*/