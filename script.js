function generateNumber() {
  const minInput = Math.ceil(document.querySelector(".input-min").value);
  const maxInput = Math.floor(document.querySelector(".input-max").value);

  if (minInput >= maxInput) {
    alert("O valor minimo tem que ser MENOR que o valor máximo");
  } else {
    const result =
      Math.floor(Math.random() * (maxInput - minInput + 1)) + minInput;
    alert(result);
  }
}
