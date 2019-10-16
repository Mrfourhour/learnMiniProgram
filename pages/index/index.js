Page({

  data:{
    name :"18",
    count:0,
    students:[
      {id:100,age:18,name:'张三'},
      { id: 101, age: 19, name: 'lishi' },
      { id: 102, age: 45, name: '王五' }
    ]
  },

  add(){
   this.setData({
     count : this.data.count + 1
   })
  },

   sub() {
    this.setData({
      count: this.data.count - 1
    })
  }
})