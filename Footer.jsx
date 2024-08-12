import React from 'react';
// import './Footer.css'; // Make sure this path is correct

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h4>About Us</h4>
                        <p>We offer the best pizzas in town with fresh ingredients and a passion for quality. Join us for a delicious experience.</p>
                    </div>
                    <div className="col-md-4">
                        <h4>Contact Us</h4>
                        <p><i className="fa fa-map-marker"></i> 123 Pizza Street, Food City, FC 12345</p>
                        <p><i className="fa fa-phone"></i> +1 234 567 890</p>
                        <p><i className="fa fa-envelope"></i> info@pizzastore.com</p>
                    </div>
                    <div className="col-md-4">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            <a href="#" className="text-white"><i className="fa fa-facebook"></i> Facebook</a>
                            <a href="#" className="text-white"><i className="fa fa-twitter"></i> Twitter</a>
                            <a href="#" className="text-white"><i className="fa fa-instagram"></i> Instagram</a>
                            <a href="#" className="text-white"><i className="fa fa-youtube"></i> YouTube</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center mt-3">
                        <p>&copy; 2024 Pizza Store. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;