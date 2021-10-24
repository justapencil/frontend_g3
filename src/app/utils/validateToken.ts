import  jwt_decode   from 'jwt-decode'

const validateToken = () =>{
    const token = localStorage.getItem('token');

    if (!token) return false;
    const exp = JSON.parse(JSON.stringify(jwt_decode(token))).exp;
    console.log("Diff :"+(exp-Math.floor(Date.now()/1000)));
    if(exp > (Date.now()/1000)) 
    return true;
    else
    return false;
}
export  default validateToken;

