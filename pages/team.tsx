import Head from "next/head";
import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import TeamsCard from "../components/Team/TeamsCard";
import { teams } from "../components/Team/teams";
import Taumper from "../components/Team/Taumper/Taumper";
import { TaumperList } from "../components/Team/Taumper/List";
import Card from "../components/Team/Taumper/Taumper";

function team() {
  return (
    <main>
      <Head>
        <title>Hackoverflow / Team</title>
        <meta
          name="description"
          content="Folks that make it happen :: Learn about the exciting projects and competitions our college society teams are working on. We have teams for students interested in coding, design, and more. Join us and build valuable skills while making lasting friendships. Explore our teams and find your place to shine on campus"
        />
      </Head>
      <HeroSection title="Our Team" />
      {/* {TaumperList.map((item) => {
        return (
          <Taumper
            id={item.id}
            key={item.id}
            title={item.title}
            image1={item.image1}
            image2={item.image2}
            name1={item.name1}
            name2={item.name2}
            designation1={item.designation1}
            designation2={item.designation2}
          />
        );
      })} */}
      <div className="px-7">
        <section className="border-t py-24 relative isolate ">

          <>
            <figure
              aria-hidden
              className="absolute bg-hsPink w-44 h-44 rounded-full 
        right-0 translate-x-1/2 sm:bottom-1/4 sm:translate-y-1/2 bottom-0
              blur-[100px] -z-10"
            />
          </>

          <figure
            aria-hidden
            className="absolute bg-hsBlue w-32 h-32 md:w-52 md:h-52 
        left-0 -translate-x-1/2 top-0 sm:bottom-1/2 md:-translate-y-1/2
        blur-[100px] -z-10"
          />

          <h2 className="font-clashDisplay  font-medium text-5xl md:text-6xl text-center text-hsWhite mb-24">
            Our Patrons
          </h2>
          <div className={`grid grid-cols-1 gap-y-7  sm:grid-cols-3   gap-x-5 `}>
          
          <Card
              image="/Team/Harjot.jpeg"
              name="Dr. Harjot Singh Gill"
              designation="Director, E-Governance"
            />
            <Card
              image="/Team/jagdeep.jpeg"
              name="Dr. Jagdeep Singh"
              designation="Associate Director, E-Governance"
            />
            <Card
              image="/Team/sumit.jpeg"
              name="Dr. Sumit Sharma"
              designation="Assistant Director, E-Governance"
            />
          </div>
          
        </section>
        <section className="border-t py-24 relative isolate ">
        <h2 className="font-clashDisplay  font-medium text-5xl md:text-6xl text-center text-hsWhite mb-24">
            Our Mentors
          </h2>
          <div className={`grid grid-cols-1 gap-y-7  sm:grid-cols-3   gap-x-5 `}>
            <Card
              image="/Team/sachin.jpg"
              name="Dr. Sachin Ahuja"
              designation="Executive Director, Chandigarh University"
            />
            <Card
              image="/Team/Aa.jpg"
              name="Dr. Abhineet Anand"
              designation="Director AIT-CSE , Chandigarh University"
            />
            <Card
              image="/Team/anil.jpg"
              name="Er. Anil Manohar Dogra"
              designation="Faculty coordinator, Chandigarh University"
            />
          </div>
        </section>
        <section className="border-t py-24 relative isolate ">
          <h2 className="font-clashDisplay  font-medium text-5xl md:text-6xl text-center text-hsWhite mb-24">
            Founding Mentors
          </h2>
          <div className={`grid grid-cols-1 gap-y-7  sm:grid-cols-3   gap-x-5 `}>
            <Card
              image="/Team/kb.png"
              name="Karan Bhargav"
            // designation="Founder"
            />
            <Card
              image="/Team/akm.png"
              name="Amit Kumar Mishra"
            // designation="Co-Founder"
            />
            <Card
              image="/Team/ashutoshv.jpg"
              name="Ashutosh Vijayvergiya"
            // designation="Co-Founder"
            />
          </div>
        </section>
        <section className="border-t py-24 relative isolate ">



          <h2 className="font-clashDisplay  font-medium text-5xl md:text-6xl text-center text-hsWhite mb-24">
            General Secretary
          </h2>
          <div className={`grid grid-cols-1 gap-y-7     gap-x-5 `}>
            <Card
              image="/Team/Rudra_Pratap.jpg"
              name="Rudra Pratap Singh"
            // designation="Founder"
            />
          </div>
        </section>
        {/* <section className="border-t py-24 relative isolate ">
          <h2 className="font-clashDisplay  font-medium text-5xl md:text-6xl text-center text-hsWhite mb-24">
            Joint Secretary
          </h2>
          <div className={`grid grid-cols-1 gap-y-7     gap-x-5 `}>
            <Card
              image="/Team/nikhil.png"
              name="Nikhil Anand"
            />
          </div>
        </section> */}
        <section className="border-t py-24 relative isolate ">
          <h2 className="font-clashDisplay  font-medium text-5xl md:text-6xl text-center text-hsWhite mb-24">
            Management Secretary
          </h2>
          <div className={`grid grid-cols-1 gap-y-7 sm:grid-cols-3 gap-x-5 `}>
            <Card
              image="/Team/Umar_Khan.jpg"
              name="Umar Khan"
              designation="Internal Management Secretary"
            />
            <Card
              image="/Team/Mehdi_Abbas.jpg"
              name="Mehdi Abbas"
              designation="External Management Secretary"
            />
            <Card
              image="/Team/Muskan.jpg"
              name="Muskan Singh"
              designation="Treasurer"
            />

          </div>
        </section>
      </div>
      <h2 className="font-clashDisplay  font-medium text-5xl md:text-6xl text-center text-hsWhite mb-24">
        Teams
      </h2>

      <section className="px-7 grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-8 ">
        {teams.map((team, index) => {
          return <TeamsCard key={index} title={team.title} image={team.image} members={team.members} />
        })}
      </section>
    </main>
  );
}

export default team;
