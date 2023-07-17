import { useRouter } from "next/navigation";

export default function BackBtn() {
    const router = useRouter();

    return (
    <button type="button" onClick={() => router.back()}>
        Back to search
    </button>
    )
}