import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">
    <div className="container">
        <div className="row">
            <div className="footer-col">
                <h4>Our Physical Location</h4>
                <ul>
                    <li><p>Bookwise Store<br/> Lokanthali, Bhaktapur</p></li>
                    <li><p>Bookwise Store<br/> Durbarmarg, Kathmandu</p></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="/">Book Request</a></li>
                    <li><a href="/">Best Seller</a></li>
                    <li><a href="/">New Books</a></li>
                    <li><a href="/">Used Books</a></li>
                </ul>
            </div>   
            <div className="footer-col">
                <h4>About</h4>
                <ul>
                    <li><a href="/">FAQs</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Contact Us</a></li>
                    <li><a href="/">Notice</a></li>
                </ul>
            </div>   
            <div className="footer-col">
                <h4>Socials</h4>
                <div className="social-links">
                    <a href="/"><i className="fab fa-instagram"></i></a>
                    <a href="/"><i className="fab fa-facebook-f"></i></a>
                    <a href="/"><i className="fab fa-twitter"></i></a>
                    <a href="/"><i className="fab fa-pinterest"></i></a>
                </div>
            </div>
        </div>

    </div>
    <div class="footerBottom">
        <p> Copyright protected by Bookwise, 2023 <a href='/'>Terms of use</a> | <a href='/'>Privacy Policy</a></p>
    </div>
    
</footer>
  )
}