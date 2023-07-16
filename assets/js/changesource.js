window.addEventListener('DOMContentLoaded', function() {
    // Get the URL parameters
    var urlParams = new URLSearchParams(window.location.search);
  
    // Get the value of the 'image' parameter from the URL
    var imageParam = urlParams.get('image');
  
    // Get the image entity
    var imageEntity = document.getElementById('imagen360');
    var textEntity = document.getElementById('PortfolioDescription');
  
    // Set the image source based on the parameter
    if (imageParam === 'fauna') {
      imageEntity.setAttribute('material', 'src', '#fauna');
      imageEntity.setAttribute('rotation','0 -90 0');
      textEntity.innerHTML =`<h2>Texto de Fauna</h2>
      <p>
        Parrafo de Fauna
      </p>`
      
    } else if (imageParam === 'cuevas') {
      imageEntity.setAttribute('material', 'src', '#cuevas');
      imageEntity.setAttribute('rotation','0 180 0');
      textEntity.innerHTML =`<h2>Texto de Cuevas</h2>
      <p>
        Parrafo de Cuevas
      </p>`
      
      
    }
    
    else if (imageParam === 'gusanito') {

        textEntity.innerHTML =`<h2>Texto de Gusanit</h2>
        <p>
          Parrafo de Gusanito
        </p>`
    }
    else {
      imageEntity.setAttribute('material', 'src', '#default');
    }

    console.log(imageParam)
    console.log(imageEntity)
    console.log(textEntity)
  });
  