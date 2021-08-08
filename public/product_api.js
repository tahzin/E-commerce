function getProduct()
{   let product = []
    $.ajax({
       type:'GET',
       url:'/product/getProduct/assig2',
       async: false,
       success:  setproduct  =(response) =>{
        console.log('product_req')
        
          product = JSON.parse(response)
          console.log(product.length)
                               
    },
        error:failureCall => {
            console.log(failureCall);
            
            } 

    })
    console.log(product)
    return product
    
}


function storeData( product){
    
    $.ajax({
        method:'POST',
        url:'/postproduct/Product/assig2',
        data:product,
        success:successCallBack=(respose)=>{
            console.log('not failed')
        },

        error:errorCallBack => {
            console.log('FAILED')

        }


    })
    
}