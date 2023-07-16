"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Movie } from "@/types/types";
import { getReleaseYear } from "@/lib/utils";
import Image from "next/image";
import { styled } from "styled-components";

const Embla = styled.div`
  width: 100%;
  max-width: 1440px;
  max-height: 500px;
  padding-inline: .25em;
  overflow: hidden;

  .embla__viewport {
    overflow: hidden;
  }

  .embla__container {
    width: 100%;
    height: fit-content;
    backface-visibility: hidden;
    display: flex;
    touch-action: pan-y;
  }

`;

const EmblaSlideWrapper = styled.div`
  height: 300px;
  flex: 0 0 100%;

  & > div {
    width: 100%;
    height: 300px; 
    max-width: 1440px;
    position: relative;
  }
`

const EmblaSlideImg = styled(Image)`
  width: 100%;
  height: 300px;
  max-width: 1440px;
  object-fit: cover;
`
const Description = styled.div`
  background-color: #eee;
  width: 100%;
  height: 20%;
  padding: .5em;
  opacity: .8;
  position: absolute;
  bottom: 0;
  overflow: auto;

  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  @media (width >= 768px) {
    width: 35%;
    height: 100%;
    right: 0;

    h4 {
      margin-block-end: 1em;
    }

    p {
      -webkit-line-clamp: 9;
    }
  }
`

export const EmblaCarousel = ({
    options,
    pluginOptions,
    movies,
}: {
    options:any
    pluginOptions:any
    movies:Movie[]
}) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options, [
        Autoplay(pluginOptions)
    ])

    const onSelect = useCallback(() => {
        if (!emblaMainApi) return;
        setSelectedIndex(emblaMainApi.selectedScrollSnap())
    }, [emblaMainApi, setSelectedIndex])

    useEffect(() => {
        if (!emblaMainApi) return;
        onSelect();
        emblaMainApi.on("select", onSelect)
        emblaMainApi.on("reInit", onSelect)
    }, [emblaMainApi, onSelect])

    return (
    <Embla>
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container">
          {
            movies.map((movie) => (
            <EmblaSlideWrapper
              key={movie.title+"_slideshow"}
            >
              <div>
                <EmblaSlideImg
                loading="lazy"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path||movie.backdrop_path}`}
                alt={`${movie.title} (${getReleaseYear(movie.release_date)})`}
                fill
                sizes="20%"
                quality={50}
                style={{objectFit: "cover"}}
                />
                <Description>
                  <h4>{`${movie.title} (${getReleaseYear(movie.release_date)})`}</h4>
                  <p>{movie.overview}</p>
                </Description>
              </div>
            </EmblaSlideWrapper>
            ))
          }
        </div>
      </div>
    </Embla>
    )
}

export default EmblaCarousel;