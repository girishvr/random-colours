
const RandomColours=(props)=> {
  const {properties} = props;
  console.log(properties)
  return "#EAECEE";
}

exports.printMsg = function() {
    console.log("This is a message from the demo package");
}

export default RandomColours;