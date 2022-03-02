import ListItem from '../components/ListItem';


const ListContainer = ({items}) => {

    const itemListNodes = items.map((item, index) => {
            return <ListItem key={index} item={item} />
    })

    // if (!items) {
    //     console.log("items not in list container");
    // }

    return (
        <>
          
          {itemListNodes}
        </>
    )
}

export default ListContainer;