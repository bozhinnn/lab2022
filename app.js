



function addTwo(num1, num2) {
    let result = num1 + num2;
    return result;
  }
  
  function onClick() {
    const num1 = document.querySelector("#first").value;
    const num2 = document.querySelector("#second").value;
  
    const res = addTwo(parseInt(num1), parseInt(num2));
    let resultDiv = document.querySelector("#result");
    resultDiv.textContent = num1 + " + " + num2 + " = " + res;
  }
  
  const button = document.querySelector("button");
  button.addEventListener("click", onClick);
  
const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
});
