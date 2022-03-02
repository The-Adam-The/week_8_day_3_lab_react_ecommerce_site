import styled from 'styled-components';

const ClothingItem = styled.div`
  width: 400px;
  height: 300px;
  margin: 0 30px 30px 30px;
  border: 2px solid black;
  display: inline-flex;
  flex-wrap: wrap;
`

const ListItem = ({item, addItem}) => {
    
    const handleAddClick = ({event}) => {
        console.dir(event.target.value)
        addItem(event.target.value)
    }


    return (
        <ClothingItem>
            <img className="cloth-img" src={item.image_link} alt="dress pic"/>
                <div>

                    <p>Color: {item.color}</p>
                    <p>Type: {item.type}</p>
                    <button value={item} onClick={handleAddClick} >Add to cart</button>

                </div>
   
        </ClothingItem>
    );
};

export default ListItem;