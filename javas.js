 const
    
    slider111 = document.getElementById('slider11'),
    slider222 = document.getElementById('slider22'),
    slider333 = document.getElementById('slider33'),
    slider444 = document.getElementById('slider44'),
    slider555 = document.getElementById('slider55'),
    slider666 = document.getElementById('slider66'),
  
  
    rangeV = document.getElementById('rangeV'),
    rangeV1 = document.getElementById('rangeV1'),
    rangeV2 = document.getElementById('rangeV2'),
    rangeV3 = document.getElementById('rangeV3'),
    rangeV4 = document.getElementById('rangeV4'),
    rangeV5 = document.getElementById('rangeV5'),
  
    setValue = ()=>{
      const
        newValue = Number( (slider111.value - slider111.min) * 100 / (slider111.max - slider111.min) ),
        
        newPosition = 10 - (newValue * 0.2);
       
      rangeV.innerHTML = `<span>${slider111.value}</span>`;
      rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
    };
  document.addEventListener("DOMContentLoaded", setValue);
  slider111.addEventListener('input', setValue);
  
  
  setValue1 = ()=>{
      const
        
        newValue1 = Number( (slider222.value - slider222.min) * 100 / (slider222.max - slider222.min) ),
        
        newPosition1 = 10 - (newValue1 * 0.2);
      rangeV1.innerHTML = `<span>${slider222.value}</span>`;
      rangeV1.style.left = `calc(${newValue1}% + (${newPosition1}px))`;
    };
  document.addEventListener("DOMContentLoaded", setValue1);
  slider222.addEventListener('input', setValue1);
  
  setValue2 = ()=>{
      const
        
        newValue2 = Number( (slider333.value - slider333.min) * 100 / (slider333.max - slider333.min) ),
        
        newPosition2 = 10 - (newValue2 * 0.2);
      rangeV2.innerHTML = `<span>${slider333.value}</span>`;
      rangeV2.style.left = `calc(${newValue2}% + (${newPosition2}px))`;
    };
  document.addEventListener("DOMContentLoaded", setValue2);
  slider333.addEventListener('input', setValue2);
  
  setValue3 = ()=>{
      const
        
        newValue3 = Number( (slider444.value - slider444.min) * 100 / (slider444.max - slider444.min) ),
        
        newPosition3 = 10 - (newValue3 * 0.2);
      rangeV3.innerHTML = `<span>${slider444.value}</span>`;
      rangeV3.style.left = `calc(${newValue3}% + (${newPosition3}px))`;
    };
  document.addEventListener("DOMContentLoaded", setValue3);
  slider444.addEventListener('input', setValue3);
  
  setValue4 = ()=>{
      const
        
        newValue4 = Number( (slider555.value - slider555.min) * 100 / (slider555.max - slider555.min) ),
        
        newPosition4 = 10 - (newValue4 * 0.2);
      rangeV4.innerHTML = `<span>${slider555.value}</span>`;
      rangeV4.style.left = `calc(${newValue4}% + (${newPosition4}px))`;
    };
  document.addEventListener("DOMContentLoaded", setValue4);
  slider555.addEventListener('input', setValue4);
  
  
  setValue5 = ()=>{
      const
        
        newValue5 = Number( (slider666.value - slider666.min) * 100 / (slider666.max - slider666.min) ),
        
        newPosition5 = 10 - (newValue5 * 0.2);
      rangeV5.innerHTML = `<span>${slider666.value}</span>`;
      rangeV5.style.left = `calc(${newValue5}% + (${newPosition5}px))`;
    };
  document.addEventListener("DOMContentLoaded", setValue5);
  slider666.addEventListener('input', setValue5);



function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


  