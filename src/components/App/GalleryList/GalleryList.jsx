import GalleryItem from "./GalleryItem";

function galleryList(props){

    return(
        <ul>
            {props.galleryList.map((galleryList) => (
                <GalleryItem key={galleryList.id} galleryList={galleryList}/>
            ))}
        </ul>
    );
}

export default galleryList