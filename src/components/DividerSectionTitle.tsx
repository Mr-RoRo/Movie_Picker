const DividerSectionTitle = ({
  Title,
  className,
}: {
  Title: string;
  className?: string;
}) => {
  return (
    <div
      className={`divider divider-end text-xl sm:text-2xl lg:text-3xl font-bold ${className}`}
    >
      {Title}
    </div>
  );
};

export default DividerSectionTitle;
