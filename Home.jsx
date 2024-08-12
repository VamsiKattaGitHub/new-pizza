import "../styles/home.css"
function Home(){
  return(
      <>
           <h1 className="heading">Welcome to pizzeria</h1>
     
     <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
           <div class="col-10 col-sm-8 col-lg-6">
             <img className="pizza" src="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
           </div>
           <div class="col-lg-6">
             <h1 id="res" class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Discover Deliciousness at Our Pizzeria!</h1>
             <p class="lead">Welcome to our Pizza Store! We're dedicated to bringing you the finest pizzas made from the freshest ingredients. Our menu features a wide range of delicious options, from classic Margherita and Pepperoni to gourmet specialties like Truffle Mushroom and BBQ Chicken. We also offer a variety of sides, drinks, and desserts to complement your meal. Whether you're looking for a quick bite or planning a family feast, our easy-to-navigate website ensures a seamless ordering experience with fast delivery and exceptional customer service. Indulge in the best pizza in town and make every meal a memorable one!</p>
             <div class="d-grid gap-2 d-md-flex justify-content-md-start">
             </div>
           </div>
         </div>
         <div class="row py-5">

<div class="col-lg-6 image-column">
  <img src="https://images.pexels.com/photos/1093015/pexels-photo-1093015.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
</div>
<div class="col-lg-6 text-column">
  <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Experience Pizza Perfection with Every Bite</h1>
  <p class="lead">At our Pizza Store, we believe that a great pizza is more than just a meal; it’s an experience. Our passion for crafting the perfect pizza shines through in every slice. Using only the freshest ingredients and time-honored recipes, we create pizzas that are bursting with flavor and quality. Whether you’re craving a classic Margherita, a spicy pepperoni, or a unique gourmet creation, our menu has something to satisfy every palate.
But our commitment goes beyond just delicious pizza. We offer a warm, inviting atmosphere where you can enjoy a meal with family and friends or order online for a quick and convenient delivery right to your door. With a focus on exceptional service and a dedication to excellence, we strive to make every visit memorable. Join us at Pizza Store and discover why we are the go-to destination for pizza lovers everywhere.</p>
  <div class="d-grid gap-2 d-md-flex justify-content-md-start">
  </div>
</div>
</div>

<div class="px-4 pt-5 my-5 text-center border-bottom">
  <h1 class="display-4 fw-bold text-body-emphasis">Indulge in Culinary Excellence at Pizza Store</h1>
  <div class="col-lg-6 mx-auto">
    <p class="lead mb-4">  Discover the art of pizza-making at its finest with Pizza Store, where every bite tells a story of passion, tradition, and innovation. Our dedication to crafting extraordinary pizzas begins with sourcing the highest-quality ingredients, from vine-ripened tomatoes to artisanal cheeses and premium meats. Each pizza is a masterpiece, meticulously prepared to ensure a perfect balance of flavors and textures that will delight your taste buds.

But our commitment to excellence extends beyond our menu. We offer an inviting ambiance that makes every meal a special occasion, whether you're dining with loved ones or enjoying a quiet moment alone. Our online ordering system ensures that you can savor our gourmet creations from the comfort of your home, with prompt delivery that brings the essence of our kitchen straight to your doorstep.

At Pizza Store, we're not just serving pizza; we're crafting experiences. Our friendly staff is dedicated to providing impeccable service, making every visit or order memorable. Experience the pinnacle of pizza perfection and join us in celebrating the flavors that make life delicious.</p>
    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
    </div>
  </div>
  <div class="overflow-hidden" >
    <div class="container px-5">
      <img src="https://images.pexels.com/photos/1093015/pexels-photo-1093015.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" width="700" height="500" loading="lazy"/>
    </div>
  </div>
</div>
      
   
     {/* crausel start */}

     <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-label="Slide 1" aria-current="true"></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" class="d-block w-100" alt="First slide"/>
      <div class="container">
        <div class="carousel-caption text-start">
          <h1 class="display-4">Deliciously Fresh</h1>
          <p class="opacity-75">Experience the burst of flavors with our freshly made pizzas, prepared with the finest ingredients to ensure every bite is a taste of perfection.</p>
          <p><a class="btn btn-lg btn-primary" href="#">Explore Our Menu</a></p>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/845812/pexels-photo-845812.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" class="d-block w-100" alt="Second slide"/>
      <div class="container">
        <div class="carousel-caption">
          <h1 class="display-4">Crafted with Passion</h1>
          <p>Each pizza is a masterpiece crafted with passion and dedication, ensuring an unforgettable culinary experience with every slice.</p>
          <p><a class="btn btn-lg btn-primary" href="#">See Our Specials</a></p>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" class="d-block w-100" alt="Third slide"/>
      <div class="container">
        <div class="carousel-caption text-end">
          <h1 class="display-4">A Taste of Tradition</h1>
          <p>Join us in celebrating the rich tradition of pizza-making with recipes passed down through generations, bringing classic flavors to life.</p>
          <p><a class="btn btn-lg btn-primary" href="#">Order Now</a></p>
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


      </>

  )

}
export default Home;