import React from 'react';
import { 
  Dumbbell, 
  UserCheck, 
  Activity, 
  Flame, 
  Briefcase, 
  FileText, 
  Award, 
  Compass, 
  Palette, 
  MapPin, 
  Layers, 
  Sparkles,
  TrendingUp,
  BarChart3
} from 'lucide-react';

export const GymTrackMockup = () => {
  return (
    <div className="w-full h-full bg-[#121316] text-gray-100 p-4 sm:p-5 font-sans select-none flex flex-col justify-between overflow-hidden border border-gray-800/90 rounded-xl">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-gray-800/80 pb-2.5 mb-2.5">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400">
            <Dumbbell className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold tracking-wide text-gray-200 flex items-center gap-1.5">
              <span>GymTrack AI</span>
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-orange-500/15 text-orange-400 border border-orange-500/25 font-mono">Live</span>
            </div>
            <div className="text-[10px] text-gray-400 font-mono">gymation-jooz.vercel.app</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] bg-gray-900/90 px-2.5 py-0.5 rounded-full border border-gray-700/60 text-emerald-400 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          Platform Active
        </div>
      </div>

      {/* Grid of Metric Cards */}
      <div className="grid grid-cols-3 gap-2 mb-2.5">
        <div className="bg-gray-900/90 border border-gray-800 rounded-lg p-2 sm:p-2.5">
          <div className="flex items-center justify-between text-gray-400 text-[10px] mb-0.5">
            <span>Active Members</span>
            <UserCheck className="w-3 h-3 text-orange-400" />
          </div>
          <div className="text-base sm:text-lg font-bold font-mono text-gray-100">482</div>
          <div className="text-[9px] text-emerald-400 flex items-center gap-0.5 mt-0.5 font-sans">
            <TrendingUp className="w-2.5 h-2.5" /> +14% monthly
          </div>
        </div>

        <div className="bg-gray-900/90 border border-gray-800 rounded-lg p-2 sm:p-2.5">
          <div className="flex items-center justify-between text-gray-400 text-[10px] mb-0.5">
            <span>Biometric Logs</span>
            <Activity className="w-3 h-3 text-orange-400" />
          </div>
          <div className="text-base sm:text-lg font-bold font-mono text-gray-100">128</div>
          <div className="text-[9px] text-gray-400 font-sans">Today's Check-ins</div>
        </div>

        <div className="bg-gray-900/90 border border-gray-800 rounded-lg p-2 sm:p-2.5">
          <div className="flex items-center justify-between text-gray-400 text-[10px] mb-0.5">
            <span>Workout Adherence</span>
            <Flame className="w-3 h-3 text-orange-400" />
          </div>
          <div className="text-base sm:text-lg font-bold font-mono text-gray-100">96.4%</div>
          <div className="text-[9px] text-orange-400 font-sans">AI Compliance</div>
        </div>
      </div>

      {/* Bottom Live Queue Preview */}
      <div className="bg-gray-950/95 border border-gray-800/90 rounded-lg p-2.5 text-[11px] space-y-1.5">
        <div className="flex items-center justify-between text-gray-400 text-[10px] pb-1 border-b border-gray-800/80 font-sans">
          <span className="font-semibold text-gray-300">Biometric Attendance & Routine Queue</span>
          <span className="font-mono text-gray-500 text-[9px]">Live Sync</span>
        </div>
        <div className="space-y-1 font-sans">
          <div className="flex items-center justify-between text-gray-300 py-0.5">
            <span className="flex items-center gap-1.5 truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
              <span className="truncate">Rohan S. — Hypertrophy Plan (Chest & Arms)</span>
            </span>
            <span className="text-[9px] font-mono text-gray-300 bg-gray-800 px-1.5 py-0.5 rounded flex-shrink-0 ml-2 border border-gray-700/50">Biometric Verified</span>
          </div>
          <div className="flex items-center justify-between text-gray-300 py-0.5">
            <span className="flex items-center gap-1.5 truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
              <span className="truncate">Pooja M. — Cardio & Strength Progression</span>
            </span>
            <span className="text-[9px] font-mono text-gray-300 bg-gray-800 px-1.5 py-0.5 rounded flex-shrink-0 ml-2 border border-gray-700/50">Active Member</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CareerBridgeMockup = () => {
  return (
    <div className="w-full h-full bg-[#0d1322] text-slate-100 p-4 sm:p-5 font-sans select-none flex flex-col justify-between overflow-hidden border border-slate-800/90 rounded-xl">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5 mb-2.5">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <Briefcase className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold tracking-wide text-slate-200 flex items-center gap-1.5">
              <span>CareerBridge Platform</span>
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-blue-500/15 text-blue-300 border border-blue-500/25 font-mono">Live</span>
            </div>
            <div className="text-[10px] text-slate-400 font-mono">career-bridge-rho.vercel.app</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] bg-slate-900/90 px-2.5 py-0.5 rounded-full border border-slate-700/60 text-blue-300 font-mono">
          <Sparkles className="w-3 h-3 text-blue-400" />
          Placement Hub
        </div>
      </div>

      {/* Grid of Metric Cards */}
      <div className="grid grid-cols-3 gap-2 mb-2.5">
        <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-2 sm:p-2.5">
          <div className="flex items-center justify-between text-slate-400 text-[10px] mb-0.5">
            <span>Enrolled Students</span>
            <FileText className="w-3 h-3 text-blue-400" />
          </div>
          <div className="text-base sm:text-lg font-bold font-mono text-slate-100">320+</div>
          <div className="text-[9px] text-emerald-400 font-sans">Verified Profiles</div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-2 sm:p-2.5">
          <div className="flex items-center justify-between text-slate-400 text-[10px] mb-0.5">
            <span>Recruiter Drives</span>
            <Award className="w-3 h-3 text-blue-400" />
          </div>
          <div className="text-base sm:text-lg font-bold font-mono text-slate-100">18</div>
          <div className="text-[9px] text-blue-300 font-sans">Active Openings</div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-2 sm:p-2.5">
          <div className="flex items-center justify-between text-slate-400 text-[10px] mb-0.5">
            <span>Interview Rate</span>
            <BarChart3 className="w-3 h-3 text-blue-400" />
          </div>
          <div className="text-base sm:text-lg font-bold font-mono text-slate-100">78.2%</div>
          <div className="text-[9px] text-slate-400 font-sans">Shortlisted</div>
        </div>
      </div>

      {/* Bottom Application Feed */}
      <div className="bg-slate-950/95 border border-slate-800/90 rounded-lg p-2.5 text-[11px] space-y-1.5">
        <div className="flex items-center justify-between text-slate-400 text-[10px] pb-1 border-b border-slate-800/80 font-sans">
          <span className="font-semibold text-slate-300">Application Pipeline & AI Resume Screening</span>
          <span className="font-mono text-slate-500 text-[9px]">Campus Feed</span>
        </div>
        <div className="space-y-1 font-sans">
          <div className="flex items-center justify-between text-slate-300 py-0.5">
            <span className="flex items-center gap-1.5 truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
              <span className="truncate">Full Stack SDE Intern — Placement Drive</span>
            </span>
            <span className="text-[9px] font-mono text-emerald-300 bg-emerald-950/80 border border-emerald-800/60 px-1.5 py-0.5 rounded flex-shrink-0 ml-2">Shortlisted (Score 96)</span>
          </div>
          <div className="flex items-center justify-between text-slate-300 py-0.5">
            <span className="flex items-center gap-1.5 truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
              <span className="truncate">Associate Software Engineer — Technical Round</span>
            </span>
            <span className="text-[9px] font-mono text-amber-300 bg-amber-950/80 border border-amber-800/60 px-1.5 py-0.5 rounded flex-shrink-0 ml-2">In Progress</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const VarsaMockup = () => {
  return (
    <div className="w-full h-full bg-[#151412] text-stone-100 p-4 sm:p-5 font-sans select-none flex flex-col justify-between overflow-hidden border border-stone-800/90 rounded-xl">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-stone-800/80 pb-2.5 mb-2.5">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold tracking-wide text-stone-200">Varsa (वारसा) Cultural Portal</div>
            <div className="text-[10px] text-stone-400 font-mono">Heritage Archive · Gadchiroli, Chandrapur & Maharashtra</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] bg-stone-900/90 px-2.5 py-0.5 rounded-full border border-stone-700/60 text-emerald-300 font-mono">
          <MapPin className="w-3 h-3 text-emerald-400" />
          Regional Heritage
        </div>
      </div>

      {/* Grid of Metric Cards */}
      <div className="grid grid-cols-3 gap-2 mb-2.5">
        <div className="bg-stone-900/90 border border-stone-800 rounded-lg p-2 sm:p-2.5">
          <div className="flex items-center justify-between text-stone-400 text-[10px] mb-0.5">
            <span>Archived Crafts</span>
            <Palette className="w-3 h-3 text-emerald-400" />
          </div>
          <div className="text-base sm:text-lg font-bold font-mono text-stone-100">380+</div>
          <div className="text-[9px] text-emerald-400 font-sans">Tribal Arts & Weaves</div>
        </div>

        <div className="bg-stone-900/90 border border-stone-800 rounded-lg p-2 sm:p-2.5">
          <div className="flex items-center justify-between text-stone-400 text-[10px] mb-0.5">
            <span>Artisan Profiles</span>
            <Layers className="w-3 h-3 text-emerald-400" />
          </div>
          <div className="text-base sm:text-lg font-bold font-mono text-stone-100">260+</div>
          <div className="text-[9px] text-stone-400 font-sans">Verified Artisans</div>
        </div>

        <div className="bg-stone-900/90 border border-stone-800 rounded-lg p-2 sm:p-2.5">
          <div className="flex items-center justify-between text-stone-400 text-[10px] mb-0.5">
            <span>AI Cataloging</span>
            <Sparkles className="w-3 h-3 text-emerald-400" />
          </div>
          <div className="text-base sm:text-lg font-bold font-mono text-stone-100">98.6%</div>
          <div className="text-[9px] text-emerald-300 font-sans">Accuracy Index</div>
        </div>
      </div>

      {/* Bottom Registry Preview */}
      <div className="bg-stone-950/95 border border-stone-800/90 rounded-lg p-2.5 text-[11px] space-y-1.5">
        <div className="flex items-center justify-between text-stone-400 text-[10px] pb-1 border-b border-stone-800/80 font-sans">
          <span className="font-semibold text-stone-300">Featured Regional Cultural Heritage Records</span>
          <span className="font-mono text-stone-500 text-[9px]">Digital Archive</span>
        </div>
        <div className="space-y-1 font-sans">
          <div className="flex items-center justify-between text-stone-300 py-0.5">
            <span className="flex items-center gap-1.5 truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
              <span className="truncate">Tribal Dokra Metalcraft & Bell Metal Casting — Gadchiroli & Chandrapur</span>
            </span>
            <span className="text-[9px] font-mono text-stone-300 bg-stone-800 px-1.5 py-0.5 rounded flex-shrink-0 ml-2 border border-stone-700/50">Indigenous Craft</span>
          </div>
          <div className="flex items-center justify-between text-stone-300 py-0.5">
            <span className="flex items-center gap-1.5 truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
              <span className="truncate">Warli Tribal Canvas & Folk Tradition Storytelling — Maharashtra</span>
            </span>
            <span className="text-[9px] font-mono text-stone-300 bg-stone-800 px-1.5 py-0.5 rounded flex-shrink-0 ml-2 border border-stone-700/50">Folklore Archive</span>
          </div>
        </div>
      </div>
    </div>
  );
};
