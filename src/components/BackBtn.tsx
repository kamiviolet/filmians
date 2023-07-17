import { useRouter } from "next/navigation";
import { styled } from "styled-components";

const Button = styled.button`
    font-size: 1em;
    background-color: transparent;
    text-transform: uppercase;
    cursor: pointer;
    background-color: transparent;
    color: ${({theme}) => theme.text};
`

export default function BackBtn() {
    const router = useRouter();

    return (
    <Button type="button" onClick={() => router.back()}>
        Back to search
    </Button>
    )
}