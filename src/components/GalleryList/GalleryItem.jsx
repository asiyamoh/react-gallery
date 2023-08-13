import axios from 'axios'

function GalleryItem(props){

    const likeHandler = () => {
        
        axios.put(`/gallery/like/${props.galleryList.id}`)
            .then((response) => {
                
            }).catch((error) => {
                console.log('Error with the  PUT', error)
            })
    }


    return(
        <li>
            {props.galleryList.description}
            {props.galleryList.likes}
            <button onClick={likeHandler}>Love it </button>

        </li>
    );
}

export default GalleryItem;