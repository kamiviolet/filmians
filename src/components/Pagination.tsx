"use client";

import { styled } from "styled-components";
import { FcPrevious, FcNext } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";
import Link from "next/link";

const PaginationBar = styled.div`
    margin-block: 5em 3em;
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
        display: none;
    }

    @media (width >= 640px) {
        ul {
            display: block;
            list-style-type: none;
            padding-inline-start: 0;

            & > * {
                display: inline-block;
            }
        }
    }
`;

const Page = styled(Link)`
    text-decoration: none;
    margin-inline: 1em;
    &:hover,
    &:focus {
        color: #FFA500;
        font-weight: 800;
    }
`
const Button = styled.button`
    font-size: 1.75em;
    padding-inline: .5em;
    transform: translateY(4px);
    z-index: 2;
`;

const Pagination = ({
    totalPages,
    currentPage,
}: {
    totalPages: number,
    currentPage: number,
}) => {
    const pageNumbers = [];
    const router = useRouter();

    
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }


    const handleChangePage = (e: MouseEvent) => {
        e.preventDefault();
        const { target } = e;
        if ((target as HTMLButtonElement).localName == "button") {
            const changeOfPage = +(target as HTMLButtonElement).value;
            router.push(`?page=${currentPage+changeOfPage}`)
        }
    }
  
    return (
        <PaginationBar>
            <Button disabled={currentPage === 1} onClick={(e)=>handleChangePage(e)} value={-1}><FcPrevious /></Button>
            <ul>
            {
                pageNumbers.map((number, i) => {
                    if (i <= 10) {
                        return (
                            <li key={number}>
                            <Page data-value={number} href={`?page=${number}`}>
                                {number}
                            </Page>
                            </li>
                        )
                    }
                })
            }
            </ul>
            {
                currentPage === totalPages? <></> 
                : <Button onClick={(e)=>handleChangePage(e)} value={1}><FcNext /></Button>
            }
        </PaginationBar>
    );
  };
  
  export default Pagination;