import GalleryItem from "../GalleryItem/GalleryItem";

function galleryList(props){
    console.log('inside the galleryList', props.galleryList[0]);
    return(
        <ul>
            {props.map(galleryList => (
                <GalleryItem key={galleryList.id} props={galleryList}/>
            ))}
        </ul>
    );
}

export default galleryList