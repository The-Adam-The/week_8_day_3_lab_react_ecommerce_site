import ListItem from '../components/ListItem';


const ListContainer = ({items, addItem}) => {

    const itemListNodes = items.map((item, index) => {
            return <ListItem key={index} item={item} addItem={addItem} />
    })


 

    return (
        <>
          
          {itemListNodes}
        </>
    )
}

export default ListContainer;