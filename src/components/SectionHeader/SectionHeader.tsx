interface Props {
  title: string;
  description: string;
  hrClassName?: string;
  headingClassName?: string;
}

export const SectionHeader = ({
  title,
  description,
  hrClassName = 'bg-primary',
  headingClassName = ''
}: Props) => {
  return (
    <div className="flex flex-col items-center justify-start gap-5 text-center">
      <h2
        className={`text-balance text-5xl font-bold uppercase text-foreground ${headingClassName}`}
      >
        {title}
      </h2>
      <hr className={`h-1.5 w-12 rounded-lg ${hrClassName}`} />
      <p className="text-balance text-lg md:text-xl">{description}</p>
    </div>
  );
};
