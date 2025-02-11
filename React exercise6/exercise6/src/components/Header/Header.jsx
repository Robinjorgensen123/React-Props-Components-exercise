import "../Header/Style.css"

const Header = ({Logo, CartCount, CartButton}) => {
    return (
    <div className="HeaderBox">
    <img src={Logo} alt="Logo" />
    <div className="Cart-Wrapper">
        <p className="Cart">Cart</p>
    <button><a>{CartCount}</a></button>
    </div>
</div>
    )
} 

export default Header
