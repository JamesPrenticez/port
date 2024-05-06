class ProcessDisplay {
  constructor(container) {
    this.container = container;
    this.circle = this.container.querySelector(".process-display-circle");
    this.heading = this.container.querySelector(".process-display-heading");
    this.dots = Array.from(this.container.querySelectorAll(".process-display-dot-outter"));
    this.cards = Array.from(this.container.querySelectorAll(".process-display-card-container"));
    this.triangles = Array.from(this.container.querySelectorAll(".process-display-card-triangle"));
    this.dataLength = this.dots.length;
    this.activeId = null;
    this.originalPositions = new Map();
    this.screenSize = window.innerWidth < 500 ? "mobile" : (window.innerWidth < 900 ? "tablet" : "desktop");
    this.hasLoaded = false;

    this.myStepStart = 0;
    this.myStepEnd = 0; 

    // TODO update with intersection observer
    this.handleResize = this.handleResize.bind(this);
    window.addEventListener("resize", this.debounce(this.handleResize, 200));

    this.sizes = {
        desktop: [
          { dataLength: 8, moveAlongStep: null, circleSize: 3600, angle: { start: 0.570, end: 0.14 }, cardSize: { w: 400, h: 400 }, cardOffset: { x: null, y: -70 }, triangleSize: { w: 50, h: 50 }, triangleOffset: {x: -11, y: ( -33) }, dotSize: { w: 50, h: 50 }, cardHeights: new Map() },
          { dataLength: 7, moveAlongStep: null, circleSize: 3600, angle: { start: 0.570, end: 0.14 }, cardSize: { w: 400, h: 500 }, cardOffset: { x: null, y: -70 }, triangleSize: { w: 50, h: 50 }, triangleOffset: {x: -11, y: ( -33) }, dotSize: { w: 50, h: 50 }, cardHeights: new Map() },
          { dataLength: 6, moveAlongStep: null, circleSize: 3600, angle: { start: 0.570, end: 0.14 }, cardSize: { w: 400, h: 500 }, cardOffset: { x: null, y: -70 }, triangleSize: { w: 50, h: 50 }, triangleOffset: {x: -11, y: ( -33) }, dotSize: { w: 50, h: 50 }, cardHeights: new Map() },
          { dataLength: 5, moveAlongStep: null, circleSize: 3600, angle: { start: 0.570, end: 0.14 }, cardSize: { w: 400, h: 500 }, cardOffset: { x: null, y: -70 }, triangleSize: { w: 50, h: 50 }, triangleOffset: {x: -11, y: ( -33) }, dotSize: { w: 50, h: 50 }, cardHeights: new Map() },
          { dataLength: 4, moveAlongStep: null, circleSize: 3600, angle: { start: 0.550, end: 0.10 }, cardSize: { w: 400, h: 500 }, cardOffset: { x: null, y: -70 }, triangleSize: { w: 50, h: 50 }, triangleOffset: {x: -11, y: ( -33) }, dotSize: { w: 50, h: 50 }, cardHeights: new Map() },
          { dataLength: 3, moveAlongStep: null, circleSize: 3600, angle: { start: 0.550, end: 0.10 }, cardSize: { w: 400, h: 500 }, cardOffset: { x: null, y: -70 }, triangleSize: { w: 50, h: 50 }, triangleOffset: {x: -11, y: ( -33) }, dotSize: { w: 50, h: 50 }, cardHeights: new Map() },
          { dataLength: 2, moveAlongStep: null, circleSize: 3600, angle: { start: 0.525, end: 0.05 }, cardSize: { w: 400, h: 500 }, cardOffset: { x: null, y: -70 }, triangleSize: { w: 50, h: 50 }, triangleOffset: {x: -11, y: ( -33) }, dotSize: { w: 50, h: 50 }, cardHeights: new Map() },
        ],
        tablet: [
          { dataLength: 8, moveAlongStep: null, circleSize: 3600, angle: { start: 0.5380, end: 0.0750 }, cardSize: { w: 400, h: 400 }, cardOffset: { x: null, y: -70 }, triangleSize: { w: 50, h: 50 }, triangleOffset: {x: -11, y: ( -33) }, dotSize: { w: 50, h: 50 }, cardHeights: new Map() },
          { dataLength: 7, moveAlongStep: null, circleSize: 3600, angle: { start: 0.5380, end: 0.0750 }, cardSize: { w: 400, h: 500 }, cardOffset: { x: null, y: -70 }, triangleSize: { w: 50, h: 50 }, triangleOffset: {x: -11, y: ( -33) }, dotSize: { w: 50, h: 50 }, cardHeights: new Map() },
          { dataLength: 6, moveAlongStep: null, circleSize: 3600, angle: { start: 0.5380, end: 0.0750 }, cardSize: { w: 400, h: 500 }, cardOffset: { x: null, y: -70 }, triangleSize: { w: 50, h: 50 }, triangleOffset: {x: -11, y: ( -33) }, dotSize: { w: 50, h: 50 }, cardHeights: new Map() },
          { dataLength: 5, moveAlongStep: null, circleSize: 3600, angle: { start: 0.5380, end: 0.0750 }, cardSize: { w: 400, h: 500 }, cardOffset: { x: null, y: -70 }, triangleSize: { w: 50, h: 50 }, triangleOffset: {x: -11, y: ( -33) }, dotSize: { w: 50, h: 50 }, cardHeights: new Map() },
          { dataLength: 4, moveAlongStep: null, circleSize: 3600, angle: { start: 0.5380, end: 0.0750 }, cardSize: { w: 400, h: 500 }, cardOffset: { x: null, y: -70 }, triangleSize: { w: 50, h: 50 }, triangleOffset: {x: -11, y: ( -33) }, dotSize: { w: 50, h: 50 }, cardHeights: new Map() },
          { dataLength: 3, moveAlongStep: null, circleSize: 3600, angle: { start: 0.5380, end: 0.0750 }, cardSize: { w: 400, h: 500 }, cardOffset: { x: null, y: -70 }, triangleSize: { w: 50, h: 50 }, triangleOffset: {x: -11, y: ( -33) }, dotSize: { w: 50, h: 50 }, cardHeights: new Map() },
          { dataLength: 2, moveAlongStep: null, circleSize: 3600, angle: { start: 0.5380, end: 0.0750 }, cardSize: { w: 400, h: 500 }, cardOffset: { x: null, y: -70 }, triangleSize: { w: 50, h: 50 }, triangleOffset: {x: -11, y: ( -33) }, dotSize: { w: 50, h: 50 }, cardHeights: new Map() },
        ],
        // the "9th" dot is for the swipe icon (everything is +1 eg. 5 dot is really 6 dots because of the swipe indicator)
        mobile: [
          { dataLength: 9, moveAlongStep: 0.04150, circleSize: 1200, angle: { start: 0.65, end: 0.29 }, cardSize: { w: 272, h: 250 }, cardOffset: { x: null, y: -80 }, triangleSize: { w: 50, h: 50 }, triangleOffset: { x: -11, y: (-95 + 50) }, dotSize: {w: 50, h: 50}, cardHeights: new Map() },
          { dataLength: 8, moveAlongStep: 0.04150, circleSize: 1200, angle: { start: 0.65, end: 0.29 }, cardSize: { w: 272, h: 250 }, cardOffset: { x: null, y: -80 }, triangleSize: { w: 50, h: 50 }, triangleOffset: { x: -11, y: (-95 + 50) }, dotSize: {w: 50, h: 50}, cardHeights: new Map() },
          { dataLength: 7, moveAlongStep: 0.04825, circleSize: 1200, angle: { start: 0.65, end: 0.29 }, cardSize: { w: 272, h: 250 }, cardOffset: { x: null, y: -80 }, triangleSize: { w: 50, h: 50 }, triangleOffset: { x: -11, y: (-95 + 50) }, dotSize: {w: 50, h: 50}, cardHeights: new Map() },
          { dataLength: 6, moveAlongStep: 0.05800, circleSize: 1200, angle: { start: 0.65, end: 0.29 }, cardSize: { w: 272, h: 250 }, cardOffset: { x: null, y: -80 }, triangleSize: { w: 50, h: 50 }, triangleOffset: { x: -11, y: (-95 + 50) }, dotSize: {w: 50, h: 50}, cardHeights: new Map() },
          { dataLength: 5, moveAlongStep: 0.07250, circleSize: 1200, angle: { start: 0.65, end: 0.29 }, cardSize: { w: 272, h: 250 }, cardOffset: { x: null, y: -80 }, triangleSize: { w: 50, h: 50 }, triangleOffset: { x: -11, y: (-95 + 50) }, dotSize: {w: 50, h: 50}, cardHeights: new Map() },
          { dataLength: 4, moveAlongStep: 0.09650, circleSize: 1200, angle: {start: 0.50, end: 0.176 }, cardSize: { w: 272, h: 250 }, cardOffset: { x: null, y: -80 }, triangleSize: { w: 50, h: 50 }, triangleOffset: { x: -11, y: (-95 + 50) }, dotSize: {w: 50, h: 50}, cardHeights: new Map() },
          { dataLength: 3, moveAlongStep: 0.08800, circleSize: 1200, angle: {start: 0.50, end: 0.076 }, cardSize: { w: 272, h: 250 }, cardOffset: { x: null, y: -80 }, triangleSize: { w: 50, h: 50 }, triangleOffset: { x: -11, y: (-95 + 50) }, dotSize: {w: 50, h: 50}, cardHeights: new Map() },
          { dataLength: 2, moveAlongStep: 0.07600, circleSize: 1200, angle: { start: 0.50, end: 0.01 }, cardSize: { w: 272, h: 250 }, cardOffset: { x: null, y: -80 }, triangleSize: { w: 50, h: 50 }, triangleOffset: { x: -11, y: (-95 + 50) }, dotSize: {w: 50, h: 50}, cardHeights: new Map() },
        ]
    };

    this.chosenValues = this.sizes[this.screenSize].find(item => item.dataLength === this.dataLength);
    this.moveAlongStep = this.chosenValues.moveAlongStep // could remove this and use through out code
    this.initComponents();
    this.initEvents();
  }
  initComponents = () => {
  
    this.addOrRemoveSwipeIndicatorAsRequired();

    const bb = this.circle.getBoundingClientRect();
    const radius = bb.width / 2;
    const angleStep = Math.PI / (this.dataLength - 1) * this.chosenValues.angle.end;
    const startAngle = this.chosenValues.angle.start * Math.PI;

    this.dots.forEach((dot, index) => {
      const angleItem = angleStep * index;
      const position = {
          x: radius * Math.cos(startAngle - angleItem),
          y: radius * Math.sin(startAngle - angleItem)
      };
      const id = index + 1;
      this.originalPositions.set(id, position);
      this.initPositionDot(dot, id);
      this.initPositionCard(this.cards[index], id);
      this.initPositionTriangle(this.triangles[index], id);
    });

    this.initPositionHeading(radius);
    this.enableOverlay();

    if(!this.hasLoaded){
      this.checkAndUpdateDefaultBackgroundImage();
      if(this.screenSize === "mobile"){
        this.activeId = 1
      }
      this.hasLoaded = true;
    }

    if(this.screenSize === "mobile"){
      this.myStepStart = 50 / 100;
      this.myStepEnd = this.chosenValues.angle.end + this.moveAlongStep;
      this.moveAlong(this.myStepStart, this.myStepEnd);
    } else {
      this.myStepStart = this.chosenValues.angle.start
      this.myStepEnd = this.chosenValues.angle.end
    }
  }

  initEvents = () => {
    this.handleSwipe();
    this.container.querySelector('.process-display-chevron-left').addEventListener("click", () => { this.handeClickChevronLeft(); });
    this.container.querySelector('.process-display-chevron-right').addEventListener("click", () => { this.handeClickChevronRight(); });
  }

  setActiveId = (id) => {
    this.activeId = id;
    this.updateActiveItem();
    this.repositionCard(id);
  }

  incrementActiveId = () => {
    if(this.screenSize === "mobile") {
      const newActiveId = this.activeId >= this.dataLength ? 1 : this.activeId + 1;
      this.activeId = this.activeId >= this.dataLength ? 1 : this.activeId + 1;
    } else {
      this.activeId = this.activeId >= this.dataLength ? 1 : this.activeId + 1;
    }

    this.updateActiveItem();
    this.repositionCard(this.activeId);
  }

  decrementActiveId = () => {
    if(this.screenSize === "mobile") {
      const newActiveId = this.activeId <= 1 ? this.dataLength : this.activeId - 1;
      this.activeId = this.activeId <= 1 ? this.dataLength : this.activeId - 1;
    } else {
      this.activeId = this.activeId <= 1 ? this.dataLength : this.activeId - 1;
    }
    this.updateActiveItem();
    this.repositionCard(this.activeId);
  }

  updateActiveItem = () => {
    // For the dot we need the inner most div.
    // So instead of using parentElement.querySelector('.child2');
    // We relie on the nested html structure not changing
    this.dots.forEach(dot => dot.children[0].children[0].classList.remove("process-display-active"));
    this.cards.forEach(card => card.style.opacity = 0);
    this.triangles.forEach(triangle => triangle.style.opacity = 0);
    this.checkAndUpdateDefaultBackgroundImage();
    this.heading.style.opacity = 1
    

    if (this.activeId !== null && this.activeId >= 1 && this.activeId <= this.dataLength) {
      if(this.screenSize === "mobile" && this.activeId === 1) return
      this.dots[this.activeId - 1].children[0].children[0].classList.add("process-display-active");
      this.cards[this.activeId - 1].style.opacity = 1;
      this.triangles[this.activeId - 1].style.opacity = 1;
      this.checkAndUpdateBackgroundImage(this.activeId);
      this.heading.style.opacity = 0
    }
  }

  repositionCard = (id) => {
    if (id === null) return;
    if(!this.cards[id -1]) return;

    const originalPosition = this.originalPositions.get(id);

    const adjustedLeft = originalPosition.x - this.chosenValues.cardSize.w / 2;
    const adjustedTop = originalPosition.y - this.chosenValues.cardHeights.get(id) + this.chosenValues.cardOffset.y;

    // Reposition card based on the active dot
    const leftValue = this.cards[id - 1].getBoundingClientRect().left;
    const centerPointOfViewPort = this.getCenterPointOfViewPort();

    const diffX = -centerPointOfViewPort.x + leftValue;

    // Calculate circle offset difference
    const orgionalCircleOffet = this.chosenValues.circleSize / 2;
    const currentCircleOffset = parseFloat(window.getComputedStyle(this.circle).left) || 0;
    const circleOffsetDiff = -orgionalCircleOffet - currentCircleOffset;
    const magicValue = -centerPointOfViewPort.x + -circleOffsetDiff;

    // Left edge
    if (diffX <= -centerPointOfViewPort.x) {
      this.cards[id - 1].style.transform = `translate(${-centerPointOfViewPort.x + -magicValue}px, ${adjustedTop}px)`;
      return;
    }

    // Right edge
    if (diffX + this.chosenValues.cardSize.w >= centerPointOfViewPort.x) {
      this.cards[id - 1].style.transform = `translate(${centerPointOfViewPort.x - magicValue - this.chosenValues.cardSize.w}px, ${adjustedTop}px)`;
      return;
    }

    // Check if repositioning the card will put it outside the viewport, if so, do nothing (bug fix - only happens on the left)
    if (diffX - this.chosenValues.cardSize.w <= -centerPointOfViewPort.x) return;

    // Reposition card in original location
    this.cards[id - 1].style.transform = `translate(${adjustedLeft}px, ${adjustedTop}px)`;
  }

  moveAlong = (newAngleStart, newAngleEnd) => {
    const bb = this.circle.getBoundingClientRect();
    const radius = bb.width / 2;
    const angleStep = Math.PI / (this.dataLength - 1) * newAngleEnd;
    const startAngle = newAngleStart * Math.PI;

    this.dots.forEach((dot, index) => {
      const angleItem = angleStep * index;
      const position = {
        x: radius * Math.cos(startAngle - angleItem),
        y: radius * Math.sin(startAngle - angleItem)
      };
      
      const id = index + 1;
      this.originalPositions.set(id, position);
      this.initPositionDot(dot, id);
      this.initPositionCard(this.cards[index], id);
      this.initPositionTriangle(this.triangles[index], id);
    });
  }
  
  initPositionHeading = () => {
    const containerTop = this.container.getBoundingClientRect().top;
    const circleBottom = this.circle.getBoundingClientRect().bottom;
    const diff = circleBottom - containerTop
    this.heading.style.top = `${diff / 2}px`
  }
  initPositionDot = (dot, id) => {
    const originalPosition = this.originalPositions.get(id);
    dot.style.transform = `translate(${originalPosition.x}px, ${originalPosition.y}px)`;
    dot.addEventListener("mouseenter", () => this.setActiveId(id));
    dot.addEventListener("mouseleave", () => this.setActiveId(null));
    dot.addEventListener("focus", () => this.setActiveId(id));
    dot.addEventListener("blur", () => this.setActiveId(null));
  }

  initPositionCard = (card, id) => {
    const originalPosition = this.originalPositions.get(id);
    const adjustedLeft = originalPosition.x - this.chosenValues.cardSize.w / 2;

    // Calculate dynamic height based on the content of the card
    const dynamicHeight = this.calculateCardHeight(card);

    // Update card height in chosenValues for later reference (for each specific card)
    this.chosenValues.cardHeights.set(id, dynamicHeight);

    const adjustedTop = originalPosition.y - this.chosenValues.cardHeights.get(id) + this.chosenValues.cardOffset.y;
    card.style.transform = `translate(${adjustedLeft}px, ${adjustedTop}px)`;
  }

  initPositionTriangle = (triangle, id) => {
    const originalPosition = this.originalPositions.get(id);
    const adjustedLeft = originalPosition.x - (this.chosenValues.triangleSize.w + this.chosenValues.triangleOffset.x) / 2;
    const adjustedTop = originalPosition.y - this.chosenValues.triangleSize.h + this.chosenValues.triangleOffset.y;
    triangle.style.transform = `translate(${adjustedLeft}px, ${adjustedTop}px)`;
  }

  calculateCardHeight = (card) => {
    return card.getBoundingClientRect().height;
  }

  handleSwipe = () => {
    let startX;

    this.container.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    this.container.addEventListener("touchmove", (e) => {
        if (!startX) return;

        let currentX = e.touches[0].clientX;
        let deltaX = currentX - startX;

        if (Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                this.onSwipeRight();
            } else {
                this.onSwipeLeft();
            }

            startX = null;
        }
    });
  }
  onSwipeLeft = () => {
    this.incrementActiveId();
    this.initComponents();
    this.myStepStart = 50 / 100 + (this.moveAlongStep * (this.activeId -1));
    this.myStepEnd = this.chosenValues.angle.end + this.moveAlongStep;
    this.moveAlong(this.myStepStart, this.myStepEnd);
  }

  onSwipeRight = () => {
    this.decrementActiveId();
    this.initComponents();
    this.myStepStart = 50 / 100 + (this.moveAlongStep * (this.activeId -1));
    this.myStepEnd = this.chosenValues.angle.end + this.moveAlongStep;
    this.moveAlong(this.myStepStart, this.myStepEnd);
  }

  handeClickChevronLeft = () => {
    this.decrementActiveId();

    if(this.screenSize === "mobile"){
      this.initComponents();
      this.myStepStart = 50 / 100 + (this.moveAlongStep * (this.activeId -1));
      this.myStepEnd = this.chosenValues.angle.end + this.moveAlongStep;
      this.moveAlong(this.myStepStart, this.myStepEnd);
    }
  }

  handeClickChevronRight = () => {
    this.incrementActiveId();

    if(this.screenSize === "mobile"){
      this.initComponents();

      this.myStepStart = 50 / 100 + (this.moveAlongStep * (this.activeId -1));
      this.myStepEnd = this.chosenValues.angle.end + this.moveAlongStep;
      this.moveAlong(this.myStepStart, this.myStepEnd);;
    }
  }

  getCenterPointOfViewPort = () =>  {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    const centerX = screenWidth / 2;
    const centerY = screenHeight / 2;

    return { x: centerX, y: centerY };
  }

  checkAndUpdateBackgroundImage = (id) => {
    const bgImageUrl = this.cards[id - 1].getAttribute("data-process-point-background-image");

    if (bgImageUrl !== '') {
      this.container.style.backgroundImage = `url(${bgImageUrl})`;
    }
  }

  checkAndUpdateDefaultBackgroundImage = () => {
    const bgImageUrl = this.container.getAttribute("data-default-background-image")

    if (bgImageUrl !== '') {
      this.container.style.backgroundImage = `url(${bgImageUrl})`;
    }
  }

  enableOverlay = () => {
    const bgImageUrl = this.container.getAttribute("data-default-background-image")

    if (bgImageUrl !== '') {
      this.container.children[0].style.display = "block"
    }
  }

  handleResize = () => {
    this.screenSize = window.innerWidth < 500 ? "mobile" : (window.innerWidth < 900 ? "tablet" : "desktop");
    this.chosenValues = this.sizes[this.screenSize].find(item => item.dataLength === this.dataLength);
    this.initComponents();
    this.repositionCard(this.activeId);
  }

  debounce = (func, delay) => {
    let timer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(context, args), delay);
    };
  };

  addOrRemoveSwipeIndicatorAsRequired = () => {
    const swipeIconElements = this.container.getElementsByClassName("process-display-swipe-indicator")

    if (this.screenSize === "mobile") {
      if(swipeIconElements.length <= 0){

        const newDot = this.createDot();
        const newSwipeIcon = this.createSwipeIconSVG();
        const newCard = this.createCard();
        const newTriangle = this.createTriangle();
        
        newDot.children[0].appendChild(newSwipeIcon);
        this.circle.insertBefore(newDot, this.dots[0]);
        this.circle.insertBefore(newCard, this.cards[0]);
        this.circle.insertBefore(newTriangle, this.triangles[0]);
      }
    } else if(swipeIconElements.length > 0) {
      Array.from(swipeIconElements).forEach(ele => {
        ele.remove();
      });
    }

    this.dots = Array.from(this.container.querySelectorAll(".process-display-dot-outter"));
    this.cards = Array.from(this.container.querySelectorAll(".process-display-card-container"));
    this.triangles = Array.from(this.container.querySelectorAll(".process-display-card-triangle"));
    this.dataLength = this.dots.length;
    this.chosenValues = this.sizes[this.screenSize].find(item => item.dataLength === this.dataLength);
  }

  createDot = () => {
    const newDot = document.createElement("div");
    newDot.setAttribute("class", "process-display-dot-outter process-display-swipe-indicator");
    const newDotInner = document.createElement('div');
    newDotInner.classList.add("process-display-dot-inner");
    newDot.appendChild(newDotInner);

    return newDot;
  }

  createSwipeIconSVG = () => {
    const newSwipeIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    newSwipeIcon.setAttribute("class", "process-display-swipe-icon process-display-swipe-indicator");
    newSwipeIcon.setAttribute("viewbox", "0 0 24 24");
    newSwipeIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("d", "M13.2 15.0996C12.8 15.0996 12.5 15.3996 12.5 15.7996V19.8996C12.5 20.2996 12.8 20.5996 13.2 20.5996C13.6 20.5996 13.9 20.2996 13.9 19.8996V15.7996C13.9 15.3996 13.6 15.0996 13.2 15.0996Z");
    newSwipeIcon.appendChild(path1);
    
    const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("d", "M15.9031 15.0996C15.5031 15.0996 15.2031 15.3996 15.2031 15.7996V19.8996C15.2031 20.2996 15.5031 20.5996 15.9031 20.5996C16.3031 20.5996 16.6031 20.2996 16.6031 19.8996V15.7996C16.6031 15.3996 16.3031 15.0996 15.9031 15.0996Z");
    newSwipeIcon.appendChild(path2);

    const path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path3.setAttribute("d", "M23.4983 16.4004V15.7004V14.3004C23.4983 12.8004 22.2983 11.6004 20.7983 11.6004C20.4983 11.6004 20.0983 11.7004 19.7983 11.8004C19.3983 10.9004 18.3983 10.3004 17.2983 10.3004C16.9983 10.3004 16.5983 10.4004 16.2983 10.5004C15.8983 9.60039 14.8983 9.00039 13.7983 9.00039C13.5983 9.00039 13.2983 9.00039 13.0983 9.10039V4.30039C13.1983 3.00039 12.0983 1.90039 10.7983 1.90039C9.39832 2.00039 8.39832 3.10039 8.39832 4.40039V14.4004C7.49832 13.5004 6.09832 13.4004 5.19832 14.2004C4.19832 15.0004 3.99832 16.5004 4.79832 17.6004L7.99832 21.6004C9.19832 23.1004 11.0983 24.0004 13.0983 24.0004H15.2983H15.9983H18.6983C21.3983 24.0004 23.4983 21.9004 23.4983 19.2004V16.4004ZM18.4983 22.7004H15.7983H15.0983H12.8983C11.3983 22.7004 9.89832 22.0004 8.89832 20.8004L5.69832 16.8004C5.29832 16.4004 5.39832 15.7004 5.89832 15.4004C6.29832 15.0004 6.99832 15.1004 7.29832 15.6004L8.39832 16.9004C8.69832 17.0004 8.99832 17.1004 9.29832 17.0004C9.59832 16.9004 9.79832 16.6004 9.79832 16.4004L9.59832 4.40039C9.59832 3.80039 10.0983 3.40039 10.5983 3.40039C11.1983 3.40039 11.5983 3.90039 11.5983 4.40039V10.1004C11.5983 10.4004 11.7983 10.6004 11.9983 10.7004C12.1983 10.8004 12.4983 10.8004 12.6983 10.6004C12.8983 10.4004 13.2983 10.3004 13.5983 10.3004C14.2983 10.3004 14.8983 10.9004 14.9983 11.6004C14.9983 11.9004 15.1983 12.1004 15.3983 12.2004C15.5983 12.3004 15.8983 12.2004 16.0983 12.1004C16.2983 11.9004 16.6983 11.7004 16.9983 11.7004C17.6983 11.7004 18.2983 12.3004 18.3983 13.0004C18.3983 13.3004 18.5983 13.5004 18.7983 13.6004C18.9983 13.7004 19.2983 13.6004 19.4983 13.5004C19.6983 13.3004 20.0983 13.1004 20.3983 13.1004C21.1983 13.1004 21.7983 13.7004 21.7983 14.5004V15.9004V16.6004V19.3004C21.8983 21.2004 20.3983 22.7004 18.4983 22.7004Z");
    newSwipeIcon.appendChild(path3);

    const path4 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path4.setAttribute("d", "M18.5984 15.0996C18.1984 15.0996 17.8984 15.3996 17.8984 15.7996V19.8996C17.8984 20.2996 18.1984 20.5996 18.5984 20.5996C18.9984 20.5996 19.2984 20.2996 19.2984 19.8996V15.7996C19.2984 15.3996 18.9984 15.0996 18.5984 15.0996Z");
    newSwipeIcon.appendChild(path4);

    const path5 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path5.setAttribute("d", "M14.3031 3.8H18.7031L17.2031 5.2C17.0031 5.4 17.0031 5.8 17.2031 6.1C17.4031 6.2 17.5031 6.3 17.7031 6.3C17.9031 6.3 18.1031 6.2 18.2031 6.1L20.6031 3.8L20.8031 3.6C20.9031 3.4 21.0031 3.2 21.0031 3.1C21.0031 3 20.9031 2.8 20.7031 2.7L18.0031 0.2C17.9031 0.1 17.8031 0 17.6031 0C17.5031 0 17.3031 0.1 17.1031 0.3C17.0031 0.5 16.9031 0.6 17.0031 0.8C17.0031 0.9 17.1031 1.1 17.2031 1.2L18.7031 2.6H14.3031C14.0031 2.6 13.7031 2.9 13.7031 3.2C13.7031 3.5 14.0031 3.8 14.3031 3.8Z");
    newSwipeIcon.appendChild(path5);

    const path6 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path6.setAttribute("d", "M4.2 5.2L2.7 3.8H7.1C7.5 3.8 7.7 3.4 7.7 3.1C7.7 2.8 7.4 2.5 7.1 2.5H2.7L4.2 1.1C4.3 1 4.4 0.9 4.4 0.7C4.4 0.5 4.3 0.3 4.2 0.2C4 0.1 3.9 0 3.7 0C3.5 0 3.4 0.1 3.2 0.1L0.7 2.7C0.6 2.9 0.5 3 0.5 3.2C0.5 3.4 0.6 3.6 0.7 3.7L0.9 3.9L3.4 6.2C3.5 6.3 3.6 6.4 3.8 6.4C4 6.4 4.1 6.3 4.2 6.2C4.5 5.8 4.5 5.4 4.2 5.2Z");
    newSwipeIcon.appendChild(path6);

    return newSwipeIcon;
  }

  createCard = () => {
    // We dont acutally want to create a triangle here
    // its just for the swipe icon and saves us from checking if this div exists
    const newCard = document.createElement("div");
    newCard.setAttribute("class", "process-display-card-container process-display-swipe-indicator-card process-display-swipe-indicator");

    return newCard;
  }

  createTriangle = () => {
    // We dont acutally want to create a triangle here
    // its just for the swipe icon and saves us from checking if this div exists
    const newTriangle = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    newTriangle.setAttribute("class", "process-display-card-triangle process-display-swipe-indicator-triangle process-display-swipe-indicator");
    return newTriangle;
  }

};

export default ProcessDisplay;

// document.addEventListener("DOMContentLoaded", function () {
//     setTimeout(() => {

//       const containers = document.querySelectorAll(".process-display-container");
//       if(!containers) return
//       containers.forEach(container => new ProcessDisplay(container));
//     }, 1000)
// });

// console.log(window.performance);
