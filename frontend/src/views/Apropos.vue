<template>
  <div class="apropos">
    <Nav v-if="display"/>
    <div class="button" @click="toggleDropdown"><i class="fas fa-bars"></i></div>
    <div class="apropos-content">
      <h2><span class="underline-dark">A </span><span class="underline-light">PR</span>OPOS</h2>
      <div class="omber">A PROPOS</div>
      <div class="apropos-content-one">
        <div class="one-img">
          <img src="../assets/ordi.jpg" alt="ordinateur">
          <a href="https://www.linkedin.com/in/baptiste-bocquel-8193b4217/">Me Contacter</a>
        </div>
        <div class="one-content">
          <h3>Baptiste <span class="blue">Bocquel</span></h3>
          <p>Après plusieurs années à travailler en tant qu'ambulancier, j'ai décidé de me reconvertir professionnellement et me diriger vers un domaine qui m'a toujours passioné : le <strong>développement web</strong>.</p>
          <p>J'ai ainsi obtenu mon diplôme de développeur web avec <strong>OpenClassRooms</strong> et souhaite maintenant aller au bout de ce défi en travaillant et en intégrant une équipe qui me permettra d'en apprendre encore davantage chaque jour.</p>
          <h3>En savoir <span class="blue">un peu plus ...</span></h3>
          <div class="one-content-list">
            <div class="list-one">
              <p class="blue">Prénom</p>  
              <p class="blue">Age</p> 
              <p class="blue">Situation</p>
              <p class="blue">Adresse</p>
              <p class="blue">Email</p>
            </div>
            <div class="list-two">
              <p>:</p> 
              <p>:</p>
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </div>
            <div class="list-three">
              <p>Baptiste</p> 
              <p>31 ans</p>
              <p>Concubinage, 1 enfant</p>
              <p>Cherbourg, France</p>
              <p>baptiste.bocq@gmail.com</p>
            </div>
          </div>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  name: 'Apropos',
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


<style lang="scss">

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
  
  .apropos{
    font-size: 22px;
    width: 100%;
    position: fixed;
    display: flex;
    color: #333333;
    height: 100%;
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
      
      &-one{
        
        margin: 0 auto;
        margin-top: 50px;
        display: flex;
        .one-img{
          width: 50%;
          margin-right: 40px;
          img{
            width: 100%;
            object-fit:cover;
          }
          a{
            display: block;
            background-color: #037fff;
            color: white;
            padding-top:15px;
            padding-bottom: 5px;
            
            text-align: center;
            width: 150px;
            height: 45px;
            border-radius: 10px;
            margin: 0 auto;
            margin-top: 100px;
            &:hover{
              cursor: pointer;
              background-color: #1276bd;
            }
          }
        }
        .one-content{
          width: 50%;
          font-size: 21px;
          &-list{
            display: flex;
            .list-two{
              margin-left: 30px;
              margin-right: 30px;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 500px) and (max-width: 860px){
    
    .apropos{
      position:absolute;
      width: 95%;
      &-content{
        width: 100%;
        &-one{
          flex-direction: column;
          .one-img{
            width: 100%;
          }
          .one-content{
            margin-top: 50px;
            width: 100%;
            &-list{
              word-wrap: wrap;
            }
          }
        }
      }
    }

  }

  @media screen and (max-width: 499px){
    .omber{
      font-size: 60px;
    }
      .apropos{
        position:absolute;
        width: 95%;
        &-content{
          &-one{
            flex-direction: column;
            .one-img{
              width: 100%;
            }
            .one-content{
              margin-top: 50px;
              width: 100%;
              overflow: auto;
              &-list{
              word-wrap: wrap;
              .list-one{
                margin-right: 10px;
                font-size: 18px!important;
              }
              .list-two{
                display: none;
              }
              .list-three{
                font-size: 18px!important;
              }
            }
            }
          }
        }
      }

  }
  
</style>