AFRAME.registerComponent("scuba-island", {
    schema: {
      speedOfRoation: { type: "number", default: 0 },
      speedOfAscent: { type: "number", default: 0 }
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
          if (this.data.speedOfRoation < 0.1) {
            this.data.speedOfRoation += 0.01;
          }
        }
        if (e.key === "ArrowLeft") {
          if (this.data.speedOfRoation > -0.1) {
            this.data.speedOfRoation -= 0.01;
          }
        }

        if (e.key === "Arrowdown") {
            this.data.speedOfAscent.z += 0.1
          }

        if (e.key === "ArrowUp") {
        this.data.speedOfAscent.z -= 0.1
        }
      });
    },
    tick: function () {
      var mapRotation = this.el.getAttribute("rotation");
  
      mapRotation.y += this.data.speedOfRoation;
  
      this.el.setAttribute("rotation", {
        x: mapRotation.x,
        y: mapRotation.y,
        z: mapRotation.z,
      });

      this.el.setAttribute("position", {
        x: this.data.speedOfAscent.x,
        y: this.data.speedOfAscent.y,
        z: this.data.speedOfAscent.z,
      });
    },
  });





AFRAME.registerComponent("scuba", {
    schema: {
      speedOfRoation: { type: "number", default: 0 },
      speedOfAscent: { type: "number", default: 0 }
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
  
        //get the data from the attributes
        this.data.speedOfRoation = this.el.getAttribute("rotation");      
        this.data.speedOfAscent = this.el.getAttribute("position");
  
        var planeRotation = this.data.speedOfRoation;      
        var planePosition = this.data.speedOfAscent;
  
        //control the attributes with the Arrow Keys
        if (e.key === "ArrowRight") {
          if (planeRotation.x < 20) {
            planeRotation.x += 1;
            this.el.setAttribute("rotation", planeRotation);
          }
        }
        if (e.key === "ArrowLeft") {
          if (planeRotation.x > -10) {
            planeRotation.x -= 0.5;
            this.el.setAttribute("rotation", planeRotation);
          }
        }
        if (e.key === "ArrowUp") {
          if (planeRotation.z > -90) {
            planeRotation.z -= 90;
            planePosition.y += 25;
            this.el.setAttribute("rotation", planeRotation);
          }
          else{
              planePosition.z -= 0.5;
              planePosition.y += 0.2;
              this.el.setAttribute("rotation", planeRotation);
          }
        }
        if (e.key === "ArrowDown") {
          if (planeRotation.z > -90) {
            planeRotation.z -= 90;
            planePosition.y += 25;
            this.el.setAttribute("rotation", planeRotation);
          }
          else{
            planePosition.z += 0.5;
            planePosition.y -= 0.2;
            this.el.setAttribute("rotation", planeRotation);
          }
        }
      });
    }
  });