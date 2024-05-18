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
  headingClassName = '',
}: Props) => {
  return (
    <div className="flex flex-col items-center justify-start gap-5 text-center">
      <h2
        className={`text-5xl font-bold uppercase text-balance text-foreground ${headingClassName}`}>
        {title}
      </h2>
      <hr className={`w-12 h-1.5 rounded-lg ${hrClassName}`} />
      <p className="text-lg md:text-xl text-balance">{description}</p>
    </div>
  );
};
