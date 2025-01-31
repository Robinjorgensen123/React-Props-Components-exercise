import "../Header/Style.css"

const Header = ({Logo, Cart, CartButton}) => {
    return (
    <div className="HeaderBox">
    <img src={Logo} alt="Logo" />
    <div className="Cart-Wrapper">
        <p className="Cart">{Cart}</p>
    <button>{CartButton}</button>
    </div>
</div>
    )
} 

export default Header
