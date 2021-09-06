<template>
  <div class="accueil">
    
    <Nav v-if="display"/>
    <div v-if="displayButton" class="button" @click="toggleDropdown"><i class="fas fa-bars"></i></div>
    <div class="accueil-content">
      <h1>Baptiste <span class="blue">BOCQUEL</span></h1>
      <div id="text"><strong>Développeur Web FullStack</strong></div>
      <p> Spécialisé <span class="blue"> <span class="bold">Javascript</span>  (NodeJs/VueJs)</span></p>
      <div>
        <a href="https://www.linkedin.com/in/baptiste-bocquel-8193b4217/"><i class="fab fa-linkedin"></i></a>
        <a href="https://github.com/BaptisteBocquel?tab=repositories"><i class="fab fa-github"></i></a>
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'

export default {
  name: 'Accueil',
  components: {
    Nav
  },
  data (){
    return {
      display: false,
      displayButton : true,
    }
  },
  mounted(){
    this.typewritter();
  },
  methods : {
    typewritter(){
      var text = document.getElementById('text');
      var splitText = text.innerText.split('');

      text.innerHTML = '';
      let i = 0
      setInterval(function(){
        if(i < splitText.length){
          text.innerHTML += splitText[i];
          i++;
        }
      }, 100 )
    },
    toggleDropdown() {
      this.display = !this.display;
    },
    
  },
  
  
}
</script>


<style lang="scss" scoped>
//IMPORT
@import url(https://fonts.googleapis.com/css?family=Exo:100);
@import url('https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap');

// BACKGROUND ANIMATE
$bg-url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC";
$bg-width: 50px;
$bg-height: 50px;

/* Animations */
@-webkit-keyframes bg-scrolling-reverse {
  100% { background-position: $bg-width $bg-height; }
}
@-moz-keyframes    bg-scrolling-reverse {
  100% { background-position: $bg-width $bg-height; }
}
@-o-keyframes      bg-scrolling-reverse {
  100% { background-position: $bg-width $bg-height; }
}
@keyframes         bg-scrolling-reverse {
  100% { background-position: $bg-width $bg-height; }
}

@-webkit-keyframes bg-scrolling {
  0% { background-position: $bg-width $bg-height; }
}
@-moz-keyframes    bg-scrolling {
  0% { background-position: $bg-width $bg-height; }
}
@-o-keyframes      bg-scrolling {
  0% { background-position: $bg-width $bg-height; }
}
@keyframes         bg-scrolling {
  0% { background-position: $bg-width $bg-height; }
}

 


.accueil{
  font-size: 22px;
  width: 100%;
  position: fixed;
  height: 100%;
  display: flex;
  // for background animate
  background: url($bg-url) repeat 0 0;
  -webkit-animation: bg-scrolling-reverse .92s infinite; /* Safari 4+ */
  -moz-animation:    bg-scrolling-reverse .92s infinite; /* Fx 5+ */
  -o-animation:      bg-scrolling-reverse .92s infinite; /* Opera 12+ */
  animation:         bg-scrolling-reverse .92s infinite; /* IE 10+ */
  -webkit-animation-timing-function: linear;
  -moz-animation-timing-function:    linear;
  -o-animation-timing-function:      linear;
  animation-timing-function:         linear;
  
  &-content{
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
    font-family: 'Rock Salt', cursive;
    }
    #text{
      font-size: 30px;
    } 
    i{
      font-size: 35px;
      color: #333333;
      margin-right: 10px;
      &:hover{
        color: #037fff;
      }
    }
  }
}
@media screen and (min-width: 611px) and (max-width: 1042px){
  .accueil{
    position: absolute;
    
  }
  h1{
    text-align: center;
  }
}

@media screen and (min-width: 415px) and (max-width: 610px){
  .accueil{
    position: absolute;
  }
  h1{
    text-align: center;
  }
}

@media screen and (min-width: 330px) and (max-width: 414px){
  
  .accueil{
    
    &-content{
      width: 90%;
    }
  }
  h1{
    text-align: center;
  }
}

@media screen and (max-width: 329px){
  
  .accueil{
    &-content{
      width: 90%;
    }
  }
  h1{
    font-size: 30px;
    text-align: center;
  }
  p{
    font-size: 20px;
  }

  #text{
    text-align:center;
  }
}

</style>