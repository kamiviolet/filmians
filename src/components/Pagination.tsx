"use client";

import { styled } from "styled-components";
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";
import { useRouter } from "next/navigation";
import { MouseEvent, useEffect, useState } from "react";
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
    &:hover {
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

const Pagination = ({totalPages, currentPage=1}: {totalPages: number, currentPage: number}) => {
    const pageNumbers = [];
    const [targetPage, setTargetPage] = useState<number>(1);
    const router = useRouter();

    useEffect(()=>{
        router.push(`/?page=${targetPage}`)
    },[targetPage]);
    
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    const handleChangePage = (e: MouseEvent) => {
        e.preventDefault();
        const { target } = e;
        if ((target as HTMLButtonElement).localName == "button") {
            const changeOfPage = +(target as HTMLButtonElement).value;
            setTargetPage(currentPage+changeOfPage);
        }
    }

    const handlePagination = (e: MouseEvent) => {
        const { target } = e;
        const changeOfPage = +(target as HTMLElement).innerText;
        setTargetPage(changeOfPage);
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
                pageNumbers.map(number => (
                <li key={number}>
                <Page data-value={number} onClick={(e)=>handlePagination(e)} href={`?page=${number}`}>
                    {number}
                </Page>
                </li>
                ))
            }
            </ul>
        </PaginationBar>
    );
  };
  
  export default Pagination;