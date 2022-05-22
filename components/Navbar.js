import Link from "next/link";

export default function Navbar() {
    const user = null;
    const username = null;

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href='/'><button className="btn-logo">BLOGGER</button></Link>
                </li>
                {username && (
                    <>
                        <li className="push-left">
                            <Link href='/admin'><button className="btn-blue">Create Posts</button></Link>
                        </li>
                        <li>
                            <Link href={`/${username}`}>
                                <img src={user?.photoURL} alt="profile image" />
                            </Link>
                        </li>
                    </>
                )}
                {!username && (<Link href="/enter"><button className="btn-blue">Log in</button></Link>)}
            </ul>
        </nav>
    );
}