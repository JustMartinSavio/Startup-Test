function changeScr() {
    document.getElementById("fauna").src = "assets/img/portfolio/360-test-fauna.jpeg";
}

function changeScr() {
    document.getElementById("cuevas").src = "assets/img/portfolio/360-test-cuevas.jpeg";
} 


function sendParameters(a,b) {
    // var parameter1 = 'fauna';
    var parameter1 = a;
    
  
    // Construct the URL with parameters
    var url = 'https://justmartinsavio.github.io/Startup-Test/'+b+
              '?image=' + encodeURIComponent(parameter1)
            //   '&image2=' + encodeURIComponent(parameter2);

  
    // Open the URL in a new tab or window
    window.open(url, '_blank');
  }

  