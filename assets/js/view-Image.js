//Funzione che prende le immagini e le mette fullscreen
        function viewImage(button, idImg) {
                    var fullscreenContainer = document.getElementById("fullscreenContainer");
                    var fullscreenImage = document.getElementById("fullscreenImage");
                    var controlImage = false;

                    button.addEventListener("click", function() {
                    fullscreenImage.src = idImg.getAttribute("src");
                    fullscreenContainer.style.display = "inline";
                    
                    document.addEventListener("click", function() {
                        if(controlImage == false) {
                            fullscreenImage.addEventListener('click', function(){
                            fullscreenImage.style.scale = 2;
                            controlImage = true;
                            })
                        }
                    })
                        
                        document.addEventListener("click", function() {
                        if(controlImage == true) {
                            fullscreenImage.addEventListener('click', function(){
                            fullscreenImage.style.scale = 1;
                            controlImage = false;
                        })
                        }
                    })
                    });
                    
        }

        //Script che chiude immagine una volta ingrandita, per il pulsante close
        var closeBtt = document.getElementById("closeButton");
            closeBtt.addEventListener("click", function() {
                fullscreenContainer.style.display = "none";
            });

        //Script per selezionare le immagini
            viewImage(document.getElementById("openButton-1"), document.getElementById("image-id-1"));
            viewImage(document.getElementById("openButton-2"), document.getElementById("image-id-2"));
            viewImage(document.getElementById("openButton-3"), document.getElementById("image-id-3"));
            viewImage(document.getElementById("openButton-4"), document.getElementById("image-id-4"));
            viewImage(document.getElementById("openButton-5"), document.getElementById("image-id-5"));
            viewImage(document.getElementById("openButton-6"), document.getElementById("image-id-6"));
            viewImage(document.getElementById("openButton-7"), document.getElementById("image-id-7"));
            viewImage(document.getElementById("openButton-8"), document.getElementById("image-id-8"));
            viewImage(document.getElementById("openButton-9"), document.getElementById("image-id-9"));
