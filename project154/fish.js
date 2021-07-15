AFRAME.registerComponent("fishes", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `fish${i}`;
  
        //position variables     
        var posX =(Math.random() * 100 + -50);      
        var posY = (Math.random() * 0.5 + 5);
        var posZ = (Math.random() * 60 + -40);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createfishes(id, position);
      }
    } ,
  
    createfishes: function(id, position) { 
        const chestEntity = document.querySelector('#chest');
        var fishEl = document.createElement('a-entity');

        fishEl.setAttribute('id', id);
        fishEl.setAttribute('position', position);
        fishEl.setAttribute('material',{color: 'yellow'});

        // coinEl.setAttribute('geometry',{
        //     primitive: 'circle',
        //     radius: 1
        // });

        fishEl.setAttribute('gltf-model', './fish/scene.gltf');
        fishEl.setAttribute('scale', {x: 1, y: 1, z: 1});
        fishEl.setAttribute('animation-mixer',{});

        // ishEl.setAttribute('rotation', {x: 180, y: 0, z: 90})
        // ishEl.setAttribute('animation',{
        //     property: 'rotation',
        //     top: '0 360 0',
        //     loop: 'true',
        //     dur: 1000
        // });

        chestEntity.appendChild(fishEl)
    }
  });