import React, {createContext, useState,} from "react";
//import axios from "axios";
export const Foodcontext = createContext();
export const FoodProvider=(props)=>
{
    
  const [data]=useState([
   
            {
             id:"1",
             img: "https://i0.wp.com/vegecravings.com/wp-content/uploads/2017/04/paneer-butter-masala-recipe-step-by-step-instructions.jpg?fit=2592%2C1944&quality=65&strip=all&ssl=1",
             titletext: "Paneer Butter Masala",
             maintitle: "Food / January 22, 2022 "
           
           
           },
           {
             id:"2",
             img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/06/rajma-recipe.jpg",
             titletext: "Rajma Masala",
             maintitle: "Food / January 22, 2022 "
         
           
           
           },
           {
             id:"3",
             img: "https://images.hindustantimes.com/img/2021/11/26/1600x900/palak_paneer_thumb_1637919968696_1637919979983.jpg" ,
             titletext: "Palak Paneer",
             maintitle: "Food / January 22, 2022 "
           
           
           },
           {
             id:"4",
             img: "http://www.yummyfoodrecipes.in/resources/picture/org/Karnataka-Style-Masala-Dosa.jpg" ,
             titletext: "Masala Dosa",
             maintitle:"Food / January 22, 2022 "
           
           
           },
           {
             id:"5",
             img: "https://www.vegrecipesofindia.com/wp-content/uploads/2019/01/ven-pongal-recipe-1a.jpg" ,
             titletext: "Pongal",
             maintitle: "Food / January 22, 2022 "
           
           
           },
           
           
           // OBJECTS RELATED TO LATEST ARTICLES IN FOOD PAGE
           
            {
             id:"6",
             img: "https://i0.wp.com/vegecravings.com/wp-content/uploads/2017/04/paneer-butter-masala-recipe-step-by-step-instructions.jpg?fit=2592%2C1944&quality=65&strip=all&ssl=1" ,
             title: "Paneer Butter Masala",
             info: "Paneer butter masala, also known as butter paneer is a  rich  and creamy curry made with paneer, spices, onions, tomatoes, cashews and butter.",
             moreinfo: "Food / January 22, 2022 "
           
           },
           {
             id:"7",
             img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/06/rajma-recipe.jpg" ,
             title: "Rajma Masala",
             info:"Rajma is rich in molybdenum, iron, copper, folate, manganese, potassium and Vitamin K1. Of these, iron aids in several important functions of the body, while Vitamin K1 is important for blood coagulation.",
             moreinfo: "Food/ January 22, 2022 "
           
           },
            {
             id:"8",
             img: "https://images.hindustantimes.com/img/2021/11/26/1600x900/palak_paneer_thumb_1637919968696_1637919979983.jpg" ,
             title: "Palak Paneer",
             info: "Palak paneer (pronounced is a vegetarian dish, consisting of paneer (a type of cottage cheese) in a thick paste made from puréed spinach,",
             moreinfo: "Food / January 22, 2022 "
           
           },
           {
             id:"9",
             img:"http://www.yummyfoodrecipes.in/resources/picture/org/Karnataka-Style-Masala-Dosa.jpg" ,
             title: "Masala Dosa",
             info:"Masala dosa is a variation of the popular South Indian dosa, which has its origins in Udupi cuisine of Karnataka. It is made from rice, lentils, potato, fenugreek, ghee and curry leaves, and served with chutneys and sambar.",
             moreinfo: "Food / January 22, 2022 "
           
           },
           {
             id:"10",
             img: "https://www.vegrecipesofindia.com/wp-content/uploads/2019/01/ven-pongal-recipe-1a.jpg" ,
             title: "Pongal",
             info: "Pongal is a delicious South Indian porridge.",
             moreinfo: "Food / January 22, 2022 "
           
           }
         ]
          
         
       
  );

  // useEffect(()=>{
  //   axios.get("https://blog-app-backend-test.herokuapp.com/api/v1/food").then((res)=>
  //       setData(res.data)
  //   )
    
  //   })


  return(
    <Foodcontext.Provider value={[data]}>
        {props.children}
    </Foodcontext.Provider>
)
}