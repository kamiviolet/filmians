import { styled } from "styled-components";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const Form = styled.form`
    min-width: 150px;
    margin-block: .5em;
`;

const Input = styled.input`
    font-size: 1em;
    width: 200px;
    padding: .5em .5em;
`;

const Submit = styled(Input)`
    width: 100px;
    margin-inline-start: 1.5em;
    text-transform: capitalize;
    cursor: pointer;
`;

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const router = useRouter();

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        if (searchTerm) {
            router.push(`/search/${searchTerm}`)
        }
        return;
    }

    return (
        <Form
            onSubmit={handleSubmit}
        >
            <Input
                type="text"
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                placeholder="Please enter any keywords"
            />
            <Submit
                type="submit"
                value="search"
            />
        </Form>
    )
}