import type { Metadata } from 'next';
import { getTeamMembers } from '@/lib/cosmic';
import TeamMemberCard from '@/components/TeamMemberCard';
import SectionHeading from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'Our Team — Beroa',
  description: 'Meet the talented professionals behind Beroa. Our diverse team brings expertise and passion to every project.',
};

export default async function TeamPage() {
  const teamMembers = await getTeamMembers();

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 section-padding py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-500 rounded-full blur-3xl" />
        </div>
        <div className="relative container-max">
          <SectionHeading
            label="Our People"
            title="Meet the Team"
            description="Our team of experienced professionals is dedicated to delivering exceptional results for every client."
            light
          />
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          {teamMembers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <span className="text-5xl mb-4 block">👥</span>
              <p className="text-navy-500 text-lg">Team profiles coming soon!</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}