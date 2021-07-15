AFRAME.registerComponent("coins", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `coin${i}`;
  
        //position variables     
        var posX =(Math.random() * 100 + -50);      
        var posY = (Math.random() * 0.5 + 5);
        var posZ = (Math.random() * 60 + -40);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createCoins(id, position);
      }
    } ,
  
    createCoins: function(id, position) { 
        const treasuryEntity = document.querySelector('#chest');
        var coinEl = document.createElement('a-entity');

        coinEl.setAttribute('id', id);
        coinEl.setAttribute('position', position);
        coinEl.setAttribute('material',{color: 'yellow'});

        // coinEl.setAttribute('geometry',{
        //     primitive: 'circle',
        //     radius: 1
        // });

        coinEl.setAttribute('gltf-model', './coin/scene.gltf');
        coinEl.setAttribute('scale', {x: 1, y: 1, z: 1})
        coinEl.setAttribute('rotation', {x: 180, y: 0, z: 90})
        coinEl.setAttribute('animation',{
            property: 'rotation',
            top: '0 360 0',
            loop: 'true',
            dur: 1000
        });

        treasuryEntity.appendChild(coinEl)
    }
  });