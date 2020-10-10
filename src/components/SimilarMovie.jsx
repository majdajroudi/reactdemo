import React from 'react';
import { Thumbnail } from 'react-bootstrap/lib';
import { URL_IMG, IMG_SIZE_SMALL } from '../const';

export default function SimilarMovie({movie}) {
    return (
      <Thumbnail src={URL_IMG+IMG_SIZE_SMALL+movie.backdrop_path} alt={movie.title} >
        <p>{movie.title}</p>
      </Thumbnail>
    );
  }