"use client";

import React from 'react';
import { CheckCircle, User } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';

const ProgramRoadmap = () => {
  const tools = ["LLM", "Langchain", "Gradio", "PlayHT", "Hugging Face", "Google Colab", "Vector Database"];
  
  const benefits = [
    "Understand LLM Fundamentals and Applications",
    "Master AI Tools like ChatGPT & Midjourney",
    "Become Fluent in Essential AI Terms",
    "Develop Must-Have AI Skills for Students",
    "Build and Deploy Your Own AI Model",
    "Step-by-Step Guide to Advance Your AI Knowledge in College",
    "Explore Generative AI's Transformation across Industries",
    "Increase Internship Chances with Advanced AI Skills",
    "Learn AI Skills Companies are Seeking",
    "Elevate Your Career with Mastered AI Skills"
  ];

  return (
    <div>
      <section id="tools" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12 text-4xl font-bold text-gray-800">Tools and Technologies You'll Master</h2>
          <div className="tools-grid max-w-6xl mx-auto">
            {tools.map((tool, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/1ea82f3e-e0ba-45f1-ba33-d1a132d902e6/generated_images/set-of-icons-for-ai-workshop-topics%3a-l-be369fd7-20250927151022.jpg?"
                  alt={`${tool} Icon`}
                  width={80}
                  height={80}
                  className="mx-auto mb-4"
                />
                <p className="font-semibold text-indigo-700">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Learn from the Legend</h2>
            <p className="text-lg text-gray-600 mb-8">who trained 1,00,000+ individuals!</p>
            <div className="max-w-md mx-auto">
              <Image
                src="/instructor-placeholder.jpg" // Placeholder; generate if needed
                alt="Abhinav Devaguptapu"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4 shadow-lg"
              />
              <h3 className="text-2xl font-semibold text-gray-800">Abhinav Devaguptapu</h3>
              <p className="text-indigo-600 font-medium">Curriculum Development Manager at NxtWave</p>
              <p className="text-gray-600 mt-2">Abhinav brings over 7 years of expertise in training professionals from DRDO, the Indian Army, and Universities.</p>
            </div>
            <p className="text-xl font-semibold mt-8 text-red-600">Limited seats</p>
            <Link href="https://accounts.ccbp.in/register/ai-workshop" className="cta-button mt-6 inline-block">
              Book Now
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12 text-4xl font-bold text-gray-800">Why be just an AI User When you can become an AI Pioneer</h2>
          <ul className="benefits-list max-w-4xl mx-auto space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="text-lg text-gray-700">
                {benefit}
              </li>
            ))}
          </ul>
          <div className="text-center mt-12">
            <Link href="https://accounts.ccbp.in/register/ai-workshop" className="cta-button inline-block">
              Book Your Seat Now
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-center mb-12 text-4xl font-bold text-gray-800">Our Workshops Set New Standards</h2>
          <p className="text-xl text-gray-600 text-center leading-relaxed">
            Build your first generative AI application using Character AI. Explore various assistants and characters to understand the capabilities and potential of generative AI.
            <br /><br />
            Character Assistant: Your AI work/study buddy
            <br />
            Lily: Your friendly AI assistant
          </p>
          <div className="text-center mt-12">
            <Link href="https://accounts.ccbp.in/register/ai-workshop" className="cta-button inline-block">
              Book Your Seat Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramRoadmap;