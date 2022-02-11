// Creating the dom element that will be hosting our component
const shadowHost = document.createElement("div");
const shadowRoot = shadowHost.attachShadow({ mode: "closed" });
// increment button setup
const incButton = document.createElement("button");
incButton.innerText = "+";
// decrement button setup
const decButton = document.createElement("button");
decButton.innerText = "-";
// Input setup
const counterText = document.createElement("p");
counterText.innerText = 0;

shadowRoot.appendChild(counterText);
shadowRoot.appendChild(decButton);
shadowRoot.appendChild(incButton);

document.getElementById("app").append(shadowHost);

// eventListeners

incButton.addEventListener("click", function () {
  counterText.innerText = Number.parseInt(counterText.innerText, 10) + 1;
});

decButton.addEventListener("click", function () {
  const { innerText: value } = counterText;
  if (value === "0") counterText.innerText = 0;
  else counterText.innerText = Number.parseInt(value, 10) - 1;
});
