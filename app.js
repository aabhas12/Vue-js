new Vue({
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
     greet:function(time){
       return 'My Name is ' + this.name + ' ' + time
     },
     add:function(number){
       this.x +=number;
     },
     substract:function(number){
       this.y -=number;
     },
     updateXY:function(event){
       this.x = event.offsetX;
       this.y = event.offsetY;
     },
     // addtox:function(){
     //   return this.x + this.age;
     // },
     // addtoy:function() {
     //   return this.y + this.age;
     // }
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
