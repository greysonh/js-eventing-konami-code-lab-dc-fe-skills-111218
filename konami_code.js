const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init () {
  
  let index = 0
  
  document.body.addEventListener("keydown", function(e) {
    const key = e.detail || e.which;
    
    console.log("key = " + key);
    console.log("index = " + index);
    console.log("code[index]= " + code[index]);
    
    if (code[index] === key) {
      index ++;
    } else {
      index = 0;
    }
    
    console.log(key);
  })
}

init();
