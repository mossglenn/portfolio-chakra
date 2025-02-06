'use client';
import { Image } from '@chakra-ui/react';
import React from 'react';
import { Badge, Card } from '@chakra-ui/react';

const ProjectHeader = () => {
  return (
    <div className="relative w-full flex flex-col items-center text-center py-12 px-6">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gray-900 opacity-20"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl">
        {/* Project Title */}
        <h1 className="text-4xl font-bold text-white mb-4">
          Project Title Goes Here
        </h1>

        {/* Brief Description */}
        <p className="text-lg text-gray-200 mb-6">
          A short, engaging description of the project, outlining its purpose
          and impact.
        </p>

        {/* Tags */}
        <div className="flex justify-center gap-2 mb-6 flex-wrap">
          <Badge>Gamification</Badge>
          <Badge>xAPI</Badge>
          <Badge>Scenario-Based Learning</Badge>
        </div>

        {/* Featured Image */}
        <Card.Root className="overflow-hidden rounded-2xl shadow-lg mb-6">
          <Card.Body className="p-0">
            <Image
              src="/next-app-chakra-ts.png"
              alt="Project Featured Image"
              width={800}
              height={400}
              className="w-full h-auto rounded-2xl"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/fallback-image.jpg';
              }}
            />
          </Card.Body>
        </Card.Root>

        {/* My Role */}
        <div className="text-gray-300 text-lg font-medium">
          <span className="font-semibold text-white">My Role:</span> Lead
          Instructional Designer
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
