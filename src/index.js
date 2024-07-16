

const pool = ["#EAECEE", 
              "#D5D8DC", 
              "#ABB2B9", 
              "#808B96", 
              "#566573", 
              "#2C3E50", 
              "#273746", 
              "#212F3D", 
              "#1C2833", 
              "#17202A", 
              "#E8F6F3", 
              "#D0ECE7", 
              "#A2D9CE", 
              "#73C6B6", 
              "#45B39D", 
              "#16A085", 
              "#138D75", 
              "#117A65", 
              "#0E6655", 
              "#0B5345"
              ]

const RandomColours=(props)=> {
  
  const {properties} = props;
  console.log(properties)

  // Generate a random index from 0 to array.length - 1
  const randomIndex = Math.floor(Math.random() * pool.length);
  
  return pool[randomIndex];
}


// export default RandomColours;
module.exports = RandomColours
module.exports.default = RandomColours
