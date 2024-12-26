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

            </div>
        </div>
     
    )
}
export default Contact