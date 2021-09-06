<template>
  <div class="portfolio">
    <Nav v-if="display"/>
    <div class="button" @click="toggleDropdown"><i class="fas fa-bars"></i></div>
    <div class="portfolio-content">
      <h2><span class="underline-dark">PO</span><span class="underline-light">RT</span>FOLIO</h2>
      <div class="omber">PORTFOLIO</div>
      <div class="portfolio-content-choice">
        <div class="choice">
          <div class="choice-img"><p class="texte">Cliquez pour visiter</p><a href="https://github.com/BaptisteBocquel/BaptisteBocquel_7_300621"><img src="../assets/projet6.png" alt="Groupomania - Projet 6"></a></div>
          <p class="blue choice-img-p">Groupomania - Créer un réseau social d'entreprise</p>
          <p class="logo"><i class="fab fa-vuejs"></i> - SQL</p>
        </div>
        <div class="choice">
          <div class="choice-img"><p class="texte">Cliquez pour visiter</p><a href="https://github.com/BaptisteBocquel/BaptisteBocquel_6_27052021"><img src="../assets/projet5.png" alt="API sécurisée - Projet 5"></a></div>
          <p class="blue choice-img-p">Construire une API sécurisée pour une application d'avis gastronomiques</p>
          <p class="logo"><i class="fab fa-node-js"></i> - Express - MongoDB</p>
        </div>
        <div class="choice">
          <div class="choice-img"><p class="texte">Cliquez pour visiter</p><a href="https://github.com/BaptisteBocquel/BaptisteBocquel_5_230421"><img src="../assets/projet4.png" alt="Orinoco - Projet 4"></a></div>
          <p class="blue choice-img-p">Orinoco - site e-commerce</p>
          <p class="logo"><i class="fab fa-js"></i> <i class="fab fa-bootstrap"></i></p>
        </div>
        <div class="choice">
          <div class="choice-img"><p class="texte">Cliquez pour visiter</p><a href="https://baptistebocquel.github.io/BaptisteBocquel_4_290321/"><img src="../assets/projet3.png" alt="La chouette agence - Projet 3"></a></div>
          <p class="blue choice-img-p">Optimisation de site - La chouette agence</p>
          <p class="logo">SEO - WCAG</p>
        </div>
        <div class="choice">
          <div class="choice-img"><p class="texte">Cliquez pour visiter</p><a href="https://baptistebocquel.github.io/BaptisteBocquel_3_15032021/"><img src="../assets/projet2.png" alt="Ohmyfood - Projet 2"></a></div>
          <p class="blue choice-img-p">Ohmyfood - Site de réservation en restauration</p>
          <p class="logo"><i class="fab fa-html5"></i> <i class="fab fa-css3-alt"></i> <i class="fab fa-sass"></i></p>
        </div>
        <div class="choice">
          <div class="choice-img"><p class="texte">Cliquez pour visiter</p><a href="https://baptistebocquel.github.io/BaptisteBocquel_2_25022021/"><img src="../assets/projet1.png" alt="Réservia - Projet 1"></a></div>
          <p class="blue choice-img-p">Réservia - Site de réservation de vacances</p>
          <p class="logo"><i class="fab fa-html5"></i> <i class="fab fa-css3-alt"></i> <i class="fab fa-github"></i> <i class="fab fa-git"></i></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  name: 'Portfolio',
  components: {
    Nav
  },
  data (){
    return {
      display: false,
    }
  },
  methods : {
    toggleDropdown() {
      this.display = !this.display
    },
  },
}
</script>


<style lang="scss" scoped>
.button{
  margin-top: 20px;
  padding-left: 5px;
}

.blue{
  color: #037fff;
}
  .omber{
    font-size :80px;
    color: rgba(51,51,51,0.05);
    position:relative;
    top: 30px;
  }
  
  .underline-dark{
    text-decoration: underline;
    text-decoration-color: #037fff;
    text-underline-offset: 5px;
  }

  .underline-light{
    text-decoration: underline;
    text-decoration-color: rgba(43,160,243,0.5);
    text-underline-offset: 5px;
  }

  .portfolio{
    font-size: 22px;
    width: 100%;
    position: fixed;
    overflow:auto;
    height: 100%;
    display: flex;
    color: #333333;
    &-content{
      padding-right: 20px;
      padding-left: 20px;
      padding-top: 50px;
      padding-bottom: 50px;
      width: 80%;
      margin: 0 auto;
      & h2{
        position: absolute;
      }
      &-choice{
        margin-top: 100px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      .choice{
        width: 30%;
        height: 400px;
        margin-right: 30px;
        margin-bottom : 80px;
        border: 1px solid rgba(51,51,51,0.2);
        border-radius: 10px;
        .logo{
          padding-left: 10px;
          padding-right: 10px;
        }
        &-img{
          position:relative;
          border-bottom: 1px solid rgba(51,51,51,0.2);
          &-p{
            height: 80px;
            padding-left: 10px;
            padding-right: 10px;
          }
          &:hover .texte{
            display:block;
          }
          .texte{
          position: absolute;
          top: 75px;
          width: 100%;
          text-align: center;
          z-index: 10;
          display: none;
          font-size: 18px;
        }
        }
        
        i{
          font-size: 40px;
        }
        img{
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 10px;
          &:hover{
            opacity:0.2;
            
          }
          
        }
      }
    }
    }
    
  }


@media screen and (min-width: 600px) and (max-width: 1200px){

  .portfolio{
    &-content{
      padding-right: 0px;
      padding-left: 0px;
      width: 100%;
      &-choice{
        
        .choice{
          width: 43%;
          height: 460px;
          &-img{
          &-p{
            height: 130px;
          }
        }
        }
        
      }
    }
  }
}

@media screen and (max-width: 599px){
  .omber{
    font-size :50px;
    color: rgba(51,51,51,0.05);
    position:relative;
    top: 30px;
  }
  .portfolio{
    &-content{
      width: 100%;
      &-choice{ 
        .choice{
          width: 90%;
          height: 450px;
          &-img{
          &-p{
            height: 130px;
          }
        }
        }
        
      }
    }
  }
}
</style>