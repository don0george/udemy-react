// Navbar

function Navbar() {
    return (
        <div class="navbar">

            <div class="navbar__s1">
                <h1 class="navbar__s1-title">Udemy</h1>
            </div>

            <div class="navbar__s2">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search for anything here. Tech, Business, etc,..."></input>
            </div>

            <div class="navbar__s3">
                <p>Course</p>
                <div class="my-learning">
                    <p>My Learning</p>
                    <div class="my-learning__popup">
                        <p>you didn't purchase anything yet.</p>
                    </div>
                </div>
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-solid fa-bell"></i>
                <i class="fa-solid fa-user"></i>

            </div>

            <div class="section__s4">
                <i class="fa-solid fa-bars"></i>
            </div>

        </div>
    )
}

export default Navbar