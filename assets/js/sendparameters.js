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
    var url = 'http://127.0.0.1:5500/'+b+
              '?image=' + encodeURIComponent(parameter1)
            //   '&image2=' + encodeURIComponent(parameter2);
  
    // Open the URL in a new tab or window
    window.open(url, '_blank');
  }

  