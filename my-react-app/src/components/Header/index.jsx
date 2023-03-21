import { StyleHeader } from "./styled"
import ass from '../../assets/car.svg'
export const Header =()=>{
   return(
    <StyleHeader>
        <div>
            <h3><strong>Marvel</strong>Shop</h3>
            <div>
                <h2>Aventure-se no mundo <strong>Marvel</strong></h2>
                <figcaption onClick={()=>console.log('clicou')}>
                    <img src={ass} alt="imagem de um carrinho" />
                    <span>0</span>
                </figcaption>
            </div>
        </div>
    </StyleHeader>
   )
}