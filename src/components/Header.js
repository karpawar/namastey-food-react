const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://w7.pngwing.com/pngs/664/210/png-transparent-uber-eats-muncheez-delivery-online-food-ordering-food-delivery-food-logo-uber-eats.png"></img>
                <h2 className="logo-title">Namastey Food</h2>
            </div>
            <div className="nav-items">
                <ul>
                    <li className="title">Home</li>
                    <li className="title">About Us</li>
                    <li className="title">Contact Us</li>
                    <li className="title">Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;