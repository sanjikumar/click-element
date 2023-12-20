document.addEventListener("DOMContentLoaded", () => {
    // Get references to elements
    const clickButton = document.getElementById("clickButton");
    const h3Element = document.getElementById("h3Element");
    const actionElement = document.getElementById("action");
    const element = document.getElementById("element");
    const changeStyleButton = document.getElementById("changeStyleButton");
    
    // Add event listeners
    clickButton.addEventListener("click", () => {
        console.log("Button Clicked");
    });
  
    h3Element.addEventListener("click", () => {
        h3Element.style.fontSize = "200px";
    });
  
    document.getElementById("changeColorButton").addEventListener("click", () => {
        actionElement.style.color = "yellow";
    });
  
    document.getElementById("changeBgColorButton").addEventListener("click", () => {
        actionElement.style.backgroundColor = "red";
    });
  
    changeStyleButton.addEventListener("click", () => {
        change("bg"); // Change background color
        change("color"); // Change text color
    });
  
    function change(e) {
        if (e === "bg") {
            element.style.backgroundColor = "red";
        } else if (e === "color") {
            element.style.color = "yellow";
        }
    }
  });
  
  
  /*
       list of some commonly used JavaScript event listeners:
  
  click: Fires when a mouse click event occurs on an element.
  
          <button id="clickButton">Click Me</button>
          <script>
              const button = document.getElementById("clickButton");
              button.addEventListener("click", () => {
                  alert("Button clicked!");
              });
          </script>
  
  
  
  dblclick: Fires when a mouse double-click event occurs on an element.
  
          <div id="doubleClickDiv">Double Click Me</div>
          <script>
              const div = document.getElementById("doubleClickDiv");
              div.addEventListener("dblclick", () => {
                  alert("Double-clicked the div!");
              });
          </script>
  
  mouseenter: Fires when the mouse enters an element's boundary.
  mouseleave: Fires when the mouse leaves an element's boundary.
  
            <div id="hoverDiv">Hover Over Me</div>
            <script>
                const div = document.getElementById("hoverDiv");
                div.addEventListener("mouseenter", () => {
                    div.style.backgroundColor = "lightblue";
                });
                div.addEventListener("mouseleave", () => {
                    div.style.backgroundColor = "white";
                }); 
            </script>
  
  
  mousemove: Fires when the mouse pointer moves over an element.
  mousedown: Fires when a mouse button is pressed down on an element.
  mouseup: Fires when a mouse button is released on an element.
  
  
  keydown: Fires when a keyboard key is pressed down.
  keyup: Fires when a keyboard key is released.
  keypress: Fires when a key is pressed and released.
  
            <input id="textInput" type="text">
            <script>
                const input = document.getElementById("textInput");
                input.addEventListener("keydown", (event) => {
                    console.log("Key down: " + event.key);
                });
                input.addEventListener("keyup", (event) => {
                    console.log("Key up: " + event.key);
                });
                input.addEventListener("keypress", (event) => {
                    console.log("Key pressed: " + event.key);
                });
            </script>
  
  input: Fires when the value of an input element changes.
  change: Fires when the value of a form element (like a <select> or <input type="checkbox">) changes.
  submit: Fires when a form is submitted.
  focus: Fires when an element gains focus (e.g., through clicking or tabbing).
  blur: Fires when an element loses focus.
  load: Fires when a resource (e.g., an image or a page) finishes loading.
  unload: Fires when a resource is about to be unloaded (e.g., when the page is being closed).
  resize: Fires when the window or an element is resized.
  scroll: Fires when the content of an element is scrolled.
  contextmenu: Fires when the context menu (right-click menu) is triggered.
  touchstart: Fires when a touch event starts on a touch-enabled device.
  touchmove: Fires when a touch point is moved during a touch event.
  touchend: Fires when a touch event ends on a touch-enabled device.
  
  */