import BasketListItem from '../components/BasketListItem';
import styled from "styled-components";

const Basket = styled.div`
    background-color: greenyellow;
    width: 250px;
    height: 200px;
    padding: 20px;
    border-radius: 10px;
    float: right;
    position: sticky;
    margin-right: 10px;
`


const BasketHeader = styled.h2`
    margin: 0;
    width: auto;
    border-bottom: 1px solid black;
`


const BasketContainer = ({user}) => {

    const basketList = user.basket
    console.log(basketList)

    const basketListNodes =  basketList.map((item, index) => {
        return <BasketListItem key={index} item={item}/>

    })

    

    return (
        <Basket> 
            <BasketHeader>Basket</BasketHeader>
                {basketListNodes}
        </Basket>
    );
}

export default BasketContainer;