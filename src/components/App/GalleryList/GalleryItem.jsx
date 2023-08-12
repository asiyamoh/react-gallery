function GalleryItem(props){
    console.log('inside the GalleryItem', props)
    return(
        <li>
            {props.galleryList.description}
            {props.galleryList.likes}
        </li>
    );
}

export default GalleryItem;