

const ListItem = ({item}) => {



    return (
        <>
        <p>{item.color}</p>
        <p>{item.type}</p>
       <img src="{item.image_link}" alt="dress pic" />
            </>
    );
};

export default ListItem;