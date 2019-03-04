const proxyurl = "https://cors-anywhere.herokuapp.com/";
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