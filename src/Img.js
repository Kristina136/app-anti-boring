function Img({anyWord}){

    return(
      <div className="products">
        {anyWord.map((element=>{
          const{id, type, image}=element;
          return(
            <div  className="product-card" key={id}>
              <h2>{id}</h2>
            </div>
          )
        }))}
      </div>
    )
  }
  export default Img;