import React,{useState} from 'react'
export default function Main(props) {
    const[text,setText]=useState(''); //useState used

    const handleupClick = (e) => {
        let newtext=text.toUpperCase();
        setText(newtext);
        console.log(text);
        props.showAlert("Changed in Uppercase","Success!");
    }
       const handleChange = (e) => {
        setText(e.target.value);
    }
    const handleloClick = (e) => {
        let newtext=text.toLowerCase();
        setText(newtext);
        console.log(text);
        props.showAlert("Changed in lowercase","Success!");
    }
    const handleclearClick = (e) => {
        setText('');
        console.log(text);
        props.showAlert("","Cleared");
    }
    const handlereClick = (e) => {
       // let newtext=text.split("").reverse().join("");
        setText(text.split("").reverse().join(""));
        console.log(text);
        props.showAlert("","Reversed!");
    }
   const handlerepClick = (e) => {
        
         let x=document.getElementById("first").value;
         let y=document.getElementById("second").value;
         let newtext=text.replaceAll(x, y);
         setText(newtext);
         props.showAlert("","Replaced All");

}

const handlescClick=(e)=>{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "));

}

const handleCopy=(e)=>{
    let text=document.getElementById("myBox").value;
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard");
}


    return(
        <>
       <div className='container' style={{position:'relative'}} >
        <h1 style={{color:props.color/*color:props.mode === 'dark'?'white':'black'*/}}>Enter the text</h1>
       <div className="mb-3" style={{position:'relative',zIndex:'1'}} >
       <textarea className='form-control' name="" id="myBox" onChange={handleChange} value={text} rows="10">jj</textarea>
       </div>
       <div style={{position:'absolute',zIndex:'2'}}>
       <button className="btn btn-primary mx-2" onClick={handleupClick}>convert to Uppercase</button>
       <button className="btn btn-primary mx-2" onClick={handleloClick}>convert to LowerCase</button>
       <button className="btn btn-primary mx-2" onClick={handleclearClick}>clear all</button>
       <button className="btn btn-primary mx-2" onClick={handlereClick}>reverse</button>
       <button className="btn btn-primary mx-2" onClick={handleCopy}>text copy</button>
       <a className="nav-link dropdown-toggle mx-2 my-2 " href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">replace</a>
       <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><input style={{padding:'4px',border:"1px solid",margin:"2px",width:"190px"}} className="dropdown-item" type="text" name="" id="first" /></li>
            <h6 style={{padding:'4px',textAlign:"center"}}>TO</h6>
            <li><input  style={{padding:'4px',border:"1px solid",margin:"1px",width:"190px"}} className="dropdown-item" type="text" name="" id="second" /></li>
            <li><button style={{padding:'3px',textAlign:"center",color:'black',border:'1px solid black',borderRadius:'20px',height:'30px',marginTop:'5px'}} className="dropdown-item" onClick={handlerepClick}>Ok</button></li>
          </ul>
       <button className="btn btn-primary mx-2" onClick={handlescClick}>clear whitespaces</button>
       </div>
       </div>
       <div className="container" style={{marginTop:'200px'}}>
        <li style={{color:props.color}} >Words:{text.split(/[ ]+/).length-1}</li>
        <li style={{color:props.color}} >Character:{text.length-text.split(" ").length+1}</li>
       </div>
       <h3  style={{color:props.color}} className='container'><h2>Preview<hr></hr></h2></h3>
       <div  style={{color:props.color}} className='container'>{text.length<1?"Please enter the Text for preview":text}</div> 
       {/*<div class="card" style={{width: 1480,}}>
  <img src="..." class="card-img-top" alt="..."/>
  <img src="..." class="card-img-top" alt="..."/>
  <img src="..." class="card-img-top" alt="..."/>
  <img src="..." class="card-img-top" alt="..."/>
  <img src="..." class="card-img-top" alt="..."/>
  <img src="..." class="card-img-top" alt="..."/>
  <img src="..." class="card-img-top" alt="..."/>
  <img src="..." class="card-img-top" alt="..."/>
  <img src="..." class="card-img-top" alt="..."/>
  <img src="..." class="card-img-top" alt="..."/>
  <img src="..." class="card-img-top" alt="..."/>
  <img src="..." class="card-img-top" alt="..."/>
  <img src="..." class="card-img-top" alt="..."/>
  <img src="..." class="card-img-top" alt="..."/>
  <img src="..." class="card-img-top" alt="..."/>
  <img src="..." class="card-img-top" alt="..."/> 
</div> */} 
</>
    );
}