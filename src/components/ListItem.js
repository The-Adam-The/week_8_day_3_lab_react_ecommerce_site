import styled from 'styled-components';

const ListItemDiv = styled.div`
    display: inline;
`

const ListItem = ({item}) => {



    return (
        <div className="clothing-item">
            <img className="cloth-img" src={item.image_link} alt="dress pic"/>
            <ListItemDiv>

                <p>Color: {item.color}</p>
                <p>Type: {item.type}</p>

            </ListItemDiv>
            
        </div>
    );
};

export default ListItem;