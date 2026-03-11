export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-primary text-white border-2 border-black rounded-full font-semibold px-6 py-2 shadow-[2px_2px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
