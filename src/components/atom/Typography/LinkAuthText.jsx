export default function LinkAuthText({ text, onClick }) {
  return (
    <p className="text-sm mt-2">
      {text}{" "}
      <span
        className="text-blue-600 cursor-pointer hover:underline"
        onClick={onClick}
      >
        اینجا کلیک کنید
      </span>
    </p>
  );
}
