import Link from "next/link"
export default function Page(){
    return(
        <main>
            <h1>this is the Dashboard page</h1>
            <Link href="/admin">
            Admin Panel</Link>
        </main>
    )
}