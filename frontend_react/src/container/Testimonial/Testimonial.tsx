// import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'; // Uncomment when there is client Testimonial
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { client, urlFor } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Testimonial.scss';

export interface Testimonial {
  name: string;
  company: string;
  imgurl: string;
  feedback: string;
}

export interface Brand {
  _id: string;
  name: string;
  imgUrl: string;
}

const Testimonial = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  // const [currentIndex, setCurrentIndex] = useState(0); // Uncomment when there is client Testimonial

  useEffect(() => {
    const brandsQuery = '*[_type == "brands"]';
    const skillsQuery = '*[_type == "testimonials"]';

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setTestimonials(data);
    });
  }, []);

  // const currentTestimonial = testimonials[currentIndex]; // Uncomment when there is client Testimonial
  //
  // const handleClick = (index: number) => { // Uncomment when there is client Testimonial
  //   setCurrentIndex(index);
  // };

  return (
    <>
      {testimonials.length && (
        <>
          {/*Uncomment when there is client Testimonial*/}
          {/*<div className="app__testimonial-item app__flex">*/}
          {/*  <img*/}
          {/*    src={urlFor(currentTestimonial.imgurl).url()}*/}
          {/*    alt="testimonial"*/}
          {/*  />*/}
          {/*  <div className="app__testimonial-content">*/}
          {/*    <p className="p-text">{currentTestimonial.feedback}</p>*/}
          {/*    <div>*/}
          {/*      <h4 className="bold-text">{currentTestimonial.name}</h4>*/}
          {/*      <h5 className="p-text">{currentTestimonial.company}</h5>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className="app__testimonial-btns app__flex">*/}
          {/*  <div*/}
          {/*    className="app__flex"*/}
          {/*    role={'button'}*/}
          {/*    tabIndex={-1}*/}
          {/*    onClick={() =>*/}
          {/*      handleClick(*/}
          {/*        currentIndex === 0*/}
          {/*          ? testimonials.length - 1*/}
          {/*          : currentIndex - 1*/}
          {/*      )*/}
          {/*    }*/}
          {/*    onKeyDown={() => {*/}
          {/*      console.log('Key pressed');*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    <HiChevronLeft />*/}
          {/*  </div>*/}
          {/*  <div*/}
          {/*    className="app__flex"*/}
          {/*    role={'button'}*/}
          {/*    tabIndex={-1}*/}
          {/*    onClick={() =>*/}
          {/*      handleClick(*/}
          {/*        currentIndex === testimonials.length - 1*/}
          {/*          ? 0*/}
          {/*          : currentIndex + 1*/}
          {/*      )*/}
          {/*    }*/}
          {/*    onKeyDown={() => {*/}
          {/*      console.log('Key pressed');*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    <HiChevronRight />*/}
          {/*  </div>*/}
          {/*</div>*/}
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl).url()} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg'
);
