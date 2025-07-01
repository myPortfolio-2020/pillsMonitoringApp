// lexical Scope

const fnOne = () => {
  let a = "a: in one";  
   
  console.log(a);
  const fnTwo = () => {
    let b = "b: in two";   
    console.log(b);
    const fnThree = () => {
      let c = "c: in three";   
      console.log(c); 
    };
    fnThree();
  };
  fnTwo();
};

fnOne();
