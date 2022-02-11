if (!customElements.get("custom-counter"))
  customElements.define(
    "custom-counter",
    class extends HTMLElement {
      constructor() {
        super(); // always call super() first in the constructor.

        // Attach a shadow root to the host tag <custom-counter>.
        const shadowRoot = this.attachShadow({ mode: "closed" });
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

        incButton.addEventListener("click", function () {
          counterText.innerText =
            Number.parseInt(counterText.innerText, 10) + 1;
        });

        decButton.addEventListener("click", function () {
          const { innerText: value } = counterText;
          if (value === "0") counterText.innerText = 0;
          else counterText.innerText = Number.parseInt(value, 10) - 1;
        });
      }
    }
  );
