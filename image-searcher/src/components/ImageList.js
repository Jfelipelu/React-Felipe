import Image from "./Image";
import "./ImageList.css";

function ImageList({ images }){
    const renderedImages = images.map((image) => {
        return <Image image={image} key={image.id} />;
    });

    return(
        <div className="image-list">
            {renderedImages}
        </div>
    );
};

export default ImageList;