 import  contactimg from "../assets/contact.png";
  
  function Contact(){

const config={
    email:'shalinivijay1626@gmail.com',
    phone:'+919344078417'
}


return(
    <div id="contact" className="flex flex-col bg-primary px-5 py-32 text-white ">
<div className= "flex flex-col items-center">

<h1 className="text-4xl  border-b-4 border-[#2b2d77] mb-5 w-[140px] font-bold ">Contact</h1>
    <p className=" pb-5">If You want to discuss more in detail, Please contact me.</p>
<p className="py-2"><span className="font-black">Email:</span> {config.email}</p>
<p className="py-2"><span className="font-black">Phone:</span>{config.phone} </p>


<div class="border-[#2b2d77] font-[sans-serif] lg:h-screen">
            <div
                class="grid lg:grid-cols-3 items-center max-lg:justify-center gap-6 h-full sm:p-12 p-8 max-sm:p-4">
                <div class="max-w-lg max-lg:mx-auto max-lg:text-center max-lg:mb-6">
                    <h2 class="text-4xl font-extrabold text-gray-800"></h2>
                    <p class="text-sm text-gray-600 mt-4 leading-relaxed"></p>

                    <form class="mx-auto mt-8 bg-black rounded-lg p-6 shadow-md space-y-4">
                        <input type='text' placeholder='Name'
                            class="w-full rounded-md h-12 px-6 bg-secondary text-sm outline-none" />
                        <input type='email' placeholder='Email'
                            class="w-full rounded-md h-12 px-6 bg-secondary text-sm outline-none" />
                        <input type='text' placeholder='Subject'
                            class="w-full rounded-md h-12 px-6 bg-secondary text-sm outline-none" />
                        <textarea placeholder='Message' rows="6"
                            class="w-full rounded-md px-6 bg-secondary text-sm pt-3 outline-none"></textarea>
                        <button type='button'
                            class="text-black bg-white hover:bg-purple-300 font-semibold rounded-md text-sm px-6 py-3 block w-full">Send
                            Message</button>
                    </form>
                </div>

                <div class="z-10 relative lg:col-span-2">
                    <img src={contactimg} class="w-1/2 object-contain block mx-auto" />
                </div>
            </div>
        </div>
       </div>
    </div>
    )
}
export default Contact