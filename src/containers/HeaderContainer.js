import styled from 'styled-components';

const PageHeader = styled.header`

width: 100%;
height: 80px;
background-color: dodgerblue;
display: flex;
justify-content: space-between;
margin-bottom: 20px;
color: #fff;
padding: 15px;
`

const UserNameLink= styled.p`
padding: 25px;
`



const HeaderContainer = ({user}) => {

    return (
        <PageHeader>
            <h1>The Clothes Store</h1>
            <UserNameLink>{user.name}</UserNameLink>
        </PageHeader>

    );

};

export default HeaderContainer;
