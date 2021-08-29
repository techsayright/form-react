// import React, { useState } from 'react'
import { useRef } from 'react'
import  './Form.css'


// this first one of getting input field values is ex of controlled Component---------------------------
// export const Form = (props) => {

//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");
//     const [age, setAge] = useState("");
//     const [gender, setGender] = useState("");
//     const [hobby, setHobby] = useState([]);
//     const [country, setCountry] = useState("");
//     const [password, setPassword] = useState("");

//     // this is Array pushing or poping the value of checkbox
//     const checkBoxHandler= (e, newVal)=>{
//         let isValid = e.target.checked;
//         if(isValid){
//             setHobby((preVal)=>{
//                 return [newVal, ...preVal]
//             })
//         }
//         else if(!isValid){
//             if(hobby.includes(newVal)){
//                 let newArray = hobby.filter((v)=>{
//                     return v !== newVal;
//                 });

//                 setHobby([...newArray]);
//             }
//         }
//     }
    
//     const formDataHandler = e =>{
//         e.preventDefault();
        
//         // setting the phone length
//         if(phone.length < 10 || phone.length > 10){
//             alert("Phone number length must be 10");
//         }
//         // setting the hobby if user has not selected
//         else if(hobby.length===0){
//             alert("Please!!..Select one of the Option in Hobby")
//         }
//         else{
//             const objValues = {
//                 name: name,
//                 email: email,
//                 phone: phone,
//                 age: age,
//                 gender: gender,
//                 hobby: hobby,
//                 country: country,
//                 password : password
//             }
    
//             // console.log(objValues);

//             // push the all values through arguments
//             props.onSubmitData(objValues);
    
//             // let's reset the values
//             setName("");
//             setEmail("");
//             setPhone("");
//             setAge("");
//             setGender("");
//             setHobby([]);
//             setCountry("");
//             setPassword("");
//         }
//     }

//     return (
//         <form onSubmit={formDataHandler}>
//             <div className="form-control">

//                 <div className="name">
//                     <input type="text" name="name" id="name" placeholder="Enter Name" value={name} onChange={(e)=>{setName(e.target.value)}} required/>
//                 </div>

//                 <div className="email">
//                     <input type="email" name="email" id="email" placeholder="Enter Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required />
//                 </div>

//                 <div className="phone">
//                     <input type="number" name="phone" id="phone" placeholder="Enter Phone Number" value={phone} onChange={(e)=>{setPhone(e.target.value)}} required/>
//                 </div>

//                 <div className="age">
//                     <input type="number" name="age" id="age" placeholder="Enter age" value={age} onChange={(e)=>{setAge(e.target.value)}} required />
//                 </div>

//                 <div className="gender" onChange={(e)=>{setGender(e.target.value)}} >
//                     <label htmlFor="gender"><strong>Select Gender:</strong></label> <br />
//                     <input type="radio" name="gender" id="male" value= "Male" checked={(gender==="" || gender==="Female") ? false : true}  required/>
//                     <label htmlFor="male">Male</label> &nbsp;
//                     <input type="radio" name="gender" id="female" value="Female" checked={(gender==="" || gender==="Male") ? false : true} required/>
//                     <label htmlFor="female">Female</label>
//                 </div>

//                 <div className="hobbies" onChange={(e)=>{ checkBoxHandler(e, e.target.value)}} >
//                     <label htmlFor="hobby"><strong>Select Hobbies:</strong></label> <br />
//                     <input type="checkbox" name="hobby" id="hobby1" value="Playing" checked={hobby.includes("Playing") ? true : false} />
//                     <label htmlFor="hobby1"> I Love to Playing</label> <br />

//                     <input type="checkbox" name="hobby" id="hobby2" value="Reading" checked={hobby.includes("Reading") ? true : false} />
//                     <label htmlFor="hobby2"> I Love to Reading</label> <br />

//                     <input type="checkbox" name="hobby" id="hobby3" value="Travelling" checked={hobby.includes("Travelling") ? true : false} />
//                     <label htmlFor="hobby3"> I Love to Travelling</label> <br />

//                     <input type="checkbox" name="hobby" id="hobby4" value="Coding" checked={hobby.includes("Coding") ? true : false} />
//                     <label htmlFor="hobby4"> I Love to Coding</label>
//                 </div>


//                 <div className="country">
//                     <select name="counrty" id="country" value={country} onChange={(e)=>{setCountry(e.target.value)}} required>
//                         <option value="" defaultValue={""} >--Select Country--</option>
//                         <option value="India" >India</option>
//                         <option value="USA" >USA</option>
//                         <option value="Japan" >Japan</option>
//                         <option value="China" >China</option>
//                     </select>
//                 </div>

//                 <div className="password">
//                     <input type="password" name="password" id="password" placeholder="Enter password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
//                 </div>

//                 <div className="sButton">
//                     <button type="submit" id="sButton">Submit</button>
//                 </div>

//             </div>
//         </form>
//     )
// }



// final uncontrolled

// export const Form = (props) => {

//     const name= useRef(null);
//     const email= useRef(null);
//     const phone= useRef(null);
//     const age= useRef(null);
//     const gender= useRef(null);
//     const hobbyRef= useRef(null);
//     const country= useRef(null);
//     const password= useRef(null);
//     const formRef = useRef(null)
    
//     const [hobby, setHobby] = useState([]);
//     console.log(hobby);
    
//     const checkBoxHandler= (e, newVal)=>{
//                 let isValid = e.target.checked;
//                 console.log(isValid);
//                 if(isValid){
//                     setHobby((preVal)=>{
//                         return [newVal, ...preVal]
//                     })
//                 }
//                 else if(!isValid){
//                     if(hobby.includes(newVal)){
//                         let newArray = hobby.filter((v)=>{
//                             return v !== newVal;
//                         });
        
//                         setHobby([...newArray]);
//                     }
//                     else{
//                         console.log("hello else")
//                     }
//                 }
//             }
    
//     const formDataHandler = e =>{
//         e.preventDefault();
        
//         console.log(e);
//         // setting the phone length in a ref value
//         if(phone.current.value.length < 10 || phone.current.value.length > 10){
//             alert("Phone number length must be 10");
//             phone.current.focus();
//         }
        
//         else if(hobby.length===0){
//             alert("Please!!..Select one of the Option in Hobby")
//         }
//         else{
//             const objValues = {
//                 name: name.current.value,
//                 email: email.current.value,
//                 phone: phone.current.value,
//                 age: age.current.value,
//                 gender: (gender.current.checked)? "Female": "Male",
//                 hobby: hobby,
//                 country: country.current.value,
//                 password : password.current.value
//             }
    
//             // console.log(objValues);
    
//             // push the all values through arguments
//             props.onSubmitData(objValues);
    
//             // let's reset the values of form
//             formRef.current.reset();
//             setHobby([]);
            
//             console.log(hobbyRef.current.checked);
            
//         }
//     }
    
//     return (
//         <form  onSubmit={formDataHandler} ref={formRef}>
//             <div className="form-control">
    
//                 <div className="name">
//                     <input type="text" name="name" id="name" placeholder="Enter Name"  ref={name}  required/>
//                 </div>
    
//                 <div className="email">
//                     <input type="email" name="email" id="email" placeholder="Enter Email" ref={email}  required />
//                 </div>
    
//                 <div className="phone">
//                     <input type="number" name="phone" id="phone" placeholder="Enter Phone Number" ref={phone}  required/>
//                 </div>
    
//                 <div className="age">
//                     <input type="number" name="age" id="age" placeholder="Enter age" ref={age}  required />
//                 </div>
    
//                 <div className="gender">
//                     <label htmlFor="gender"><strong>Select Gender:</strong></label> <br />
//                     <input type="radio" name="gender" id="male" value="Male" ref={gender} required/>
//                     <label htmlFor="male">Male</label> &nbsp;
//                     <input type="radio" name="gender" id="female" value="Female" ref={gender}  required/>
//                     <label htmlFor="female">Female</label>
//                 </div>
    
//                 <div className="hobbies" onChange={(e)=>{ checkBoxHandler(e, e.target.value)}} >
//                     <label htmlFor="hobby"><strong>Select Hobbies:</strong></label> <br />
//                     <input type="checkbox" name="hobby" id="hobby1" value="Playing" checked={hobby.includes("Playing") ? true : false} ref={hobbyRef} readOnly/>
//                     <label htmlFor="hobby1"> I Love to Playing</label> <br />
    
//                     <input type="checkbox" name="hobby" id="hobby2" value="Reading" checked={hobby.includes("Reading") ? true : false} ref={hobbyRef} readOnly/>
//                     <label htmlFor="hobby2"> I Love to Reading</label> <br />
    
//                     <input type="checkbox" name="hobby" id="hobby3" value="Travelling" checked={hobby.includes("Travelling") ? true : false} ref={hobbyRef} readOnly/>
//                     <label htmlFor="hobby3"> I Love to Travelling</label> <br />
    
//                     <input type="checkbox" name="hobby" id="hobby4" value="Coding" checked={hobby.includes("Coding") ? true : false} ref={hobbyRef} readOnly/>
//                     <label htmlFor="hobby4"> I Love to Coding</label>
//                 </div>
    
    
//                 <div className="country"> 
//                     <select name="counrty" id="country" ref={country}  required>
//                         <option value="" defaultValue={""} >--Select Country--</option>
//                         <option value="India" >India</option>
//                         <option value="USA" >USA</option>
//                         <option value="Japan" >Japan</option>
//                         <option value="China" >China</option>
//                     </select>
//                 </div>
    
//                 <div className="password">
//                     <input type="password" name="password" id="password" placeholder="Enter password" ref={password} required/>
//                 </div>
    
//                 <div className="sButton">
//                     <button type="submit" id="sButton">Submit</button>
//                 </div>
    
//             </div>
//         </form>
//     )
//     }






// Last but not Least (only useRef) -------------------------------
export const Form = (props) => {

    const name= useRef(null);
    const email= useRef(null);
    const phone= useRef(null);
    const age= useRef(null);
    const gender= useRef(null);
    const hobby= useRef(null);
    const country= useRef(null);
    const password= useRef(null);
    const formRef = useRef(null)
    
    console.log(hobby.current);
    
    var refHobby=[];
    const checkBoxHandler= (e)=>{
            
                
                let indexVal =  refHobby.indexOf(e.target.value);

                if(e.target.checked){
                    refHobby.push(e.target.value)
                    hobby.current=[...refHobby] //hobby.current is mutable so
                }
                else{
                    if(refHobby.includes(e.target.value)){
                        refHobby.splice(indexVal,1)
                        hobby.current=[...refHobby]
                    }
                }
                
                console.log(hobby.current);
                console.log(refHobby);

                
            }
    
    const formDataHandler = e =>{
        e.preventDefault();
        
        // setting the phone length in a ref value
        if(phone.current.value.length < 10 || phone.current.value.length > 10){
            alert("Phone number length must be 10");
            phone.current.focus();
        }
        
        else if(hobby.length===0){
            alert("Please!!..Select one of the Option in Hobby")
        }
        else{
            const objValues = {
                name: name.current.value,
                email: email.current.value,
                phone: phone.current.value,
                age: age.current.value,
                gender: (gender.current.checked)? "Female": "Male",
                hobby: hobby.current,
                country: country.current.value,
                password : password.current.value
            }
    
            // console.log(objValues);
    
            // push the all values through arguments
            props.onSubmitData(objValues);
    
            // let's reset the values of form
            hobby.current=null

            formRef.current[6].checked=false
            formRef.current[7].checked=false
            formRef.current[8].checked=false
            formRef.current[9].checked=false

            // console.log(formRef)
            formRef.current.reset();
            

            
            
        }
    }
    
    return (
        <form  onSubmit={formDataHandler} ref={formRef}>
            <div className="form-control">
    
                <div className="name">
                    <input type="text" name="name" id="name" placeholder="Enter Name"  ref={name}  required/>
                </div>
    
                <div className="email">
                    <input type="email" name="email" id="email" placeholder="Enter Email" ref={email}  required />
                </div>
    
                <div className="phone">
                    <input type="number" name="phone" id="phone" placeholder="Enter Phone Number" ref={phone}  required/>
                </div>
    
                <div className="age">
                    <input type="number" name="age" id="age" placeholder="Enter age" ref={age}  required />
                </div>
    
                <div className="gender">
                    <label htmlFor="gender"><strong>Select Gender:</strong></label> <br />
                    <input type="radio" name="gender" id="male" value="Male" ref={gender} required/>
                    <label htmlFor="male">Male</label> &nbsp;
                    <input type="radio" name="gender" id="female" value="Female" ref={gender}  required/>
                    <label htmlFor="female">Female</label>
                </div>
    
                <div className="hobbies" onChange={checkBoxHandler} ref={hobby}>
                    <label htmlFor="hobby"><strong>Select Hobbies:</strong></label> <br />
                    <input type="checkbox" name="hobby" id="hobby1" value="Playing" />
                    <label htmlFor="hobby1"> I Love to Playing</label> <br />
    
                    <input type="checkbox" name="hobby" id="hobby2" value="Reading" />
                    <label htmlFor="hobby2"> I Love to Reading</label> <br />
    
                    <input type="checkbox" name="hobby" id="hobby3" value="Travelling" />
                    <label htmlFor="hobby3"> I Love to Travelling</label> <br />
    
                    <input type="checkbox" name="hobby" id="hobby4" value="Coding" />
                    <label htmlFor="hobby4"> I Love to Coding</label>
                </div>
    
    
                <div className="country"> 
                    <select name="counrty" id="country" ref={country}  required>
                        <option value="" defaultValue={""} >--Select Country--</option>
                        <option value="India" >India</option>
                        <option value="USA" >USA</option>
                        <option value="Japan" >Japan</option>
                        <option value="China" >China</option>
                    </select>
                </div>
    
                <div className="password">
                    <input type="password" name="password" id="password" placeholder="Enter password" ref={password} required/>
                </div>
    
                <div className="sButton">
                    <button type="submit" id="sButton">Submit</button>
                </div>
    
            </div>
        </form>
    )
    }
