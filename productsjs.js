var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
    
    if (isMobile.any()) {
        $("#entireSite").empty();
        $("#entireSite").append("<h3 style='margin-top:100px' text-align='center'>I nuläget är hemsidan inte kompatibel med mobiltelefoner. Vänligen handla via din dator istället.</h3>");
    }
        const url = "https://gg71nquqt8.execute-api.us-east-1.amazonaws.com/prod/productsLambdaReal?type=GET"; // site that doesn’t send Access-Control-*
        fetch(url) // https://cors-anywhere.herokuapp.com/https://example.com
            .then(response => response.text())
            .then(contents => {
            
            var productParse = JSON.parse(contents);
            
            main((JSON.parse(productParse.body)).Items)
        
        })


        function main(products){
            console.log(products);
            
            function addProductToHTML(product){
                $("#addProducts").append("<tr> <th scope='row''>" + product.productname + "</th><td>" + product.quantity + "</td><td>" + product.price + " kr</td><td>" + product.notes + "</td></tr>")
            }
            
            products.forEach(element => {
                addProductToHTML(element);
            })
            
            
        };
