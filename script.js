let slider = ["image1.jpg", "image2.jpg", "image3.png"]; // Creating slider images array
let slider_opt = { next: 0, prev: 0, current: 0, slider_max: (slider.length - 1) }; // creating slider option

let slider_img = document.getElementById("slider_img");
// Setting a delay timer
setInterval(() => {
  sliderLogic(slider_opt);
  slider_img.setAttribute("src", "./images/" + slider[slider_opt.current]);
  slider_img.setAttribute("pos", slider_opt.current);
  //console.log(slider_opt)
}, 5000)

function sliderLogic(slider_opt) {
  if (slider_opt.current === slider_opt.slider_max) {
    slider_opt.next = 0;
    slider_opt.prev = slider_opt.slider_max;
    slider_opt.current = 0;
  } else {
    ++slider_opt.current;
    slider_opt.next = slider_opt.current + 1;
    slider_opt.prev = slider_opt.current - 1;
  }

}

slider_img.addEventListener("mouseover", () => {
  var slider_btn = document.getElementsByClassName("slider_btn");
  slider_btn.classList.remove("hide");
})

slider_img.addEventListener("mouseout", () => {
  var slider_btn = document.getElementsByClassName("slider_btn");
  //slider_btn.classList.add("hide");
})


let nextSlider_ = document.getElementByClassName("slider_img");
nextSlider_.addEventListener("click", () => {
  var pos = nextSlider_.getAttribute("pos");
  nextSlider(pos, slider_opt);
  slider_img.setAttribute("src", "./images/" + slider[slider_opt.current]);
  slider_img.setAttribute("pos", slider_opt.current);

})


function nextSlider(pos, slider_opt) {
  var pos = Integer.parse(pos);
  slider_opt.next = pos;
  slider_opt.prev = pos - 1;
  slider_opt.current = pos;
}
