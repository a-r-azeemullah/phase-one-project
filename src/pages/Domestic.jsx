import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import mssfaq from "../data/mssfaq.json";
import tcpfaq from "../data/tcpfaq.json";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Domestic = () => {
  return (
    <main>

      <section className='grid grid-cols-1 md:grid-cols-2 gap-4 py-5'>
      <Card>
        <CardHeader className="px-5">
          <CardTitle className="text-center text-xl sm:text-5xl" style={{ fontFamily: 'Times New Roman' }}>MSS</CardTitle>
          <CardDescription className="text-center">Mettur Transports - All Over South India</CardDescription>
        </CardHeader>
        <CardContent className="px-10 sm:mt-5 text-sm sm:text-xl">
          <p>
            <b className="sm:text-2xl text-xs">FAQ</b> <br />
            {/* -------------faq */}
              </p>
            <Accordion type="multiple" className="w-full px-2">
              {mssfaq.map((mssfaq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{mssfaq.question}</AccordionTrigger>
              <AccordionContent>{mssfaq.answer}</AccordionContent>
            </AccordionItem>
              ))}
            </Accordion>
            {/* -------The above is faq */}
            <br />
            <div className='text:-xs'>
            <div className=" justify-center py-1">
              <Link to='https://www.metturtransports.com/' target='blank'>
                <Button variant="blueOutline" size="xl" className="w-full p-3"> Track your shipment</Button>
              </Link>
            </div>
            <div className=" justify-center py-1">
              <Link to='https://www.metturtransports.com/locations.php' target='blank'>
                <Button variant="redOutline" size="xl" className="w-full p-3"> Branches / Delivery Locations</Button>
              </Link>
            </div>
            <div className=" justify-center py-1">
              <Link to='https://www.metturtransports.com/locations.php' target='blank'>
              <a aria-label="Chat on WhatsApp" target='empty' href="https://wa.me/6374251729?text=I'm%20inquiring%20about%20the%20Mss%20Parcel%20Service">
                <Button variant="yellowOutline" size="xl" className="w-full p-3"> Contact SparkXpressPoint</Button>
                </a>
              </Link>
            </div>
            </div>

        </CardContent>
      </Card>
      {/* ---------------TCP */}
      <Card>
        <CardHeader>
          <CardTitle className="text-center sm:text-4xl pt-1 text-xl" style={{ fontFamily: 'Times New Roman' }}>THE PROFESSIONAL COURIER</CardTitle>
          <CardDescription className="text-center">Courier Cargo & Premium Services</CardDescription>
        </CardHeader>
        <CardContent className="px-5 sm:mt-5 text-xs sm:text-xl pt-1">
        <p>
            <b className="sm:text-2xl text-sm">FAQ</b>
          </p>
          <Accordion type="multiple" className="w-full px-2">
              {tcpfaq.map((tcpfaq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{tcpfaq.question}</AccordionTrigger>
              <AccordionContent>{tcpfaq.answer}</AccordionContent>
            </AccordionItem>
              ))}
            </Accordion>
            <br />
            <div className='text:-xs'>
            <div className=" justify-center py-1">
              <Link to='https://www.tpcindia.com/' target='blank'>
                <Button variant="yellowOutline" size="xl" className="w-full p-3"> Track your shipment</Button>
              </Link>
            </div>
            <div className=" justify-center py-1">
              <Link to='https://www.tpcindia.com/terms.aspx' >
                <Button variant="redOutline" size="xl" className="w-full p-3"> Terms & Conditions</Button>
              </Link>
            </div>
            <div className=" justify-center py-1">
              <Link to='https://www.metturtransports.com/locations.php' target='blank'>
              <a aria-label="Chat on WhatsApp" target='empty' href="https://wa.me/6374251729?text=I'm%20inquiring%20about%20the%20The%20Professional%20Courier">
                <Button variant="blueOutline" size="xl" className="w-full p-3"> Contact SparkXpressPoint</Button>
                </a>
              </Link>
            </div>
            </div>
        </CardContent>
      </Card>
      </section>
    </main>

  )
}

export default Domestic