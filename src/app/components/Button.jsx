export const Button = ({ children }) => {
  return (
    <button type="submit" className="w-full py-3 border rounded-full">
      {children}
    </button>
  );
};
