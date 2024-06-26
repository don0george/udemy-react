// Section-image
import Sectionimage from "../Assets/Images/sectionimg.png"

function SectionImage(){
    return(
        <div class="section-image">
        <img src={Sectionimage} alt="section-img"></img>
        <div class="sales__image">
            <h2>Udemy flash sale! 24 hours to save</h2>
            <p>Get the top course for just 499. Just one day to save
                but lifetime to plan
            </p>
        </div>
    </div>
    )
}

export default SectionImage