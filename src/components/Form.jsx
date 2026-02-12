
const Form = ({ onSubmit, children, className = "", label, onClose }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(e);
    };

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg max-w-md mx-auto mt-20">

        <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold mb-4 text-gray-900">{label}</h2>
            <button onClick={onClose}>Close</button>
        </div>

        <form onSubmit={handleSubmit} className={className}>
            {children}
        </form>
    </div>
  )
}

export default Form