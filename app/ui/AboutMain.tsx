import Image from "next/image";

 export default function AboutMain(){
  return (
    <div className='w-full' >
      {/* About Us Section */}
      <div className="max-w-[700px] mt-2 mx-auto px-4 sm:px-0 py-10">
        
          {/* Image */}
          <div className="h-[300px] overflow-hidden ">
            <Image
              src="/3d-view-personal-computer-with-vegetation.jpg"
              alt="Our team brainstorming solutions"
              width={700}
              height={300}
              className="rounded-lg bg-fit"
            />
          </div>
          {/* Content */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Empowering Businesses with Innovative Digital Solutions
            </h2>
            <p className=" mb-6">
              At <strong>Hanzotech</strong>, we specialize in providing creative and effective digital solutions for businesses of all sizes. Our experienced team is passionate about crafting user-friendly websites, robust cybersecurity frameworks, and digital strategies to help your business thrive in a competitive world.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">✓</span>
                <span>
                  <strong>Innovation & Trends:</strong> Stay ahead of the curve with cutting-edge solutions tailored to your needs.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">✓</span>
                <span>
                  <strong>Cybersecurity Insights:</strong> Protect your digital assets with state-of-the-art security measures.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">✓</span>
                <span>
                  <strong>Mindfulness & Wellness:</strong> We prioritize work-life balance for our clients and employees to create sustainable solutions.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">✓</span>
                <span>
                  <strong>Scalable Designs:</strong> Build websites that grow alongside your business.
                </span>
              </li>
            </ul>
          </div>
        </div>

      {/* Our Services */}
      <div className=" py-10">
        <div className="max-w-[700px] mt-0 mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-6">
            Build, Grow & Manage Your Online Presence
          </h2>
          <div className="">
            {/* Left Images */}
            <div className=" grid grid-cols-3 gap-2 w-full">
                <div className='span-col-1'>
                <Image
                src="/3d-view-personal-computer-with-vegetation.jpg"
                alt="Our team collaborating"
                width={500}
                height={400}
                className="rounded-lg"
              />

                </div>
           <div className='span-col-2'>
           <Image
                src="/3d-view-personal-computer-with-vegetation.jpg"
                alt="Our creative workspace"
                width={600}
                height={400}
                className="rounded-lg"
              />

           </div>
            
            </div>
            {/* Right Content */}
            <div>
              <p className=" mb-6">
                Whether you &apos;re launching a new business or growing an established brand, we are here to provide full-service digital solutions. From modern websites to comprehensive blog management, we ensure your online presence reflects your unique vision and goals.
              </p>
              <p className="">
                We work closely with our clients to understand their challenges and provide customized solutions that deliver measurable results. Let us help you turn your ideas into reality and achieve lasting success in the digital space.
              </p>
            </div>
          </div>
          {/* Client Testimonial */}
          <div className="mt-10 bg-gray-800 text-center p-6 rounded-lg">
            <p className="italic text-gray-300">
              &apos;The team at Hanzotech transformed my vision into a sleek, functional website. Their attention to detail, creative approach, and professionalism exceeded my expectations. Highly recommend!&apos;
            </p>
            <p className="mt-4 font-bold text-green-500">- Martin Petere, Entrepreneur</p>
          </div>
        </div>
      </div>
    </div>
  );
};


