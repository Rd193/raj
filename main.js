let inp = document.getElementById("inp");
let valid_expression = true;
let exp = ["+","×","÷","-"];
let toEval = "";
function ev(txt){
  if (txt == "C") {
    toEval = "";
    inp.innerHTML = "";
    valid_expression = true;
  }
  else if(valid_expression && exp.includes(txt) && txt != "="){
    inp.innerHTML+=txt;
    if(txt == "×")
      toEval+="*";
    else if(txt == "÷")
      toEval+= "/";
    else
      toEval+= txt;
    valid_expression = false;
  }
  else if(! exp.includes(txt) && txt != "="){
    inp.innerHTML+=txt;
    toEval+=txt;
  }
  else if(txt == "="){
    if(toEval != "" && !(exp.includes(toEval[0])) && !(exp.includes(toEval[toEval.length-1])) && !valid_expression){
      inp.innerHTML = eval(toEval);
      valid_expression = true;
      toEval = eval(toEval);
    }
  }
  console.log(toEval);
}