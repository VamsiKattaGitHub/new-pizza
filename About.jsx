// import "./About.css"
function About(){
    return(
        <>
            <h1 className="heading">About Us</h1>
         <div class="container">
        <div class="header">
            <p>Welcome to Pizza Store, your number one source for the best pizzas in town.</p>
        </div>
        
        <div class="content">
            <h1 className="hea">Our Story</h1>
            <p>Founded in [1990], Pizza Store was born out of a genuine love for crafting the perfect pizza. Our founder, [Owner's Name], started with a simple vision: to create a place where friends and family could gather and enjoy exceptional, handcrafted pizzas made from the finest ingredients. It all began in a small, cozy kitchen where [Owner's Name]'s passion for pizza-making flourished. With each pizza, a new recipe was perfected, blending traditional techniques with innovative flavors.

As word spread, our humble pizzeria quickly became a local favorite, known for its warm, welcoming atmosphere and dedication to quality. We've grown over the years, but our commitment to excellence remains unchanged. Every pizza we serve is a testament to our journey—a journey filled with hard work, creativity, and an unwavering commitment to our customers. Today, Pizza Store stands as a beloved institution in [Community Name], where our story continues to unfold with every slice shared.

</p>
        </div>
        
        <div class="mission">
            <h1 className="hea">Our Mission</h1>
            <p>At Pizza Store, our mission is to bring joy to our community through delicious, made-to-order pizzas crafted with the finest ingredients.</p>
        </div>
        
        <div class="team">
            <h1 className="hea">Meet the Team</h1>
            <div className="center">
                <img src="https://images.pexels.com/photos/3824771/pexels-photo-3824771.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Owner"/>
                <p><strong>[Micheal Alfredo]</strong>: Founder and Head Chef</p>
            </div>
            <div className="center">
                <img src="https://images.pexels.com/photos/3116381/pexels-photo-3116381.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Manager"/>
                <p><strong>[Mr. Brade Rodger]</strong>: Manager</p>
            </div>
        </div>
        
        <div class="ingredients">
            <h1 className="hea">Quality Ingredients</h1>
            <p>We believe that great pizza starts with great ingredients. That's why we source our produce from local farms and use only the finest cheeses and meats.</p>
        </div>
        
        <div class="community">
            <h1 className="hea">Community Focus</h1>
            <p>We're proud to be part of [Community Name] and actively support local events and charities. Our commitment to sustainability means we use eco-friendly packaging and practices.</p>
        </div>
        
        <div class="testimonials">
            <h1 className="hea">Hear from Our Customers</h1>
            <blockquote>
                "Best pizza in town! The crust is perfection." - [jack cronos]
            </blockquote>
            <blockquote>
                "I love the variety of toppings. Always fresh and delicious!" - [Alizebeth Marteiz]
            </blockquote>
        </div>
        <div class="contact">
            <h1 className="hea">Contact Us</h1>
            <p>Visit us at [Address], call us at [+993888838], or connect with us on social media:</p>
            <div class="social-links">
                <a href="https://facebook.com">Facebook</a>
                <a href="https://twitter.com">Twitter</a>
                <a href="https://instagram.com">Instagram</a>
            </div>
        </div>
    </div>
        
        </>
    )
}
export default About;