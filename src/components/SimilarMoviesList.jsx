import React from 'react';
import SimilarMovie from './SimilarMovie';
import {Link} from 'react-router';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

export default function SimilarMoviesList({data}) {
    const StyledLink = styled(Link)`
      &:hover {
        text-decoration:none;
      }
    `;
      let movies = data.map(function(movie) {
        if(movie.backdrop_path != null) {
          return(
              <Col style={{margin: "20px"}}  key={movie.id} >
                <StyledLink to={'/movie/'+movie.id} >
                    <SimilarMovie movie={movie} />
                </StyledLink>
              </Col>
          );
        }
  
        return null;
    });

    return(
        <div>
          <h3>Related Movies</h3>
          <Row>
            {movies}
          </Row>
        </div>
      );
}

