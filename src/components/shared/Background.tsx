interface BackgroundProps {
  children: React.ReactNode;
}

export default function Background({ children }: BackgroundProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#000000] bg-[radial-gradient(circle_at_top_left,#ffffff33_1px,#00091d_1px)] bg-size-[20px_20px]">
      {children}
    </div>
  );
}
