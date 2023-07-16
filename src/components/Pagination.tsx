"use client";

import { styled } from "styled-components";
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";
import Link from "next/link";

const PaginationBar = styled.div`
    margin-block: 5em 3em;
    display: flex;
    justify-content: center;
    ul {
        display: none;
    }
    @media (width >= 640px) {
        div {
            display: none;
        }
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
    margin: 1em;
    &:hover,
    &:focus {
        color: #FFA500;
        font-weight: 800;
    }
`
const Button = styled.button`
    font-size: 1.75em;
    cursor: pointer;
    background-color: transparent;
    padding: 1em;
    z-index: 2;
    * {
        pointer-events: none
    }
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
            <div>
                {
                currentPage === 1? <></> 
                : <Button onClick={(e)=>handleChangePage(e)} value={-1}><GrCaretPrevious /></Button>
                }
                {
                currentPage === totalPages? <></> 
                : <Button onClick={(e)=>handleChangePage(e)} value={1}><GrCaretNext /></Button>
                }
            </div>
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
        </PaginationBar>
    );
  };
  
  export default Pagination;