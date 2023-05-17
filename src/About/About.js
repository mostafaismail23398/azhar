import React from 'react'
import './about.css'
import AOS from 'aos';
import 'aos/dist/aos.css'


class About extends React.Component{
  componentDidMount (){
    AOS.init();
  }
  state={
    items:[
      {name:'mobile',price:100,desc:'loremmmm'},
      {name:'mobile',price:100,desc:'loremmmm'},
      {name:'mobile',price:100,desc:'loremmmm'},
      {name:'mobile',price:100,desc:'loremmmm'},
      {name:'mobile',price:100,desc:'loremmmm'},
    ]
  }
  render (){
   const items = this.state.items
   const itemlist = items.map((item)=>{
    return(
  <div data-aos="fade-down-right" class="card m-3" lg-3>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{item.name}</h5>
    <p class="card-text">{item.price}</p>
    <a href="#" class="btn btn-primary">{item.desc}</a>
  </div>
</div>
    )
   })
  
   return(
    itemlist
   )
  }
 
  
}
export default About