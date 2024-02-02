import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            <h1>MugStyle.</h1>

            <div>
                <Link href="/">Home</Link>
                <Link href="/">Our products</Link>
                <Link href="/">About</Link>
                <Link href="/">contact</Link>
            </div>

            <div>
                <Link href="/">login</Link>

                <div>
                    <Link href="/">cart</Link>
                    <div>1</div>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;