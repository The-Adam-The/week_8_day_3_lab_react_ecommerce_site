import  {useState} from 'react';
import ListContainer from '../containers/ListContainer';
import BasketContainer from '../containers/BasketContainer';
import styled from 'styled-components';

const ContentDiv = styled.div`
    
`


const MainContainer = () => {

    const [user, setUser] = useState(
       {
            "name": "Kelly Rawstron",
            "email": "kellyeatscake@gmail.com",
            "basket": [
                {
                    "type": "dress",
                    "color": "red",
                    "image_link": "https://imgs.search.brave.com/ZlH6q31gj-J5szcxFMcCuLu9WSQbfUyieLzRQe_W_FM/rs:fit:1000:1200:1/g:ce/aHR0cHM6Ly9pbWcu/cHJvbWdpcmwuY29t/L19pbWcvUEdQUk9E/VUNUUy8xNDYyMzAy/LzEwMDAvcmVkLWRy/ZXNzLVRYLTY5MDYx/NzA4NEktYS5qcGc",
                    "price": 7799,
                },
                 {  "type": "shirt",
                    "color": "white",
                    "image_link": "https://imgs.search.brave.com/t3w0tQCgDrk6WqJJgSxY9x3icxNV9u4bZfLp9dZUbWY/rs:fit:1149:1200:1/g:ce/aHR0cHM6Ly9leHRl/cm5hbC1wcmV2aWV3/LnJlZGQuaXQvYklj/eFpsOWZVcHVHMmEw/WS1BeGYyVGY3ZDRy/NG42UFFiOHpvU1Qt/UmFrNC5qcGc_YXV0/bz13ZWJwJnM9ZDNi/YzgwM2Y4OTAxNDU0/MzQ2MzQ0ZWQ3MDli/OTEzYzQ5NjEyYjBi/YQ",
                    "price": 4499,
                },
            ]
    }
    )

    const [items, setItems] = useState([
          {
            "type": "dress",
            "color": "red",
            "image_link": "https://imgs.search.brave.com/ZlH6q31gj-J5szcxFMcCuLu9WSQbfUyieLzRQe_W_FM/rs:fit:1000:1200:1/g:ce/aHR0cHM6Ly9pbWcu/cHJvbWdpcmwuY29t/L19pbWcvUEdQUk9E/VUNUUy8xNDYyMzAy/LzEwMDAvcmVkLWRy/ZXNzLVRYLTY5MDYx/NzA4NEktYS5qcGc",
            "price": 7799,
        },
         {  "type": "shirt",
            "color": "white",
            "image_link": "https://imgs.search.brave.com/t3w0tQCgDrk6WqJJgSxY9x3icxNV9u4bZfLp9dZUbWY/rs:fit:1149:1200:1/g:ce/aHR0cHM6Ly9leHRl/cm5hbC1wcmV2aWV3/LnJlZGQuaXQvYklj/eFpsOWZVcHVHMmEw/WS1BeGYyVGY3ZDRy/NG42UFFiOHpvU1Qt/UmFrNC5qcGc_YXV0/bz13ZWJwJnM9ZDNi/YzgwM2Y4OTAxNDU0/MzQ2MzQ0ZWQ3MDli/OTEzYzQ5NjEyYjBi/YQ",
            "price": 4499,
        },
         {  "type": "trousers",
            "color": "blue",
            "image_link": "https://imgs.search.brave.com/GpklI2qo6nh_h_YtXJQniZFnqgh3uiwmLthVgfLg5Mo/rs:fit:1200:1200:1/g:ce/aHR0cDovL3Jiay5o/LWNkbi5jby9hc3Nl/dHMvY20vMTQvNTAv/MTYwMHgyMzM2LzU0/OGI1ODFjYjMxMmNf/LV9yYmstYmx1ZS1w/YW50cy0wNzEzLTEt/czIuanBn",
            "price": 7799,
        }
    ]);

return (
    <>
        <h2>Main Container</h2>
        <p>{user.name} </p>
        <div>
            <BasketContainer user={user}/>
            <ListContainer items={items}/>
        </div>

    </>
)

}

export default MainContainer;