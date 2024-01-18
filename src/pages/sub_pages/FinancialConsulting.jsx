import React,{ useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import fcone from "../../assets/img/financial_consulting_icons/Finance and Accounting Process Optimization.png";
import fctwo from "../../assets/img/financial_consulting_icons/financial management.png";
import fcthree from "../../assets/img/financial_consulting_icons/risk management.png";
import fcfour from "../../assets/img/financial_consulting_icons/Cost and Performance Management.png";
import fcfive from "../../assets/img/financial_consulting_icons/Business Planning & Analysis.png";
import fcsix from "../../assets/img/financial_consulting_icons/strategy (1).png";

import ATOB from '../../assets/img/new_logos_comps/newer/AtoB 2.png';
import bobtail from '../../assets/img/new_logos_comps/bobtail.png';
import joyride from '../../assets/img/new_logos_comps/joyride.png';
import Truckx from '../../assets/img/new_logos_comps/TruckX.png';
import pallet from '../../assets/img/new_logos_comps/newer/Pallet Logo.png';
import digitalOcean from '../../assets/img/new_logos_comps/newer/digital-ocean.png';
import mudflap from '../../assets/img/new_logos_comps/newer/Mudflap.png';
import sungrade from '../../assets/img/new_logos_comps/sungrade solar.png';

import goal from "../../assets/img/process_icons/goal.png";
import planicon from "../../assets/img/process_icons/plan.png";
import actionicon from "../../assets/img/process_icons/action.png";
import assignicon from "../../assets/img/process_icons/assign.png";
import testicon from "../../assets/img/process_icons/test.png";
import impicon from "../../assets/img/process_icons/implement.png";
import monitoricon from "../../assets/img/process_icons/monitor.png";
import improveicon from "../../assets/img/process_icons/improve.png";

import SmallWorkCard from '../../components/shared/cards/SmallWorkCard';

import achiconone from "../../assets/img/achievements-badges/clutch_1.png";
import achicontwo from "../../assets/img/achievements-badges/BBB.png";
import achiconthree from "../../assets/img/achievements-badges/clutch_2.png";
import useScrollToTop from '../../hooks/useScrollToTop';
import caseStudies from '../../data/caseStudies.json';



const FiancialConsulting = () => {

  const [isVisibleTesti, setIsVisibleTesti] = useState(false);
  const testiRef = useRef(null);
 
   const [isVisible, setIsVisible] = useState(false);
   const containerRef = useRef(null);
 
   const [isVisibleAch, setIsVisibleAch] = useState(false);
   const achRef = useRef(null);
 
   const [isVisiblecard, setIsVisiblecard] = useState(false);
   const cardsRef = useRef(null);
 
   const [processNewVisible, setProcessNewVisible] = useState(false);
   const processNewRef = useRef(null);
 
  
   
   useEffect(() => {
     const observer = new IntersectionObserver(
       (entries) => {
         const entry = entries[0];
         setProcessNewVisible(entry.isIntersecting);
       },
       { threshold: 1 }
     );
   
     if (processNewRef.current) {
       observer.observe(processNewRef.current);
     }
   
     return () => observer.disconnect();
   }, []);
   
 
 
   useEffect(() => {
     const observer = new IntersectionObserver(
       (entries) => {
         entries.forEach((entry) => {
           setIsVisiblecard(entry.isIntersecting);
         });
       },
       { threshold: 0.5 }
     );
 
     if (cardsRef.current) {
       observer.observe(cardsRef.current);
     }
 
     return () => observer.disconnect();
   }, []);
   
 
   useEffect(() => {
     const observer = new IntersectionObserver(
         (entries) => {
             entries.forEach((entry) => setIsVisibleAch(entry.isIntersecting));
         },
         { threshold: 0.5 }
     );
 
     observer.observe(achRef.current);
     return () => observer.disconnect();
 }, []);
 
 useEffect(() => {
   const observer = new IntersectionObserver(entries => {
       entries.forEach(entry => setIsVisibleTesti(entry.isIntersecting));
   }, { threshold: 0.5 });
 
   observer.observe(testiRef.current);
   return () => observer.disconnect();
 }, []);
 
 
 useEffect(() => {
     const observer = new IntersectionObserver(entries => {
         entries.forEach(entry => setIsVisible(entry.isIntersecting));
     }, { threshold: 0.5 }); 
 
     observer.observe(containerRef.current);
     return () => observer.disconnect(); 
 }, []);
 

  const firstThreeCaseStudies = caseStudies.slice(0, 3);
  useScrollToTop();
    return(
        <>
         {/* <!-- Hero Section --> */}
      <article class="hero">
        <section class="hero-container-fin-consul">
          <div class="hero-content-fin-consul">
            <h2 class="hero-heading-fin-consul">
            Strategy and Support <br /> to Scale Your Growing Business
            {/* <pre>
    {'This is the first sentence.\nThis is the second sentence.'}
  </pre> */}
            </h2>
            <p class="hero-desc-fin-consul">
            At Phi Consulting we understand what it’s like not to be able to raise capital for a good business idea because of lack of clarity in the numbers. And, with our financial consulting service for startups, we’ve helped many startups organize their finances and elevate their financial knowledge.
            </p>
            <div class="consult-button-fin-consul">
            <Link to="/contact" className='scheduler-set'> Schedule a Free Consultation</Link>
            </div>
          </div>
        </section>
      </article>

      {/* <!-- sales page banner --> */}
      <article class="sales-solutions">
        <h2 class="sales-heading">Creating strong foundations for a sustainable future</h2>
        <p class="sales-banner-desc">
        The path of a startup is not easy. We want to be the guide that helps you discover the right methods to catalyze your growth
        </p>
        <div class="sales-banner-container">
          <div class="sales-cards one-with-white-back">
            <div class="icon-container">
              <img
                src={fcone}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">
            Finance Transformation:
            </h3>
            <div class="sales-card-description">
            Our finance transformation solutions allow you to do more with fewer resources by restructuring and optimizing your financial function – so you can drive strategic value now while keeping your eyes pointed toward the future.
            </div>
          </div>

          <div class="sales-cards one-with-blue-back">
            <div class="icon-container">
              <img
                src={fctwo}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">Process Improvement</h3>
            <div class="sales-card-description">
            Broken business processes will cost you time and money. We are experts at identifying, analyzing and improving existing processes to improve performance and drive results.
            </div>
          </div>
          <div class="sales-cards one-with-white-back">
            <div class="icon-container">
              <img
                src={fcthree}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">Business Plan Consulting</h3>
            <div class="sales-card-description">
            Investors look for structured and detailed plans for scaling their business while balancing risk and return. We help navigate critical plans for the future by mapping out execution plans for the road ahead.
            </div>
          </div>
        </div>
        <div class="sales-banner-container down-spacing">
          {/* <div class="sales-cards one-with-blue-back">
            <div class="icon-container">
              <img
                src={fcfour}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">Cost and Performance Management</h3>
            <div class="sales-card-description">
              We assist in aligning your costs with business goals, driving
              efficiency, and maximizing overall performance.
            </div>
          </div>

          <div class="sales-cards one-with-white-back">
            <div class="icon-container">
              <img
                src={fcfive}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">Business Planning & Analysis</h3>
            <div class="sales-card-description">
              We guide you in creating strategic plans that foster growth,
              profitability, and long-term success.
            </div>
          </div>
          <div class="sales-cards one-with-blue-back">
            <div class="icon-container">
              <img
                src={fcsix}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">Strategy Management</h3>
            <div class="sales-card-description">
              Align your organizational goals, enhance decision-making
              processes, and drive sustainable growth through strategic
              initiatives.
            </div>
          </div> */}
        </div>
      </article>

      {/* <!-- Section path  --> */}
      <article class="path">
        <section class="path-container">
          <h2 class="path-heading">Our Process</h2>
          <p class="sales-process-desc">
          Phi Consulting follows a meticulous process to ensure the success of your financial strategies:
          </p>
          <div class="process-container">
            <div class="circle-container-sales">
              <div class="circle-content-sales">
                <div class="icon-process-container">
                  <img
                     src={goal}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading-sales">Define Your Goals</h2>
                <h3 class="circle-text-sales">
                Collaboratively outline your financial objectives and aspirations.
                </h3>
              </div>
            </div>
            <div class="circle-container-sales">
              <div class="circle-content-sales">
                <div class="icon-process-container">
                  <img
                    src={planicon}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading-sales">Plan & Map Your Process</h2>
                <h3 class="circle-text-sales">
                Develop a customized roadmap tailored to your business needs.
                </h3>
              </div>
            </div>
            <div class="circle-container-sales">
              <div class="circle-content-sales">
                <div class="icon-process-container">
                  <img
                     src={actionicon}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading-sales">Set Actions</h2>
                <h3 class="circle-text-sales">
                Implement strategic actions to achieve your financial milestones.
                </h3>
              </div>
            </div>
            <div class="circle-container-sales">
              <div class="circle-content-sales">
                <div class="icon-process-container">
                  <img
                    src={assignicon}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading-sales">Assign Stakeholders</h2>
                <h3 class="circle-text-sales">
                Clearly define roles and responsibilities for seamless execution.
                </h3>
              </div>
            </div>
            <div class="circle-container-sales">
              <div class="circle-content-sales">
                <div class="icon-process-container">
                  <img
                    src={testicon}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading-sales">Test the Process</h2>
                <h3 class="circle-text-sales">
                Rigorously evaluate and fine-tune the proposed financial strategies.
                </h3>
              </div>
            </div>
            <div class="circle-container-sales">
              <div class="circle-content-sales">
                <div class="icon-process-container">
                  <img
                     src={impicon}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading-sales">Implement</h2>
                <h3 class="circle-text-sales">
                Execute the optimized financial plan with precision.
                </h3>
              </div>
            </div>

            <div class="circle-container-sales">
              <div class="circle-content-sales">
                <div class="icon-process-container">
                  <img
                     src={monitoricon}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading-sales">Monitor the Results</h2>
                <h3 class="circle-text-sales">
                Continuously track and analyze financial performance.
                </h3>
              </div>
            </div>
            <div class="circle-container-sales">
              <div class="circle-content-sales">
                <div class="icon-process-container">
                  <img
                    src={improveicon}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading-sales">Iterate the Process</h2>
                <h3 class="circle-text-sales">
                Adapt and refine strategies based on real-time results and changing business landscapes
                </h3>
              </div>
            </div>
          </div>
        </section>
      </article>


      {/* <!-- section new process --> */}
      <article class="process-new">
        <section class="process-new-container">
          <h2 class="path-heading">Every talent in our network is pre-vetted and qualified on the below parameters.</h2>
          <p class="work-desc">
          Right Matchmaking is at the core of everything that Phi does, hence, we put in a great deal of time and effort to ensure that the first shortlisted talent matches your requirements.
          </p>
          <div class="process-new-section">
            <div class="left-process-section" ref={processNewRef}>
              <div className={`tooltip-right ${processNewVisible ? 'fade-in' : ''}`}>
                <img
                  src="../assets/img/process_icons/goal.png"
                  alt=""
                  class="new-process-icon"
                />
                <div class="text-container">
                  <div class="process-new-heading">Profile Screening & Shortlisting</div>
                  <div class="process-new-description">
                  We review tons of applications against our minimum criteria, their professional journey, and holistic background checks.
                  </div>
                </div>
              </div>
            </div>
            <div class="right-process-section">
              <div className={`tooltip-left ${processNewVisible ? 'fade-in' : ''}`}>
                <img
                  src="../assets/img/process_icons/plan.png"
                  alt=""
                  class="new-process-icon"
                />
                <div class="text-container">
                  <div class="process-new-heading">Language Proficiency</div>
                  <div class="process-new-description-right-side">
                  AI-powered communication assessment tests a candidate's reading, writing, pronunciation, clarity, fluency, and speed of speech.

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="process-new-section">
            <div class="left-process-section">
              <div className={`tooltip-right ${processNewVisible ? 'fade-in' : ''}`}>
                <img
                  src="../assets/img/process_icons/action.png"
                  alt=""
                  class="new-process-icon"
                />
                <div class="text-container">
                  <div class="process-new-heading">Aptitude Evaluation</div>
                  <div class="process-new-description">
                  We conduct a scientifically designed aptitude test to check their reasoning and problem-solving ability.
                  </div>
                </div>
              </div>
            </div>
            <div class="right-process-section">
              <div className={`tooltip-left ${processNewVisible ? 'fade-in' : ''}`}>
                <img
                  src="../assets/img/process_icons/assign.png"
                  alt=""
                  class="new-process-icon"
                />
                <div class="text-container">
                  <div class="process-new-heading">Technical Assessment</div>
                  <div class="process-new-description-right-side">
                  We have curated one of the toughest and most advanced technical assessments to vet talent's capabilities, these are role-based extremely stringent tests that filter the top 10% of talents.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="process-new-section">
            <div class="left-process-section">
              <div className={`tooltip-right ${processNewVisible ? 'fade-in' : ''}`}>
                <img
                  src="../assets/img/process_icons/test.png"
                  alt=""
                  class="new-process-icon"
                />
                <div class="text-container">
                  <div class="process-new-heading">Culture-Fit</div>
                  <div class="process-new-description">
                  Our Talent Acquisition experts conduct the final interview understanding the candidate's preferences and expectations to do the right matchmaking.
                  </div>
                </div>
              </div>
            </div>
            <div class="right-process-section">
              {/* <div className={`tooltip-left ${processNewVisible ? 'fade-in' : ''}`}>
                <img
                  src="../assets/img/process_icons/implement.png"
                  alt=""
                  class="new-process-icon"
                />
                <div class="text-container">
                  <div class="process-new-heading">Implement the Process</div>
                  <div class="process-new-description-right-side">
                    Execute strategies flawlessly with our hands-on approach,
                    bringing the plan to life.
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div class="process-new-section">
            {/* <div class="left-process-section">
              <div className={`tooltip-right ${processNewVisible ? 'fade-in' : ''}`}>
                <img
                  src="../assets/img/process_icons/monitor.png"
                  alt=""
                  class="new-process-icon"
                />
                <div class="text-container">
                  <div class="process-new-heading">Monitor the Results</div>
                  <div class="process-new-description">
                    Continuously track key metrics, assess performance, and
                    ensure strategies yield desired outcomes.
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div class="right-process-section">
              <div className={`tooltip-left ${processNewVisible ? 'fade-in' : ''}`}>
                <img
                  src="../assets/img/process_icons/improve.png"
                  alt=""
                  class="new-process-icon"
                />
                <div class="text-container">
                  <div class="process-new-heading">Make Improvements</div>
                  <div class="process-new-description-right-side">
                    Identify areas for improvement based on results, refining
                    strategies for ongoing optimization.
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </article>

      {/* <!-- full scale banner --> */}
      <article class="full-scale-banner">
        <section class="banner-full-exp">
          <div class="overlay"></div>
          <div class="banner-new-full-scale-container">
            <h2 class="full-banner-call">
            71% of financial service executives outsource or offshore some of their services. While 61% of organizations said geopolitical world events like COVID accelerated their digital transformation efforts.
            </h2>
          </div>
        </section>
      </article>

        {/* <!-- Clients Section --> */}
        <article className={`clients ${isVisible ? 'animate' : ''}`} ref={containerRef}>
        <section class="client-container">
          <div class="client-content">
            <h2 class="client-heading">Trusted by Industry Leaders</h2>
            <p class="client-desc">
              Phi Consulting has empowered startups and SMEs across diverse
              industries. <br />
              Our clients trust us for our deep expertise, personalized service,
              and commitment to delivering tangible results.
            </p>
            <div class="client-logo-container">
              <div class="logo-container-one">
                <div class="image-container">
                  <img
                    src={ATOB}
                    alt="AtoB_logo"
                    title="AtoB"
                    className='client-logos-sectio-hover'
                  />
                </div>
                <div class="image-container">
                  <img
                    src={bobtail}
                    alt="bobtail_logo"
                    title="BoBtail"
                    className='client-logos-sectio-hover'
                  />
                </div>

                <div class="image-container">
                  <img
                    src={joyride}
                    alt="joyride_logo"
                    title="Joyride"
                    className='client-logos-sectio-hover'
                  />
                </div>
                <div class="image-container">
                  <img
                    src={Truckx}
                    alt="truckx_logo"
                    title="TruckX"
                    className='client-logos-sectio-hover'
                  />
                </div>
                <div class="image-container">
                  <img
                    src={pallet}
                    alt="Pallet_logo"
                    title="Pallet"
                    className='client-logos-sectio-hover'
                  />
                </div>
              </div>
              <div class="logo-container-one">
                <div class="image-container-bottom">
                  <img
                    src={digitalOcean}
                    alt="bobtail_logo"
                    title="Digital Ocean"
                    className='client-logos-sectio-hover'
                  />
                </div>

                <div class="image-container-bottom">
                  <img
                    src={mudflap}
                    alt="joyride_logo"
                    title="Mudflap"
                    className='client-logos-sectio-hover'
                  />
                </div>
                <div class="image-container-bottom">
                  <img
                    src={sungrade}
                    alt="truckx_logo"
                    title="Sungrade Solar"
                    className='client-logos-sectio-hover'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
      
      {/* <!-- why phi for customer exp Section --> */}
      <article class="why-phi-for-sales">
        <h2 class="why-phi-heading">
        Why Choose Phi?
        </h2>
        <p class="why-phi-desc">
        Elevate your financial strategies with confidence and chart a course for sustained success.
        </p>
        <div class="insights-container">
          <div class="insights-bundle">
            <div class="left-section-insights">
              <div class="overlay-container one-bui-consul">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">Proven Expertise</h2>
                  <p class="overlay-desc">
                  At Phi Consulting, our track record speaks volumes. With years of diverse experience and a history of successful financial transformations, we bring a wealth of proven expertise to the table. Count on us to navigate the complexities of financial landscapes with precision and deliver tangible results for your business.
                  </p>
                </div>
              </div>
            </div>
            <div class="right-section-insights">
              <div class="overlay-container two-fin-consul">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">Plan For The Future</h2>
                  <p class="overlay-desc">
                  Phi Consulting goes beyond the present; we're dedicated to shaping a future of financial success for your business. Collaborate with us to craft strategic financial plans that not only address current challenges but also position your enterprise for long-term growth and resilience.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="insights-bundle">
            <div class="left-section-insights">
              <div class="overlay-container three-fin-consul">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">Make Data-Driven Decisions</h2>
                  <p class="overlay-desc">
                  In an era where data is paramount, Phi Consulting empowers your decision-making process with robust, data-driven insights. Leverage our analytical expertise to transform complex financial data into actionable strategies, ensuring every decision propels your business forward.
                  </p>
                </div>
              </div>
            </div>
            <div class="right-section-insights">
              <div class="overlay-container four-fin-consul">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">Know Your Startup's Value</h2>
                  <p class="overlay-desc">
                  Understanding the true value of your startup is key to strategic growth. Phi Consulting helps you uncover and maximize your startup's inherent value. Through thorough analysis and strategic planning, we ensure that your business is positioned for success and recognized for its unique contributions in the market
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* <!-- Work small version Section --> */}
      <article class="work" ref={cardsRef}>
        <section class="work-section">
          <h2 class="work-heading">Portfolio</h2>
          <p class="work-desc">
          Explore our portfolio to witness the transformative impact of Phi Consulting on businesses like yours. Each success story is a testament to our commitment to driving sales excellence.
          </p>
          <div class="work-row">
          {firstThreeCaseStudies.map(study => (
                <SmallWorkCard key={study.id} caseStudy={study} isVisible={isVisiblecard} />
            ))}
          </div>

          <div class="right-button spacing-under">
            <span>View More Case Studies</span>
          </div>
        </section>
      </article>

      {/* <!-- Testimonial Section --> */}
      <article class="testimonial">
        <section className="testimonial-container">
          <h2 class="testi-heading">
          What Our Clients Say About Us
          </h2>
          <p class="testi-desc">
          Our clients speak for the transformative impact of Phi Consulting. Here's what they have to say about their experiences partnering with us:
          </p>
        </section>

        <section className="testi-cards-container" ref={testiRef}>
          <div className={`testi-card ${isVisibleTesti ? 'animate' : ''}`}>
            <div class="circleBase type3 testi-one">
              {/* <!-- <img src="./assets/img/testimonial_one.webp" alt="" /> --> */}
            </div>

            <p class="testi-quote">
              <q
                ><i
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam atque iste aut magni harum nobis quasi impedit enim
                  laborum distinctio, accusamus ducimus dolorem illum, mollitia
                  aperiam deserunt voluptate quaerat totam!</i
                ></q
              >
            </p>
            <h3 class="testi-card-heading">-Rob Robinson (CEO)</h3>
          </div>

          <div className={`testi-card ${isVisibleTesti ? 'animate' : ''}`}>
            <div class="circleBase type3 test-two">
              <img src="" alt="" />
            </div>

            <p class="testi-quote">
              <q
                ><i
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam atque iste aut magni harum nobis quasi impedit enim
                  laborum distinctio, accusamus ducimus dolorem illum, mollitia
                  aperiam deserunt voluptate quaerat totam!</i
                ></q
              >
            </p>
            <h3 class="testi-card-heading">-lenny pepridge (CTO)</h3>
          </div>

          <div className={`testi-card ${isVisibleTesti ? 'animate' : ''}`}>
            <div class="circleBase type3 test-three">
              <img src="" alt="" />
            </div>

            <p class="testi-quote">
              <q
                ><i
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam atque iste aut magni harum nobis quasi impedit enim
                  laborum distinctio, accusamus ducimus dolorem illum, mollitia
                  aperiam deserunt voluptate quaerat totam!</i
                ></q
              >
            </p>
            <h3 class="testi-card-heading">-linda bigaloo (finance)</h3>
          </div>
        </section>
      </article>

      {/* <!-- Achievement Section --> */}
      <article class="achievement">
        <section class="achievement-section">
          <h2 class="ach-heading">Our Achievements</h2>
          <p class="testi-desc">
          Explore Phi Consulting's hall of achievements – where revenue surges, operational efficiency peaks, and client success stories converge, defining a legacy of transformative impact.
          </p>
        </section>
        <section class="ach-badges-container" ref={achRef}>
          <div className={`ach-badge ${isVisibleAch ? 'animate' : ''}`}>
            <img
               src={achiconone}
              alt=""
              width="200"
              height="230"
            />
          </div>
          <div className={`ach-badge ${isVisibleAch ? 'animate' : ''}`}>
            <img
               src={achicontwo}
              alt=""
              width="200"
              height="150"
            />
          </div>

          <div className={`ach-badge ${isVisibleAch ? 'animate' : ''}`}>
            <img
             src={achiconthree}
              alt=""
              width="250"
              height="220"
            />
          </div>

        </section>
      </article>

      {/* <!-- Call to Action Section --> */}
      <article class="cta-container">
        <section class="cta-sections-container">
          <div class="cta-content">
            <div class="cta-heading">Ready to Unlock Financial Success?</div>
            <div class="cta-descrip">
            Partner with Phi Consulting for unparalleled financial consulting services. Take the first step towards optimizing your financial strategies and achieving sustainable growth. Contact us today for a consultation.
            </div>
          </div>
          <div class="cta-button-section">
            <div class="right-button-header">
              <span
                ><Link to="/contact" class="inner-header"
                  >Get in Touch</Link
                ></span
              >
            </div>
          </div>
        </section>
      </article>
        </>
    )
} 

export default FiancialConsulting;