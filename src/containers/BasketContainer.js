import BasketListItem from '../components/BasketListItem';



const BasketContainer = ({user}) => {

    const basketList = user.name
    console.log(basketList)

    const basketListNodes =  user['basket'].map((item, index) => {
        return <BasketListItem key={index} item={item}/>

    })

    

    return (
        <> 
            <h2>Basket</h2>
            {basketListNodes}
        </>
    );
}

export default BasketContainer;