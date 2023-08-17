import axios from 'axios'
import { useState } from 'react'

function GalleryItem(props) {

    const [showImage, setShowImage] = useState(true)

    const likeHandler = () => {

        axios.put(`/gallery/like/${props.galleryList.id}`)
            .then((response) => {

            }).catch((error) => {
                console.log('Error with the  PUT', error)
            })

    }

    const picHandler = () => {
        // setShowImage(!showImage)
        // return(showImage?
        //     <img src={props.galleryList.path} />
        //     :
        //     <p>{props.galleryList.description}</p>)
        return(<>
        <p>{props.galleryList.description}</p>
        <h1>HEYYYY</h1>
        </>)
    }


    return (
        <li>
            <img onClick={picHandler} src={props.galleryList.path} />

            <button onClick={likeHandler}>Love it </button>
            {props.galleryList.likes}



        </li>
    );
}

export default GalleryItem;