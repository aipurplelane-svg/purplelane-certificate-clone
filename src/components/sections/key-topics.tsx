"use client";

import React from 'react';
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const KeyTopics = () => {
  const topics = [
    "Explore the Generative AI Landscape",
    "Understand Opportunities and Investments",
    "Discover Applications and Demonstrations",
    "Dive into Architecture and Building Blocks",
    "Gain High-Level Understanding of AI",
    "Develop, Test, and Deploy your Model",
    "Build your AI Avatar from scratch"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12 text-4xl font-bold text-gray-800">What will you learn?</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {topics.map((topic, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={24} />
              <p className="text-lg text-gray-700">{topic}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyTopics;