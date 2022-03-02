

const ListItem = ({item}) => {



    return (
        <div class="clothing-item">
            <img className="cloth-img" src={item.image_link} alt="dress pic"/>
            <div className="info-box">

                <p>Color: {item.color}</p>
                <p>Type: {item.type}</p>

            </div>
            
        </div>
    );
};

export default ListItem;