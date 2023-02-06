import React from 'react'

function Footer() {
    <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=1" />

                    
                
    const images = [   
        "https://source.unsplash.com/collection/1346951/150x150?sig=2",
        "https://source.unsplash.com/collection/1346951/150x150?sig=3",                    
        "https://source.unsplash.com/collection/1346951/150x150?sig=4",                    
        "https://source.unsplash.com/collection/1346951/150x150?sig=5",
        "https://source.unsplash.com/collection/1346951/150x150?sig=6",
        "https://source.unsplash.com/collection/1346951/150x150?sig=7",
        "https://source.unsplash.com/collection/1346951/150x150?sig=8",
        "https://source.unsplash.com/collection/1346951/150x150?sig=9"
    ]             
                
    
  return (
    <footer className="w-full border-t bg-white pb-12">
        <div
            className="relative w-full flex items-center invisible md:visible md:pb-12"
        >
            <button
                className="absolute bg-blue-800 hover:bg-blue-700 text-white text-2xl font-bold hover:shadow rounded-full w-16 h-16 ml-12">
                &#8592;
            </button>

                {images.map(img => {
                   <img className="w-1/6 hover:opacity-75" src={img}/> 
                })}

            <button
                className="absolute right-0 bg-blue-800 hover:bg-blue-700 text-white text-2xl font-bold hover:shadow rounded-full w-16 h-16 mr-12"
                >
                &#8594;
            </button>
        </div>
        <div className="w-full container mx-auto flex flex-col items-center">
            <div className="flex flex-col md:flex-row text-center md:text-left md:justify-between py-6">
                <a href="#" className="uppercase px-3">About Us</a>
                <a href="#" className="uppercase px-3">Privacy Policy</a>
                <a href="#" className="uppercase px-3">Terms & Conditions</a>
                <a href="#" className="uppercase px-3">Contact Us</a>
            </div>
            <div className="uppercase pb-6">&copy; myblog.com</div>
        </div>
    </footer>
    
  )
}

export default Footer