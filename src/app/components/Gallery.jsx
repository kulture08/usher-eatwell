import React from 'react'
import GalleryImages from './GalleryImages';
import "../components/styles.css";


const imageData = [
  {
    id: 1,
    image: "/images/menu_1.jpg",
  },
  {
    id: 2,
    image: "/images/menu_2.jpg",
  },
  {
    id: 3,
    image: "/images/menu_3.jpg",
  },
  {
    id: 4,
    image: "/images/menu_2.jpg",
    
  },
  {
    id: 5,
    image: "/images/menu_3.jpg",
  },
  {
    id: 6,
    image: "/images/menu_1.jpg",
  },

];



const Gallery = () => {
      const filteredImages = imageData.filter((images) =>
        images
      );
  return (
    <section id="gallery" className="mt-24 xl:mt-20 md:px-5 xl:px-0">
      <h2 className="text-left text-4xl xl:ml-14 font-bold text-black mt-4 mb-8 md:mb-12 ">
        Gallery
      </h2>
      <p className="text-[#0000008e] xl:ml-16 xl:mb-10 ">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </p>
      <ul className="flex flex-wrap  mt-5 xl:px-16 w-full lg:p-0 gap-4 lg:gap-8">
        {filteredImages.map((images, index) => (
          <li key={index}>
            <GalleryImages key={images.id} imgUrl={images.image} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Gallery