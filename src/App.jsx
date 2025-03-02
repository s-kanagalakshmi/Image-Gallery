
import './App.css'
import img1 from ".//assets/Images/Andaman.jpg"
import img2 from ".//assets/Images/Antartica.jpeg"
import img3 from ".//assets/Images/Galapagos Islands.jpeg"
import img4 from ".//assets/Images/japan.jpg"
import img5 from ".//assets/Images/Plitvice Lakes National Park.jfif"
import img6 from ".//assets/Images/seychelles.jpg"
import img7 from ".//assets/Images/venice.jfif"
import img8 from ".//assets/Images/Tropea Beach.jpg"

function App() {
    const travelDestinations=[
        {
            picture:img1,
            name:"Andaman Beach"
        },
        {
            picture:img2,
            name:"Antarctic Peninsula"
        },   {
            picture:img3,
            name:"Galapagos Islands"
        },   {
            picture:img4,
            name:"Bamboo Grove"
        },   {
            picture:img5,
            name:"Plitvice Lakes"
        },   {
            picture:img6,
            name:"Seychelles"
        },   {
            picture:img7,
            name:"Grand Canal,Venice"
        },   {
            picture:img8,
            name:"Andaman Beach"
        },
    ]
    return (
        <>
                    <h2>TRAVEL DESTINATIONS</h2><br/>

            <div className='container'>

                {
                   travelDestinations.map((item, index) => {
                        return (
                            <div className='travel'>
                                <h2><img src={item.picture}/></h2>
                                <p>{item.name}</p>
                            </div>)
                    })
                }
         


            </div>
        </>
    )
}

export default App
