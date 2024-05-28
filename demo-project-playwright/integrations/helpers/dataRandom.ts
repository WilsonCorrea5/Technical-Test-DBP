export function randomValue(param) {
    const value = param[Math.floor(Math.random() * param.length)];
    return value;
  }
  
  export const generateUser =()=> {
    const user = (Math.random() + 1).toString(36).substring(2);
    return  user;
  }