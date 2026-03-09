import Link from 'next/link';
import type { TeamMember } from '@/types';

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const name = member.metadata?.name || member.title;
  const role = member.metadata?.role || '';
  const photo = member.metadata?.photo;
  const linkedin = member.metadata?.linkedin_url;

  return (
    <Link
      href={`/team/${member.slug}`}
      className="group relative bg-white rounded-2xl border border-navy-100 overflow-hidden hover:shadow-xl hover:shadow-navy-100/50 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative h-72 overflow-hidden">
        {photo ? (
          <img
            src={`${photo.imgix_url}?w=600&h=700&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            width={300}
            height={350}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-navy-200 to-navy-300 flex items-center justify-center">
            <span className="text-6xl text-navy-400">👤</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-lg font-bold text-white">{name}</h3>
          {role && (
            <p className="text-sm text-amber-300 font-medium mt-0.5">{role}</p>
          )}
        </div>
      </div>
      <div className="p-5 flex items-center justify-between">
        <span className="text-xs font-medium text-navy-400 group-hover:text-amber-600 transition-colors">
          View Profile →
        </span>
        {linkedin && (
          <span className="text-navy-400 group-hover:text-blue-600 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </span>
        )}
      </div>
    </Link>
  );
}