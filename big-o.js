class PersonalArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  pusher(val) {
    this.data[this.length] = val;
    this.length++;
    return this.length;
  }

  pop() {
    delete this.data[this.length - 1];
    this.length--;
    return this.length;
  }

  shift() {
    // delete this.data[0];
    // this.length--;
    // return this.length;


    for (let i = 0; i < this.length; i++) {
        this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
    return this.length;
  }

     unshift(val) {
       for (let i = this.length; i > 0; i--) {
        
         this.data[i] = this.data[i - 1];
         
       }
       this.data[0] = val;
       this.length++;
       return this.length;
     }
  lengths() {
    return this.length;
  }

  indexof(val) {
    for (let i = 0; i < this.length; i++) {
        console.log(i, "i");
      if (this.data[i] === val) {
        return i;
      }
    }
    return -1;
  }
}

let hobbies = new PersonalArray();
hobbies.pusher("reading");
hobbies.pusher("coding");
hobbies.pusher("running");
console.log(hobbies);

// hobbies.pop()
// console.log(hobbies)
hobbies.shift()
console.log(hobbies)
hobbies.unshift("dancing")
console.log(hobbies)

// hobbies.slice()
// console.log(hobbies.slice(), "slice")

// hobbies.indexof("coding")
// console.log(hobbies.indexof("coding"), "indexof");
// hobbies.lengths();
// console.log(hobbies.lengths(), "lengths");
// // shift unshift length slice getIndex
