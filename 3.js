
const newObject = {
    fruit: "strawberry",
    func: () => {
          const self = this
          console.log("outer func: this.fruit = ", this.fruit)
          console.log("outer func: self.fruit = ", self.fruit);
          ((() => {
                console.log("inner func: this.fruit = ", this.fruit)
                console.log("inner func: self.fruit = ", self.fruit)
          })())
    }
}

newObject.func()

/* 
Code return undefined in all cases
1. Firts of all there are some mistakes. Line 8 and Line 11 require extra braces + semicolumn in line 7
2. func in line 3 is arrow function. Such functions doesn't have their own "this" bindings so this is undefined due to gap between window context 

*/