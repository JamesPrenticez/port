class Tile {
  constructor(container) {
    this.container = container;
    this.cards = Array.from(this.container.querySelectorAll('.tile-component-card'));
    this.screenSize = window.innerWidth < 500 ? "mobile" : (window.innerWidth < 900 ? "tablet" : (window.innerWidth < 1200 ? "tablet-large" : "desktop"));
    this.columnCount = container.getAttribute("data-column-count");
    
    observeIntersection(this.container, this.handleResize, "resize", 200)
    observeIntersection(this.container, this.handleMobileClick, "click")

  }

  initComponent() {
    this.handleColumnCount();
    this.cards.forEach((card, index) => {
      this.setCardBgImage(index);
    });
  }

  handleMobileClick = (e) => {
    if(this.screenSize === "mobile"){
      if (e && e.target.closest(".tile-component-card")) {
        if(e.target.classList.contains("__link")) return;
        e.preventDefault();
      } 
    }
  }

  handleResize = () => {
    // Update variable
    this.screenSize = window.innerWidth < 500 ? "mobile" : (window.innerWidth < 900 ? "tablet" : (window.innerWidth < 1200 ? "tablet-large" : "desktop"));

    // Call functions
    this.handleColumnCount();
  }

  handleColumnCount = () => {
    switch (this.screenSize) {
      case "desktop":
        if(this.columnCount !== 4){
          this.setGridTemplateColumns(this.columnCount)
        } else {
          this.setGridTemplateColumns(4)
        }
        break;
      case "tablet-large":
        if(this.columnCount <= 3){
          this.setGridTemplateColumns(this.columnCount)
        } else {
          this.setGridTemplateColumns(3)
        }
        break;
      case "tablet":
        this.setGridTemplateColumns(2)
        break;
      case "mobile":
        this.setGridTemplateColumns(1)
        break;
      default:
        this.setGridTemplateColumns(4)
    }
  }

  setGridTemplateColumns = (count) => {
    this.container.style.gridTemplateColumns = `repeat(${count}, 1fr)`
  }
  
  setCardBgImage = (index) => {
    const bgImgUrl = this.cards[index].getAttribute("data-bg-img");

    if (bgImgUrl !== '') {
      this.cards[index].children[0].style.backgroundImage = `url(${bgImgUrl})`;
    }
  }

}

export default Tile;
// document.addEventListener('DOMContentLoaded', function () {
//   const containers = document.querySelectorAll('.tile-component-container');
//   containers.forEach(container => new Tile(container).initComponent());
// });

// ==== 

/**
  * Observes the intersection of an element with the viewport and triggers a callback when it becomes visible.
  * @param {HTMLElement} element - The element to observe for intersection.
  * @param {Function} callback - The callback function to execute when the element becomes visible.
  * @param {string} [eventType] - Optional. The HTML event type to listen for after the element becomes visible (e.g., "resize", "click", "keydown").
  * @param {number} [debounceTime] - Optional. The debounce time (in milliseconds) for the callback. If not provided, the callback will not be debounced.
  * @returns {void}
  * 
  * Note: 
  *   1. This function can either be used to append a event to the DOM 
  *   OR
  *   2. This function can be used to simply fire a callback function
  *
  * =================================
  * Example usage - Simple function
  * =================================
  * 
  * const containers = document.querySelectorAll('.my-container');
  * const firstContainer = containers[0];
  * 
  * function myFunction(){
  *  console.log("this function fires when firstContainer is in the viewport")
  * }
  * 
  * observeIntersection(firstContainer, myFunction);
  * 
  * =================================
  * Example usage - With click event:
  * =================================
  * 
  * const containers = document.querySelectorAll('.my-container');
  * const firstContainer = containers[0];
  * 
  * function handleClick(e){
  *   if(!e) return;
  *   e.preventDefault();
  *   console.log(`click event fired on ${e.target}`)
  * }
  * 
  * observeIntersection(firstContainer, (e) => handleClick(e), "click", 200));
**/

// Reusable intersection observer function
function observeIntersection(element, callback, eventType, debounceTime) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback();

        // Remove the observer if needed
        observer.unobserve(entry.target);

        // Add the event listener when the container is in viewport
        if (eventType) {
          if (debounceTime) {
            window.addEventListener(eventType, debounce(callback, debounceTime));
          } else {
            window.addEventListener(eventType, callback);
          }
        } else {
          if (debounceTime) {
            debounce(callback, debounceTime)();
          }
        }
      }
    });
  });

  observer.observe(element);
}

// Reusable debounce function
function debounce(func, delay) {
  let timer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(context, args), delay);
  };
}