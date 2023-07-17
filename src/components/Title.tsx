export default function Title({title}: {title: string}) {
    return (
        <h2>
            {
                title
                .split("_")
                .map((word=>word[0]
                .toUpperCase()+word.slice(1)))
                .join(" ")
            }
        </h2>
    )
}