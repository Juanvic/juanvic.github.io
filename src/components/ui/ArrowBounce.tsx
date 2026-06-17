export const ArrowBounce: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <svg 
        className="w-8 h-8 text-gray-700 animate-bounce" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://w3.org"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M19 13l-7 7-7-7m14-6l-7 7-7-7" 
        />
      </svg>
    </div>
  );
};
