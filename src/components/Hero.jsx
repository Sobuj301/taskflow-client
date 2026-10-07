import React from 'react';
import { Link } from 'react-router';

const Hero = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center bg-base-100 overflow-hidden py-12">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold border border-primary/20 mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
          Task Management Simplified
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.15] text-base-content mb-6">
          Manage Tasks with <br />
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Unmatched Speed & Style
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-base-content/70 max-w-2xl mx-auto mb-8 leading-relaxed">
          TaskFlow turns complex team workflows into simple, actionable steps. Stay focused, beat deadlines, and achieve more together.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Link
            to="/register"
            className="btn btn-primary btn-lg w-full sm:w-auto px-8 text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all rounded-xl"
          >
            Get Started Free
          </Link>
          <Link
            to="/all-tasks"
            className="btn btn-outline btn-lg w-full sm:w-auto px-8 font-semibold border-base-300 hover:border-primary rounded-xl"
          >
            Explore Demo
          </Link>
        </div>

        {/* App Showcase Card */}
        <div className="relative mx-auto max-w-3xl rounded-2xl p-1 bg-gradient-to-b from-base-200 to-transparent shadow-2xl border border-base-200/80">
          <div className="bg-base-100/90 backdrop-blur-md rounded-xl p-4 sm:p-6 text-left space-y-4">
            
            {/* Window Top Controls */}
            <div className="flex items-center justify-between border-b border-base-200 pb-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <span className="text-xs font-mono text-base-content/40">taskflow.app/dashboard</span>
              <div className="badge badge-success badge-sm text-white">Live</div>
            </div>

            {/* Content Mockup */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 bg-base-200/50 rounded-xl border border-base-200/60">
                <p className="text-xs text-base-content/60 font-medium">Completed Tasks</p>
                <p className="text-2xl font-bold text-primary mt-1">128</p>
              </div>
              <div className="p-4 bg-base-200/50 rounded-xl border border-base-200/60">
                <p className="text-xs text-base-content/60 font-medium">Pending Tasks</p>
                <p className="text-2xl font-bold text-secondary mt-1">12</p>
              </div>
              <div className="p-4 bg-base-200/50 rounded-xl border border-base-200/60">
                <p className="text-xs text-base-content/60 font-medium">Team Members</p>
                <p className="text-2xl font-bold text-accent mt-1">24</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;