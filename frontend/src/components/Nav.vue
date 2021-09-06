<template>
    <div id="nav">
        <div id="nav-img">
            <img src="../assets/photo_profil.jpg" alt="photo de profil">
        </div>

        <div id="nav-link">
            <div id="nav-link-cv">
                <a href="https://drive.google.com/file/d/1oMSr2gr5JvCWXUinUQDd7kddA_vBGbXs/view?usp=sharing">Télécharger mon CV</a>
            </div>

            <div id="nav-link-route">
                <ul>
                    <li class="animate__rubberBand"><router-link to="/">Accueil</router-link></li>
                    <li><router-link to="/apropos">A propos</router-link></li>
                    <li><router-link to="/formation">Formation</router-link></li>
                    <li><router-link to="/portfolio">Portfolio</router-link></li>
                </ul>
            </div>
        </div>

        <div id="nav-copyright">
            <p> © 2021 <span class="bold">Baptiste</span></p>
        </div>
    </div>  
</template>

<style lang="scss" scoped>
    .bold{
        font-weight: bold;
    }

    #nav{
        background-color: #333333;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 20px;
        width: 300px;
        height: 100%;
        
        &-img{
            padding-top: 20px;
            width: 290px;
            height: 290px;
            margin: 0 auto;
            text-align: center;
            
            img{
                width: 80%;
                height: 80%;
                object-fit: cover;
                border-radius: 120px;
                border: 5px solid rgb(71, 71, 71);
                
            }
        }
        &-link{
            width: 100%;
            border-top: 2px solid rgb(71, 71, 71);
            flex-grow:1;
            display: flex;
            flex-direction: column;
            align-items: center;

            a {
                text-decoration: none;
                &:visited{
                    color: #2ba0f3;
                }
                &:hover{
                    color: #1276bd;
                }
            }
            &-cv{
                margin-top: 110px;
                text-decoration: underline;
            }
            &-route{
                margin-top: 80px;
                width: 100%;
                ul{
                    padding: 0;
                }
                li{
                    width: 90%;
                    margin: 0 auto;
                    text-align: center;
                    list-style: none;
                    
                    &:hover{
                        animation: rubberBand;
                        animation-duration: 2s;
                    }
                    a{
                        display: block;
                        height: 35px;
                        padding-top: 5px;

                        &.router-link-exact-active{
                            background-color: #037fff;
                            color: white !important;
                        }
                    }
                }
                
            }
        }
        &-copyright{
            text-align: center;
            border-top: 2px solid rgb(71, 71, 71);
            color: white;
            
        }
    }

   @media screen and (min-width: 330px) and (max-width: 600px){
       #nav{
           font-size: 17px;
           height: 100%;
            margin: 0 auto;
            text-align: center;
            
        &-img{
            padding-top: 10px;
            width: 160px;
            height: 160px;
            img{
                width: 80%;
                height: 80%;
                object-fit: cover;
                border-radius: 120px;
                border: 5px solid rgb(71, 71, 71);
                
            }
        }
        &-link{
            width: 100%;
            border-top: 2px solid rgb(71, 71, 71);
            flex-grow:1;
            display: flex;
            flex-direction: column;
            align-items: center;

            a {
                text-decoration: none;
                &:visited{
                    color: #2ba0f3;
                }
                &:hover{
                    color: #1276bd;
                }
            }
            &-cv{
                margin-top: 120px;
                text-decoration: underline;
            }
            &-route{
                margin-top: 80px;
                width: 100%;
                ul{
                    padding: 0;
                }
                li{
                    width: 90%;
                    margin: 0 auto;
                    text-align: center;
                    list-style: none;
                    
                    &:hover{
                        animation: rubberBand;
                        animation-duration: 2s;
                    }
                    a{
                        display: block;
                        height: 35px;
                        padding-top: 5px;

                        &.router-link-exact-active{
                            background-color: #037fff;
                            color: white !important;
                        }
                    }
                }
                
            }
        }
       }
   }

   @media screen and (max-width: 329px){
       #nav{
           font-size: 17px;
           height: 100%;
            margin: 0 auto;
            text-align: center;
            
        &-img{
            padding-top: 10px;
            width: 160px;
            height: 160px;
            img{
                width: 80%;
                height: 80%;
                object-fit: cover;
                border-radius: 120px;
                border: 5px solid rgb(71, 71, 71);
                
            }
        }
        &-link{
            width: 100%;
            border-top: 2px solid rgb(71, 71, 71);
            flex-grow:1;
            display: flex;
            flex-direction: column;
            align-items: center;

            a {
                text-decoration: none;
                &:visited{
                    color: #2ba0f3;
                }
                &:hover{
                    color: #1276bd;
                }
            }
            &-cv{
                margin-top: 40px;
                text-decoration: underline;
            }
            &-route{
                margin-top: 80px;
                width: 100%;
                ul{
                    padding: 0;
                }
                li{
                    width: 90%;
                    margin: 0 auto;
                    text-align: center;
                    list-style: none;
                    
                    &:hover{
                        animation: rubberBand;
                        animation-duration: 2s;
                    }
                    a{
                        display: block;
                        height: 35px;
                        padding-top: 5px;

                        &.router-link-exact-active{
                            background-color: #037fff;
                            color: white !important;
                        }
                    }
                }
                
            }
        }
       }
   }

    
</style>

<script>
import "animate.css"

export default {
  name: 'Nav',
  data(){
      return{
         
      }
  },
  mounted(){
      
  },
  components: {
    
  }, 
  methods: {
     
  }
  
}
</script>

