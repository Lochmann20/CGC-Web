'use client'

// src/components/ImageGallery.js

import React, { useEffect, useState } from 'react';
import supabase from '../supabaseClient';
import Image from 'next/image';

 // Correct import for Next.js

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .storage
        .from('CGC-Wargaming')
        .list();

      if (error) {
        console.error('Error fetching images:', error);
        setLoading(false);
        return;
      }

      const imageUrls = data.map(item => {
        const { publicURL } = supabase
          .storage
          .from('CGC-Wargaming')
          .getPublicUrl(item.name);
        return publicURL;
      });

      setImages(imageUrls);
      setLoading(false);
    };

    fetchImages();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading images...</p>
      ) : (
        <div>
          {images.map((url, index) => (
            <Image
            key={index} 
            src={url} 
            alt={`Image ${index}`} 
            width={200} 
            height={200} 
            style={{ 
                margin: '10px' }}
            required/>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;