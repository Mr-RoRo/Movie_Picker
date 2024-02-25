const DividerSectionTitle = ({ Title }: { Title: string }) => {
  return (
    <div className="divider divider-end text-xl sm:text-2xl lg:text-3xl font-bold my-10">
      {Title}
    </div>
  );
};

export default DividerSectionTitle;
