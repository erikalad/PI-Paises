import '../styles/SmallCountry.css'


export const SmallCountry = ({nombre, bandera}) => {





    return (
        <div >
            <div className='card-small'>
                 
                <img src={bandera} className='img-card'/>
                <p >{nombre}</p>
        

    
                
            </div>
        </div>
    )
}