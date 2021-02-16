let slideWidth = 400;
let count = 1;
let bottom = 20;

let sliderCurrent = createSlider(count);




function createSlider(sliderId){
    let slider = document.createElement("div");
    slider.setAttribute("class","slider animate");
    slider.setAttribute("id","slider"+sliderId);
    document.getElementById("game").append(slider);
    return slider;
}

function getSliderBelow(){
    return (count==1) ? sliderCurrent : document.getElementById("slider".concat(count-1));
}






function stopSliding(){

    var left = window.getComputedStyle(sliderCurrent).getPropertyValue("left");
    sliderCurrent.classList.remove("animate");
    sliderCurrent.style.left = left;

    var sliderBelow = getSliderBelow();
    var width = parseInt(window.getComputedStyle(sliderCurrent).getPropertyValue("width"));
    var leftBelow = parseInt(window.getComputedStyle(sliderBelow).getPropertyValue("left"));
    
    left = parseInt(left);
    var difference = left - leftBelow;
    var absDifference = Math.abs(difference); 
    
    if (difference>width||difference<-width) {
        var score = "Score: ".concat(count-1);
        if(!alert(score)){window.location.reload();}
    } 


    if (difference > 0) {
        left = left + absDifference;
    }else{
        left = left - difference;
        sliderCurrent.style.left = left.toString().concat("px");
    }

    count++;
    let sliderAbove = createSlider(count);
    let offset = (width - absDifference).toString().concat("px");
    sliderCurrent.style.width = offset;
    sliderAbove.style.width = offset;  
    sliderAbove.style.bottom = bottom + "px";
    bottom += 20; 
    slideWidth = slideWidth + absDifference;
    document.documentElement.style.setProperty("--width",(slideWidth+"px"));
    sliderCurrent = sliderAbove;
}