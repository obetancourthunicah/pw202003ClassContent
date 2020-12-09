const slider = function (){
  this.sliderTrail = null;
  this.slideframes = null;
  this.toLoad = 0;
  this.timeSecs = 3000;
  this.currentSlide = 0;
  this.slides = 0;
  this.direction = 1; // 1 es hacia la derecha, -1 hacia la izquierda
  this.timerId = null;
  this.slidePoints = null;
  this.slidePointsHolder = null;
  this.sliderLens = null;


  this.start = function(){
    this.sliderTrail.style.width="calc(" + this.slides +" * 100vw)";
    // Creando los Pointers
    for(var i = 0; i< this.slides; i++){
      var newPointer = document.createElement("div");
      newPointer.className = "pointer";
      newPointer.dataset.index = (i);
      newPointer.addEventListener("click", this.onPointerClick.bind(this));
      this.slidePointsHolder.append(newPointer);
    }
    this.tick();
  }

  this.tick = function(){
    this.timerId = setTimeout(function(){
        var nextSlide = this.currentSlide;
        if(this.direction == 1 && this.currentSlide == (this.slides - 1) ){
          this.direction = -1
        }
        if(this.direction == -1 && this.currentSlide == 0){
          this.direction = 1
        }
        nextSlide += this.direction;
        this.moveTo(nextSlide);
        this.tick();
    }.bind(this), 3000);
  }

  this.onPointerClick = function(e){
      e.preventDefault();
      e.stopPropagation();
      var pointerIndex = Number(e.target.dataset.index);
      clearTimeout(this.timerId);
      this.moveTo(pointerIndex);
      this.tick();
  }

  this.moveTo = function(slide){
    console.log((slide * -100) + "vw)");
      this.sliderTrail.style.left = (slide * -100) + "vw";
      this.currentSlide = slide;
  }

  this.init = function(){
    this.sliderTrail = document.querySelector('.slidetrail');
    this.slideframes = document.querySelectorAll('.slideframe');
    this.sliderLens = document.querySelector(".sliderLens");
    this.slides = this.slideframes.length;
    this.slidePointsHolder = document.createElement("div");
    this.slidePointsHolder.className="pointHolder";
    this.sliderLens.append(this.slidePointsHolder);

    for (let index = 0; index < this.slides; index++){ //por cada slideframe
      let hasSrcSet = false;
      let srcSets = this.slideframes[index].querySelectorAll("picture>source, picture>img"); // source + img

      for(let srcindex in srcSets) {
        if(!(typeof(srcSets[srcindex].dataset) == "undefined")){
          console.log(srcSets[srcindex].dataset);
          if ('srcset' in srcSets[srcindex].dataset) {
            srcSets[srcindex].srcset = srcSets[srcindex].dataset.srcset;
            hasSrcSet = true;
          }
          if ('src' in srcSets[srcindex].dataset){
            srcSets[srcindex].src = srcSets[srcindex].dataset.src;
            hasSrcSet = true;
            srcSets[srcindex].onload = function(e){
              this.toLoad--;
              console.log(this);
              if(this.toLoad == 0){
                this.start();
              }
            }.bind(this);
          }
        }
      }
      if (hasSrcSet) {
        this.toLoad ++;
      }
    }
  }
}



document.addEventListener("DOMContentLoaded", function(){
  var mySlider = new slider();
  mySlider.init();
});
