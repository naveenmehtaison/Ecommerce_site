import { useState, useEffect } from "react"


const ShowingProductsOnSrc=(props)=>{
    console.log(props.props2)
    const Filter =(arr)=>{
        return(arr.filter(i=>i.type===props.props2))

    }

    return(
        <>
            {Filter(props.allData).map((ele,index)=>(
                <>
                <h3>{ele.productId}</h3>
                <h3>{ele.productName}</h3>
                <h3>{ele.sellingPrice}</h3>
                <button>Delete</button>
                <button>Edit</button>


                </>
            ))

        }

        </>   
    )
}
export default ShowingProductsOnSrc