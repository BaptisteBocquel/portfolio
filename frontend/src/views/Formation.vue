<template>
  <div class="formation">
    <Nav v-if="display"/>
    <div class="button" @click="toggleDropdown"><i class="fas fa-bars"></i></div>
    <div class="formation-content">
        <h2><span class="underline-dark">CO</span><span class="underline-light">MP</span>ÉTENCES</h2>
        <div class="omber">COMPÉTENCES</div>
        <div class="formation-content-choice">
          <div class="formation-content-choice-one">
            <div class="thing">
              <p>HTML5</p>
              <div class="thing-content"><p>90%</p><div class="barre"><div class="level-90"></div></div></div>
            </div>
            <div class="thing">
              <p>CSS3</p>
              <div class="thing-content"><p>90%</p><div class="barre"><div class="level-90"></div></div></div>
            </div>
            <div class="thing">
              <p>JAVASCRIPT</p>
              <div class="thing-content"><p>80%</p><div class="barre"><div class="level-80"></div></div></div>
            </div>
            <div class="thing">
              <p>NODE JS</p>
              <div class="thing-content"><p>80%</p><div class="barre"><div class="level-80"></div></div></div>
            </div>
            <div class="thing">
              <p>MONGODB</p>
              <div class="thing-content"><p>70%</p><div class="barre"><div class="level-70"></div></div></div>
            </div>
          </div>

          <div class="formation-content-choice-two">
            <div class="thing">
              <p>SASS</p>
              <div class="thing-content"><p>90%</p><div class="barre"><div class="level-90"></div></div></div>
            </div>
            <div class="thing">
              <p>GIT / GITHUB</p>
              <div class="thing-content"><p>90%</p><div class="barre"><div class="level-90"></div></div></div>
            </div>
            <div class="thing">
              <p>BOOTSTRAP</p>
              <div class="thing-content"><p>80%</p><div class="barre"><div class="level-80"></div></div></div>
            </div>
            <div class="thing">
              <p>VUE JS</p>
              <div class="thing-content"><p>70%</p><div class="barre"><div class="level-70"></div></div></div>
            </div>
            <div class="thing">
              <p>SQL</p>
              <div class="thing-content"><p>70%</p><div class="barre"><div class="level-70"></div></div></div>
            </div>
          </div>
        </div>  

        <h2><span class="underline-dark">C</span><span class="underline-light">V</span></h2>
        <div class="omber">CV</div>

        <div id="cv">
          <a href="https://drive.google.com/file/d/1oMSr2gr5JvCWXUinUQDd7kddA_vBGbXs/view?usp=sharing">Télécharger mon CV</a>
        </div>

        <h3 class="title-cv"><i class="fas fa-graduation-cap"></i> Formations</h3>

        <div class="timeline">
          <section class="timeline-item">
            <div class="timeline-item-details">
              <time class="timeline-item-details-date">02/2021 à 08/2021</time>
              <div class="timeline-item-details-marker1 timehover"></div>
              <div class="timeline-item-details-description">
                <h4>Développeur Web FullStack</h4>
                <p class="italic">OpenClassRooms</p>
                <p>Compétences : <br> <strong class="blue">HTML, CSS, JAVASCRIPT, VUEJS, NODEJS, EXPRESS, MONGODB, SQL, MYSQL, GIT, GITHUB, DOCKER, SEO, WCAG</strong></p>
              </div> 
            </div>
          </section>

          <section class="timeline-item">
            <div class="timeline-item-details">
              <time  class="timeline-item-details-date">02/2013</time>
              <div class="timeline-item-details-marker3 timehover"></div>
              <div class="timeline-item-details-description">
                <h4>Auxiliaire Ambulancier</h4>
                <p class="italic">AFTRAL Caen</p>
                <p>Compétences : gestes de premier secours, hygiéne, règles de transport, manutention ...</p>
              </div>
            </div>
          </section>

          <section class="timeline-item">
            <div class="timeline-item-details">
              <time class="timeline-item-details-date">09/2009 à 06/2010</time>
              <div class="timeline-item-details-marker4 timehover"></div>
              <div class="timeline-item-details-description">
                <h4>Baccalauréat STG - Sciences et Technologies de la Gestion</h4>
                <p class="italic">Lycée Alexis de Tocqueville - Cherbourg en Cotentin</p>
                <p>Compétences : <br>Management des Organisations, Economie/Droit, Mathématiques, Communications et gestion des Ressources Humaines </p>
              </div>
            </div>
          </section>
        </div>

        <h3 class="title-cv"><i class="fas fa-briefcase"></i> Expériences professionnelles</h3>
        <div class="timeline">
          <section class="timeline-item">
            <div class="timeline-item-details">
              <time class="timeline-item-details-date">02/2013 à 10/2020</time>
              <div class="timeline-item-details-marker1 timehover"></div>
              <div class="timeline-item-details-description">
                <h4>Auxiliaire Ambulancier</h4>
                <p class="italic">Ambulances Jean-Charles DAVODET</p>
                <p>Atouts : Travail en équipe, relation client, gestion de stress en situation d'urgence</p>
              </div>
            </div>
          </section>

          <section class="timeline-item">
            <div class="timeline-item-details">
              <time  class="timeline-item-details-date">02/2011 à 01/2013   </time>
              <div class="timeline-item-details-marker2 timehover"></div>
              <div class="timeline-item-details-description">
                <h4>Vendeur en magasin</h4>
                <p class="italic">Multiples CDD chez ERAM ou encore CASA</p>
                <p>Atouts : Relation client, gestion des stocks, merchandising</p>
              </div>
            </div>
          </section>
        </div>
    </div>
   
       
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  name: 'Formation',
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

 .formation{
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
        margin-top: 50px;
        display: flex;
        justify-content: space-around;
        
        &-one {
          .thing{
            margin-bottom: 60px;
            &-content{
              margin-top: 10px;
              display: flex;
              align-items: center;
            }
            p{
              margin : 0;
            }
          }
        }
        &-two {
          .thing{
            margin-bottom: 60px;
            &-content{
              margin-top: 10px;
              display: flex;
              align-items: center;
            }
            p{
              margin : 0;
            }
          }
        }
        .barre{
        background-color: rgba(51,51,51,0.1);
        width : 250px;
        height: 10px;
        border-radius: 5px;
        margin-left: 15px;
        .level-90{
          width: 0px;
          height:10px;
          border-radius: 5px;
          background-color:#2ba0f3 ;
          animation: level90 1.5s linear forwards;
        }
        .level-80{
          width: 0px;
          height:10px;
          border-radius: 5px;
          background-color:#2ba0f3 ;
          animation: level80 1.5s linear forwards;
        }
        .level-70{
          width: 0px;
          height:10px;
          border-radius: 5px;
          background-color:#2ba0f3 ;
          animation: level70 1.5s linear forwards;
        }
        
      }

    }

     // timeline
    .timeline {
      position: relative;
      min-height: 600px;
      overflow-y : hidden;
      
      width: 80%;
      margin: 0 auto;
      margin-top: 150px;
    }

    .timeline-item-details-date, .timehover ,.timeline-item-details-description{
      float: left;
    } 

    .timeline-item-details-marker1{
      position: relative;
      z-index: 10;
      border-radius: 50%;
      background-color: white;
      width: 22px;
      height: 22px;
      border: 3px solid #333333;
      margin-left:113px;
      transition: transform .3s, background-color .3s;       
    }

    .timeline-item-details-marker2{
      position: relative;
      z-index: 10;
      border-radius: 50%;
      background-color: white;
      width: 22px;
      height: 22px;
      border: 3px solid #333333;
      margin-left: 117px;
      transition: transform .3s, background-color .3s;       
    }

    .timeline-item-details-marker3{
      position: relative;
      z-index: 10;
      border-radius: 50%;
      background-color: white;
      width: 22px;
      height: 22px;
      border: 3px solid #333333;
      margin-left: 204px;
      transition: transform .3s, background-color .3s;       
    }

    .timeline-item-details-marker4{
      position: relative;
      z-index: 10;
      border-radius: 50%;
      background-color: white;
      width: 22px;
      height: 22px;
      border: 3px solid #333333;
      margin-left: 109px;
      transition: transform .3s, background-color .3s;       
    }

    .timeline-item{
          &:before{
            content: "";
            position: absolute;
            background-color: #333333;
            width: 3px;
            height: 100%;
            left: 288px;
          }
          &:first-child .timeline-item-details{
            margin-top: 64px;
          }
          &-details{
            display: inline-block;
            margin-bottom: 124px;
            &:hover .timehover {
              transform: scale(1.1);
              background-color: #333333;
            }
            &-date{
              color: #333333;
              margin-top: -5px;
            }
            
            &-description{
              padding : 16px;
              color : #333;
              border-radius: 4px;
              margin-left : 440px;
              margin-top: -77px;
              word-wrap: break-word;
              h4{
                color:  #037fff;
              }
              &:before{
                content:'';
                position:absolute;
                width: 20px;
                background-color:#333;
                height: 3px;
                margin-left: -155px;
                margin-top: 46px;
              }
            }
          }
    }

    #cv{
    margin-top:40px;
      a{
        text-decoration: none;
        &:hover{
          text-decoration: underline;
        }
      }
    } 
    & .title-cv{
      margin-top: 100px;
    }
  }
  .italic{
    font-style: italic;
  }
}

@keyframes level70 {
  from{
    width: 0px;
  }
  to{
    width: 180px
  }
}

@keyframes level80 {
  from{
    width: 0px;
  }
  to{
    width: 200px
  }
}

@keyframes level90 {
  from{
    width: 0px;
  }
  to{
    width: 220px
  }
}



@media screen and (min-width: 600px) and (max-width: 900px){
  .omber{
    font-size :50px;
    color: rgba(51,51,51,0.05);
    position:relative;
    top: 30px;
  }
  .timeline {
      position: absolute;
      min-height: 600px;
      overflow-y : visible;
      
      width: 100%;
      margin-top: 150px;
    }

   .timeline-item{
          &:before{
            display:none;
          }
          &-details{
            &-description{
              
              margin-left: 200px!important;
              &:before{
                display: none;
              }
            }
          }
          
   }

   .timeline-item-details-marker1{
      display: none;       
    }

    .timeline-item-details-marker2{
      display: none;       
    }

    .timeline-item-details-marker3{
      display: none;       
    }

    .timeline-item-details-marker4{
      display: none;       
    }

   

    .formation{
      width: 80%!important;
      
      &-content{
        padding-left: 0px!important;
        padding-top: 50px;
        padding-bottom: 50px;
        width: 80%!important;
        &-choice{
          
          width: 100%;
          overflow: hidden;
          flex-direction: column;
          align-items: center;
        }
      }
    }
}

@media screen and (min-width: 350px) and (max-width: 899px){

  .omber{
    font-size :50px;
    color: rgba(51,51,51,0.05);
    position:relative;
    top: 30px;
  }
.timeline {
      
      min-height: 600px;
      overflow-y : visible;
      
      width: 90%!important;
      margin-left: 0!important;
      margin: 0!important;
    }

   .timeline-item{
          
          &:before{
            display:none;
          }
          &-details{
            &-description{
              margin-top: 0px!important;
              margin-left: 0px!important;
              padding: 0!important;
              &:before{
                display: none;
              }
            }
          }
          
   }

   .timeline-item-details-marker1{
      display: none;       
    }

    .timeline-item-details-marker2{
      display: none;       
    }

    .timeline-item-details-marker3{
      display: none;       
    }

    .timeline-item-details-marker4{
      display: none;       
    }

  .formation{
      width: 100%!important;
      overflow-x: hidden;
      .title-cv{
            margin-top: 0px!important;
          }
      &-content{
        
        padding-top: 50px;
        padding-bottom: 50px;
        width: 85%!important;
        margin: 0 auto!important;
        &-choice{
          justify-content: space-between!important;
          align-items: center!important;
          width: 100%;
          overflow: hidden;
          flex-direction: column;
          align-items: center;
        }
      }
    }

    #cv{
      margin-bottom: 50px;
    }

  .omber{
    font-size: 50px!important;
  }
}

@media screen and (max-width: 349px) {
  .omber{
    font-size :50px;
    color: rgba(51,51,51,0.05);
    position:relative;
    top: 30px;
  }

  .timeline {
      
      min-height: 600px;
      overflow-y : visible;
      
      width: 90%!important;
      margin-left: 0!important;
      margin: 0!important;
    }

   .timeline-item{
          
          &:before{
            display:none;
          }
          &-details{
            &-description{
              margin-top: 0px!important;
              margin-left: 0px!important;
              padding: 0!important;
              &:before{
                display: none;
              }
            }
          }
          
   }

   .timeline-item-details-marker1{
      display: none;       
    }

    .timeline-item-details-marker2{
      display: none;       
    }

    .timeline-item-details-marker3{
      display: none;       
    }

    .timeline-item-details-marker4{
      display: none;       
    }

  .formation{
      width: 100%!important;
      overflow-x: hidden;
      .title-cv{
            margin-top: 0px!important;
          }
      &-content{
        
        padding-top: 50px;
        padding-bottom: 50px;
        width: 80%!important;
        margin: 0 auto!important;
        &-choice{
          
          width: 90%!important;
          
          flex-direction: column;
          align-items: center;
        }
      }
    }
}
</style>