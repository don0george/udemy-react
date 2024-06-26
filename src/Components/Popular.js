// Popular
import c1 from "../Assets/Images/c1.jpg"
import c2 from "../Assets/Images/c2.jpg"
import c3 from "../Assets/Images/c3.jpg"
import c4 from "../Assets/Images/c4.jpg"

function Popular(){
    return(
        <div class="popular">
        <h1 class="popular__title">Most Popular</h1>
        <p class="popular__sub-title">Pick the best fit</p>

        <div class="popular__container">
            <div class="course-card">
                <img src={c1} alt="section-img1"></img>
                <h3>2023 Python Data Visaulisation Materclass</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449<del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={c2} alt="section-img1"></img>
                <h3>Basiv to Advance Programming with EMC</h3>
                <p>Col Steele</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>449<del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={c3} alt="section-img1"></img>
                <h3>Web Development Bootcamp 2023</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449<del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={c4} alt="section-img1"></img>
                <h3>Master UI/UX Design with Figma</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449<del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={c3} alt="section-img1"></img>
                <h3>Web Development Bootcamp 2023</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449<del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={c4} alt="section-img1"></img>
                <h3>Master UI/UX Design with Figma</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449<del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={c1} alt="section-img1"></img>
                <h3>2023 Python Data Visaulisation Materclass</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449<del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={c2} alt="section-img1"></img>
                <h3>Basiv to Advance Programming with EMC</h3>
                <p>Col Steele</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>449<del>1999</del></p>
            </div>
        </div>
    </div>
    )
}

export default Popular