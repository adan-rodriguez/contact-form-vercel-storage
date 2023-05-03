export const Input = ({ id, name, label, type, placeholder, ...props }) => {
  return (
    <fieldset>
      <label className="block mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        className="rounded-lg w-full p-2.5 text-black"
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        {...props}
      />
    </fieldset>
  );
};
