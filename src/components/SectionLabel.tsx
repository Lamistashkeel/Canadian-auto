export default function SectionLabel({ children, center = false }: { children: string; center?: boolean }) {
  return (
    <div className={`flex items-center gap-2 text-[#c0392b] text-[11px] font-bold tracking-[2px] uppercase mb-3 ${center ? "justify-center" : ""}`}>
      <span className="inline-block w-6 h-0.5 bg-[#c0392b]" />
      {children}
    </div>
  );
}
