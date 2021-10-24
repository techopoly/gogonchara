const onCheckHandler = (e)=>{
    if(e.target.checked){
        e.target.parentElement.classList.add("onFocus");
    }else{
        e.target.parentElement.classList.remove("onFocus");
    }
    
    console.log(e);
}