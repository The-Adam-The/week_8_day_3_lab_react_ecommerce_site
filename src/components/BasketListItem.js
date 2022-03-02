import styled from 'styled-components';

const BasketListItemDiv = styled.div`
width: 100%;
display: flex;
justify-content: space-between;

`


const BasketListItem = ({item}) => {

    return (
        <BasketListItemDiv>
            <p>{item.type}</p>
            <p>{item.price}</p>
        </BasketListItemDiv>

    );
}

export default BasketListItem;