const Checkbox = ({ id, name, value, onChange, data }) => {
  return (
    <>
      <input
        type="checkbox"
        id={`checkbox-${id}`}
        name={name}
        value={value}
        checked={data?.includes(value ?? "")}
        onChange={onChange}
        className="peer 
                    relative 
                    appearance-none 
                    w-4 
                    h-4 
                    border 
                    rounded-sm 
                    focus:outline-none
                    checked:bg-primary 
                    checked:border-primary
                    after-content-['']
                    after:w-full
                    after:h-full
                    after:absolute
                    after:left-0
                    after:top-0
                    after:bg-no-repeat
                    after:bg-center
                    after:bg-size-[8px]
                    after:bg-[url('assets/check.svg')]
                    "
      />
    </>
  );
};

export default Checkbox;