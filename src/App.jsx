import './App.css';
import Nav from "./components/Nav";
import Hero from './components/Hero';
import Projects from './components/Projects';
import Detail from './components/Detail';
import IOT from "./assets/IOT-house.jpeg";
import Goggles from "./assets/Sleep-detector.jpeg";
import RC from "./assets/RC-airplane.jpeg";
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

function AppContent({ blogPosts, showCards }) {
  return (
    <>
      
      <Hero />

      <section id="projects">
        <div className="min-h-screen py-24 px-4">
          <div className="text-center mb-2">
            <h1 className="font-serif text-6xl font-light text-transparent">Projects</h1>
          </div>
          <div className={`${showCards ? 'cards-up' : 'opacity-0'} max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8`}>
            {blogPosts.map((post, index) => (
              <Projects key={index} {...post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  const [showCards, setCards] = useState(false);

  useEffect(() => {
    const cardsTimer = setTimeout(() => {
      setCards(true);
    }, 500);

    return () => {
      clearTimeout(cardsTimer);
    };
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "IOT House & Gardening",
      date: "Mar 16, 2020",
      categories: [
        { name: "Robotics", color: "bg-purple-100", textColor: "text-purple-600" }
      ],
      details: [
        {description: "Our everyday health and lifestyle habits can create harm or harmony for our gut microbiome—that’s where bacteria reside in your gut, numbering in the trillions.<br> <br>Emerging research continues to shine brightly on the powerful impact a well-functioning gut can have on whole-body health and wellness. <br>“Promoting a balanced and diverse gut microbiome supports the immune system, enhances nutrient absorption and may even reduce the risk of developing certain gastrointestinal conditions,” says Avery Zenker, a registered dietitian at EverFlex Fitness.<br><br>"
          + "Prebiotic sodas, probiotic supplements and digestive enzymes marketed to help curb gas and bloat may come to mind when you think of gut health. While these products may offer perks for some, there are several habits you can incorporate every day to help keep your gut in tip-top shape.<br><br>"
          + "Eating Plenty of Carbs<br>Radical food restriction is not necessary, and it could be a slippery slope for your health. For example, avoiding foods that seem too high in carbohydrates or sugar is a common healthy-eating strategy. Often, carbs are thought of as “bad” when, in reality, there are several “bad” carbs that you should be eating, because the nutrients they harbor are good for you.<br><br>...", 
          headline: "IOT HOUSE ON THE LINE BIG BOYYYY GET UP YO STUFF WE ROLLING" 
        }
      ],
      description: "IOT house with modern technologies like automatic gardening, automatic doors, lights, and more.",
      projectImage: IOT
    },
    {
      id: 2,
      title: "Sleep Detector Goggles",
      date: "Mar 10, 2020",
      categories: [
        { name: "Robotics", color: "bg-purple-100", textColor: "text-purple-600" },
        { name: "Special Mention", color: "bg-pink-100", textColor: "text-rose-600" }
      ],
      details: [
        { 
          description: "Our everyday health and lifestyle habits can create harm or harmony for our gut microbiome—that’s where bacteria reside in your gut, numbering in the trillions.<br><br> Emerging research continues to shine brightly on the powerful impact a well-functioning gut can have on whole-body health and wellness. <br>“Promoting a balanced and diverse gut microbiome supports the immune system, enhances nutrient absorption and may even reduce the risk of developing certain gastrointestinal conditions,” says Avery Zenker, a registered dietitian at EverFlex Fitness.<br><br>"
          + "Prebiotic sodas, probiotic supplements and digestive enzymes marketed to help curb gas and bloat may come to mind when you think of gut health. While these products may offer perks for some, there are several habits you can incorporate every day to help keep your gut in tip-top shape.<br><br>"
          + "Eating Plenty of Carbs<br>Radical food restriction is not necessary, and it could be a slippery slope for your health. For example, avoiding foods that seem too high in carbohydrates or sugar is a common healthy-eating strategy. Often, carbs are thought of as “bad” when, in reality, there are several “bad” carbs that you should be eating, because the nutrients they harbor are good for you.<br><br>...", 
          headline: "IOT HOUSE ON THE LINE BIG BOYYYY GET UP YO STUFF WE ROLLING" 
        }
      ],
      description: "Sleep-detecting goggles that prevent sleeping accidents while driving. Special Mention Award in National-Level STEM Competition.",
      projectImage: Goggles
    },
    {
      id: 3,
      title: "Remote Controlled Airplane",
      date: "Feb 12, 2020",
      categories: [
        { name: "Aerospace", color: "bg-blue-100", textColor: "text-blue-600" }
      ],
      details: [
        {
          description: "Our everyday health and lifestyle habits can create harm or harmony for our gut microbiome—that’s where bacteria reside in your gut, numbering in the trillions.<br><br>Emerging research continues to shine brightly on the powerful impact a well-functioning gut can have on whole-body health and wellness. <br>“Promoting a balanced and diverse gut microbiome supports the immune system, enhances nutrient absorption and may even reduce the risk of developing certain gastrointestinal conditions,” says Avery Zenker, a registered dietitian at EverFlex Fitness.<br><br>",
                    
          headline: "IOT HOUSE ON THE LINE BIG BOYYYY GET UP YO STUFF WE ROLLING" 
        }
      ],
      description: "Five feet tall RC airplane that successfully took off and was presented in various inter-school fairs.",
      projectImage: RC
    }
  ];

  return (
    <>
  <Nav />
    <Routes>
      
      <Route path="/" element={<AppContent blogPosts={blogPosts} showCards={showCards} />} />
      <Route path="/projects/:id" element={<Detail blogPosts={blogPosts} />} />
    </Routes>
    </>
  );
}

export default App;
