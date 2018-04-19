new Vue({
   el: '#intro',
   data: {
      message: 'My first VueJS Task',
      name: 'Aabhas',
      website: 'https://www.google.com',
      websiteTag: '<a href="https://google.com">New Google</a>',
      age: 25,
      x: 0,
      y:0
   },
   methods:{
     greet:function(time){
       this.name = 'Ramesh'
       return 'My Name is ' + this.name + ' ' + time
     },
     add:function(number){
       this.age +=number;
     },
     substract:function(number){
       this.age -=number;
     },
     updateXY:function(event){
       this.x = event.offsetX;
       this.y = event.offsetY;
     }
   }
});
