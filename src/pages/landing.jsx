import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import faq from "../data/faq.json";
import ProtectedRoute from '@/components/protected_route'

const LandingPage = () => {
  return (
    <main className=" flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tight ">Courier and Parcel</h1>
        <h1 className="flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tight ">Services</h1>
        <p className=" text-gray-300 sm:mt-5 text-xs sm:text-xl">Fast & Reliable, Your Trusted Courier Partner!</p>
      </section>
      <div>
      <div className="flex gap-6 justify-center">
        <Link to='Domestic'>
        <Button variant="blue" size="xl" className="flex-grow min-w-[150px]"> &nbsp;&nbsp;&nbsp;Domestic&nbsp;&nbsp;</Button>
        </Link>
        <Link to='International'>
        <Button variant="destructive" size="xl" className="flex-grow min-w-[150px]"> International</Button>
        
        </Link>
      </div>
      <div className="text-center">
      <p className=" text-gray-300 sm:mt-5 text-xs sm:text-xl p-3">Please select the above service you would like to avail!</p>
      </div>
      </div>
      <div>
      <Card >
        <CardHeader>
          <CardTitle>About us</CardTitle>
        </CardHeader>
        <CardContent style={{ textAlign: "justify" }}>
           <p>Welcome to Spark Xpress Point, your trusted partner for reliable and efficient parcel and courier services. We understand that timely deliveries are essential for your business and personal needs, which is why we are committed to providing fast, secure, and affordable shipping solutions. Our dedicated team of professionals works tirelessly to ensure that your packages arrive safely at their destination, whether it's local, national, or international. With user-friendly tracking, competitive pricing, and exceptional customer service, Spark Xpress Point is here to simplify your shipping experience. Let us handle your deliveries while you focus on what matters most!</p>
        </CardContent>
        <CardFooter>
          <CardDescription>scroll down for our contact information and location details! </CardDescription>
        </CardFooter>
      </Card>
      </div>
      
      <img src="/Sparkbanner.png" alt="banner" className="w-full" />

      <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <Card>
        <CardHeader className="px-5">
          <CardTitle>Contact Details</CardTitle>
        </CardHeader>
        <CardContent className="px-10 sm:mt-5 text-xs sm:text-xl">
          <p>
            <b>Office Address</b>
            <br />
            Spark Xpress Point  <br />
            8/256, Pudhupettai St Mainroad,<br />
            pattur, ch-600 122. <br /> <br />
            &#x2709; &nbsp; GMail- sparkxpresspoint@gmail.com <br /><br />
            &#128222; &nbsp; ph- 6374 251 729 <br /><br />

            <a aria-label="Chat on WhatsApp" target='empty' href="https://wa.me/6374251729?text=I'm%20inquiring%20about%20the%20Parcel%20Service">
            <div >
              <img src="/whatsapp.png" alt="whatsapp Image" className="w-1/2 sm:w-1/3 md:w-1/2 lg:w-1/3  hover:scale-110 hover:shadow-2xl" />
            </div>
            </a>
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Location Details</CardTitle>
        </CardHeader>
        <CardContent className="px-5 sm:mt-5 text-xs sm:text-xl">
          <p><b>Find us at: </b></p>
          <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4211.1577391059955!2d80.11701277542218!3d13.021496487298434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261000bc4bba5%3A0xfa9d432a9e7eeb27!2sSPARK%20XPRESS%20POINT!5e1!3m2!1sen!2sin!4v1728921517328!5m2!1sen!2sin" 
              width="100%" 
              height="300" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="py-1"
            ></iframe>
        </CardContent>
      </Card>
      </section>

      <Accordion type="multiple" className="w-full px-2">
        {faq.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>


    </main>

  )
}

export default LandingPage