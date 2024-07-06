import { unstable_noStore } from 'next/cache';
import { SectionHeader } from '@/components';
import { EXPERIENCE } from '@/utils/constant';
import {
  calculateDuration,
  formateStartEndDate
} from '@/utils/helperFunctions';

export const Experience = () => {
  unstable_noStore();
  return (
    <section id="experience" className="w-full py-24">
      <div className="mx-auto w-11/12 lg:w-3/4">
        <SectionHeader
          title="Education & Experience"
          description="Here is my education & experience timeline."
        />
        <div className="mt-16 flex flex-col gap-10">
          {EXPERIENCE.toReversed().map((experience) => {
            const { days, months, years } = calculateDuration(
              experience.joinDate,
              experience.endDate ?? new Date().toString()
            );

            return (
              <div className="w-full" key={experience.id}>
                <h4 className="flex flex-col items-start justify-between text-3xl lg:flex-row">
                  <p className="flex flex-col font-semibold">
                    <span>{experience.position}</span>
                    <span className="text-xl font-normal">
                      {experience.name}
                    </span>
                  </p>
                  <span className="text-lg italic">
                    {formateStartEndDate(
                      experience.joinDate,
                      experience.endDate
                    )}{' '}
                    ( {Boolean(years) && `${years}y`}{' '}
                    {Boolean(months) && `${months}m`}{' '}
                    {Boolean(days) && `${days}d`} )
                  </span>
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
