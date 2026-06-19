function Header(){
    return(
        <nav>
            <div className="nav-brand">
                <h1>Merkato</h1>
            </div>
            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/products">Products</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
        </nav>
    )
}

export default Header;