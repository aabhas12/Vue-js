var first = new Vue({
   el: '#intro-one',
   data: {
      message: 'My first VueJS Task',
      name: '',
      website: 'https://www.google.com',
      websiteTag: '<a href="https://google.com">New Google</a>',
      age: 5,
      x: 0,
      characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
      ninjas: [
            { name: 'Ryu', age: 25 },
            { name: 'Yoshi', age: 35 },
            { name: 'Ken', age: 55 }
        ],
      y:0,
   },
   methods:{

   },
   computed:{
     addtox:function(){
       console.log("add to x");
       return this.x + this.age;
     },
     addtoy:function() {
       console.log("add to y");
       return this.y + this.age;
     }
   }
});

var second = new Vue({
   el: '#intro',
   data: {
      message: 'My first VueJS Task',
      name: '',
      website: 'https://www.google.com',
      websiteTag: '<a href="https://google.com">New Google</a>',
      age: 5,
      x: 0,
      characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
      ninjas: [
            { name: 'Ryu', age: 25 },
            { name: 'Yoshi', age: 35 },
            { name: 'Ken', age: 55 }
        ],
      y:0,
   },
   methods:{

   },
   computed:{
     addtox:function(){
       console.log("add to x");
       return this.x + this.age;
     },
     addtoy:function() {
       console.log("add to y");
       return this.y + this.age;
     }
   }
});
