type Props = {
    type: string;
    placeholder: string;
    value: string;
    onChange: (val: string) => void;
  };
  
  export default function FormInput({ type, placeholder, value, onChange }: Props) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-62 md:w-full px-4 py-2 rounded-lg shadow-md border-2 border-amber-950 
          placeholder:text-amber-950/70 focus:outline-none focus:ring-2 focus:ring-amber-800"
      />
    );
  }
  