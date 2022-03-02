import ListItem from '../components/ListItem';


const ListContainer = ({items}) => {

    const itemListNodes = items.map((item, index) => {
            return <ListItem key={index} item={item} />
    })

 

    return (
        <>
          
          {itemListNodes}
        </>
    )
}

export default ListContainer;