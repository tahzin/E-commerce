/* <!-- menu on click--> */
 
var menuitems =document.getElementById("menuitems")
menuitems.style.maxHeight ="0px";
function menutoggle(){
    if(menuitems.style.maxHeight =="0px"){

        menuitems.style.maxHeight ="200px"
    }
    else{
        menuitems.style.maxHeight ="0px"
    }
}



   

    let  cart= [];
    if(window.localStorage.getItem('cart')){
        cart = JSON.parse(window.localStorage.getItem('cart'))
    }

    let product = getProduct();
    console.log(product)

    /*if(window.localStorage.getItem('product')){
    product = JSON.parse(window.localStorage.getItem('product'))}*/

    function newProduct(){

        let pName = document.getElementById('ProductName').value;
        let pDescription = document.getElementById('Description').value;
        let pURL = document.getElementById('URL').value;
        let pQuantity =parseInt(document.getElementById('Quantity').value);
        let pPrice = parseInt (document.getElementById('Price').value);
       
        let r = {
                 name:pName,
                 Description:pDescription,
                 imgURL:pURL,
                 Quantity:pQuantity,
                 price:pPrice
                }

       /* product.push(r)*/
        storeData(r)
               
       /* window.localStorage.setItem('product', JSON.stringify(product))*/
          
        alert(" Products are successfully added in the Home Page ")
    }
        
    starting()

        function starting(){
            if(product != null){
        for(let i=0; i<product.length;i++){
                      let a1=  $('<img src="'+product[i].imgURL+'" onclick="detailsProduct('+i+')">') 
                      let a2=  $('<h4>'+product[i].name+'</h4>')
                       
                            let a3=  $('<i class="fa fa-star"></i>')
                            let a4=  $('<i class="fa fa-star"></i>')
                            let a5=  $('<i class="fa fa-star"></i>')
                            let a6=  $('<i class="fa fa-star"></i>')
                            let a7=  $('<i class="fa fa-star-o"></i>')
                      
                        let a8=  $('<p>$'+product[i].price+'</p>')
                        let a9=  $('<button class="add"  onclick="addCart('+i+')"> Add Cart </button>')
        
        let d2 = $('<div class="rating">').append(a3,a4,a5,a6,a7)
        let d1 = $('<div class="col-4" >').append(a1,a2,d2,a8,a9)
        if( i<4){
            $('#product').append(d1)
        }
       else{
        $('#latestProduct').append(d1)
       }
         
        } 
    }  
    
        }

        let global=-8;
        if(window.localStorage.getItem('global'))
        {
        // window.localStorage.setItem('global',JSON.stringify(global))
        calling()
        }

        else{ 
            window.localStorage.setItem('global',JSON.stringify(global))
        }

        function detailsProduct(i){
            global=i;
            console.log(i)
            window.localStorage.setItem('global',JSON.stringify(global))
            location.replace("SingleProductDetails.html")
             calling()
        }
        console.log(global)
      

        
function calling(){

 
            let i = parseInt(JSON.parse(window.localStorage.getItem('global')))
           console.log(i)
              //let i = global
              if(i >-1){ 
              console.log(i)
            let a1=  $('<img src="'+product[i].imgURL+'">') 
            let a2=  $('<h4>'+product[i].name+'</h4>')
            let a10 = $('<p>'+product[i].Description+'</p>')
             
                  let a3=  $('<i class="fa fa-star"></i>')
                  let a4=  $('<i class="fa fa-star"></i>')
                  let a5=  $('<i class="fa fa-star"></i>')
                  let a6=  $('<i class="fa fa-star"></i>')
                  let a7=  $('<i class="fa fa-star-o"></i>')
            
              let a8=  $('<p>$'+product[i].price+'</p>')
              let a9=  $('<button class="add"  onclick="addCart('+i+')"> Add Cart </button>')
    
    let d2 = $('<div class="rating">').append(a3,a4,a5,a6,a7)
    $('#col-44').append(a1,a2,a10,d2,a8,a9)
    
    //location.replace("SingleProductDetails.html")
    
    }

}



      

        cartIt()
        function cartIt()
{
           
            if(cart != null)
    {
            for(let i=0; i<cart.length;i++)
        {

               
            let a = $('<p> '+cart[i].name+'</p>')
            let b = $('<small>Price: $ '+cart[i].price+'</small>')
            let c = $('<br>')
            let d = $('<a href="" onClick="productRemove('+i+')">Remove</a>')

           let d1 = $('<div id="Pinfo">')
           let im = $('<img src="'+cart[i].imgURL+'">')
           let d2 = $('<div class="cart-info">')

          let x1=$(' <td><input class="Pquantity" id = "'+i+'" oninput="productquantity('+i+')" type="number" value="1"></td>')
          let x2 =$('<td class="p"   id = "'+i+'price">$'+cart[i].price+'</td>')

          let ready = $('<tr>').append( $('<td>').append(d2.append(im,d1.append(a,b,c,d)) ),x1,x2)

         $('#tableCart').append(ready)
          productquantity(i)    
        }
    }
}

        

        function addCart(i){
 
        let r =product [i].name
        let d= false
        for(let j=0; j<cart.length;j++)
{
       if(r== cart[j].name)
       { d =true}

}

if( d== false) 
{
         console.log("Products")

            cart.push(product[i])
            window.localStorage.setItem('cart',JSON.stringify(cart))

            

    
}

      document.getElementById('num').innerHTML = cart.length

}


     
        //productquantity()
        

 function productquantity(i){
            

        let quan = document.getElementById(i).value
        let tol = document.getElementById( i+"price")
        
        let tmp = document.getElementsByClassName('p')

        
        console.log(quan)

        let sum = 0;
        let sum1 = quan*cart[i].price;
        tol.innerHTML =sum1;

        for(let i=0; i<tmp.length;i++){

          
          sum += parseInt(tmp[i].innerHTML)
        }
        //console.log("Products",sum)

      

                    let t3 =$('<td>Total</td>')
                    let t4 =$('<td>$'+sum+'</td>')
                    let t6 = $('<tr>').append(t3,t4)

                  $('#totalPrice').empty(t6) 

                    
                    $('#totalPrice').append(t6) 
                
                }

                function purchase(){
                    cart=[]
                    window.localStorage.setItem('cart', JSON.stringify(cart)) 
                    alert("Products are successfully Purchased")
                    location.reload()
                }
             function productRemove(i){
                console.log("Products",i)
                console.log("Products",cart.length)
                    cart.splice(i,1)

                    window.localStorage.setItem('cart', JSON.stringify(cart)) 
                }