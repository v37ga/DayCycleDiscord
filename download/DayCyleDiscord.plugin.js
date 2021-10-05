/**
 * @name DayCycleDiscord
 * @author v37ga
 * @description changes your wallpaper depending on what time is it.
 * @version 1.1.0
 * @invite inviteCode
 * @authorId 368194347222695938
 * @authorLink https://twitter.com/veigaffa
 * @website https://v37ga.github.io/37/
 * @source https://github.com/v37ga/37/tree/main/daycyclediscord
 */

 module.exports = class ExamplePlugin {
    load() {} 
  
    start() {
      //manhã https://wallpapercave.com/wp/wp6689710.jpg
      //tarde https://images8.alphacoders.com/386/386749.jpg    
      //noite https://i.pinimg.com/originals/0e/97/91/0e979187086303dc147753216d3b701c.jpg
  
      root()
      function root(){

        var imagemManha = 'https://wallpapercave.com/wp/wp6689710.jpg'
        var imagemTarde = 'https://wallpaperaccess.com/full/685208.jpg'
        var imagemNoite = 'https://i.pinimg.com/originals/0e/97/91/0e979187086303dc147753216d3b701c.jpg'

        novoHorario()
        function novoHorario(){
          window.dia = new Date()
          window.hr = window.dia.getHours()
          window.min = window.dia.getMinutes()
        }

        window.currentImage = 0 
  
        const body = document.querySelector('body')
        var min = window.min


        if (window.hr >= 6 && window.hr <= 12){
          
          body.style = `background-image: url(${imagemManha}) !important`
          console.log(`Bom dia!`)
        }
        else if (window.hr == 12 && min > 0){
          
          body.style = `background-image: url(${imagemTarde}) !important`
          console.log(`Boa tarde!`)
        }
        else if (window.hr >= 13 && window.hr <= 18){
          
          body.style = `background-image: url(${imagemTarde}) !important`
          console.log(`Boa tarde!`)
        }
        else if (window.hr == 18 && min > 0){
          console.log(`Boa noite!`)
          body.style = `background-image: url(${imagemNoite}) !important`
        }
        else if (window.hr >= 19){
          console.log(`Boa noite!`)
          body.style = `background-image: url(${imagemNoite}) !important`
        }


        indexGrab()
        function indexGrab(){
          if (window.hr >= 6 && window.hr <= 12){
            
            window.currentImage = 1
            checkAndChange()
          }
          else if (window.hr == 12 && min > 0){
            
            window.currentImage = 2
            checkAndChange()
          }
          else if (window.hr >= 13 && window.hr <= 18){
            
            window.currentImage = 2
            checkAndChange()
          }
          else if (window.hr == 18 && min > 0){
            
            window.currentImage = 3
            checkAndChange()
          }
          else if (window.hr > 19){
            
            window.currentImage = 3
            checkAndChange()
          }
        }
        
        function checkAndChange(){

          if(window.currentImage == 1){
            
            if (window.hr == 12 && window.min > 0){
              
              body.style = `background-image: url(${imagemTarde}) !important`
              console.log(`Boa tarde! Mudando o wallpaper.`)
              window.currentImage = 2
            }
            else if (window.hr >= 13 && window.hr <= 18){
              
              body.style = `background-image: url(${imagemTarde}) !important`
              console.log(`Boa tarde! Mudando o wallpaper.`)
              window.currentImage = 2
            }
          }
          if(window.currentImage == 2){
            if (window.hr == 18 && window.min > 0 ){
                
              body.style = `background-image: url(${imagemNoite}) !important`
              console.log(`Boa Noite/Madrugada! Mudando o wallpaper.`)
              window.currentImage = 3
            }
            else if (window.hr > 18){
              
              body.style = `background-image: url(${imagemNoite}) !important`
              console.log(`Boa Noite/Madrugada! Mudando o wallpaper.`)
              window.currentImage = 3
            }
         }
         if(window.currentImage == 3){
          if (window.hr >= 6 && window.hr <= 12){
            console.log(`Bom dia! Mudando o wallpaper.`)
            body.style = `background-image: url(${imagemManha}) !important`
            window.currentImage = 1
          }
         }
      }

        var intervalId = setInterval(function() {

          novoHorario()
          checkAndChange()   
        }, 5000);
      }
    } 
    stop() {} 
    observer(changes) {}
  }