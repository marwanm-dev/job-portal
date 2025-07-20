type LineBreakProps = {
  className?: string;
};

export default function LineBreak({
  className = "hidden sm:block",
}: LineBreakProps) {
  return <br className={className} />;
}
