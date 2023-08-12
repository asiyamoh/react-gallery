import axios from './axios'

function GalleryItem(props){
    // console.log('inside the GalleryItem', props)

    const likeHandler = () => {
        console.log('the id is:', props.galleryList.id)
        // axios.put(`/gallery/like/${props.galleryList.id}`)
        //     .then((response) => {
        //         console.log('The response', response)
        //     }).catch((error) => {
        //         console.log('Error with the  PUT', error)
        //     })
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